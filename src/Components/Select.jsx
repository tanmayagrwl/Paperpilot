import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons'
import Btn from './Btn'



function Select(props) {
  const { button } = props;
  return (
    <form action="" className='flex flex-col h-[100%] w-[100%] justify-around items-center p-5'>
    
      
      <div className='font-roboto_bold text-2xl pb-8'>
        I want to read about...
      </div>
      



    <div className=' flex flex-col items-center w-[90%] h-[50%] overflow-y-scroll mb-10'>

      {props.button.map((el) => {
         return <Btn key={el.key} name = {el.name} />; 
      
      })}
    </div>






        <Link to="/final">
          <button className='h-10 w-52 text-xl font-roboto bg-[#714CC2] hover:bg-[#8257E5] cursor-pointer rounded-md xl border border-x-1 border-y-1 border-solid border-[#16161d] shadow-xl text-white shadow-[#714CC2]'>
              Select
          </button>
        </Link>
        
    </form>



    
  )
}

export default Select