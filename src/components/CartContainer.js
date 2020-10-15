import React from 'react';
import CartItem from "./CartItem";
import './CartContainer.css';
import CartItems from "../cart-items";
const CartContainer = ({ cart = [] }) => {
  
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
            <h1 style={{marginTop: "2rem"}}>Products</h1>
          </header>

          <article >
           
            {CartItems.map(item => {
              return <CartItem key={item.id} {...item} />;
            })}
          </article>

          <footer>
            
          </footer>
        </div>

      </section>

    </>
  );
};

export default CartContainer;
