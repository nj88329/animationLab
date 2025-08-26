import { useEffect , useRef } from 'react';
import gsap from "gsap";


const Partners = () => {
   
   const array = ["first", "second", "third" , "fourth" , "fifth"];

     const trackRef = useRef(null);
    

    useEffect(() => {
    const track = trackRef.current;

    // get total width of the content
    const totalWidth = track.scrollWidth / 2; // since we duplicate array

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x)% -totalWidth) // wrap around seamlessly
      }
    });

    return () => tween.kill();
  }, []);
      
  
  return (
    <div className = 'flex items-center justify-center'>

         
         <div className = 'overflow-hidden flex flex-col h-[40vh] w-[50vw]  sm:h-[20vh] sm:w-[60vw] md:w-[70vw] bg-gradient-to-r gap-5 from-black to-orange-900 rounded-lg flex items-center justify-center rounded-l-full rounded-r-full '>
             <h1 className = 'pt-3 mt-2'>Partners</h1> 
            <div ref= {trackRef} className = "flex mt-[-2]">
                  
             { array.concat(array).map((item,index)=>(           
                       <div key={index}
                        className='carousel-item rounded-full   bg-gradient-to-r from-purple-900 to-black h-30 w-30  flex items-center justify-center '>
                                {item}
                         </div>))
              }
              </div>
         </div>
    </div>
  )
}

export default Partners
