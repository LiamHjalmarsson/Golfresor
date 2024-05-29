import React from 'react';
import Hero from '../components/hero/Hero';

const renderComponent = (component) => {
    switch (component._type) {
        case "heroComponent":
            return renderHero(component);
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