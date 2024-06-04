import React from 'react';

const Button = ({ children, onClick, type }) => {
    return (
        <button
            type={type ? type : "button"}
            onClick={onClick ? onClick : () => { }}
            className='text-center text-lg lg:text-xl w-fit font-bold text-primary py-4 px-12 lg:px-8 bg-green tracking-wide duration-300 transition rounded-md hover:bg-opacity-90'
        >
            {children}
        </button>
    );
}

export default Button;
