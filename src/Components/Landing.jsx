import React from 'react'
import Logo from '../Assets/logo.png'
import Tag from '../Assets/tag.svg'
function Landing() {
  return (
    /* parent div */
    <div className=''>
        {/*transition div  to-[#2C2A30] */}
       <div className="bg-gradient-to-r from-black to-[#2C2A30] transition-colors duration-500 h-[98vh] w-screen">
            {/* grid formation*/}
            <div  className='grid grid-cols-2 grid-rows-1'>
                {/* grid 1 */}
                <div className='h-[100vh] w-[100%] pl-10'>
                    {/* creating flex */}
                    <div className='flex h-full w-full flex-col justify-around'>
                        {/* adding logo */}
                        <div className='font-racing display flex text-5xl text-[#D4D4D4]'>
                            <img src={Logo} alt="logo" className='pr-4' />
                            Paperpilot
                        </div>
                        <div className='font-roboto_bold text-white text-7xl'>Get your research papers <br /> on Autopilot.</div>
                        <img src={Tag} alt="tag" className='w-[80%] sm:w-[80%] md:w-[45%] lg:w-[55%]'  />

                    

                    </div>
                </div>

                {/* grid 2 */}
                <div className='h-[100vh] w-[100%] bg-pink-700'>

                </div>

            </div>


       </div>

       {/* footer strip div */}
       <div className='relative bg-[#8257E5] h-[2vh]'></div>
    

    </div>
  )
}

export default Landing