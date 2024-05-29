import React from 'react';
import BurgerLine from './BurgerLine';

const BurgerMenu = ({ menuHandler, open }) => {
    return (
        <>
            <div className="flex lg:hidden relative items-center justify-end z-20 order-1">
                <div className="flex p-4 cursor-pointer" onClick={menuHandler}>
                    <div className={`h-6 text-2xl w-full transition-all duration-300 overflow-hidden flex flex-col justify-center`}>
                        <BurgerLine custom={`top-0 ${open ? 'rotate-45 translate-y-2' : "rotate-0"}`} />
                        <BurgerLine custom={`top-1/2 ${open ? '-translate-x-full' : "translate-x-0"}`} />
                        <BurgerLine custom={`top-full ${open ? '-rotate-45 -translate-y-1' : "rotate-0"}`} />
                    </div>
                </div>
            </div>
        </>
    );
}


export default BurgerMenu;
