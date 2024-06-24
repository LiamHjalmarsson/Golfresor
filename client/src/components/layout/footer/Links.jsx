import React from 'react';
import Link from './Link';

const Links = ({ links }) => {
    return (
        <div className='p-4'>
            <h2 className="mb-2 text-base font-semibold uppercase ">
                Länkar
            </h2>
            <ul className="text-sm">
                {
                    links.map((link, index) => (
                        <Link key={index} link={link} />
                    ))
                }
            </ul>
        </div>
    );
}

export default Links;
