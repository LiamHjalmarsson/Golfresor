import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import HotelForm from './HotelForm';
import ContactForm from './ContactForm';

const Forms = ({ close }) => {
    let { pathname } = useLocation();
    let [loading, setLoading] = useState(false);

    let form = useRef();

    let key = !pathname.includes("hotels") ? "template_36jjczr" : "template_qtj543b";

    let sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        await emailjs.sendForm('service_bx2imh9', key, form.current, 'mcrKYJtLl9odWjGFq');

        form.current.reset();

        setLoading(false);
        close();
    };


    if (!pathname.includes("hotels")) {
        return (
            <ContactForm formRef={form} sendEmail={sendEmail} close={close} loading={loading} />
        );
    }
    
    return (
        <HotelForm formRef={form} sendEmail={sendEmail} close={close} loading={loading} />
    )
}

export default Forms;
