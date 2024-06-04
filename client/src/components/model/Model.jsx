import React, { useRef } from 'react';
import { MdClose } from "react-icons/md";
import Form from './Form';

const Model = ({ open, close }) => {
    let modalRef = useRef(null);

    let handleCloseModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            close();
        }
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-primary bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>

                    <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                        <div className='flex justify-between mb-4'>
                            <h2 className="text-2xl font-bold">
                                Kontakta oss
                            </h2>
                            <button className="text-xl" onClick={close}>
                                <MdClose />
                            </button>
                        </div>

                        <Form close={close} />

                    </div>
                    
                </div>
            )}
        </>
    );
};

export default Model;
