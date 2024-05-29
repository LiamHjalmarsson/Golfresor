import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ href, name, click }) => {
    let { pathname } = useLocation();

    return (
        <NavLink
            to={`/${href}`}
            onClick={click ? click : () => {}}
            className={`${href === pathname.slice(1) ? "text-orange border-b border-b-orange" : ""} hover:border-b text-lg lg:text-xl tracking-wider transition-colors duration-300`}
        >
            {name}
        </NavLink>
    );
}

export default Link;