import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../client';

const Deal = ({ name, image, description, reference, alt }) => {
    let linkUrl = reference._type === 'hotel' ? `/hotels/${reference._id}` : `/countries/${reference._id}`;

    return (
        <Link to={linkUrl} className="group md:max-w-lg md:w-1/4 flex-grow h-60 md:h-72 lg:h-80 relative flex justify-center items-end text-start">
            <div className='overflow-hidden h-full w-full '>
                <img src={urlFor(image).width(600).url()} className=' object-cover object-center opacity-90 group-hover:opacity-85 w-full h-full transition duration-300 transform group-hover:scale-110' alt={alt} />
            </div>

            <div className="absolute -bottom-4 left-0 right-0 px-6 lg:px-12 flex justify-center">
                <div className='bg-white bg-opacity-90 p-4 shadow-lg max-w-96 w-full'>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold truncate">
                        {name}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg lg:mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Deal;
