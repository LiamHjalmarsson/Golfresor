import React from 'react';
import Heading from '../heading/Heading';
import LinkButton from '../elements/LinkButton';

const Text = ({ description, buttonText, title, subTitle, path }) => {

    return (
        <div className='w-full md:w-1/2 flex flex-col px-6 md:p-6 justify-center items-center md:items-start text-center md:text-start gap-6'>

            <Heading title={title} subTitle={subTitle} />

            <p className='leading-relaxed text-sm md:text-base lg:text-lg'>
                {description}
            </p>

            {
                buttonText && <LinkButton path={path}>{buttonText}</LinkButton>
            }

        </div>
    );
}

export default Text;
