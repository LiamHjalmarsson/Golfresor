import React from 'react';

const Icons = ({ icons }) => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto justify-center items-center gap-12'>
        {icons.map((icon, index) => (
            <div key={index} className="flex flex-col gap-2 items-center justify-center text-center">
                <span className='mb-2' dangerouslySetInnerHTML={{ __html: icon.icon.svg }}></span>
                <span>{icon.text}</span>
            </div>
        ))}
    </div>
    );
}

export default Icons;
