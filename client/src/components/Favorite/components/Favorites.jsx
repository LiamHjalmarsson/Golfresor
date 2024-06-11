import React from 'react';
import FavoriteCard from './FavoriteCard';

const Favorites = ({ data, path }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12 md:gap-12 md:px-6 lg:px-24 text-start mx-auto max-w-[1800px]">
            {
                data.map((favorite, index) => (
                    <FavoriteCard
                        key={index}
                        path={path + favorite.slug.current}
                        favorite={favorite}
                        image={favorite.cardImage ? favorite.cardImage : favorite.headerImages[0].image}
                        text={`Pris från SEK ${favorite.price} / ${favorite.nights} nätter`}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;
