import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Links from './Links';
import BurgerMenu from './BurgerMenu';
import { FaSearch } from 'react-icons/fa';
import Search from './Search';
import useFetch from '../../../hooks/useFetch';

const Header = () => {
    let [search, setSearch] = useState(false);
    let [searchTerm, setSearchTerm] = useState("");
    let [open, setOpen] = useState(false);

    let { data: countries } = useFetch(`*[_type == "country"]`);

    let searchHandler = () => {
        setSearch(!search);
        setSearchTerm("");
        setOpen(false);
    }

    let handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    let onClickClose = () => {
        setSearch(false);
        setSearchTerm("");
    }

    let burgerMenu = () => {
        setSearch(false);
        setOpen(!open);
    }

    return (
        <header className='w-full relative z-50'>
            <nav className='flex h-32 overflow-hidden w-full items-center px-4 lg:px-10 transition duration-300 justify-between relative text-primary'>

                <NavLink to="/" className="w-full lg:w-48 order-2 lg:order-1 z-10">
                    <h1 className="text-2xl tracking-wide md:text-4xl font-bold max-lg:text-center">
                        Golfresor
                    </h1>
                </NavLink>

                <Links />

                <div className="flex items-center justify-end z-20 order-3 p-4 cursor-pointer" onClick={searchHandler}>
                    <FaSearch className={`text-xl font-bold `} />
                </div>

                <BurgerMenu menuHandler={burgerMenu} open={open} />
            </nav>

            <Search
                open={search}
                countries={countries}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                close={onClickClose}
            />
        </header>
    );
}

export default Header;
