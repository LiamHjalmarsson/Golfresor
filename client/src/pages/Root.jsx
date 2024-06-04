import React, { useEffect } from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Model from '../components/model/Model';
import { useState } from 'react';

const Root = () => {
    let location = useLocation();
    let [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    let handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Model open={isModalOpen} close={handleModal} />
            <div className='text-primary bg-stone-100'>
                <Header />

                <main className='min-h-[75vh]'>
                    <Outlet context={{ handleModal }} />
                </main>

                <Footer />
            </div>

        </>
    );
}

export default Root;
