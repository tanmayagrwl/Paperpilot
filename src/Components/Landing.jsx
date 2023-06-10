import React from 'react'
import Logo from '../Assets/logo.png'

function Landing() {
  return (
    <div className=''>
        <div className="relative bg-gray-900 h-[98vh]">

            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] to-[#2C2A30] transition-all duration-1000
                flex justify-between">

                <div className='flex flex-col justify-around'>
                    <div className='font-racing display flex text-5xl text-[#D4D4D4]'>
                        <img src={Logo} alt="logo" />
                        Paperpilot
                    </div>
                    <div></div>
                    <div></div>
                </div>


                <div>

                </div>




            </div>
        </div>
        <div className='relative bg-[#8257E5] h-[2vh]'></div>

    </div>
  )
}

export default Landing