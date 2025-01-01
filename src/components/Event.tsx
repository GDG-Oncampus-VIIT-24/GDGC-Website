import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import "../../public/images/GENai.jpg"
import { upcomingCards, pastCards } from "../data/resources";

interface CardProps {
  urlid: string;
  outer_logo?: string;
  inner_image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
  participants: string;
  days: number;
  hashtags: Array<string>;
  labs?: string;
  resources?: Array<{ name?: string; link?: string }>;
  timeline: string;
  rvsplink?: string;
}

const NewEvents = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

    // calculate the upper limit for the scroll animation
    const noOfCards = upcomingCards.length;
    const upperLimitDynamic = noOfCards !== 0 ? (((noOfCards - 1) * 100) / noOfCards) + 1 : 1;
    const upperLimit = "-" + upperLimitDynamic.toString() + "%";
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", upperLimit]);

  return (
    <section
      ref={targetRef}
      className="relative pl-2 md:pl-6 pb-14" // remember to keep h-[300vh] always and remove margin too
    >
      <div className="sticky top-0">
        <h2 className="text-4xl font-semibold md:pl-12 pt-16 pb-10 font-GSD_Regular text-grey-700">
          Upcoming Events:
        </h2>
        {/* h-screen */}
        <div className="py-14 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 md:gap-20">
            <div className="flex gap-10 md:gap-20">
              {upcomingCards.map((card, index) => (
                <Card key={index} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PrevEvents = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // calculate the upper limit for the scroll animation
  const noOfCards = pastCards.length;
  const upperLimitDynamic = noOfCards !== 0 ? (((noOfCards - 1) * 100) / noOfCards) + 1 : 1;
  const upperLimit = "-" + upperLimitDynamic.toString() + "%";

  const x = useTransform(scrollYProgress, [0, 1], ["1%", upperLimit]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] pl-2 md:pl-6 pb-14" // remember to keep h-[300vh] always and remove margin too
    >
      <div className="sticky top-0">
        <h2 className="text-4xl font-semibold md:pl-12 pt-16 pb-10 font-GSD_Regular text-grey-700">
          Past Events:
        </h2>
        {/* h-screen */}
        <div className="py-14 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 md:gap-20">
            <div className="flex w-full gap-10 md:gap-20">
              {pastCards.map((card, index) => (
                <Card key={index} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const colors = ["bg-blue-300", "bg-green-300", "bg-red-300", "bg-yellow-300"];

const Card: React.FC<{ card: CardProps; index: number }> = ({
  card,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const eventDate = new Date(card.date);
  const today = new Date();
  const isLive = eventDate.toDateString() === today.toDateString();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          transformStyle: "preserve-3d",
          transform,
        } as any
      }
      className="w-[90vw] sm:w-[60vw] md:w-[30vw] top-3 sm:h-[400px] bg-white border-2 border-black rounded-[20px] hover:shadow-2xl flex-shrink-0"
    >
      <div
        style={{
          transform: "translateY(50px)",
          transformStyle: "preserve-3d",
          opacity: 0,
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg"
      ></div>

      <div
        className={`relative w-full h-[200px] overflow-hidden p-4 ${
          colors[index % colors.length]
        } rounded-t-[20px]`}
      >
        <img
          className="object-cover w-full h-full overflow-hidden rounded-[20px] border-black border-2"
          src={card.outer_logo}
          alt={card.title}
        />
      </div>

      {/* Conditionally render Live Preview badge */}
      {isLive && (
        <span className="absolute top-2 left-2 flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-sm">
          Live
          <span className="ml-2 h-2 w-2 bg-white rounded-full live-icon"></span>
        </span>
      )}

      <hr className="border-t-2 border-black w-full" />

      {/* Content Area */}
      <div className="pl-4 pr-4 pt-3 pb-6 flex-grow">
        <h2 className="text-lg font-bold mb-2 font-google_sans_display text-left">
          {card.title}
        </h2>
        <p className="text-gray-700 text-left break-words truncate font-google_sans_display py-1">
          {card.content}
        </p>
        <p className="text-gray-700 text-left font-semibold">{card.date}</p>
      </div>

      {/* Footer with Tags and RSVP */}
      <div className="flex justify-between items-center p-4 mt-auto">
        <div className="flex space-x-3 py-1">
          <Link to={`/events/${card.urlid}/${index}`}>
            <button className="bg-blue-500 text-white text-center px-6 py-1 rounded backdrop-blur transition-colors hover:bg-blue-700 hover:scale-105">
              View More
            </button>
          </Link>
        </div>
        {card.urlid !== "PastEvents" && card.rvsplink && (
          <Link to={card.rvsplink}>
            <button className="bg-blue-500 text-white text-center px-6 py-1 rounded backdrop-blur transition-colors hover:bg-blue-700 hover:scale-105">
              RSVP
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const Event = () => {
  return (
    <div className="relative bg-grid-black/[0.1]">
      <NewEvents />
      <PrevEvents />
    </div>
  );
};

export default Event;