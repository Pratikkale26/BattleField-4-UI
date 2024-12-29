import React from 'react';

interface SettingBtnProps {
  label: string;
  value: string | number | boolean;
}

const SettingBtn: React.FC<SettingBtnProps> = ({ label, value }) => {
  return (
    <div className="group relative"> {/* Relative for absolute positioning of hover */}
      <div className="bg-transparent rounded p-2 text-sm flex justify-between items-center w-auto border-b-2 border-gray-700 hover:bg-white hover:text-black transition duration-200">
        <span className="font-medium">{label}</span>
        <span >{value.toString()}</span>
      </div>
    </div>
  );
};

export default SettingBtn;