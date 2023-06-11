import React from 'react'
import Logo from '../Assets/logo.png'
import Tag from '../Assets/tag.svg'
function Landing() {
  return (
    <div className=''>
        <div className="relative bg-gray-900 h-[98vh]">

            <div className="absolute inset-0 bg-gradient-to-r from-black to-[#2C2A30] transition-all duration-1000">
               
                <div className='h-[98vh] flex justify-between ml-5 sm:ml-5 md:ml-20'>
                    <div className='flex flex-col justify-around mt-10'>
                        <div className='font-racing display flex text-5xl text-[#D4D4D4]'>
                            <img src={Logo} alt="logo" className='pr-4' />
                            Paperpilot
                        </div>
                        <div className='font-roboto_bold text-white text-7xl'>Get your research papers <br /> on Autopilot.</div>
                        <img src={Tag} alt="tag" className='w-[80%] sm:w-[80%] md:w-[45%] lg:w-[55%]'  />
                    </div>


                    <div></div>


                </div>    

            </div>
        </div>
        <div className='relative bg-[#8257E5] h-[2vh]'></div>

    </div>
  )
}

export default Landing