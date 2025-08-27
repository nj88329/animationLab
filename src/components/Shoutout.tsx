import { useGSAP } from '@gsap/react'
import React from 'react'

const Shoutout = () => {

   useGSAP(()=>{

   })

  return (
    <div className = 'flex  min-h-screen  bg-gray-900 gap-3 flex justify-center items-center'>
      <div className = 'outergrid  w-[80vw] h-[80vh] flex justify-center bg-gradient-to-l from-purple-900 to-black-800'>
        <div className = 'rightcard  bg-gradient-to-b from-green-800 to-black  h-[40vh] w-[20vw]  flex items-center justify-center rounded-xl'>
            <h1 className = 'heading text-yellow-600 font-bold '>
                TAKE YOUR PRODUCT FROM ZERO<br/>
                TO HERO
            </h1>
         </div>
        <div className = 'midcard bg-gradient-to-t from-green-800 to-black -ml-54 -rotate-20 mt-15 h-[40vh] w-[20vw] flex items-center justify-center rounded-xl'>
            <h1 className = 'heading text-yellow-600 font-bold  '>
                TAKE YOUR PRODUCT FROM ZERO<br/>
                TO HERO
            </h1>
         </div>
           
        <div className = 'leftcard bg-gradient-to-t from-green-800 to-black -ml-44 rotate-20 mt-40 h-[40vh] w-[20vw] flex items-center justify-center rounded-xl'>
            <h1 className = 'heading text-yellow-600 font-bold '>
                TAKE YOUR PRODUCT FROM ZERO<br/>
                TO HERO
            </h1>
         </div>
       </div>
    </div>
  )
}

export default Shoutout
