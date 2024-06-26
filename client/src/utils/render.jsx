import React from 'react';
import Hero from '../components/hero/Hero';
import DetailText from '../components/detailText/DetailText';
import Countries from '../components/Favorite/Countries';
import Hotels from '../components/Favorite/Hotels';
import Deals from '../components/deal/Deals';
import Contact from '../components/contact/Contact';
import Text from '../components/text/Text';

const renderComponent = (component) => {
    switch (component._type) {
        case "heroComponent":
            return renderHero(component);
        case "richTextComponent":
            return renderDetailText(component);
        case "contentComponent":
            return renderContent(component);
        case "dealsComponent":
            return renderOffer(component);
        case "offertComponent":
            return renderContact(component);
        case "textComponent":
            return renderText(component);
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
    return (
        <DetailText
            data={component}
        />
    );
}

let renderContent = (component) => {
    let { title, subTitle, description } = component;

    if (component.contentToDisplay === "country") {
        return <Countries title={title} subTitle={subTitle} text={description} />
    } else {
        return <Hotels title={title} subTitle={subTitle} text={description} />
    }
}

let renderOffer = (component) => {
    let { title, subTitle } = component;

    return <Deals title={title} subTitle={subTitle} />
}

let renderContact = (component) => {
    let { title, description, buttonText, image } = component;

    return <Contact title={title} description={description} buttonText={buttonText} image={image} />
}

let renderText = (component) => {
    let { title, subTitle, description } = component;

    return <Text title={title} subTitle={subTitle} text={description} />
}