import React from 'react';

const Icons = ({ icons }) => {
    return (
        <div className='flex flex-col md:flex-row w-full max-w-5xl mx-auto justify-between items-center gap-8 p-4'>
            {icons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center p-4">
                    <span className='mb-2 text-xl lg:text-4xl' dangerouslySetInnerHTML={{ __html: icon.icon.svg }}></span>
                    <span className='text-xs md:text-base break-words'>{icon.text}</span>
                </div>
            ))}
        </div>
    );
}

export default Icons;