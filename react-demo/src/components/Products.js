import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Products = ({ addToCart }) => {
  return (
    <div className="product">
      <img src="product-image.jpg" alt="Product" />
      <h2>Product Name</h2>
      <p>Price: $99.99</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt="Product" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    // Add product to cartItems state
    const newItem = {
      name: "Product Name",
      image: "product-shirt 1.jpeg",
    };
    setCartItems([...cartItems, newItem]);
  };

}




export default Products;