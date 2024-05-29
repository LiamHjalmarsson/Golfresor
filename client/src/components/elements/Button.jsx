import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className='text-center text-base lg:text-lg w-fit text-stone-50 py-4 px-12 lg:px-8 bg-green font-bold tracking-wide duration-300 transition rounded-md'
        >
            {children}
        </button>
    );
}

export default Button;
