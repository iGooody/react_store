import React from 'react';
import "./ShoppingCart.css"
import americanos from "../images/americanos.png"
import camel from "../images/Camel.png"
import cult from "../images/CULT.png"
import spodnie1 from "../images/spodnie1.png"
import guani from "../images/guani.png"
import black from "../images/black.png"
import Button from './Button';

const ShoppingCart = () => {

  const shoppingItems = [
    {
      id: 1,
      image: americanos,
      brandTitle: 'Americanos',
      title: 'Fainy',
      price: '$9.99',
    },
    {
      id: 2,
      image: camel,
      brandTitle: 'Camel',
      title: 'Low price',
      price: '$19.99',
    },
    {
      id: 3,
      image: cult,
      brandTitle: 'CULT',
      title: 'Best quality',
      price: '$190.99',
    },
    {
      id: 4,
      image: spodnie1,
      brandTitle: 'SpodniLux',
      title: 'Szary spodni',
      price: '$12.99',
    },
    {
      id: 5,
      image: guani,
      brandTitle: 'SpodniLux',
      title: 'Szary spodni',
      price: '$12.99',
    },
    {
      id: 6,
      image: black,
      brandTitle: 'Brand Title 4',
      title: 'Product Title 4',
      price: '$120.99',
    },
    // ... Add more shopping items here
  ];

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {shoppingItems.map(item => (
          <>
            <li className="cart-item" key={item.id}>
              <img src={item.image} alt="Product" className="product-image" />
              <div className="product-details">
                <h3 className="brand-title">{item.brandTitle}</h3>
                <h4 className="title">{item.title}</h4>
                <p className="price">{item.price}</p>
              </div>
              <Button/>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;