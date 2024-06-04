import React from 'react';

const SecondaryHeading = ({ subTitle }) => {
    return (
        <div>
            <h3 className='text-base md:text-lg lg:text-xl text-orange font-semibold'>
                {subTitle}
            </h3>
        </div>
    );
}

export default SecondaryHeading;
