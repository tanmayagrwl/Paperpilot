import React, { useState } from 'react';



function Btn(props) {
  const [bgColor, setBgColor] = useState('bg-[#FFFDD0]');
  const {setSelectedCount,selectedCount }=props


  const handleClick = (event) => {
    event.preventDefault();
    setBgColor('bg-[#AC97DB]');

    if (selectedCount < 3) {
      setSelectedCount(selectedCount + 1);
    }
  };

  const isButtonDisabled = selectedCount >= 3;

  return (
    <div>
      <button
        className={`flex justify-around ${bgColor} hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-48 sm:w-48 lg:w-72 mb-5 active:bg-[#714CC2] cursor-pointer`}
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        <span className="inline-block" >{props.name}</span>
      </button>
    </div>
  );
}

export default Btn;