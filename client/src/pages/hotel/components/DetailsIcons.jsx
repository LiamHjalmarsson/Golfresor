import React from 'react';

const DetailsIcons = ({ icons }) => {
    return (
        <div className='flex flex-col gap-4 py-4 text-xs md:text-sm items-center'>
            {icons.map((icon, index) => (
                <div key={index} className="flex gap-4 items-center">
                    <span dangerouslySetInnerHTML={{ __html: icon.icon.svg }}></span>
                    <span>{icon.text}</span>
                </div>
            ))}
        </div>
    );
}

export default DetailsIcons;
