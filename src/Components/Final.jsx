import React, {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/CircleLoader";

function Final() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
     setLoading(false)
    }, 15000)
  },[])

  return (
    <div className='flex flex-col h-[100%] w-[100%] items-center justify-center'>
      {
         loading ?
         <ClipLoader
         color={"#8257E5"}
         loading={loading}
         size={70}
         aria-label="Loading Spinner"
         data-testid="loader"
       />

         :
         <>
         <p className='font-roboto_bold text-3xl pb-12 ml-14 sm:ml-14 md:ml-0'>
            Thank you for subscribing
        </p>
        <button className='h-14 w-56 text-xl font-roboto bg-[#714CC2] hover:bg-[#8257E5] rounded-full xl border border-x-4 border-y-4 border-solid border-[#16161d] shadow-lg shadow-[#714CC2] text-[#FFFDD0]'>
            Support more research
        </button>
        <span className='text-xs px-10 pt-7'>
        <span className='text-red-700'>*</span>All of your contributions matter! Every time you support our cause, you are helping to fund the latest research and make a difference in the world. Thank you for your support!
        </span>
        </>
      }
        


    </div>
  )
}

export default Final