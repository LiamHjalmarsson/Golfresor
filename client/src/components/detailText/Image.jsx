import React from 'react';
import { urlFor } from '../../client';

const Image = ({ image, bottomText }) => {

    return (
        <div className="relative w-full md:w-1/2 max-md:mt-12">
            <img src={urlFor(image).url()} className="h-60 md:h-full w-full object-cover object-center" />

            {
                bottomText && (
                    <div className="absolute px-6 -bottom-6">
                        <div className="py-4 lg:py-6 px-6 lg:px-8 bg-primary font-semibold text-stone-50 bg-opacity-90 shadow-middle shadow-primary text-base lg:text-lg">
                            {bottomText}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Image;
