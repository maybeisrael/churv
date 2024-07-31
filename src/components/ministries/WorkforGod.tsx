import React from 'react';
import Image from 'next/image';
import ExistingMember from '../../public/Images/ExistingMembers.svg';

const WorkforGod = () => {
    return (
        <div className="px-4 lg:px-16 py-10">
            <div className="text-center mb-10">
                <p className="text-2xl font-bold">WORK FOR GOD</p>
                <h1 className="mt-4 text-lg leading-relaxed">
                    At TREM Lekki, we envision every member growing in the word and building a strong
                    bond with other members as family, but we can only achieve this when we have more information about you. So if you are an existing member or a new member, kindly fill the form below.
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div className="relative w-full lg:w-1/2">
                    <Image
                        src={ExistingMember}
                        alt="Existing Members"
                        layout="responsive"
                        width={300}
                        height={474}
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-lg text-white">
                        <h1 className="text-xl font-semibold">Existing Members</h1>
                        <h2 className="mt-2 text-sm">
                            If you are an existing member, we’d love for you to check if your records with us are up to date, so we as a family won’t miss special moments in your life.
                        </h2>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2">
                    <Image
                        src={ExistingMember}
                        alt="New Members"
                        layout="responsive"
                        width={300}
                        height={474}
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-lg text-white">
                        <h1 className="text-xl font-semibold">New Members</h1>
                        <h2 className="mt-2 text-sm">
                            Are you a new member? We’d like to have your details. We promise not to bug you, but as a family, we want to be there for your special moments and celebrate with you.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkforGod;
