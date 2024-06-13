import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Links from './Links';
import BurgerMenu from './BurgerMenu';
import { FaSearch } from 'react-icons/fa';
import Search from './Search';
import useFetch from '../../../hooks/useFetch';
import Logo from '../logo/Logo';

const Header = () => {
    let [search, setSearch] = useState(false);
    let [searchTerm, setSearchTerm] = useState("");
    let [open, setOpen] = useState(false);
    let { pathname } = useLocation();

    let { data } = useFetch(`*[_type == "country"]`);
    let { data: navigation } = useFetch(`*[_type == "navigation" && title == "Navigation"]{
        title,
        logo,
        links[]{
            title,
            linkType,
            internalLink->{
                title,
                "slug": slug.current
            },
        }
    }`);

    useEffect(() => {
        setSearch(false);
        setOpen(false);
    }, [pathname]);

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
        <header className='w-full relative z-40'>
            <nav className='flex h-32 w-full items-center px-4 lg:px-10 transition duration-300 justify-between relative overflow-hidden'>

                <NavLink to="/" className="w-full lg:w-48 order-2 lg:order-1 z-10 relative">
                    {navigation && <Logo logo={navigation[0].logo} />}
                </NavLink>

                {
                    navigation && <Links links={navigation[0].links} open={open} openHandler={() => { setOpen(false) }} />
                }

                <div className="flex items-center justify-end z-20 order-3 p-4 cursor-pointer" onClick={searchHandler}>
                    <FaSearch className={`text-xl font-bold `} />
                </div>

                <BurgerMenu menuHandler={burgerMenu} open={open} />
            </nav>

            <Search
                open={search}
                countries={data}
                handleSearch={handleSearch}
                searchTerm={searchTerm}
                close={onClickClose}
                clear={() => setSearchTerm("")}
            />
        </header>
    );
}

export default Header;
