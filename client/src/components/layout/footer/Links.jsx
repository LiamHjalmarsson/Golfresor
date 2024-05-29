import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <div className=''>
            <h2 className="mb-2 text-sm lg:text-base font-semibold uppercase ">
                Länkar
            </h2>
            <ul className="text-xs lg:text-sm">
                <li className="mb-4 lg:mb-2">
                    <NavLink to="/destinationer">
                        Destinationer
                    </NavLink>
                </li>
                <li className="mb-4 lg:mb-2">
                    <NavLink to="/omoss">
                        Om oss
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Links;
