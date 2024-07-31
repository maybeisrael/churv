import React from 'react';
import Image from 'next/image';
import UpcomingEvent1 from '../../public/Images/UpcomingEvent1.svg';
import UpcomingEvent2 from '../../public/Images/UpcomingEvent2.svg';
import UpcomingEvent3 from '../../public/Images/UpcomingEvent3.svg';

const events = [
    {
        src: UpcomingEvent1,
        title: "POWER FOR LIVING",
        description: "Tuesday Service (Online Church)",
    },
    {
        src: UpcomingEvent2,
        title: "CELEBRATING THE MAN JESUS",
        description: "Tuesday Service (Onsite Church)",
    },
    {
        src: UpcomingEvent3,
        title: "POWER FOR LIVING",
        description: "Tuesday Service (Online Church)",
    },
];

const UpComingEvents = () => {
    return (
        <div className='mx-4 md:mx-[60px] my-20 flex flex-col items-center'>
            <div className='grid gap-[16px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                {events.map((event, index) => (
                    <div key={index} className=" md:w-[300px] ">
                        <Image
                            src={event.src}
                            alt="Upcoming event"
                            layout="responsive"
                            width={300}
                            height={474}
                            className="rounded-[8px]"
                        />
                        <h1 className="text-lg font-semibold mt-4">{event.title}</h1>
                        <h2 className="mt-2 text-gray-700">{event.description}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpComingEvents;
