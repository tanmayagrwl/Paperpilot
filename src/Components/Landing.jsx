import React from 'react'
import Logo from '../Assets/logo.png'
import Tag from '../Assets/tag.svg'
import Final from './Final'
import Select from './Select'
import Login from './Login'
function Landing() {
  return (
    /* parent div */
    <div className=''>
        {/*transition div  to-[#2C2A30] */}
       <div className="bg-gradient-to-r from-black to-[#2C2A30] transition-colors duration-500 h-[100vh] sm:h-[100vh] md:h-[98vh] w-screen">

            {/* grid formation*/}
            <div  className='grid grid-cols-1 grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>

                {/* grid 1 */}
                <div className='h-[100vh] w-[100%] pl-10'>

                    {/* creating flex */}
                    <div className='flex h-full w-full flex-col justify-around'>

                        {/* adding logo */}
                        <div className='font-racing display flex text-3xl sm:text-3xl lg:text-5xl text-[#D4D4D4]'>
                            <img src={Logo} alt="logo" className='pr-4' />
                            Paperpilot
                        </div>

                        {/* add tagline */}
                        <div className='font-roboto_bold text-white text-6xl sm:text-6xl lg:text-7xl'>Get your research papers <br /> on Autopilot.</div>

                        {/* add creator img */}
                        <img src={Tag} alt="tag" className='w-[80%] sm:w-[80%] md:w-[45%] lg:w-[55%]'  />

                    </div>
                </div>

                {/* grid 2 */}
                <div className='h-[100vh] w-[100%] bg-gradient-to-r from-black to-[#2C2A30] transition-colors duration-500 lg:bg-none'>

                    {/* creating flex */}
                    <div className='flex h-full w-full  justify-end items-center'>

                        {/* box1 */}
                        <div className='h-[70vh] w-[20vw] bg-[#633BBC] z-10 absolute rounded-l-3xl'></div>

                        {/* box2 */}
                        <div className='h-[45vh] w-[10vw] bg-[#714CC2] z-20 mr-4 sm:mr-4 lg:mr-9 absolute rounded-r-lg'></div>

                        {/* box3 */}
                        <div className='h-[50vh] w-[20vw] bg-[#AC97DB] z-30 mr-9 sm:mr-9 lg:mr-14 absolute rounded-r-lg'></div>

                        {/* box main */}
                        <div className='h-[60vh] w-[70vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] bg-white z-40 mr-14 sm:mr-14 lg:mr-20 absolute rounded-xl'>
                            <Select />
                            

                        </div>


                        

                    </div>
                    
                </div>

            </div>


       </div>

       {/* footer strip div */}
       <div className='relative bg-[#8257E5] h-[2vh]  hidden sm:hidden md:block'></div>
    

    </div>
  )
}

export default Landing