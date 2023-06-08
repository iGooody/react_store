import React from 'react'
import Header from '../components/Header'
import ShoppingCart from '../components/ShoppingCart'
import "./Home.css"
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='wrapper'>
        <Header/>
        <ShoppingCart/>
        <Footer/>
    </div>
  )
}
