import React from 'react'
import Logo from '../Assets/logo.png'
import Tag from '../Assets/tag.svg'
function Landing() {
  return (
    /* parent div */
    <div className=''>
        {/*transition div  to-[#2C2A30] */}
       <div className="bg-gradient-to-r from-black to-[#2C2A30] transition-colors duration-500 h-[100vh] sm:h-[100vh] md:h-[98vh] w-screen">

            {/* grid formation*/}
            <div  className='grid grid-cols-1 grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1'>

                {/* grid 1 */}
                <div className='h-[100vh] w-[100%] pl-10'>

                    {/* creating flex */}
                    <div className='flex h-full w-full flex-col justify-around'>

                        {/* adding logo */}
                        <div className='font-racing display flex text-5xl text-[#D4D4D4]'>
                            <img src={Logo} alt="logo" className='pr-4' />
                            Paperpilot
                        </div>

                        {/* add tagline */}
                        <div className='font-roboto_bold text-white text-7xl'>Get your research papers <br /> on Autopilot.</div>

                        {/* add creator img */}
                        <img src={Tag} alt="tag" className='w-[80%] sm:w-[80%] md:w-[45%] lg:w-[55%]'  />

                    </div>
                </div>

                {/* grid 2 */}
                <div className='h-[100vh] w-[100%]'>

                    {/* creating flex */}
                    <div className='flex h-full w-full  justify-end items-center'>

                        {/* box1 */}
                        <div className='h-[65vh] w-[20vw] bg-[#633BBC] z-10 absolute '></div>

                            {/* box2 */}
                           {/*  <div className='h-[61vh] w-[20vw] bg-[#633B34] z-20 pl-10 absolutes'>                            </div> */}

                        

                    </div>
                    
                </div>

            </div>


       </div>

       {/* footer strip div */}
       <div className='relative bg-[#8257E5] h-[2vh]  hidden sm:hidden lg:block'></div>
    

    </div>
  )
}

export default Landing