import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logowhite from '../../public/Images/Logowhite.svg';

type Props = {};

const TopList = (props: Props) => {
    return (
        <div>
            <div className="mx-[60px] relative z-10 flex flex-row items-center">
                <Link href="/" className="mb-4 mt-[30px]">
                    <Image src={Logowhite} alt="Logo" width={212} height={40} />
                </Link>
                <ul className="flex text-whit">
                    <li className="pl-[55px] pr-[25px] poppins font-medium leading-[24px] text-[16px]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="pr-[25px] poppins font-normal leading-[24px] text-[16px]">
                        <Link href="/our-ministries">Our Ministries</Link>
                    </li>
                    <li className="pr-[25px] poppins font-normal leading-[24px] text-[16px]">
                        <Link href="/join-departments">Join Departments</Link>
                    </li>
                    <li className="pr-[25px] poppins font-medium leading-[24px] text-[16px]">
                        <Link href="/media">Media</Link>
                    </li>
                    <li className="pr-[25px] poppins font-medium leading-[24px] text-[16px]">
                        <Link href="/prayer-for-salvation">Prayer for Salvation</Link>
                    </li>
                    <li className="pr-[25px] poppins font-medium leading-[24px] text-[16px]">
                        <Link href="/give">Give</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopList;
