import React from 'react';
import FavoriteCard from './FavoriteCard';

const Favorites = ({ data, path }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-12 md:px-6 lg:px-12 text-start">
            {
                data.map((favorite, index) => (
                    <FavoriteCard
                        key={index}
                        path={path + favorite.slug.current}
                        title={favorite.title}
                        image={favorite.image ? favorite.image : favorite.headerImages[0].image}
                        text={!favorite.cardInfoText ? "Pirs från SEK " + favorite.price + " / " + favorite.nights + " nätter" : favorite.cardInfoText}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;
