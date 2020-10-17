import React from 'react';
import './Home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="home-container" style={{backgroundImage: "url(/images/bgf.jpg)", backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>'
            <div className="hero-text">
                <h1>Cellphone store</h1>
                <p>best cellphone store in my thought</p>
                <Link to='/products'>
                    <button type="submit">See our products</button>
                </Link>
                
            </div>
        </div>
        <Footer />
</> 
    )
}

export default Home