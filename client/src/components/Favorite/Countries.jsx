import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Heading from '../heading/Heading';
import Favorites from './components/Favorites';

const Countries = ({ subTitle, title, text }) => {
    let { pathname } = useLocation();

    let { data } = useFetch(pathname !== ("/") ? '*[_type == "country"]' : '*[_type == "country" && popular == true]');

    return (
        <div className='flex flex-col gap-12'>
            <div className="px-4 text-center">
                <Heading subTitle={subTitle} title={title} />
                <p className='mt-4'>
                    {text}
                </p>
            </div>
    
            {
                data && <Favorites data={data} path="destinationer/" />
            }

        </div>
    );
}

export default Countries;
