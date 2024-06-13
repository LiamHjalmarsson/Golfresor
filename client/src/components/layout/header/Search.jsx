import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import SearchResult from './SearchResults';


const Search = ({ open, countries, searchTerm, handleSearch, close, clear }) => {
    let filteredCountries = countries ? countries.filter(country => country.title.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    return (
        <div className="absolute md:top-32 w-full flex justify-center items-center flex-col">

            <div className={`${open ? "translate-x-0" : "-translate-x-[400%]"} top-0 md:top-8 max-w-xl w-full shadow-lg absolute md:rounded-md transition-transform duration-300 bg-white bg-opacity-90`}>
                <div className="flex justify-center items-center px-4">
                    <FaSearch/>
                    <input type="search" id="default-search" className="w-full p-4 pl-8 bg-transparent outline-none" onChange={handleSearch} value={searchTerm} />
                    {
                        searchTerm !== "" && <MdClose className="font-bold text-xl" onClick={clear}/>
                    }
                </div>
            </div>

            {
                searchTerm && <SearchResult countries={filteredCountries} close={close} />
            }

        </div>
    );
}


export default Search;
