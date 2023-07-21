import React from 'react'
import './main.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';


const imageStyle = {

  width: '100%',
  margin: '10px',
};


const Header = () => {
  return (
    <>
    <div className="Fixed_side">  <NavLink to='/'><div className='Logo_txt'><img style={imageStyle} src='https://brandkiln.com/wp-content/uploads/2021/12/BK_white-e1656676473666.png' alt='BRANDKLIN BLOG AI
'/></div></NavLink>
    <div>
    <Navbar />
    </div>
    </div>
    </>
  )
}

export default Header;