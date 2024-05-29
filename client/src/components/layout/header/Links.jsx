import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
    {
        name: "Destinationer",
        href: "destinationer"
    },
    {
        name: "Om oss",
        href: "omoss"
    }
];

const Links = ({ open, openHandler }) => {
    let { pathname } = useLocation();

    return (
        <>
            <ul className="hidden absolute justify-center items-center w-full gap-8 flex-grow lg:flex order-2">
                {
                    links.map((link, index) => (
                        <li key={index} className=''>
                            <NavLink to={`/${link.href}`} className={`${link.href === pathname.slice(1) ? "text-orange border-b border-b-orange" : ""} hover:border-b text-xl`}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            <div className={`${open ? "translate-x-0" : "translate-x-full"} transition duration-300 lg:hidden fixed h-full w-full top-24 right-0 bg-white`}>
                <ul className={`flex flex-col justify-between items-center gap-8 pt-4`}>
                    {
                        links.map((link, index) => (
                            <NavLink to={`/${link.href}`} className={`text-center p-4 w-full uppercase text-lg font-bold tracking-wider transition-colors duration-300`} key={index} onClick={openHandler}>
                                {link.name}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Links;
