import React from 'react';

const PrimaryHeading = ({ title }) => {
    return (
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>
            {title.toUpperCase().slice(0, 1) + title.slice(1)}
        </h1>
    );
}

export default PrimaryHeading;
