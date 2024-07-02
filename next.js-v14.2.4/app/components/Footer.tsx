import { useState } from 'react';

const Footer = () => {

  return (
    <div className="w-[100vw] h-[100px] bg-[#000] absolute bottom-0 flex flex-col justify-center items-center">
        <div className="w-[100vw] h-[50px] flex items-center p-5 border-b-[1px] border-[#303134]">
            <p className='text-[#fff] text-[14px]'>Norge</p>
        </div>
        <div className="w-[100vw] h-[50px] flex items-center gap-10 p-5">
            <p className='text-[#fff] text-[14px]'>Info</p>
            <p className='text-[#fff] text-[14px]'>Annonsering</p>
            <p className='text-[#fff] text-[14px]'>Bedrifter</p>
            <p className='text-[#fff] text-[14px]'>Slik fungerer det</p>
        </div>
    </div>
  );
};

export default Footer;
