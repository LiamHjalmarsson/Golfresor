import React from 'react';
import Heading from '../heading/Heading';

const Text = ({ title, subTitle, text }) => {
    return (
        <div className='text-center mx-auto max-w-3xl px-4 lg:px-12 '>
            <Heading subTitle={subTitle} title={title} />
            <p className='leading-relaxed text-sm md:text-base mt-6'>
                {
                    text
                }
            </p>
        </div>
    );
}

export default Text;
