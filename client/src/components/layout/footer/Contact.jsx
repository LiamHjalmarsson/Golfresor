import React from 'react';

const Contact = ({ contact }) => {
    return (
        <div className='p-4'>
            <h2 className="mb-2 text-sm lg:text-base font-semibold uppercase ">
                Kontakta
            </h2>
            <ul className="text-xs lg:text-sm mt-2">
                <li className="mb-4 lg:mb-2">
                    <a href={`tel:${contact.phone}`}>
                        Telefon: {contact.phone}
                    </a>
                </li>
                <li className="mb-4 lg:mb-2">
                    <a href={`mailto:${contact.email}`}>
                        E-mail: {contact.email}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
