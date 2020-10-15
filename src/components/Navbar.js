import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import './Navbar.css';
import SidebarCartItem from "./SidebarCartItem";
import { GET_TOTALS } from "../actions";
import { TiShoppingCart } from 'react-icons/ti';

const Navbar = ({ amount, cart, total, dispatch }) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  console.log(cart);
  useEffect(() => {
    // console.log('effected');
    // if(isOpenNavbar){
    //   document.getElementById("sidebar").style.display = "block"
    // }
    // else{
    //   document.getElementById("sidebar").style.display = "none"
    // }
  }, [isOpenNavbar])

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  return (
    <div className="nav">
      <div className="nav-center">
        <div>
          <h3 className="cellphone">CellPhone</h3>
        </div>

        <div className="nav-container">
          <TiShoppingCart className='cart-icon' onClick={() => setIsOpenNavbar(!isOpenNavbar)} />
        </div>

      </div>


      <div id="sidebar" className="sidebar">

        <h2 >Cart lists</h2>
        {console.log(cart)}

        {
          cart.map(item => {
            return (
              <SidebarCartItem key={item.id} {...item} />
            )
          })
          
        }


        <h2 style={{ paddingBottom: "2rem" }}>Total money: ${total}</h2>
      </div>
    </div>
  );
};


const mapStateToProps = store => {
  const { cart, total, amount } = store;
  return { cart, total, amount };
}
export default connect(mapStateToProps)(Navbar);
