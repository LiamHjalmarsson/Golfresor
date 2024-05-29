import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Heading from '../heading/Heading';
import Favorites from './components/Favorites';
import Button from '../elements/Button';

const Hotels = ({ title, subTitle }) => {
    let [displayLimit, setDisplayLimit] = useState(4);
    let { pathname } = useLocation();
    let { data } = useFetch(pathname !== ("/") ? '*[_type == "hotel"]' : '*[_type == "hotel" && popular == true]');

    let handleShowMore = () => {
        setDisplayLimit(prevLimit => prevLimit + 4);
    };

    return (
        <div className='flex flex-col gap-12'>
            <div className="px-4 text-center">
                <Heading subTitle={subTitle} title={title} />
            </div>

            {
                // data && <Favorites data={data} path="hotels/" />
            }


            {
                data && displayLimit < data.length && (
                    <div className="flex justify-center mt-6">
                        <Button onClick={handleShowMore}>
                            Visa fler
                        </Button>
                    </div>
                )
            }
        </div>
    );
}

export default Hotels;
