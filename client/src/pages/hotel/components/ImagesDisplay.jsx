import React from 'react';
import { urlFor } from '../../../client';
import ChangeImage from './ChangeImage';

const ImagesDisplay = ({ images, handleImageClick, selectedImage }) => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="w-full flex flex-col relative gap-4">
                <img
                    src={selectedImage ? urlFor(selectedImage.asset).width(600).url() : urlFor(images[0].asset).width(600).url()}
                    className="object-cover object-center opacity-95 w-full h-96"
                    alt="Selected"
                />

                <ChangeImage images={images} selectedImage={selectedImage} handleImageClick={handleImageClick} />
            </div>
        </div>
    );
}

export default ImagesDisplay;
