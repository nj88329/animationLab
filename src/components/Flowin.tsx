import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Flowin = () => {
  const slideRef = useRef(null);
  const slideleftRef = useRef(null);
  const containerRef = useRef(null);
 
  useEffect(() => {
    if (!slideRef.current || !slideleftRef.current || !containerRef.current) return;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 20%',
          end: '+=1500',
          scrub: 1,
          pin: true,
          // markers: true,
          snap: {
            snapTo: 'labels',
            duration: { min: 1.5, max: 3 },
            delay: 0.6,
            ease: 'power1.inOut'
          }
        }
      });

      tl.addLabel('start')
        // left block comes from left side
        .from(slideleftRef.current, {
          x: -300,
          y: 200,
          scale: 0.8,
          opacity: 0.1,
          duration: 2
        }, 'same')
        // right block comes from right side
        .from(slideRef.current, {
          x: 300,
          y: -200,
          scale: 0.8,
          opacity: 0.1,
          duration: 2
        }, 'same')
        .addLabel('middle')
        // animate both to final state
        .to([slideleftRef.current], {
          x: 0,
          y: 50,
          opacity: 1,
          scale: 1,
          rotate: 360,
          duration: 2
        }).to([slideRef.current],{
          x: -50,
          y: -180,  
          opacity: 1,
          scale: 1,
          rotate: 360,
          duration: 2
        })
        .addLabel('end');
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <div className="min-h-[200vh] bg-gray-900">
      <div
        ref={containerRef}
        className="flex items-center h-[120vh] "
      >
        <div
          ref={slideleftRef}
          className="h-[40vh] w-[50vw] mt-3 flex items-center justify-center rounded-l-full rounded-r-full bg-gradient-to-r from-green-900 to-black border-2 rounded-lg text-white text-3xl font-bold"
        >
          I am a developer <br />
          learning design
        </div>
          <div
          ref={slideRef}
          className="h-[40vh] w-[50vw] mt-3 flex items-center justify-center rounded-l-full rounded-r-full bg-gradient-to-r from-green-900 to-black border-2 rounded-lg text-white text-3xl font-bold"
        >
          I am a designer <br />
          learning development
        </div>
      </div>
    </div>
  );
};

export default Flowin;
