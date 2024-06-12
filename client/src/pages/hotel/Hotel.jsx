import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../components/layout/section/Section';
import useFetch from '../../hooks/useFetch';
import ImagesDisplay from './components/ImagesDisplay';
import HotelDetails from './components/HotelDetails';
import Icons from './components/Icons';
import DetailCards from './components/DetailCards';
import Deal from './components/Deal';

const Hotel = () => {
    let { slug } = useParams();
    let { data } = useFetch(`*[_type == "hotel" && slug.current == "${slug}"][0]`);
    let [selectedImage, setSelectedImage] = useState(null);

    let handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <Section custom={"lg:gap-24 gap-12"}>
            {
                data && (
                    <>
                        <div className="flex w-full max-w-7xl relative flex-col lg:flex-row gap-6 lg:gap-12 mx-auto lg:px-12 lg:mt-24">
                            <ImagesDisplay
                                selectedImage={selectedImage}
                                handleImageClick={handleImageClick}
                                images={data?.images}
                                deal={data?.deal}
                            />

                            <HotelDetails
                                subTitle={data.subTitle}
                                title={data.title}
                                iconWithText={data.iconWithText}
                                nights={data.nights}
                                price={data.price}
                                deal={data.deal}
                                description={data.description}
                            />
                        </div>

                        {
                            data.deal && <Deal deal={data.deal} /> 
                        }

                        {
                            data.detailIcons && <Icons icons={data.detailIcons} />
                        }

                        <DetailCards cards={data.textBoxes} />
                    </>
                )
            }
        </Section>
    );
}

export default Hotel;
