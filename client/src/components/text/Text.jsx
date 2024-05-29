import React from 'react';
import Heading from '../heading/Heading';

const Text = ({ title, subTitle, text }) => {
    return (
        <div className='text-center mx-auto max-w-2xl px-12 md:px-6 '>
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
