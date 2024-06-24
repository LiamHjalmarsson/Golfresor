import path from 'path';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ link }) => {
    let { pathname } = useLocation();

    let url = link.internalLink.title === "Hem" ? "" : link.internalLink.title.replace(/\s+/g, '').toLowerCase();

    return (
        <NavLink
            to={`/${url}`}
            className={`${url === pathname.slice(1) ? "text-orange border-b border-primary" : ""} hover:border-b hover:border-stone-300 text-primary text-lg lg:text-xl tracking-wider transition-colors duration-300`}
        >
            {link.title}
        </NavLink>
    );
}

export default Link;
