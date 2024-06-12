import React, { useState } from 'react';
import Heading from '../../../components/heading/Heading';
import Button from '../../../components/elements/Button';

const DestinationDescription = ({ title, description }) => {
    let [showFullDescription, setShowFullDescription] = useState(false);

    let toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="">
            <Heading subTitle="Golfresor till" title={title} />
            <p className={`text-sm md:text-base text-primary leading-relaxed mt-4 mb-8 ${showFullDescription ? '' : 'line-clamp-5'}`}>
                {description}
            </p>

            <Button
                onClick={toggleDescription}
            >
                {!showFullDescription ? 'Läs mer' : 'Läs mindre'}
            </Button>
        </div>
    );
}

export default DestinationDescription;
