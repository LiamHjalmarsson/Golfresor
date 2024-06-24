import React from 'react';
import Button from '../../../components/elements/Button';
import { useOutletContext } from 'react-router-dom';

const Deal = ({ deal }) => {
    let { handleModal } = useOutletContext();

    return (
        <div className='text-center my-4 bg-orange bg-opacity-20 p-8'>
            <h2 className='text-xl font-semibold'>
                {deal.rubrik}
            </h2>
            <div className='my-4 text-lg'>
                <p className='mb-2'>
                    {deal.description}
                </p>
                <p>
                    Spara {deal.price}
                </p>
            </div>
            <Button onClick={handleModal}>
                Kontakta oss
            </Button>
        </div>
    );
}

export default Deal;
