import React from 'react';
import { urlFor } from '../../../client';

const ChangeImage = ({ images, selectedImage, handleImageClick }) => {
    return (
        <div className="flex justify-center w-full gap-4">
            {
                images.map(image => (
                    <img
                        key={image._key}
                        src={urlFor(image.asset).url()}
                        alt={image.alt}
                        className={`w-16 h-16 object-cover cursor-pointer shadow-sm transition-transform ${selectedImage && image._key === selectedImage._key ? "transform scale-110" : ""}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))
            }
        </div>
    );
}

export default ChangeImage;
