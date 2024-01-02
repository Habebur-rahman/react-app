import React from 'react';
import './Product.css';

const Product = (props) => {
 
//    console.log(props);
      const {name, price, img, seller, quantity} = props.product;
   
    
    return (
        <div className='product'>
             <img src={img} alt="" />
            <h5>{name}</h5>
            <h6>Price:{price}</h6>
          
        </div>
    );
};

export default Product;