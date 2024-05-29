import React from 'react';
import { urlFor } from '../../client';
import HeroText from './HeroText';

const HeroImage = ({ image, title, text, index, currentIndex }) => {
    return (
        <div className={`w-full h-full absolute top-0 left-0 transition duration-1000 ${index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'}`}>
            <div className="relative w-full h-full bg-primary">
                <img src={urlFor(image.asset).url()} className="absolute w-full h-full object-cover opacity-70" />

                <HeroText
                    title={title}
                    text={text}
                    currentIndex={currentIndex}
                    index={index}
                />
            </div>
        </div>
    );
}

export default HeroImage;
