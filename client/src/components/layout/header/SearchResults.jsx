import React from 'react';
import { NavLink } from 'react-router-dom';
import { urlFor } from '../../../client';

const SearchResult = ({ countries, close }) => {
    return (
        <div className="absolute top-16 md:top-28 left-0 right-0 max-w-xl mx-auto p-4 md:rounded-md shadow-lg bg-white bg-opacity-90">
            {
                countries.length > 0 && (
                    <>
                        {countries.map(country => (
                            <NavLink to={`/destinationer/${country.slug.current}`} key={country._id} className="group flex h-16 md:h-24 justify-between gap-12 p-4 items-center cursor-pointer" onClick={close}>
                                <div className="text-sm md:text-base lg:text-lg font-semibold py-2 group-hover:translate-x-5 duration-300 transition-transform truncate">
                                    {country.title.toUpperCase().slice(0, 1) + country.title.slice(1)}
                                </div>
                                <div className="w-16 md:w-24 h-full">
                                    <img src={urlFor(country.headerImages[0].image).width(150).url()} className="h-full w-full object-cover" />
                                </div>
                            </NavLink>
                        ))}
                    </>
                )
            }

            {
                countries.length <= 0 && (
                    <div>
                        <h3 className="text-sm md:text-base lg:text-lg font-semibold">
                            Hitta inget
                        </h3>
                    </div>
                )
            }
        </div>
    );
}

export default SearchResult;
