import React from 'react';
import Image from 'next/image';
import Donate1 from '../../public/Images/Donate1.svg';
import Donate2 from '../../public/Images/Donate2.svg';

const Donate = () => {
    return (
        <div className="px-4 py-8">
            <p className="text-center text-2xl font-bold mb-8">DONATE TO CHURCH PROJECTS</p>
            <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-screen-lg">
                <div className="w-full sm:w-[450px] h-[474px]">
                    <Image
                        src={Donate1}
                        alt="Donate"
                        layout="responsive"
                        width={450}
                        height={474}
                        className="rounded-[8px]"
                    />
                    <h1 className="text-xl font-semibold mt-4">LEKKI - ADMIRALTY CHURCH BUILDING PROJECT</h1>
                    <h2 className="mt-2 text-gray-700">Get to know more about who we are and what we believe at TREM Lekki. Get to know more about who we are and what we believe at TREM Lekki.</h2>
                </div>
                <div className="w-full sm:w-[450px] h-[474px]">
                    <Image
                        src={Donate2}
                        alt="Donate"
                        layout="responsive"
                        width={450}
                        height={474}
                        className="rounded-[8px]"
                    />
                    <h1 className="text-xl font-semibold mt-4">LEKKI - ADMIRALTY CHURCH BUILDING PROJECT</h1>
                    <h2 className="mt-2 text-gray-700">Get to know more about who we are and what we believe at TREM Lekki. Get to know more about who we are and what we believe at TREM Lekki.</h2>
                </div>
            </div>
        </div>
    );
};

export default Donate;
