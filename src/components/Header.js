import React from 'react'
import './Header.scss'
import { Navbar } from './Navbar'
import {GoSearch} from 'react-icons/go'

export const Header = () => {
  return (
    <div className='header'>
        <h1 >Example - store</h1>
        <input></input>
        <GoSearch/>
        <Navbar/>
    </div>
  )
}
