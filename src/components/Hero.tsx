import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


// gsap.registerPlugin( ScrollToPlugin);

const Hero = () => {


     gsap.fromTo(".left", {opacity : 0 , x : -30 , y: -50}, { opacity : 1,x : 0, y:0, duration : 1});
      
     gsap.fromTo(".right", { opacity : 0 , x : 50 , y : 50}, { opacity : 1, x : 0 , y: 0 , duration : 1.4})
     
  return (
    <div className = ' flex flex-col md:flex-row  gap-5  h-[80vh] w-[98vw] m-2 rounded-lg'>
        <div className = 'left bg-gradient-to-l from-purple-700 to black  rounded-lg flex-1 sm:flex-[2] flex flex-col justify-center rounded-lg  [clip-path:polygon(0_10%,85%_10%,89%_0%,100%_0,100%_100%,0_100%)] items-center   w-[90%] mx-auto'>
           <h1 className= 'font-bold text-4xl gap-4'>
            LEARNING DESIGNS AND <br/>
                      DEVELOPMENT
            </h1>  
               <div className="h-[1px] w-[100vh] bg-white my-9"></div>

        </div>
        <div className = 'right bg-gradient-to-r from-orange-900 to black rounded-lg flex-1 sm:flex-[1]  flex justify-center border-2'>
            Right
        </div>  
    </div>
  )
}

export default Hero
