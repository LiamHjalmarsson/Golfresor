import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import { Outlet } from 'react-router-dom';
import Model from '../components/model/Model';
import { useState } from 'react';

const Root = () => {
    let [isModalOpen, setIsModalOpen] = useState(false);

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
