import React from 'react';
import Section from '../../components/layout/section/Section';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Hero from '../../components/hero/Hero';
import renderComponent from '../../utils/render';
import HotelsDestinations from './components/HotelsDestinations';
import DestinationDescription from './components/DestinationDescription';

const Destination = () => {
    let { slug } = useParams();

    let { data } = useFetch(`*[_type == "country" && slug.current == "${slug}"][0]`);
    let { data: hotels } = useFetch(`*[_type == "hotel"]`);
    let { data: page } = useFetch(`*[_type == "page" && title == "Destination"][0]`);

    let countryId = data?._id;
    let countryHotels = hotels ? hotels.filter(hotel => hotel.country?._ref === countryId) : [];

    return (
        <Section custom={"lg:gap-24 gap-12"}>
            {
                data && (
                    <>
                        <Hero images={data.headerImages} />

                        <div className='w-full xl:w-full max-w-3xl px-6 md:px-8 mx-auto flex flex-col gap-12 lg:gap-24'>
                            <DestinationDescription title={data.title} description={data.description} />
                            <HotelsDestinations countryHotels={countryHotels} country={data.title} />
                        </div>
                    </>
                )
            }

            {
                page?.components.map((component, index) => (
                    <div className="w-full md:w-2/3 xl:w-1/3 h-inherit px-4" key={index}>
                        {renderComponent(component)}
                    </div>
                ))
            }

        </Section>
    );
}

export default Destination;
