import React from 'react';
import Link from './Link';

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
    return (
        <>
            <ul className="hidden absolute justify-center items-center w-full gap-8 flex-grow lg:flex order-2">
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                name={link.name}
                            />
                        </li>
                    ))
                }
            </ul>

            <div className={`${open ? "translate-x-0" : "-translate-x-full"} transition duration-300 lg:hidden fixed h-full w-full top-28 right-0 `}>
                <ul className={`flex flex-col justify-between items-center`}>
                    {
                        links.map((link, index) => (
                            <li key={index} className='p-8 cursor-pointer w-full text-center'>
                                <Link
                                    href={link.href}
                                    name={link.name}
                                    click={openHandler}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default Links;
