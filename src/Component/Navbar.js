import React from 'react'
import './main.css';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    <div className='Side_main'>
    <NavLink to='/write' activeClassName='active-link'><div className='Side_button'><div className='logo_img_1'><div className='div_p'>Generate Blog</div></div></div></NavLink>
    {/* <div className='Side_button'><div className='logo_img_2'><div className='div_p'>Search</div></div></div> */}
    <div className='Side_button'><div className='logo_img_3'><div className='div_p'>Generate images</div></div></div>
    <NavLink to='/blogs-ideas'><div className='Side_button'><div className='logo_img_4'><div className='div_p'>Blogs Ideas</div></div></div></NavLink>
    <div className='Side_button'><div className='logo_img_5'><div className='div_p'>Blog to summary</div></div></div>
    <div className='Side_button'><div className='logo_img_6'><div className='div_p'>Grammar check</div></div></div>
    <div className='separator'></div>
    <NavLink to='/keyword-checker'><div className='Side_button'><div className='logo_img_7'><div className='div_p'>Keyword Research Tools</div></div></div></NavLink>
    <div className='Side_button'><div className='logo_img_8'><div className='div_p'>Backlinking Checker</div></div></div> 
    <div className='separator'></div>
    <div className='Side_button'><div className='logo_img_7'><div className='div_p'>History</div></div></div>
    </div>
</>
  )
}
export default Navbar;