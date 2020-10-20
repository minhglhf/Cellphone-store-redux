import React from "react";
import { connect } from "react-redux";
import './CartItem.css';
import { Link } from 'react-router-dom';
import {
  ADD_TO_LIST
} from "../actions";



const CartItem = ({
  img,
  title,
  price,
  toggle,
  addList,
  dispatch,
  id,
}) => {


  return (
    <div className="cart-item">
      <div className="iteminfo">
        <img src={img} alt={title} />
        <div className="cart-item-info">
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
        </div>

      </div>

      <div className="overlay">
        <div className="but">
          <Link to={`/detail/${id}`}  >
            <button className="btn">View detail</button>
          </Link>
          
          
        </div>
        <div className="but">
          <button className="btn" onClick={() => addList()}>add to cart</button>
        </div>

      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  

  return {
    addList: () => dispatch({ type: ADD_TO_LIST, payload: { id } }),
  };
};



export default connect(null, mapDispatchToProps)(CartItem);


