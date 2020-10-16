import  React from 'react';
import './SearchDropDown.css'

const SearchDropDown = ({brand, handleChange}) => {
    return (
        <div className="styled-select">
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

export default SearchDropDown;