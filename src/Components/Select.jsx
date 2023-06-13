import React from 'react'
import { Link } from 'react-router-dom'
function Select() {
  return (
    <form action="" className='flex flex-col h-[100%] w-[100%] justify-center items-center'>
    
      
      <div className='font-roboto_bold text-2xl pb-8'>
        I want to read about...
      </div>
      
        <input type="text" placeholder='I like...' className='border border-[#AC97DB] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#633BBC] mb-4' required maxLength={12} />
        <input type="text" placeholder='I like...' className='border border-[#AC97DB] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#633BBC] mb-4' required maxLength={12} />
        <input type="text" placeholder='I like...' className='border border-[#AC97DB] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#633BBC] mb-8' required maxLength={12} />

        <Link to="/final">
          <button className='h-10 w-52 text-xl font-roboto bg-[#714CC2] hover:bg-[#8257E5] cursor-pointer rounded-md xl border border-x-1 border-y-1 border-solid border-[#16161d] shadow-xl text-white shadow-[#714CC2]'>
                Select
          </button>
        </Link>
        
    </form>



    
  )
}

export default Select