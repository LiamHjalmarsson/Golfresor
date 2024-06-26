import React from 'react';
import { urlFor } from '../../../client';

const DetailCards = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mx-auto px-4 lg:px-12">
            {cards.map((card, index) => (
                <div className="flex flex-col group items-center md:flex-row lg:max-w-4xl text-primary" key={index}>
                    <img className="object-cover w-full lg:w-1/3 h-60 md:h-72 lg:h-80" src={urlFor(card.image.asset).width(600).url()} alt="" />
                    <div className="flex flex-col w-full p-6 lg:px-8 lg:w-2/3 justify-between leading-normal">
                        <h5 className="mb-2 text-xl md:text-2xl font-bold">
                            {card.title}
                        </h5>
                        <p className="md:line-clamp-4 lg:line-clamp-5 text-sm md:text-base lg:text-lg line-clamp-6">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DetailCards;
