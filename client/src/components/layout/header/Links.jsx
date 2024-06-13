import React from 'react';
import Link from './Link';

const Links = ({ links, open, openHandler }) => {
    return (
        <>
            <ul className="hidden absolute justify-center items-center w-full gap-8 flex-grow lg:flex order-2">
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link
                                link={link}
                            />
                        </li>
                    ))
                }
            </ul>

            <div className={`${open ? "translate-x-0" : "-translate-x-full"} transition duration-300 lg:hidden fixed h-full w-full top-32 right-0 bg-stone-100`}>
                <ul className={`flex flex-col justify-between items-center`}>
                    {
                        links.map((link, index) => (
                            <li key={index} className='p-8 cursor-pointer w-full text-center' onClick={openHandler}>
                                <Link
                                    link={link}
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
