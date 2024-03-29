import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
 
  
      const {name, price, img, seller, ratings} = props.product;
       const handleAddToCart = props.handleAddToCart;
     
    
    return (
        <div className='product'>
             <img src={img} alt="" />

            <div className='product-info'>

            <h5  className='product-name' >{name}</h5>
            <h6>Price:${price}</h6>
            <p> Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button 
            onClick={() => handleAddToCart(props.product)} className='btn-cart'
            >Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;