import React from 'react';
import Text from './Text';
import Image from './Image';

const DetailText = ({ data }) => {
    let { subTitle, title, description, path, buttonText, image, bottomText } = data;

    return (
        <div className='mx-auto max-w-7xl flex md:flex-row flex-col md:gap-12 px-4 lg:px-12 justify-between'>
            <Text
                description={description}
                buttonText={buttonText}
                title={title}
                subTitle={subTitle}
                path={path}
            />

            <Image
                image={image}
                bottomText={bottomText}
            />
        </div>
    );
}

export default DetailText;
