import React from 'react';
import HotelCard from './HotelCard';
import SecondaryHeading from '../../../components/heading/SecondaryHeading';

const HotelsDestinations = ({ countryHotels, text }) => {
    return (
        <div className='text-center'>
            <div className='mb-6 lg:mb-12 text-center'>
                <SecondaryHeading subTitle="Hotel & Resort" />

                {
                    text && (
                        <p className="text-xs md:text-sm mt-2">
                            {text}
                        </p>
                    )
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    countryHotels.map((hotel, index) => (
                        <HotelCard
                            key={index}
                            path={`${hotel.slug.current}`}
                            image={hotel.image}
                            title={hotel.title}
                            info={"Priser från SEK " + hotel.price + " / " + hotel.nights + " Nätter "}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default HotelsDestinations;
