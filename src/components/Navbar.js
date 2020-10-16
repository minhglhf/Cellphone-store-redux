import React, {  useEffect } from "react";
import { connect } from "react-redux";
import './Navbar.css';
import './SidebarCartItem.css'
import SidebarCartItem from "./SidebarCartItem";
import { GET_TOTALS } from "../actions";
import { TiShoppingCart } from 'react-icons/ti';

const Navbar = ({  cart, total, isOpenSidebar, openCart, getTotals }) => {

  console.log(cart);

  useEffect(() => {
    getTotals();
  });

  return (
    <div className="nav">
      <div className="nav-center">
        <div>
          <h3 className="cellphone">CellPhone</h3>
        </div>

        <div className="nav-container" onClick={openCart}>
          <TiShoppingCart className='cart-icon'  />
        </div>

      </div>

      {
        isOpenSidebar &&
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
      
      }

    </div>
  );
};


const mapStateToProps = store => {
  const { cart, total ,isOpenSidebar} = store;
  return { cart, total ,isOpenSidebar};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      openCart: () => dispatch({type: "OPEN_CART"}),
      getTotals: () => dispatch({ type: GET_TOTALS })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
