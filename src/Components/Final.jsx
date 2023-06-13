import React from 'react'

function Final() {
  return (
    <div className='flex flex-col h-[100%] w-[100%] items-center justify-center'>
        <p className='font-roboto_bold text-3xl pb-12 ml-14 sm:ml-14 md:ml-0'>
            Thank you for subscribing
        </p>
        <button className='h-14 w-56 text-xl font-roboto bg-[#714CC2] hover:bg-[#8257E5] rounded-full xl border border-x-4 border-y-4 border-solid border-[#16161d]'>
            Support more research
        </button>
        <span className='text-xs px-10 pt-5'>
        <span className='text-red-700'>*</span>All of your contributions matter! Every time you support our cause, you are helping to fund the latest research and make a difference in the world. Thank you for your support!
        </span>


    </div>
  )
}

export default Final