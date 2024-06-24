import React, { useState } from 'react';
import Heading from '../../../components/heading/Heading';

const DestinationDescription = ({ title, description }) => {
    let [showFullDescription, setShowFullDescription] = useState(false);

    let toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="text-center max-w-3xl mx-auto">
            <Heading subTitle="Golfresor till" title={title} />
            <p className={`text-sm md:text-base text-primary leading-relaxed mt-4 mb-8 ${showFullDescription ? '' : 'line-clamp-5'}`}>
                {description}
            </p>
        </div>
    );
}

export default DestinationDescription;
