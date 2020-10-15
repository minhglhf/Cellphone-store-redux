import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import './Navbar.css';
import './SidebarCartItem.css'
import SidebarCartItem from "./SidebarCartItem";
import { GET_TOTALS } from "../actions";
import { TiShoppingCart } from 'react-icons/ti';

const Navbar = ({  cart, total, dispatch }) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  console.log(cart);

  useEffect(() => {
    dispatch({ type: GET_TOTALS });

  }, [cart, dispatch]);

  return (
    <div className="nav">
      <div className="nav-center">
        <div>
          <h3 className="cellphone">CellPhone</h3>
        </div>

        <div className="nav-container" onClick={() => setIsOpenNavbar(!isOpenNavbar)}>
          <TiShoppingCart className='cart-icon'  />
        </div>

      </div>

      {
        (isOpenNavbar) ? (
          <div id="sidebar" className="sidebar" >

            <h2 className="cart-lists">Cart lists</h2>
            {console.log(cart)}

            <div className="sidebar-item-container">
              {

                cart.map(item => {
                  return (
                    <SidebarCartItem  key={item.id} {...item} />
                  )
                })
              }
            </div>



            <h2 className="total">Total: ${total}</h2>
          </div>
        ) : (null)
      }

    </div>
  );
};


const mapStateToProps = store => {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(Navbar);
