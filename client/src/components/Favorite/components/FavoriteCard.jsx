import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../client';
import { MdArrowForwardIos } from 'react-icons/md';

const FavoriteCard = ({ path, favorite, text, image }) => {
    return (
        <Link to={`/${path}`} className='group relative cursor-pointer flex flex-col shadow-xl'>
            <div className='h-60 md:h-72 lg:h-80'>
                <div className='overflow-hidden h-full w-full '>
                    <img src={urlFor(image.asset).width(600).url()} className=' object-cover object-center opacity-90 group-hover:opacity-85 w-full h-full transition duration-300 transform group-hover:scale-110' alt={image.alt} />
                </div>
            </div>

            <div className='p-4'>
                <div className='flex items-center justify-between w-full'>
                    <h2 className="text-xl md:text-lg lg:text-xl font-semibold truncate pr-4">
                        {favorite.title.toUpperCase().slice(0, 1) + favorite.title.slice(1)}
                    </h2>
                        {
                            favorite.deal && (
                                <span className='bg-green py-1 px-4 bg-opacity-50 font-semibold'>
                                    Erbjudande
                                </span>
                            )
                        }
                </div>
                <div className='flex justify-between items-center gap-2 mt-4'>
                    <p className="text-base md:text-sm lg:text-base flex-grow line-clamp-1">
                        {text}
                    </p>
                    <div className="flex items-center justify-end overflow-hidden w-16">
                        <span className="opacity-40 text-xs transition duration-300 group-hover:translate-x-0 -translate-x-[200%]">
                            se mer
                        </span>
                        <MdArrowForwardIos className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>

        </Link>
    );
}

export default FavoriteCard;
