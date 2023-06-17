import React from 'react'

function Btn(props) {
  return (
    <div>
        <button className=" flex justify-around bg-[#FFFDD0] hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-64 shadow-xl shadow-[#AC97DB] mb-5">
                <span className="inline-block">{props.name}</span>
      </button>
    </div>
  )
}

export default Btn