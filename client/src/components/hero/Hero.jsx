import React, { useState } from 'react';
import Arrow from './Arrow';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import HeroImage from './HeroImage';

const Hero = ({ images }) => {
    let [currentIndex, setCurrentIndex] = useState(0);

    let handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
    };

    let handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    return (
        <div className="h-[65vh] w-full flex justify-center relative overflow-hidden">
            <Arrow
                icon={<MdOutlineArrowBackIos />}
                custom={`left-0 ${currentIndex === 0 ? "opacity-0" : "opacity-100"}`}
                clickHandler={handlePrev}
            />

            {
                images.map((image, index) => (
                    <HeroImage
                        index={index}
                        key={index}
                        image={image.image}
                        text={image.headerInfo}
                        currentIndex={currentIndex}
                        title={image.title}
                    />
                ))
            }

            <Arrow
                icon={<MdOutlineArrowForwardIos />}
                custom={`right-0 ${currentIndex === images.length - 1 ? "opacity-0" : "opacity-100"}`}
                clickHandler={handleNext}
            />
        </div>
    );
}

export default Hero;
