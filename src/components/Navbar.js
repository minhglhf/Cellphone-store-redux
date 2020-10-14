import React from "react";
import { connect } from "react-redux";
import './Navbar.css';
import { TiShoppingCart } from 'react-icons/ti'
const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-center">
        <div>
          <h3>CellPhone</h3>
        </div>
        
        <div className="nav-container">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg> */}
          <TiShoppingCart className='cart-icon' />
          {/* <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div> */}
        </div>
      </div>
      <div>
        <img src="/images/p4.jpg" alt="phone" style={{width: "100vw", height: "30rem", objectFit: "cover", margin: "0",
        borderTop: "3px #68bbeb solid"}}/>
      </div>
    </nav>
  );
};
const mapStateToProps = store => {
  return { amount: store.amount };
};
export default connect(mapStateToProps)(Navbar);
