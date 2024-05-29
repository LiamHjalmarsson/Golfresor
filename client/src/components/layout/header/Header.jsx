import React from 'react';
import { NavLink } from 'react-router-dom';
import Links from './Links';

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
            <nav className='flex h-24 lg:h-32 overflow-hidden w-full items-center px-4 lg:px-10 transition duration-300 justify-between relative text-primary'>

                <NavLink to="/" className="w-full lg:w-48 order-2 lg:order-1 z-10">
                    <h1 className="text-2xl tracking-wide md:text-4xl font-bold max-lg:text-center">
                        Golfresor
                    </h1>
                </NavLink>

                <Links />
            </nav>
        </header>
    );
}

export default Header;
