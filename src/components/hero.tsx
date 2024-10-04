import React, { useState, useEffect } from "react";
import { FaRegSquare } from "react-icons/fa6";
import p1 from "../../public/images/Group 73.png";
import p2 from "../../public/images/Group 73 (1).png";
import p3 from "../../public/images/Group 76.png";
import p4 from "../../public/images/Group 91.png";
import p5 from "../../public/images/Vector (1).png";
import p6 from "../../public/images/Vector (2).png";
import p7 from "../../public/images/Vector.png";
import p8 from "../../public/images/react like icon.png";
import p9 from "../../public/images/undraw_programming_re_kg9v 1.png";

const Hero = () => {
  // Initialize with the correct length to include quotes
  const [boldLetters, setBoldLetters] = useState(Array(15).fill(true)); // Updated to 15
  const [direction, setDirection] = useState(true);
  const [vibrate, setVibrate] = useState(false);

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
    { letter: "G", color: "text-green-500" },
    { letter: "D", color: "text-green-500" },
    { letter: "G", color: "text-green-500" },
    { letter: " ", color: "text-black" },
    { letter: "O", color: "text-yellow-500" },
    { letter: "N", color: "text-yellow-500" },
    { letter: " ", color: "text-black" },
    { letter: "C", color: "text-blue-500" },
    { letter: "A", color: "text-blue-500" },
    { letter: "M", color: "text-blue-500" },
    { letter: "P", color: "text-blue-500" },
    { letter: "U", color: "text-blue-500" },
    { letter: "S", color: "text-blue-500" },
    { letter: "”", color: "text-red-500" },
  ];

  return (
    <div className="w-full min-h-screen font-GSD-Regular relative flex items-center justify-center flex-col p-4">
      {/* Adjust Image Section to Maintain Balance */}
      <img src={p1} alt="Group 73" className="absolute top-[33%] left-[0%] w-[100px]" />
      <img src={p2} alt="Group 73" className="absolute top-[44%] right-[0%] w-[100px]" />
      <img src={p3} alt="Group 76" className="absolute top-[12%] right-[10%] w-[96px]" />
      <img src={p4} alt="Group 91" className="absolute bottom-[0%] left-[0%] w-[191px] " />
      <img src={p5} alt="Vector (1)" className="absolute top-[10%] left-[40%] w-[260px]" />
      <img src={p6} alt="Vector (2)" className="absolute top-[3%] right-[25%] w-[33px]" />
      <img src={p7} alt="Vector" className="absolute top-[9%] left-[10%] w-[140px]" />
      <img src={p8} alt="react like icon" className="absolute top-[20%] right-[5%] w-[27px]" />
      <img src={p8} alt="react like icon" className="absolute top-[12%] left-[3%] w-[27px]" />
      <img src={p8} alt="react like icon" className="absolute top-[20%] left-[12%] w-[27px]" />
      <img src={p9} alt="undraw programming" className="absolute bottom-[0%] right-[0%] w-[200px] " />

      {/* Title Section with Centered Text */}
      <div className="text-[7vw] flex justify-center items-center leading-none mb-0  text-center mt-10 w-[69%] mx-auto">
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

      <div className="uppercase text-[6vw] font-GSD_Bold leading-none mb-6 text-center">
        VIIT
      </div>

      <div className="font-GSD-Regular text-[2vw] w-[85%] leading-none mb-6 text-center">
        By offering seminars, mentorship initiatives, and forums for exchanging insights, we strive to foster a community that embraces lifelong learning and the sharing of knowledge.
      </div>

      <div className="font-GSD-Regular text-[1vw] w-[85%] flex items-center justify-center mb-4">
        <span className="px-4">LEARN</span>
        <FaRegSquare />
        <span className="px-4">GROW</span>
        <FaRegSquare />
        <span className="px-4">BUILD</span>
      </div>

      <button className="h-[8vh] w-[8vw] bg-blue-500 text-white rounded-lg text-[2vw]">
        Join us
      </button>
    </div>
  );
};

export default Hero;
