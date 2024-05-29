import React from 'react';
import useFetch from '../../hooks/useFetch';
import renderComponent from '../../utils/render';
import Section from '../../components/layout/section/Section';

const Destinations = () => {
    let { data } = useFetch(`*[_type == "page" && title == "Destinationer"][0]`);

    return (
        <Section>
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

export default Destinations;
