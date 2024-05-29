import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='text-primary bg-stone-200'>
            <Header />

            <main className='min-h-[75vh]'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Root;
