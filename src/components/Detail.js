import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { connect } from "react-redux";
import './Detail.css';
import { useParams } from 'react-router-dom';
import CartItems from '../cart-items';
import {
    ADD_TO_LIST
} from "../actions";
const Detail = ({addList}) => {

    const { id } = useParams();
    const obj = CartItems.filter((cartItem) => {
        return cartItem.id === parseInt(id)
    })
    return (
        <>
            <Navbar />
            <div className="detail-container" style={{
                backgroundImage: "url(/images/d.png)", backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="detail">
                    <div className="image">
                        <img src={obj[0].img} alt="detailImage" />
                    </div>

                    <div className="info">
                        <h1 className="namee">{obj[0].title}</h1>
                        <h3 className="price">${obj[0].price}</h3>
                        <h4 className="introduce">Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Vitae asperiores accusantium aut. Reprehenderit,
                        facere quibusdam sunt minima aliquam odit laudantium
                        sint dignissimos voluptates tempore non consectetur.
                        Facere eos iusto illoLor
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Vitae asperiores accusantium aut. Reprehenderit,
                        facere quibusdam sunt minima aliquam odit laudantium
                        sint dignissimos voluptates tempore non consectetur.
                        Facere eos iusto illoLor
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Vitae asperiores accusantium aut. Reprehenderit,
                        facere quibusdam sunt minima aliquam odit laudantium
                        sint dignissimos voluptates tempore non consectetur.
                        Facere eos iusto illoLor
                        Lorem ipsum dolor sit
                        </h4>

                        <div className="add_cart">
                            <button className="btn-cart" onClick={() => addList(parseInt(id))}>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        addList: (id) => dispatch({ type: ADD_TO_LIST, payload: { id } }),
    };
};



export default connect(null, mapDispatchToProps)(Detail);
