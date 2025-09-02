import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.3 }
  }
};

// Parent controls staggering
const parentVariants = {
  hidden: {
    opacity: 0,
    y: 140,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5, // delay between children
      duration: 1.5,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: 0,
    y: 140,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};



const childVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40, transition: { duration: 0.5 } },

};

const Shoutout = () => {
  return (
    <div className = 'bg-gray-900'>
      <motion.div 
       variants={parentVariants}
        initial="hidden"
        whileInView="show"   // 👈 triggers only when in viewport
        viewport={{ once: false, amount: 0.2 }}
       className="outergrid ml-[10vw]  lg:w-[80vw] lg:h-[80vh] rounded-xl shadow-xl shadow-orange-900 bg-gradient-to-l from-purple-900 to-black grid grid-rows-3 md:grid-cols-3 place-items-center ">
      
      {/* Left grid */}
      <motion.div 
      initial={{ opacity: 0 , y : 40 }}
        animate={{ opacity: [1, 0, 1] , backgroundImage: [
      "linear-gradient(to right, #991b1b, #000000)", 
            "linear-gradient(to right, #065f46, #eab308)", 
    ] , y : 0 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity
        }} 
       className="leftgrid relative h-[20vh] w-[80%]   md:h-[50vh] md:w-[25vw]  md:ml-3 rounded-xl flex items-center justify-center  bg-gradient-to-r bg-orange-900 to-black ">
          <img src= '\public\assets\devops.jpeg' 
            className  = 'absolute h-full w-full object-cover rounded-xl'/>
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold drop-shadow-lg">
             DEVELOPER
          </h2>
      </motion.div>

      {/* Mid grid with cards stacked */}
      <motion.div
        variants={cardVariants} 
        initial="hidden"
        whileInView="show"
         viewport={{ once: false, amount: 0.2 }} 
        className="midgrid bg-gradient-to-r bg-orange-900 to-black h-[20vh]  w-[80%]  md:h-[50vh] md:w-[25vw] rounded-xl relative flex" 
      >
        {/* Right card */}
        <motion.div  
          variants={childVariants}
          className="absolute card right w-[14vh]   h-[70%] w-[30%] md:h-[25vh] md:w-[20vw]   bg-gradient-to-b from-green-800 to-black  ml-15 mt-10 flex items-center justify-center rounded-xl overflow-hidden"
          style={{ transform: "translateX(40px) rotate(10deg)" }}
        >
          <h1 className="heading text-yellow-600  text-sm  md:font-bold text-center">
            TAKE YOUR PRODUCT FROM ZERO<br />right
          </h1>
        </motion.div>

        {/* Middle card */}
        <motion.div 
          variants={childVariants}
          className="absolute card mid w-[14vh] bg-gradient-to-t from-green-800 to-black  h-[70%] w-[30%] md:h-[25vh] md:w-[20vw]  ml-10 mt-7 flex items-center justify-center rounded-xl overflow-hidden"
              style={{ transform: "translateX(40px) rotate(10deg)" }}
       >
          <h1 className="heading text-yellow-600  text-sm  md:font-bold text-center">
            TAKE YOUR PRODUCT FROM ZERO<br />left
          </h1>
        </motion.div>

        {/* Left card */}
        <motion.div
          variants={childVariants}
          className="absolute card  h-[70%] w-[30%] md:h-[25vh] md:w-[20vw]  bg-gradient-to-t from-green-800 to-black  flex items-center justify-center rounded-xl overflow-hidden"
          style={{ transform: "translateX(-40px) rotate(-10deg)" }}
        >
          <h1 className="heading text-yellow-600 text-sm md:font-bold text-center ">
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
      className="rightgrid flex flex-rows-3  h-[20vh]  w-[80%]  md:h-[50vh] md:w-[25vw] bg-gradient-to-r bg-orange-900 to-black  md:-ml-4 rounded-xl">
         <img src= '\public\assets\developer.jpeg' 
            className  = 'absolute h-full w-full object-cover rounded-xl'/>

          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold drop-shadow-lg">
             DEVOPS
          </h2>
      </motion.div>
      
   <div className = 'md:flex items-center justify-center gap-4 w-[80vw] '>
      <motion.div  initial={{  x : 50 , backgroundColor :"#0d7558ff" }}
        animate = {{x:150 , backgroundColor : "#1a68d6ff" }}
       transition={{
          duration: 2,
          ease: "easeInOut",
           repeatType: "reverse",
          repeat: Infinity
        }} 
       className = 'hidden   md:flex md:h-[20vh] md:w-[20vw] lg:h-[40vh]   flex items-center justify-center shadow-lg rounded-lg shadow-red-900 [clip-path:polygon(0_10%,85%_10%,93%_0%,100%_5%,100%_100%,0_100%)]'>
            <h2 className = 'md:font-bold text-sm text-white shadow-red-500 shadow-lg text-center '>
                He does a great work.<br/>
               Does his work with <br/>
                great perfection.
            </h2>
      </motion.div>
        <motion.div  initial={{  x : 50 , backgroundColor :"#065f46" }}
        animate = {{x:150 , backgroundColor : "#85a40aff" }}
       transition={{
          duration: 2,
          ease: "easeInOut",
           repeatType: "reverse",
          repeat: Infinity
        }} 
       className = 'hidden md:flex  h-[20vh] w-[20vw]  lg:h-[40vh] flex items-center justify-center shadow-lg rounded-lg shadow-red-900  [clip-path:polygon(0_10%,85%_10%,93%_0%,100%_5%,100%_100%,0_100%)]'>
            <h2 className = 'font-bold text-white shadow-red-500 shadow-lg text-center '>
                 <br/>
                  Want animations in framer <br/>
                  React-three-fiber or GSAP.<br/>
                 with utmost diligence.
            </h2>
      </motion.div>
       <motion.div  initial={{  x : 50, backgroundColor :"#0d695aff" }}
        animate = {{x:150 , backgroundColor : "#6e0b0bff" }}
       transition={{
          duration: 2,
          ease: "easeInOut",
           repeatType: "reverse",
          repeat: Infinity
        }} 
       className = 'hidden  md:flex md:h-[20vh] md:w-[20vw]  lg:h-[40vh] flex items-center justify-center rounded-lg shadow-lg shadow-red-900  [clip-path:polygon(0_10%,85%_10%,93%_0%,100%_5%,100%_100%,0_100%)]'>
            <h2 className = 'font-bold text-white shadow-red-500 shadow-lg  text-center'>
                 He does a great work.<br/>
               Does his work with <br/>
                great perfection.
            </h2>
      </motion.div>
  </div>
    </motion.div>
    </div>
  );
};

export default Shoutout;
