import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../components/layout/section/Section';
import useFetch from '../../hooks/useFetch';
import ImagesDisplay from './components/ImagesDisplay';
import HotelDetails from './components/HotelDetails';
import Icons from './components/Icons';
import DetailCards from './components/DetailCards';

const Hotel = () => {
    let { slug } = useParams();
    let { data } = useFetch(`*[_type == "hotel" && slug.current == "${slug}"][0]`);
    let [selectedImage, setSelectedImage] = useState(null);

    let handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <Section>
            {
                data && (
                    <>
                        <div className="flex w-full max-w-7xl relative flex-col lg:flex-row gap-6 lg:gap-12 mx-auto lg:px-12">
                            <ImagesDisplay
                                selectedImage={selectedImage}
                                handleImageClick={handleImageClick}
                                images={data?.images}
                            />

                            <HotelDetails
                                subTitle={data.subTitle}
                                title={data.title}
                                iconWithText={data.iconWithText}
                                nights={data.nights}
                                price={data.price}
                                description={data.description}

                            />
                        </div>

                        <Icons icons={data.detailIcons} />

                        <DetailCards cards={data.textBoxes} />
                    </>
                )
            }
        </Section>
    );
}

export default Hotel;
