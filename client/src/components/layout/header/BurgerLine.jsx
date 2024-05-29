import React from 'react';

const BurgerLine = ({ custom }) => {
    return (
        <span className={`block bg-primary h-1 w-6 mb-0.5 rounded-full transition-transform duration-300 ease-in-out ${custom}`}></span>
    );
}

export default BurgerLine;
