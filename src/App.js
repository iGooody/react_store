import './App.scss';
import { useState } from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi'
import {SlBasket} from 'react-icons/sl'
import ShoppingCart from './components/ShoppingCart';


function App() {
  const iconSize = '18px';
  return (
    <div className="wrapper">
      <header>
        <div className='headerLeft'>
          <img src='/logo192.png' alt='logo' id='logoimg'/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'> React trousers</h3>
            <p> Магазин лучших штанов</p>

          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <SlBasket size={iconSize}  color='black'/>
          <span> 1205</span>
          </li>
          <li>
            <HiOutlineUserCircle size={iconSize}/>
          </li>
        </ul>
      </header>
      <div className='content'>
        <h1>Все штаны</h1>
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;


