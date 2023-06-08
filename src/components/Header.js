import {HiOutlineUserCircle} from 'react-icons/hi'
import {SlBasket} from 'react-icons/sl'
import "./Header.scss"
import React, { useState } from 'react';
import Basket from './Basket';


function Header() {
  const iconSize = '30px';

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='basket-btns'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <SlBasket size={iconSize}  color='black'/>
      </button>
 
      {isOpen && (
       <div>
       <img src={"sad"} alt="Product" className="product-image" />
              <div className="product-details">
                <h3 className="brand-title">itemsadassdkasdqwe</h3>
                <h4 className="title">sadassdkasdqwe</h4>
                <p className="price">asdasddasdas</p>
              </div>
        <button onClick={() => setIsOpen(false)}>
          Close Pop-up
        </button>
       </div>
      )}
    </div>
  );
}
  return (
    <div className="headerWrapper">
      <header>
        <div className='headerLeft'>
          <img src='/logo192.png' alt='logo' id='logoimg'/>
          <div className='headerInfo'>
            <h1 className='text-uppercase'> React trousers</h1>
            <p> Магазин лучших штанов</p>

          </div>
        </div>
        <ul className='sex-category'>
          <li>
            <button>Man</button>
          </li>
          <li>
            <button>Woman</button>
          </li>
          <li>
            <button>Child</button>
          </li>
        </ul>
        <ul className='headerRight'>
          <li>
          <PopUp/>
          <span className='priceHolder'> price value</span>
          </li>
          <li className='authorization'>
            <HiOutlineUserCircle size={iconSize}/>
            <a className='login' href='./pages/Home'>Log in</a>
            <a className='signin' href='/src/pages/Home.js'>Sign in</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

