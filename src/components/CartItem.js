import React from "react";
import { connect } from "react-redux";
import './CartItem.css';
import {
  TOGGLE_AMOUNT,
  ADD_TO_LIST
} from "../actions";
const CartItem = ({
  img,
  title,
  price,
  toggle,
  addList
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div className="cart-item-info">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
      </div>

      <div className="overlay">
        <div className="but">
          <button className="btn">View detail</button>
        </div>
        <div className="but">
          <button className="btn" onClick={() => addList()}>add to cart</button>
        </div>

      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;

  return {
    addList: () => dispatch({type: ADD_TO_LIST, payload: {id}}),
    toggle: (toggle) => dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } })
    
  };
};

export default connect(null, mapDispatchToProps)(CartItem);


