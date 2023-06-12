import React from 'react'
import Logo from '../Assets/logo.png'
import Tag from '../Assets/tag.svg'
function Landing() {
  return (
    /* parent div */
    <div className=''>
        {/*transition div  to-[#2C2A30] */}
       <div className="bg-gradient-to-r from-black to-[#2C2A30] transition-colors duration-500 h-[98vh] w-screen">
            <div  className='grid grid-cols-2 grid-rows-1'>
                <div className='h-[100vh] w-[100%] bg-red-700'></div>
                <div className='h-[100vh] w-[100%] bg-pink-700'></div>
            </div>


       </div>

       {/* footer strip div */}
       <div className='relative bg-[#8257E5] h-[2vh]'></div>
    

    </div>
  )
}

export default Landing