import React from 'react';
import Pbackground from '../../public/Images/Pbackground.svg'

const TowerPage = () => {
  return (
    <div
      className="flex flex-col text-white bg-cover bg-center w-full h-[700px] lg:h-full "
      style={{ backgroundImage: `url(${Pbackground.src})` }}
    >
      <div className='mx-4 lg:mx-[60px]'>
        <div className='w-full lg:w-[533px] h-auto lg:h-[382px] mt-[50px] lg:mt-[167px]'>
          <h1 className="text-base lg:text-lg xl:text-xl leading-tight lg:leading-snug xl:leading-normal">  
            &quot;God&apos;s grace is not just a second chance, but a new beginning. May we embrace His love and mercy today,
            and may our lives be a reflection of His goodness and faithfulness. &quot;
          </h1>
          <h2 className="text-sm lg:text-base mt-2">- Pastor Peter Onyekachi</h2>
        </div>
      </div>
    </div>
  );
};

export default TowerPage;
