import React from 'react';

const PrimaryHeading = ({ title }) => {
    return (
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>
            {title}
        </h2>
    );
}

export default PrimaryHeading;
