import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

      let total = 0;
      let totalShipping = 0;
      for ( const product of cart ){
          total = total + product.price;
          totalShipping = totalShipping + product.shipping; 
      };

      const tex = total*7/100;

      const  grandTotal = total + totalShipping + tex;
     


    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <p> Shipping:${totalShipping} </p>
            <p>Tax:${tex.toFixed(2)} </p>
            <h4>Grand Total:$ {grandTotal.toFixed(2)} </h4>

        </div>
    );
};

export default Cart;