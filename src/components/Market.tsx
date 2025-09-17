import {  motion } from "motion/react";

const Market = () => {





const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: (direction) => {
    let offset = {};
    switch (direction) {
      case "top":
        offset = { y: -40 };
        break;
      case "bottom":
        offset = { y: 40 };
        break;
      case "left":
        offset = { x: -40 };
        break;
      case "right":
        offset = { x: 40 };
        break;
      default:
        offset = { y: 20 };
    }
    return { opacity: 0, scale: 0.8, ...offset };
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


  return (
    <div className = 'min-h-screen w-[100vw] bg-black gap-2 block ' style={{ perspective: '1000px' }} >
      <div 
        className= 'h-[30vh] w-full  bg-gradient-to-t from-violet-900 to-black shadow-2xl shadow-yellow-900  block  justify-center items-center rounded-t-full'>
          <motion.h2 className =' text-white-800 font-extrabold text-2xl text-center' 
             initial = {{ opacity : 0 , y : 40 , scale:0}}
                whileInView={{ opacity : 1 , y:0 , scale: 1.2 }}
                  transition={{
                  duration: 1,
                  ease:  [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: false, amount: 0.3 }}>
            WHERE GREAT IDEAS <br/>
          </motion.h2>
            <motion.h3 initial = {{ opacity : 0 , y : 40  ,scale:0}}
                whileInView={{ opacity : 1 , y:0 , scale: 1.1 }}
                  transition={{
                  duration: 1.2,
                     ease: [0.25, 0.1, 0.25, 1] // smooth, natural easing
                }}
             className = 'text-center text-xl font-bold text-yellow-200'> TURNS INTO REALITY</motion.h3>
      </div>
       <motion.div className=" h-[68vh] w-[90vw] block bg-[url('/assets/neonbg.jpeg')]   flex mx-auto shadow-2xl border rounded-2xl shadow-yellow-900" 
            style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateX: 0, rotateY: 0, opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotateX: [0, 15, -10, -2],
                  rotateY: [0, -10, 8, 5],
                }}
                viewport={{ once: false, amount: 0.3 }}
                
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.6, 1],
                  repeatType: "mirror"
                }}
         >
          <div className='w-1/3 h-full rounded-2xl bg-purple-400 opacity-30 [clip-path:polygon(2%_98%,75%_98%,100%_50%,75%_2%,2%_2%)]' > 
              
          </div>
          <div  
           className='w-2/3 overflow-hidden h-full bg-gradient-to-t  rounded-lg from-red-900 to-blue-800  bg-black border rounded-2xl  [clip-path:polygon(0_50%,25%_3%,98%_3%,98%_97%,25%_97%)] ' >
             <motion.ul  
                    className="grid grid-rows-3 grid-cols-3 gap-2 bg-black h-full"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                 >
                  <motion.li custom="top" variants={item} className="row-span-1 col-span-1 bg-purple-400 shadow-[0_0_20px_4px_rgba(192,132,252,0.6)]" />
                  <motion.li custom="left" variants={item} className="row-span-1 col-span-1  bg-purple-300 shadow-[0_0_20px_4px_rgba(253,224,71,0.6)]" />
                  <motion.li custom="bottom" variants={item} className="row-span-2 col-span-1  bg-purple-200  shadow-[0_0_20px_4px_rgba(59,130,246,0.6)]  " />
                  <motion.li custom="right" variants={item} className="row-span-1 col-span-2  bg-purple-300 shadow-[0_0_20px_4px_rgba(74,222,128,0.6)]  " />
                  <motion.li custom="left" variants={item} className="row-span-2 col-span-1  bg-purple-200" />              
                  <motion.li custom="top" variants={item} className="row-span-1 col-span-1  bg-purple-400" />
                  <motion.li custom="top" variants={item} className="row-span-1 col-span-1  bg-purple-300" />
            </motion.ul>
          </div>
       </motion.div>
    </div>
  )
}

export default Market
