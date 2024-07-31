import React from 'react';
import Image from 'next/image';
import textb from '../../../public/Images/textb.svg';

const Footer = () => {
  return (
    <div className="w-full bg-[#FAFAFA] z-10">
      <div className="px-4 md:px-12 py-8">
        <div className="mb-8">
          <Image
            src={textb}
            alt="The redeemed Mission"
            width={209.7}
            height={40}
            className="max-w-[209.7px]"
          />
        </div>
        <div className="flex flex-wrap border-t border-t-[#E4E4E4] pt-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul>
              <li className="font-bold mb-2">Location</li>
              <li className="w-full md:w-[242px]">255, Hunpunu-Wuse Rd, Admirality Lekki, Lagos Island.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul>
              <li className="font-bold mb-2">OUR MINISTRIES</li>
              <li>Restoration Voices</li>
              <li>Ushering</li>
              <li>Technical/Media</li>
              <li>Ministry in Training (MIT)</li>
              <li>Follow up/Counselling</li>
              <li>Sanitation</li>
              <li>Security and Logistics</li>
              <li>Marriage Counselling</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul>
              <li className="font-bold mb-2">OUR DEPARTMENTS</li>
              <li>Christian Women Fellowship</li>
              <li>Christain Men Fellowship</li>
              <li>Next-Gen</li>
              <li>Catalyst Hub (Teens)</li>
              <li>Children</li>
              <li>Young Professionals</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul>
              <li className="font-bold mb-2">GIVING</li>
              <li>Offering</li>
              <li>God&apos;s Army Bible College</li>
              <li>Buildings</li>
              <li>Prison</li>
              <li>Thanksgiving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
