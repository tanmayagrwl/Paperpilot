import React from 'react'
import google from '../Assets/google.png'
import github from '../Assets/github.png'

function Login() {
  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-center'>
        <div className='font-roboto_bold underline text-2xl mb-8'>
            Sign In
        </div>

        <button className="bg-[#FFFDD0] hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-64 shadow-xl shadow-[#AC97DB] mb-5">
            <img src={google} alt="Google logo"  class="inline-block mr-2 h-5 w-5" />
            <span className="inline-block"> Sign In with Google</span>
        </button>

        <button className="bg-[#FFFDD0] hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-64 shadow-xl shadow-[#AC97DB]">
            <img src={github} alt="Google logo"  class="inline-block mr-2 h-5 w-5" />
            <span className="inline-block"> Sign In with GitHub</span>
        </button>

    </div>
  )
}

export default Login