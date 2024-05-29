import React from 'react';
import PrimaryHeading from './PrimaryHeading';
import SecondaryHeading from './SecondaryHeading';

const Heading = ({ title, subTitle}) => {
    return (
        <div className="flex flex-col gap-2">
            <SecondaryHeading subTitle={subTitle} />            
            <PrimaryHeading title={title} />
        </div>
    );
}

export default Heading;
