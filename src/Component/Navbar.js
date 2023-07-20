import React from 'react'
import './main.css';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    <div className='Side_main'>
    <Link to='/write'><div className='Side_button'><div className='logo_img_1'><div className='div_p'>Chats</div></div></div></Link>
    <Link to='/blogs-ideas'><div className='Side_button'><div className='logo_img_2'><div className='div_p'>Search</div></div></div></Link>
    <div className='Side_button'><div className='logo_img_3'><div className='div_p'>Generate images</div></div></div>
    <div className='Side_button'><div className='logo_img_4'><div className='div_p'>Blogs Ideas</div></div></div>
    <div className='Side_button'><div className='logo_img_5'><div className='div_p'>Blog to summary</div></div></div>
    <div className='Side_button'><div className='logo_img_6'><div className='div_p'>Grammar check</div></div></div>
    <div className='separator'></div>
    <Link to='/keyword-checker'><div className='Side_button'><div className='logo_img_7'><div className='div_p'>Keyword Research Tools</div></div></div></Link>
    <div className='Side_button'><div className='logo_img_8'><div className='div_p'>Backlinking Checker</div></div></div>
    </div>
</>
  )
}
export default Navbar;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './main.css';

// const Navbar = () => {
//   const location = useLocation(); // get current location
//   return (
//     <>
//       <div className='Side_main'>
//         <Link to="/" className={`Side_button ${location.pathname === '/' ? 'active' : ''}`}>
//           <div className='logo_img_1'><div className='div_p'>Chats</div></div>
//         </Link>
//         <Link to="/search" className={`Side_button ${location.pathname === '/search' ? 'active' : ''}`}>
//           <div className='logo_img_2'><div className='div_p'>Search</div></div>
//         </Link>
//         <Link to="/images" className={`Side_button ${location.pathname === '/images' ? 'active' : ''}`}>
//           <div className='logo_img_3'><div className='div_p'>Generate images</div></div>
//         </Link>
//         <Link to="/blogs" className={`Side_button ${location.pathname === '/blogs' ? 'active' : ''}`}>
//           <div className='logo_img_4'><div className='div_p'>Blogs Ideas</div></div>
//         </Link>
//         <Link to="/summary" className={`Side_button ${location.pathname === '/summary' ? 'active' : ''}`}>
//           <div className='logo_img_5'><div className='div_p'>Blog to summary</div></div>
//         </Link>
//         <Link to="/grammar" className={`Side_button ${location.pathname === '/grammar' ? 'active' : ''}`}>
//           <div className='logo_img_6'><div className='div_p'>Grammar check</div></div>
//         </Link>
//         <div className='separator'></div>
//         <Link to="/keywords" className={`Side_button ${location.pathname === '/keywords' ? 'active' : ''}`}>
//           <div className='logo_img_7'><div className='div_p'>Keyword Research Tools</div></div>
//         </Link>
//         <Link to="/backlink" className={`Side_button ${location.pathname === '/backlink' ? 'active' : ''}`}>
//           <div className='logo_img_8'><div className='div_p'>Backlinking Checker</div></div>
//         </Link>
//       </div>
//     </>
//   )
// }

// export default Navbar;
