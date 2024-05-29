import React from 'react';
import { urlFor } from '../../client';
import PrimaryHeading from '../heading/PrimaryHeading';
import Button from '../elements/Button';

const Contact = ({ title, description, buttonText, image }) => {
    return (
        <div className='w-full h-[400px] md:h-[500px] max-w-7xl mx-auto flex justify-center items-center flex-col md:flex-row relative shadow-lg'>
            <img src={urlFor(image).url()} className='max-md:absolute object-cover object-center opacity-90 w-full h-full' />
            <div className='z-10 max-md:bg-opacity-50 w-full xl:max-w-1/2 text-white h-full flex flex-col px-12 justify-center bg-primary lg:p-12 text-center'>
                <PrimaryHeading title={title} />
                <p className="mt-3 mb-6 lg:my-6 text-sm md:text-base lg:text-lg">
                    {
                        description
                    }
                </p>
                <div className="w-full flex justify-center">
                    <Button>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
