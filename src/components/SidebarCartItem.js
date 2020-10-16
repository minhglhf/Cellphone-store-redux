import React from "react";
import { connect } from "react-redux";
import {
    INCREASE,
    DECREASE,
    TOGGLE_AMOUNT,
    removeItem
} from "../actions";
import './SidebarCartItem.css';
import {
    FaRegTrashAlt
} from 'react-icons/fa';
const SidebarCartItem = ({
    img,
    title,
    price,
    amount,
    remove,
    toggle
}) => {
    // if (cart.length === 0) {
    //     return (
    //       <section className="cart">
    //         {/* cart header */}
    //         <header>
    //           <h2>your bag</h2>
    //           <h4 className="empty-cart">is currently empty</h4>
    //         </header>
    //       </section>
    //     );
    //   }
    return (
        <div className="sidebar-item">
            <div>
                <img src={img} alt="item" style={{ width: "3rem", height: "3rem" }} />
                <h3 style={{ marginTop: ".5rem" }}>{title}</h3>
                <h4 style={{ color: "#5fb7ea" }}>Price: ${price}</h4>
            </div>



            <div>

                <div className="delete">
                    <FaRegTrashAlt style={{ fontSize: "1.5rem", color: "#5fb7ea", cursor: "pointer" }} onClick={() => remove()} />
                </div>
                <button className="amount-btn" onClick={() => toggle("inc")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                    </svg>
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="amount-btn"
                    onClick={() => {
                        if (amount === 1) {
                            return remove();
                        } else {
                            return toggle("dec");
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>

                </button>

            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id, amount } = ownProps;

    return {
        remove: () => dispatch(removeItem(id)),
        increase: () => dispatch({ type: INCREASE, payload: { id } }),
        decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
        toggle: (toggle) => dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } })
    };
};


export default connect(null, mapDispatchToProps)(SidebarCartItem);
