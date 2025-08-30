import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.3 }
  }
};

// Parent controls staggering
const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5, // delay before next grid starts
      repeat: Infinity, // loop forever,
     zIndex : 2
    }
  }
};


const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Shoutout = () => {
  return (
    <div className = 'bg-gray-900'>
    <motion.div 
       variants={parentVariants}
        initial="hidden"
        animate="animate" 
    className="outergrid ml-[10vw] w-[80vw] h-[80vh] rounded-xl shadow-xl shadow-orange-900 bg-gradient-to-l from-purple-900 to-black grid grid-cols-3 items-center">
      
      {/* Left grid */}
      <motion.div initial={{ opacity: 0 , y : 40 }}
        animate={{ opacity: [1, 0, 1] , backgroundImage: [
      "linear-gradient(to right, #991b1b, #000000)", 
            "linear-gradient(to right, #065f46, #eab308)", 
    ] , y : 0 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity
        }} 
       className="leftgrid h-[50vh] w-[25vw]  ml-3 rounded-xl flex items-center justify-center  bg-gradient-to-r bg-orange-900 to-black ">
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
      <motion.div   initial={{ opacity: 0 , y : 0 }}
        animate={{ opacity: [0, 1, 0 , 1] , y : 40,  backgroundImage: [
      "linear-gradient(to right, #7c2d12, #000000)", // orange → black
      "linear-gradient(to right, #065f46, #000000)", // green → black
    ] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity
        }} 
  className="rightgrid h-[50vh] w-[25vw]  bg-gradient-to-r bg-orange-900 to-black  -ml-4 rounded-xl flex items-center justify-center">
        right
      </motion.div>

      <motion.div  initial={{  x : 200 , backgroundColor :"#d1d5db" }}
      animate = {{x:700 , backgroundColor : "#000000" }}
       transition={{
          duration: 2,
          ease: "easeInOut",
           repeatType: "reverse",
          repeat: Infinity
        }} 
       className = ' h-[20vh] w-[20vw] flex items-center justify-center shadow-lg shadow-red-900'>
            <h2 className = 'font-bold text-white shadow-red-500 shadow-lg'>
               He does a great work.
            </h2>
      </motion.div>
       

    </motion.div>
    </div>
  );
};

export default Shoutout;
