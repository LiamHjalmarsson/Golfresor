import React from 'react';
import FavoriteCard from './FavoriteCard';

const Favorites = ({ data }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-12 md:px-6 lg:px-12 text-start">
            {
                data.map((favorite, index) => (
                    <FavoriteCard
                        key={index}
                        path={`destinationer/${favorite.slug.current}`}
                        title={favorite.title}
                        image={favorite.image}
                        text={favorite.cardInfoText}
                    />
                ))
            }
        </div>
    );
}

export default Favorites;
