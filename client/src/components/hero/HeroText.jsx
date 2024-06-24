import React from 'react';

const HeroText = ( { title, text, index, currentIndex }) => {
    return (
        <div className={`flex w-full h-full transition duration-1000 delay-300 items-end justify-start md:justify-center md:items-center relative ${index === currentIndex ? 'opacity-100' : index < currentIndex ? 'opacity-0' : 'opacity-0'}`}>
            <div className="max-w-3xl text-start lg:text-center text-stone-50 px-8 pb-8">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl mb-2 lg:mb-6">
                    {title.toUpperCase().slice(0, 1) + title.slice(1)}
                </h1>

                {
                    text && (
                        <p className="max-w-md leading-relaxed text-lg lg:text-xl line-clamp-2 lg:line-clamp-4">
                            {text}
                        </p>
                    )
                }
            </div>
        </div>
    );
}

export default HeroText;
