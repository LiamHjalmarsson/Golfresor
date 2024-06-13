import React from 'react';
import { urlFor } from '../../../client';

const Logo = ({ logo }) => {
    if (logo.logoType === 'text') {
        return <span className="text-2xl md:text-4xl font-bold tracking-wide">{logo.textLogo}</span>;
    } else if (logo.logoType === 'image') {
        return (
            <div className='max-w-40 max-lg:mx-auto'>
                <img src={urlFor(logo.imageLogo.asset).width(300).url()} alt="Logo" className=" p-8 w-full object-contain" />
            </div>
        );
    }
    return null;
}

export default Logo;
