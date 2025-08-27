import { useEffect , useRef } from 'react';
import gsap from "gsap";


const Partners = () => {
   
   const array = ["first", "second", "third" , "fourth" , "fifth"];

     const trackRef = useRef(null);
    
useEffect(() => {
  const mm = gsap.matchMedia();
  const track = trackRef.current;

  // get actual lengths (includes flex gap, margins, etc.)
  const totalWidth = track.scrollWidth / 2;
  const totalHeight = track.scrollHeight / 2;

  mm.add("(min-width:320px)", () => {
    return gsap.to(track, {
      x: -totalWidth,
      duration: 7,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
      }
    });
  });

  mm.add("(max-width: 321px)", () => {
    return gsap.to(track, {
      y: -totalHeight,
      duration: 7,
      ease: "linear",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % -totalHeight)
      }
    });
  });

  return () => mm.revert();
}, []);

  
  return (
    <div className = 'flex items-center justify-center'>

         
         <div className = 'overflow-hidden flex flex-col h-[40vh] w-[50vw]  sm:h-[20vh] sm:w-[30vw] md:w-[90vw] bg-gradient-to-r gap-5 from-black to-orange-900 rounded-lg flex items-center justify-center rounded-l-full rounded-r-full '>
             <h1 className = 'pt-3 mt-2'>Partners</h1> 
            <div ref= {trackRef} className = "flex flex-col sm:flex-row gap-3">
                  
             { [...array,...array].map((item,index)=>(           
                       <div key={index}
                        className='carousel-item rounded-full   bg-gradient-to-r from-purple-900 to-black h-45 w-45  flex items-center justify-center '>
                                {item}
                         </div>))
              }
              </div>
         </div>
    </div>
  )
}

export default Partners
