import React from 'react';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
    return (
        <div className="header">
           <img className="logo"  src={logo} alt="" />
           <div className='anchor'>
            
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory"> Inventory</a>
            <a href="/login">Login</a>
           </div>
           
           
            
        </div>
    );
};

export default Header;