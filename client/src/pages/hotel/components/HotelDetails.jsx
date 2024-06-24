import React from 'react';
import Heading from '../../../components/heading/Heading';
import Button from '../../../components/elements/Button';
import DetailsIcons from './DetailsIcons';
import { useOutletContext } from 'react-router-dom';

const HotelDetails = ({ data }) => {
    let { country, title, iconWithText, nights, price, description } = data;
    let { handleModal } = useOutletContext();

    return (
        <div className='flex-grow lg:max-w-lg flex flex-col items-center px-4'>
            <div className="text-center mb-4">
                <Heading subTitle={"Golfsemester till " + country.title} title={title} />
            </div>

            <DetailsIcons icons={iconWithText} />

            <p className='my-4 text-base font-semibold'>
                {nights + " nätter från SEK " + price}
            </p>

            <div className='mt-4 mb-8 text-center text-xs md:text-sm px-8'>
                <p>
                    {description ? description : "Pris per person i SEK inkl. hotell med all-inclusive, 3 rundor golf, flyg med resväska, handbagage och golfbag samt privat flygplatstransfer."}
                </p>
            </div>

            <Button onClick={handleModal}>
                Kostnadsfri offert
            </Button>
        </div >
    );
}

export default HotelDetails;
