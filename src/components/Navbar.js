import React, { useEffect } from "react";
import { connect } from "react-redux";
import './Navbar.css';
import './SidebarCartItem.css';
import './SidebarMenu.css';
import SidebarCartItem from "./SidebarCartItem";
import { GET_TOTALS } from "../actions";
import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineMenu } from 'react-icons/ai';
import SidebarMenu from "./SidebarMenu";

const Navbar = ({ cart, total, isOpenSidebar, openCart, getTotals, openMenu, isOpenMenu }) => {

  console.log(cart);

  useEffect(() => {
    getTotals();
  });

  return (
    <div className="nav">
      <div className="nav-center">
        <div className="nav-container" onClick={openMenu}>
          <AiOutlineMenu className='cart-icon' />
        </div>

        <div>
          <h3 className="cellphone">CellPhone</h3>
        </div>

        <div className="nav-container" onClick={openCart}>
          <TiShoppingCart className='cart-icon' />
        </div>

      </div>

      {
        isOpenMenu &&
        <div  className="sidebar-menu" >
          <SidebarMenu />
        </div>
      }

      {
        isOpenSidebar &&
        <div id="sidebar" className="sidebar" >

          <h2 className="cart-lists">Cart lists</h2>
          {console.log(cart)}

          <div className="sidebar-item-container">
            {

              cart.map(item => {
                return (
                  <SidebarCartItem key={item.id} {...item} />
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
  const { cart, total, isOpenSidebar, isOpenMenu } = store;
  return { cart, total, isOpenSidebar, isOpenMenu };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openCart: () => dispatch({ type: "OPEN_CART" }),
    openMenu: () => dispatch({ type: "OPEN_MENU" }),
    getTotals: () => dispatch({ type: GET_TOTALS })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
