import React from 'react';
import Hero from '../components/hero/Hero';
import DetailText from '../components/detailText/DetailText';

const renderComponent = (component) => {
    switch (component._type) {
        case "heroComponent":
            return renderHero(component);
        case "richTextComponent":
            return renderDetailText(component);
        default:
            return null;
    }
}

export default renderComponent;


let renderHero = (component) => {
    let { images } = component;
    return (
        <Hero
            images={images}
        />
    );
}

let renderDetailText = (component) => {
    let { title, subTitle, description, buttonText, image, imageText, link } = component;

    return (
        <DetailText
            title={title}
            subTitle={subTitle}
            description={description}
            image={image.asset}
            path={link}
            bottomText={imageText}
            buttonText={buttonText}
        />
    );

}