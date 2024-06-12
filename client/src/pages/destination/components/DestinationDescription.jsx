import React from 'react';
import Heading from '../../../components/heading/Heading';

const DestinationDescription = ({ title, description }) => {
    return (
        <div className="text-center">
            <Heading subTitle="Golfresor till" title={title} />
            <p className="text-sm md:text-base text-primary line-clamp-5 leading-relaxed mt-4">
                {description}
            </p>
        </div>
    );
}

export default DestinationDescription;
