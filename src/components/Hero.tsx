import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


// gsap.registerPlugin( ScrollToPlugin);

const Hero = () => {

     gsap.fromTo(".left", {opacity : 0 , x : -30 , y: -50}, { opacity : 1,x : 0, y:0, duration : 1});
      
     gsap.fromTo(".right", { opacity : 0 , x : 50 , y : 50}, { opacity : 1, x : 0 , y: 0 , duration : 1.4})
     
  return (
    <div className = ' flex flex-col md:flex-row  gap-5  h-[90vh] w-[98vw] m-2 rounded-lg'>
        <div className = 'left bg-gradient-to-l from-purple-700 to black  rounded-lg flex-1 sm:flex-[2] flex flex-col justify-center rounded-lg  [clip-path:polygon(0_10%,85%_10%,89%_0%,100%_0,100%_100%,0_100%)] items-center   w-[90%] mx-auto'>
           <h1 className= 'font-bold text-4xl gap-4'>
            LEARNING DESIGNS AND <br/>
                      DEVELOPMENT
            </h1>  
               <div className="h-[1px] w-[100vh] bg-white my-9"></div>

        </div>
        <div className = 'right flex items-center justify-center  bg-gradient-to-r from-orange-900 to black rounded-lg flex-1 sm:flex-[1]  flex justify-center border-2'>
            <div className = 'bg-blue-500 h-[40vh]  w-[90%] md:w-[75%] lg:w-[40%]  rounded-lg flex justify-center pt-4'>
                    <div className = 'grid grid-cols-3 grid-rows-3 gap-1 h-[90%]  w-[80%]'>
                          <div className = 'bg-red-800 rounded-lg col-span-2 row-span-2 flex justify-center'>
                            first
                          </div>
                          <div className = 'bg-gray-500 row-span-2 rounded-lg'>
                            sec
                          </div>
                          <div className = 'bg-yellow-400 col-span-3 col-start-1 rounded-lg row-span-2'>
                               third
                          </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Hero
