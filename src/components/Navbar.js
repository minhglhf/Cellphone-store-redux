import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import './Navbar.css';
import { TiShoppingCart } from 'react-icons/ti';
import CartItem from "./CartItem";
const Navbar = ({ amount, cart, total, price }) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  console.log(cart);
  useEffect(() => {
    console.log('effected');
    // if(isOpenNavbar){
    //   document.getElementById("sidebar").style.display = "block"
    // }
    // else{
    //   document.getElementById("sidebar").style.display = "none"
    // }
  }, [isOpenNavbar])

  return (
    <div className="nav">
      <div className="nav-center">
        <div>
          <h3 className="cellphone">CellPhone</h3>
        </div>

        <div className="nav-container">
          <TiShoppingCart className='cart-icon' onClick={() => setIsOpenNavbar(!isOpenNavbar)} />
          {/* <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div> */}
        </div>

      </div>

      <div id="sidebar" className="sidebar">
        {/* <div className="sidebar-item"> */}
        <h2 >Cart lists</h2>
        {cart.map(item => {
          return (
            <div className="sidebar-item" key={item.id} {...item}>
              <div>
                <img src={item.img} alt="item" style={{ width: "3rem", height: "3rem" }} />
                <h3 style={{ marginTop: ".5rem" }}>{item.title}</h3>
                <h4 style={{ color: "#5fb7ea" }}>Price: ${item.price}</h4>
              </div>

              <div>
                <button className="amount-btn" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                  </svg>
                </button>
                <p className="amount">{item.amount}</p>
                <button
                  className="amount-btn" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

              </div>
            </div>
          );
        })}
        <h2 style={{ paddingBottom: "2rem" }}>Total money: ${total}</h2>
      </div>
    </div>
  );
};
const mapStateToProps = store => {
  return { amount: store.amount, cart: store.cart, total: store.total, price: store.price };
};
export default connect(mapStateToProps)(Navbar);
