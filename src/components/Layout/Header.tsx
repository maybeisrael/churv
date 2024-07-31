import React from 'react';
import Image from 'next/image';
import homebackground from '../../../public/Images/homebackground.svg';
import Homeoverlay from '../../../public/Images/Homeoverlay.svg';
import TopList from '../TopList';

const Header = () => {
  return (
    <div
      className="relative flex flex-col items-center text-white bg-cover bg-center h-[820px] w-full pb-[20px] lg:pb-[0px]"
      style={{ backgroundImage: `url(${homebackground.src})` }}
    >
      {/* Overlay image */}
      <div className="absolute  w-full h-full">
        <Image
          src={Homeoverlay}
          alt="Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Top list component */}
      <TopList />

      {/* Heading */}
      <h1 className=" newsreader text-center font-normal text-[80px] leading-[96px] mt-[213px] mb-[56px] text-[#FFFFFF] z-10">
        A Community of Believers
        <span className="block">A Family of Friends</span>
      </h1>

      {/* Buttons */}
      <div className="flex gap-[29px] z-10">
        <button className="bg-[#ED3237] w-[294px] h-[56px] text-white poppins font-medium leading-[24px] text-[24px] py-[16px] px-[46px] rounded-[4px] ">
          Join us this Sunday
        </button>
        <button className="border-[white] w-[294px] h-[56px] text-white poppins font-medium leading-[24px] text-[24px] py-[16px] px-[56px] rounded-[4px] border-[2px]">
          Watch us online
        </button>
      </div>
    </div>
  );
};

export default Header;
