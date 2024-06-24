import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Heading from '../heading/Heading';
import Favorites from './components/Favorites';

const Hotels = ({ title, subTitle, text }) => {
    let { pathname } = useLocation();
    let { data } = useFetch(pathname !== ("/") ? '*[_type == "hotel"]' : '*[_type == "hotel" && popular == true]');

    return (
        <div className='flex flex-col gap-12 px-4 lg:px-12'>
            <div className="text-center">
                <Heading subTitle={subTitle} title={title} />
                <p className='mt-4'>
                    {text}
                </p>
            </div>

            {
                data && <Favorites data={data} path="hotels/" />
            }
        </div>
    );
}

export default Hotels;
