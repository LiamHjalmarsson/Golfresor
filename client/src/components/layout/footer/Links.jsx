import React from 'react';
import Link from './Link';

const Links = ({ links }) => {
    return (
        <div className='p-4'>
            <h2 className="mb-2 text-sm lg:text-base font-semibold uppercase ">
                Länkar
            </h2>
            <ul className="text-xs lg:text-sm">
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
