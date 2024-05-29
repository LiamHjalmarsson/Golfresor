import React from 'react';

const SecondaryHeading = ({ subTitle }) => {
    return (
        <h3 className='text-base md:text-lg lg:text-xl text-orange font-semibold'>
            {subTitle}
        </h3>
    );
}

export default SecondaryHeading;
