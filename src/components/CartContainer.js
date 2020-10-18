import React, { useState } from 'react';
import CartItem from "./CartItem";
import './CartContainer.css';
import CartItems from "../cart-items";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from './Search'

const CartContainer = () => {
  const [brand, setBrand] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('low to high');


  const handleChange = (e) => {
    setBrand(e.target.value);
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleChangeSort = (e) => {
    setSort(e.target.value);
  }

  const handleSort = (a, b) => {
    if(sort==="low to high"){
      return a - b;
    }
    if(sort==="high to low"){
      return b - a;
    }
  }

  return (
    <>
      <Navbar />
      <section className="cart-container">
        <div className="cart-child-container">

          <header>
            <div className="cover-image">
              <img src="/images/p4.jpg" alt="phone" style={{
                width: "100vw", height: "30rem", objectFit: "cover", margin: "0",
                borderTop: "3px #68bbeb solid", zIndex: "-999"
              }} />
            </div>
            <h1 style={{ marginTop: "2rem" }}>Products</h1>
          </header>

          <div className="search-area">
            <Search brand={brand} handleChange={handleChange}
              search={search} handleChangeSearch={handleChangeSearch}
              sort={sort} handleChangeSort={handleChangeSort}
            />

          </div>

          <article >

            {
        
              (brand === 'All') ? (
                CartItems.sort((a, b) => handleSort(a.price, b.price)).map(item => {
                  if (item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                    return (
                      <CartItem key={item.id} {...item} id={item.id}/>
                    );
                  }
                  return null;
                })

              ) : (
         
                  CartItems.sort((a, b) => handleSort(a.price, b.price)).map(item => {
                    if (item.brand === brand && item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                      return (
                        <CartItem key={item.id} {...item} />
                      );
                    }
                    return null;
                  })
                ) 
            }
          </article>


        </div>

      </section>
      <footer>
        <Footer />
      </footer>
      
    </>
  );
};

export default CartContainer;
