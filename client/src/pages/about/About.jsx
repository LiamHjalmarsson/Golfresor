import React from 'react';
import useFetch from '../../hooks/useFetch';
import renderComponent from '../../utils/render';
import Section from '../../components/layout/section/Section';

const About = () => {
    let { data } = useFetch(`*[_type == "page" && title == "Om oss"][0]`);

    return (
        <Section custom={"lg:gap-24 gap-12"}>
            {
                data?.components.map((component, index) => (
                    <div key={index}>
                        {renderComponent(component)}
                    </div>
                ))
            }
        </Section>
    );
}

export default About;
