import React, { useEffect, useState } from 'react';
import Section from '../../components/layout/section/Section';
import { useParams } from 'react-router-dom';
import { getData } from '../../hooks/useFetch';
import Hero from '../../components/hero/Hero';
import HotelsDestinations from './components/HotelsDestinations';
import DestinationDescription from './components/DestinationDescription';

const Destination = () => {
    let { slug } = useParams();

    let [country, setCountry] = useState(null);
    let [hotels, setHotels] = useState(null);

    useEffect(() => {
        let fetchData = async () => {
            let data = await getData({ query: `*[_type == "country" && slug.current == "${slug}"][0]` });
            let hotelData = await getData({ query: `*[_type == "hotel"]` });
            setCountry(data);
            setHotels(hotelData)
        };
        fetchData();
    }, [slug]);

    let countryId = country?._id;
    let countryHotels = hotels ? hotels.filter(hotel => hotel.country?._ref === countryId) : [];

    return (
        <Section custom={"lg:gap-24 gap-12"}>
            {
                country && (
                    <>
                        <Hero images={country.headerImages} />

                        <div className='w-full xl:w-full max-w-3xl px-6 md:px-8 mx-auto flex flex-col gap-12 lg:gap-24'>
                            <DestinationDescription title={country.title} description={country.description} />
                            <HotelsDestinations countryHotels={countryHotels} country={country.title} />
                        </div>
                    </>
                )
            }
        </Section>
    );
}

export default Destination;
