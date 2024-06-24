import React from 'react';

const Icons = ({ icons }) => {
    return (
        <div className='flex flex-col md:flex-row w-full max-w-5xl mx-auto justify-between items-center gap-8 px-4 lg:px-12'>
            {icons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center p-4">
                    <img src={icon.icon.metadata.url} className="h-8 lg:h-12 object-cover mb-2" />
                    <span className='text-xs md:text-base break-words'>{icon.text}</span>
                </div>
            ))}
        </div>
    );
}

export default Icons;