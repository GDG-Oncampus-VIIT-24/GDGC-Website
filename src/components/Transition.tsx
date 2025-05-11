import { motion } from "framer-motion";

const calculateRandomBlockDelay = (rowIndex: number, totalRows: number) => {
  const blockDelay = Math.random() + 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Transition = (Page: React.FC) => {
  return () => {
    return (
      <>
        <Page />

        <div className="z-50 blocks-container transition-in">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="block"
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>

        <div className="blocks-container transition-out">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="block"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };
};

export default Transition;