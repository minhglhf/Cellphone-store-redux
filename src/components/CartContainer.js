import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import { connect } from "react-redux";
import './CartContainer.css';
import CartItems from "../cart-items";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from './Search';
import Pagination from "./Pagination";

const CartContainer = ({ brand, search, sort }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [currentlength, setCurrentLength] = useState(CartItems.length);

  const handleSort = (a, b) => {
    if (sort === "low to high") {
      return a - b;
    }
    if (sort === "high to low") {
      return b - a;
    }
  }

  const [currentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    if (brand === 'All') {
      setCurrentItem(CartItems.slice(indexOfFirstItem, indexOfLastItem));
      setCurrentLength(CartItems.length);
    }
    else {
      setCurrentItem(CartItems.filter((item) => item.brand === brand).slice(indexOfFirstItem, indexOfLastItem));
      setCurrentLength(CartItems.filter((item) => item.brand === brand).slice(indexOfFirstItem, indexOfLastItem).length);
    }
    
  }, [brand, indexOfFirstItem, indexOfLastItem])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [brand])


  // console.log(currentItem);
  // console.log(indexOfLastItem);
  // console.log(indexOfFirstItem);
  // console.log(currentItem.length);
  console.log(currentlength);


  return (

    <>
      <Navbar />
      <section className="cart-container">
        <div className="cart-child-container">

          <header>
            <div className="cover-image">
              <img src="/images/p4.jpg" alt="phone" style={{
                width: "100vw", height: "30rem", objectFit: "cover", margin: "0",
                borderTop: "3px #68bbeb solid", zIndex: "-999"
              }} />
            </div>
            <h1 style={{ marginTop: "2rem" }}>Products</h1>
          </header>

          <div className="search-area">
            <Search />
          </div>

          <article >

            {

              currentItem.sort((a, b) => handleSort(a.price, b.price)).map(item => {

                if ((item.brand === brand || brand === 'All') && item.title.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                  
                  return (
                    <CartItem key={item.id} {...item} id={item.id}/>
                  );
                }
                return null;
              })
            }

          </article>
          
          <Pagination itemsPerPage={itemsPerPage} totalItems={currentlength} paginate={paginate} />

        </div>

      </section>
      <footer>
        <Footer />
      </footer>

    </>
  );
};
const mapStateToProps = store => {
  const { brand, search, sort } = store;
  return { brand, search, sort };
}

export default connect(mapStateToProps)(CartContainer);
