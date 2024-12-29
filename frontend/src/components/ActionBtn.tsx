import React from 'react';

interface ActionBtnProps {
  text: string;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ text }) => {
  return (
    <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-14 border-2 border-gray-500 ">
      {text}
    </button>
  );
};

export default ActionBtn;