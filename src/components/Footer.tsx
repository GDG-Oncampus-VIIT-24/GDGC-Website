import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import footer_logo from "/images/footer_gdg_logo.svg";
import footer_ill from "/images/Footer_Illustration.png";

function Footer() {
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

  return (
    <footer className="relative bottom-0 min-h-screen w-full pt-10 bg-white bg-dot-black/[0.2] font-GSD_Regular">
      {/* <div className="absolute blur-effect"></div> */}
      {/* Main Content Wrapper */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="companimate flex flex-col md:relative items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:h-[85vh] px-[5vw]"
      >
        {/* Image Section */}
        <div className="flex justify-center md:relative md:right-[18%] md:top-[4%] items-center h-auto w-full sm:w-[70vw] md:w-[40vw]">
          <img
            src={footer_ill}
            alt="Footer Illustration"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.div>

      {/* Socials Section */}
      <div className="socials companimate md:absolute md:left-[54.5%] md:top-[26%] flex flex-col md:items-start items-center w-full md:w-[40vw]">
        <h2 className="font-GSD_Regular text-3xl md:text-[4vw] mb-12 text-center md:text-left border-b-[3.5px] border-black pb-1.5">
          SOCIALS
        </h2>
        <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
          <li>
            <Link
              to="https://github.com/GDG-Oncampus-VIIT-24"
              className="linkWrap style-4"
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  "--line": "#ea4335",
                  "--color": "#ea4335",
                } as React.CSSProperties
              }
            >
              <span className="text-red-500">GITHUB</span>
              <svg viewBox="0 0 13 20">
                <polyline
                  points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                  fill="none"
                  stroke="#ea4335"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="https://mail.google.com/mail/?view=cm&fs=1&to=dscviit@gmail.com"
              className="linkWrap style-4"
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  "--line": "#4285f4",
                  "--color": "#4285f4",
                } as React.CSSProperties
              }
            >
              <span className="text-blue-500">EMAIL</span>
              <svg viewBox="0 0 13 20">
                <polyline
                  points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                  fill="none"
                  stroke="#4285f4"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/company/gdg-oncampus-viit/posts/?feedView=all"
              className="linkWrap style-4"
              target="_blank"
              rel="noopener noreferrer"
              style={https://www.linkedin.com/in/gdg-oncampus-viit/</li>
                {
                  "--line": "#34a853",
                  "--color": "#34a853",
                } as React.CSSProperties
              }
            >
              <span className="text-green-500">LINKEDIN</span>
              <svg viewBox="0 0 13 20">
                <polyline
                  points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                  fill="none"
                  stroke="#34a853"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/gdgc_viit/"
              className="linkWrap style-4"
              target="_blank"
              rel="noopener noreferrer"
              style={
                {
                  "--line": "#fbbc04",
                  "--color": "#fbbc04",
                } as React.CSSProperties
              }
            >
              <span className="text-yellow-500">INSTAGRAM</span>
              <svg viewBox="0 0 13 20">
                <polyline
                  points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                  fill="none"
                  stroke="#fbbc04"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <div className="mt-8">
          <Link
            to="/feedback"
            className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
          >
            Give Feedback
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative bottom-0 border-t border-black w-full bg-white py-4 px-[5vw] mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 text-sm md:text-base">2024 ©GDGC VIIT</p>
          <div className="flex items-center">
            <img
              src={footer_logo}
              alt="Google Developer Groups Logo"
              className="h-10 w-auto mr-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
