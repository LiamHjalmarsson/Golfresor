import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link }) => {
    let url = link.internalLink.title === "Hem" ? "" : link.internalLink.title.replace(/\s+/g, '').toLowerCase();

    return (
        <li className='mb-4 lg:mb-2'>
            <NavLink to={`/${url}`}>
                {link.title}
            </NavLink>
        </li>
    );
}

export default Link;
