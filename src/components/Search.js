import React from 'react';
import './Search.css'

const Search = ({ brand,search, handleChange, handleSubmit, handleChangeSearch }) => {
    
    return (


        <div className="styled-select">
            <form  onSubmit={handleSubmit}>
                <div className="brands-search">
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" placeholder="search" name="search" value={search}
                        onChange={handleChangeSearch}
                    />
                </div>
            </form>

            <div className="brands-search">
                <label htmlFor="brands">Brands: </label>
                <select id="brands" value={brand} onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Vsmart">Vsmart</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Nokia">Nokia</option>
                </select>
            </div>

        </div>
    );

}

export default Search;