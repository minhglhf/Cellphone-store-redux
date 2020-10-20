import React from 'react';
import './Search.css';
import { connect } from "react-redux";
const Search = ({ brand, search, handleChangeBrand, handleChangeSearch, sort, handleChangeSort }) => {

    return (

        <div className="styled-select">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="brands-search">
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" placeholder="search" name="search" value={search}
                        onChange={(e) => handleChangeSearch(e.target.value)}
                    />
                </div>
            </form>

            <div className="brands-search">
                <label htmlFor="brands">Brands: </label>
                <select id="brands" value={brand} onChange={(e) => handleChangeBrand(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Vsmart">Vsmart</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Nokia">Nokia</option>
                </select>
            </div>

            <div className="brands-search">
                <label htmlFor="sort">Sort by: </label>
                <select id="sort" value={sort} onChange={(e) => handleChangeSort(e.target.value)}>
                    <option value="low to high">low to high</option>
                    <option value="high to low">high to low</option>
                </select>
            </div>

        </div>
    );

}

const mapStateToProps = store => {
    const { brand, search, sort } = store;
    return { brand, search, sort };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChangeBrand: (brand) => dispatch({ type: "CHANGE_BRAND", payload: {brand} }),
        handleChangeSearch: (search) => dispatch({ type: "CHANGE_SEARCH" , payload: {search}}),
        handleChangeSort: (sort) => dispatch({ type: "CHANGE_SORT", payload: {sort} })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);