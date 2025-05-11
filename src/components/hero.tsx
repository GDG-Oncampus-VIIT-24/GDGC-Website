import { useState, useEffect, memo } from "react";
import { FaRegSquare } from "react-icons/fa6";
import p1 from "/images/left_kite.svg";
import p2 from "/images/right_kite.svg";
import p3 from "/images/planets.svg";
import p4 from "/images/boysitting.svg";
import p5 from "/images/cloud_1.svg";
import p6 from "/images/cloud_2.svg";
import p7 from "/images/cloud_3.svg";
import p8 from "/images/react_icon.svg";
import p9 from "/images/programming.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const MemoizedFaRegSquare = memo(FaRegSquare);

const Hero = () => {
  const [boldLetters, setBoldLetters] = useState(Array(15).fill(true));
  const [direction, setDirection] = useState(true);
  const [vibrate, setVibrate] = useState(false);

  // Title letter animation logic (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setBoldLetters((prev) => {
        const nextBoldLetters = [...prev];
        if (direction) {
          const lastTrueIndex = nextBoldLetters.lastIndexOf(true);
          if (lastTrueIndex !== -1) {
            nextBoldLetters[lastTrueIndex] = false;
            if (lastTrueIndex === 0) {
              setDirection(false);
              setVibrate(true);
            }
          }
        } else {
          const firstFalseIndex = nextBoldLetters.indexOf(false);
          if (firstFalseIndex !== -1) {
            for (let i = 0; i <= firstFalseIndex; i++) {
              nextBoldLetters[i] = true;
            }
            if (nextBoldLetters.every((isBold) => isBold)) {
              setDirection(true);
              setVibrate(true);
            }
          }
        }
        return nextBoldLetters;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (vibrate) {
      const timeout = setTimeout(() => {
        setVibrate(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [vibrate]);

  const titleLetters = [
    { letter: "“", color: "text-red-500" },
    { letter: "G", color: "text-green-600" },
    { letter: "D", color: "text-green-600" },
    { letter: "G", color: "text-green-600" },
    { letter: "\u00A0", color: "text-black" },
    { letter: "O", color: "text-yellow-500" },
    { letter: "N", color: "text-yellow-500" },
    { letter: "\u00A0", color: "text-black" },
    { letter: "C", color: "text-blue-500" },
    { letter: "A", color: "text-blue-500" },
    { letter: "M", color: "text-blue-500" },
    { letter: "P", color: "text-blue-500" },
    { letter: "U", color: "text-blue-500" },
    { letter: "S", color: "text-blue-500" },
    { letter: "”", color: "text-red-600" },
  ];

  // Scroll-based animation hooks
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full min-h-screen font-GSD_Regular flex items-center justify-center flex-col overflow-hidden"
    >
      {/* Left Kite with continuous up/down and left/right motion */}
      <motion.img
        src={p1}
        alt="left_kite"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] sm:top-[33%] left-[0%] w-[15vw] sm:w-[10vw]"
      />

      {/* Right Kite with continuous up/down and right/left motion */}
      <motion.img
        src={p2}
        alt="right_kite"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[44%] right-[0%] w-[15vw] sm:w-[10vw]"
      />

      {/* Other decorative images combining scroll-based and keyframe animations */}
      <motion.img
        src={p3}
        alt="planets"
        style={{ scale }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] right-[10%] w-[15vw] sm:w-[8vw]"
      />
      <motion.img
        src={p4}
        alt="boy_sitting"
        style={{ x: rotate }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[0%] left-[0%] w-[30vw] sm:w-[18vw]"
      />
      <motion.img
        src={p5}
        alt="Cloud_1"
        style={{ scale }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] md:top-[8%] md:left-[40%] w-[40vw] sm:w-[22vw]"
      />
      <motion.img
        src={p6}
        alt="Cloud_2"
        style={{ rotate }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[3%] right-[25%] w-[8vw] sm:w-[3vw]"
      />
      <motion.img
        src={p7}
        alt="Cloud_3"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[6%] left-[10%] w-[18vw] sm:w-[9vw]"
      />
      <motion.img
        src={p8}
        alt="react_icon"
        style={{ scale }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[3%] w-[4vw] sm:w-[2vw] hidden sm:block"
      />
      <motion.img
        src={p8}
        alt="react_icon"
        style={{ scale }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[3%] w-[4vw] sm:w-[2vw] hidden sm:block"
      />
      <motion.img
        src={p8}
        alt="react_icon"
        style={{ scale }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[27%] w-[4vw] sm:w-[2vw]"
      />
      <motion.img
        src={p9}
        alt="programming"
        style={{ rotate }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[0%] right-[0%] w-[30vw] sm:w-[22vw]"
      />

      {/* Title Section */}
      <div className="text-[9vw] sm:text-[7vw] flex justify-center items-center leading-none mb-0 text-center mt-20 w-[90%] sm:w-[69%] mx-auto">
        {titleLetters.map((item, index) => (
          <span
            key={index}
            className={`${item.color} ${boldLetters[index] ? "font-bold" : ""}`}
            style={{ letterSpacing: "0.05em" }}
          >
            {item.letter}
          </span>
        ))}
      </div>

      <div className="uppercase text-[8vw] sm:text-[6vw] font-GSD_Regular leading-none mb-10 text-center">
        VIIT
      </div>

      <div className="font-GSD-Regular text-[4vw] sm:text-[20px] w-[80vw] sm:w-[50vw] leading-none mb-10 text-center text-grey-700">
        By offering seminars, mentorship initiatives, and forums for exchanging insights, we strive to foster a community that embraces lifelong learning and the sharing of knowledge.
      </div>

      {/* Animated Icons Row */}
      <motion.div
        className="font-GSD-Regular text-[3.5vw] sm:text-[1vw] w-[90%] sm:w-[85%] flex items-center justify-center mb-8 text-grey-700"
        style={{ scale }}
      >
        <span className="px-4 text-grey-700">LEARN</span>
        <motion.div style={{ rotate }}>
          <MemoizedFaRegSquare />
        </motion.div>
        <span className="px-4 text-grey-700">GROW</span>
        <motion.div style={{ rotate }}>
          <MemoizedFaRegSquare />
        </motion.div>
        <span className="px-4 text-grey-700">BUILD</span>
      </motion.div>

      {/* Animated Call-to-Action Button */}
      <Link to="https://gdg.community.dev/gdg-on-campus-vignans-institute-of-information-technology-visakhapatnam-india/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-[7vh] sm:h-[6vh] w-[35vw] sm:w-[8vw] bg-blue-500 text-white rounded-lg text-[4vw] sm:text-[1.5vw] transition-transform duration-300 ease-in-out hover:bg-blue-700"
        >
          Join us
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default memo(Hero);
