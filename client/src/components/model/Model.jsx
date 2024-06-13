import React, { useRef } from 'react';
import { MdClose } from "react-icons/md";
import Forms from './Forms';
import { useParams } from 'react-router-dom';

const Model = ({ open, close }) => {
    let modalRef = useRef(null);
    let { slug } = useParams();

    let handleCloseModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            close();
        }
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-primary bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                    <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-4 lg:p-8 w-full max-w-md lg:max-w-3xl flex flex-col relative overflow-y-auto">
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <h2 className="text-2xl font-bold">
                                    Kontakta oss
                                </h2>
                                <button className="text-xl" onClick={close}>
                                    <MdClose />
                                </button>
                            </div>
                            <h4>
                                {slug}
                            </h4>
                        </div>
                        
                        <Forms close={close} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Model;
