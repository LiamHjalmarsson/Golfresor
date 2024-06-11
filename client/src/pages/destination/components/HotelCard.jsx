import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../client';

const HotelCard = ({ hotel, path, image, title, info }) => {
    return (
        <Link to={`${hotel.slug.current}`} className="group block max-md:w-sm relative shadow-lg hover:shadow-xl transition duration-300">
            <div className="overflow-hidden h-48 md:h-64">
                <img src={urlFor(hotel.cardImage).width(400).url()} className='object-cover object-center opacity-95 w-full h-full group-hover:scale-110 transition duration-300' alt={title} />
            </div>

            <div className="absolute -bottom-4 left-0 right-0 px-4">
                <div className='bg-white bg-opacity-90 p-4 shadow-lg text-center'>
                    <h3 className="text-sm md:text-lg font-semibold text-primary truncate">
                        {hotel.title}
                    </h3>
                    <div>
                        <p className='text-sm'>
                            {"Priser från SEK " + hotel.price + " / " + hotel.nights + " Nätter "}
                        </p>
                        {
                            hotel.deal && (
                                <p className='bg-green py-1 px-4 bg-opacity-50 mt-2 font-semibold w-fit mx-auto'>
                                    Erbjudande
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default HotelCard;
