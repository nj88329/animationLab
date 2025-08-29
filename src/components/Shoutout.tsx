import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Shoutout = () => {
  return (
    <div className = 'bg-gray-900'>
    <motion.div className="outergrid ml-[10vw] w-[80vw] h-[80vh] rounded-xl shadow-xl shadow-orange-900 bg-gradient-to-l from-purple-900 to-black grid grid-cols-3 items-center">
      
      {/* Left grid */}
      <motion.div className="leftgrid h-[50vh] w-[25vw]  ml-3 rounded-xl flex items-center justify-center  bg-gradient-to-r bg-orange-900 to-black ">
        left
      </motion.div>

      {/* Mid grid with cards stacked */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        className="midgrid bg-gradient-to-r bg-orange-900 to-black h-[50vh] w-[25vw] rounded-xl relative flex  "
      >
        {/* Right card */}
        <motion.div
          variants={childVariants}
          className="absolute card right bg-gradient-to-b from-green-800 to-black h-[25vh] w-[20vw] ml-15 mt-10 flex items-center justify-center rounded-xl"
          style={{ transform: "translateX(40px) rotate(10deg)" }}
        >
          <h1 className="heading text-yellow-600 font-bold text-center">
            TAKE YOUR PRODUCT FROM ZERO<br />right
          </h1>
        </motion.div>

        {/* Middle card */}
        <motion.div
          variants={childVariants}
          className="absolute card mid bg-gradient-to-t from-green-800 to-black h-[25vh] w-[20vw] ml-10 mt-7 flex items-center justify-center rounded-xl"
        >
          <h1 className="heading text-yellow-600 font-bold text-center">
            TAKE YOUR PRODUCT FROM ZERO<br />left
          </h1>
        </motion.div>

        {/* Left card */}
        <motion.div
          variants={childVariants}
          className="absolute card left bg-gradient-to-t from-green-800 to-black h-[25vh] w-[20vw] flex items-center justify-center rounded-xl"
          style={{ transform: "translateX(-40px) rotate(-10deg)" }}
        >
          <h1 className="heading text-yellow-600 font-bold text-center">
            TAKE YOUR PRODUCT FROM ZERO<br />mid
          </h1>
        </motion.div>
      </motion.div>

      {/* Right grid */}
      <motion.div className="rightgrid h-[50vh] w-[25vw]  bg-gradient-to-r bg-orange-900 to-black  -ml-4 rounded-xl flex items-center justify-center">
        right
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Shoutout;
