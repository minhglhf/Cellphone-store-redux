import React, { useState } from 'react';
import CartItem from "./CartItem";
import './CartContainer.css';
import CartItems from "../cart-items";
import Footer from './Footer';
import Search from './Search'

const CartContainer = () => {
  const [brand, setBrand] = useState('All');
  const [search, setSearch] = useState('');

  console.log(search)
  const handleChange = (e) => {
    setBrand(e.target.value);

  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
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
            />

          </div>

          <article >

            {
              (brand === 'All') ? (
                CartItems.map(item => {
                  if (item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                    return (
                      <CartItem key={item.id} {...item} />
                    );
                  }
                  return null;
                })
              ) : (
                  CartItems.map(item => {
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
      <Footer />
    </>
  );
};

export default CartContainer;
