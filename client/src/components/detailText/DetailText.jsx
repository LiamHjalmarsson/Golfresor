import React from 'react';
import Text from './Text';
import Image from './Image';

const DetailText = ({ subTitle, title, description, path, buttonText, image, bottomText }) => {
    return (
        <div className='mx-auto max-w-7xl flex md:flex-row flex-col md:px-12 md:gap-12'>

            <Text
                description={description}
                buttonText={buttonText}
                title={title}
                subTitle={subTitle} 
                path={path}
            />

            <Image image={image} bottomText={bottomText} />
        </div>
    );
}

export default DetailText;
