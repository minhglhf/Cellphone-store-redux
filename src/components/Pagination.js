import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(totalItems);
    console.log(itemsPerPage);
    console.log(pageNumbers);
    return (
        <div className="pagination">
            {pageNumbers.map(number => {
                return (
                    <div key={number} className="page">
                        <button onClick={() => { paginate(number) }}>
                            {number}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Pagination;