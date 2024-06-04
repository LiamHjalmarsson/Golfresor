import React from 'react';
import Heading from '../../../components/heading/Heading';
import Button from '../../../components/elements/Button';
import DetailsIcons from './DetailsIcons';

const HotelDetails = ({ subTitle, title, iconWithText, nights, price, description }) => {
    return (
        <div className='flex-grow lg:h-96 lg:max-w-lg flex flex-col justify-center items-center px-6'>
            <div className="text-center">
                <Heading subTitle={subTitle.toUpperCase().slice(0, 1) + subTitle.slice(1)} title={title} />
            </div>

            {
                iconWithText && <DetailsIcons icons={iconWithText} />
            }

            <h3 className='mb-4 text-base font-semibold'>
                {nights + " nätter från SEK " + price}
            </h3>

            <div className='mb-8 text-center text-xs md:text-sm px-8'>
                {description}
            </div>

            <Button>
                Kontakta
            </Button>
        </div>
    );
}

export default HotelDetails;
