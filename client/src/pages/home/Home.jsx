import React from 'react';
import Section from '../../components/layout/section/Section';
import useFetch from '../../hooks/useFetch';
import renderComponent from '../../utils/render';

const Home = () => {
    let { data } = useFetch(`*[_type == "page" && title == "Hem"][0]`);

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

export default Home;
