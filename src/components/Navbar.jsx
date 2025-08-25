import React from 'react';



const Navbar = () => {
  return (
    <div className = 'bg-gray-800 min-h-[10vh] px-4 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 text-base font-bold sm:text-lg text-yellow-300 hover:cursor-pointer border-2 border-white rounded-lg'>
       <h2>
          Services
       </h2>
       <h2>
         Projects
       </h2>     
       <h2>
         Team
       </h2>     
       <h2>
         Resources
       </h2>
        <h2>
         Prices
        </h2>
      
           <button className='bg-white rounded-lg text-red-700 min-w-[10vw]'>Contact</button> 
      
    </div>
  )
}

export default Navbar
