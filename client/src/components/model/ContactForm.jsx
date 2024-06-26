import React from 'react';
import InputRow from '../elements/InputRow';
import Button from '../elements/Button';

const ContactForm = ({ formRef, sendEmail, close }) => {
    return (
        <form ref={formRef} onSubmit={sendEmail} className=''>
            <InputRow
                input={{
                    id: "name",
                    name: "name",
                    type: "text",
                }}
            />
            <InputRow
                input={{
                    id: "email",
                    name: "email",
                    type: "email",
                }}
            />
            <InputRow
                input={{
                    id: "message",
                    name: "message",
                    type: "text",
                }}
                msg={true}
            />

            <div className='flex justify-center gap-4 lg:gap-12 w-full mt-8'>
                <button className='text-center text-base lg:text-lg w-fit py-4 px-12 lg:px-8 border-2 border-primary text-primary font-bold tracking-wide rounded-md hover:bg-primary hover:text-stone-50 transition duration-300' onClick={close}>
                    Stäng
                </button>
                <Button type="submit">
                    Skicka
                </Button>
            </div>
        </form>
    );
}

export default ContactForm;
