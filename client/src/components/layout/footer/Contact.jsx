import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <h2 className="mb-2 text-sm lg:text-base font-semibold uppercase ">
                Kontakta
            </h2>
            <ul className="text-xs lg:text-sm">
                <li className="mb-2">
                    <a href="tel:">
                        Telefon: +46767675775
                    </a>
                </li>
                <li className="mb-2">
                    <a href='mailto:'>
                        E-mail: liam.hjalmarssons@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
