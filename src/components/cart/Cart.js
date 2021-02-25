import React from 'react';
import './cart.scss';

export default function Cart(cartItems) {
    const cartItem = cartItems.cartItems;
    // const [cartItem] = useState(cartItems.cartItems);

    const totalPrice = cartItem.reduce((total, price) => total + price.price, 0);
    return (
        <div>
            <h1>Total Cart Items {cartItem.length}</h1>
            <p>Total Price Is ${totalPrice.toFixed(2)}</p>
        </div>
    );
}
