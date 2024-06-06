import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, children, type }) => {
    return (
        <Link to={path}
            type={type ? type : "button"}
            className='text-center text-lg lg:text-xl w-fit font-bold text-stone-50 py-4 px-12 lg:px-8 bg-green tracking-wide duration-300 transition rounded-md hover:bg-opacity-90'
        >
            {children}
        </Link>
    );
}

export default LinkButton;
