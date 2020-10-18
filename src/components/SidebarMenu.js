import React from 'react';
import './SidebarMenu.css';
import { Link }from 'react-router-dom'

const SidebarMenu = () => {
    return (
        <div className="menu">
           <Link className="link" to='/' >Home</Link>
           <Link className="link" to='/products' >Products</Link>
        </div>
    )
}

export default SidebarMenu;