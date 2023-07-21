import React from "react";
import "./style.css";
import {Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const imageStyle = {

  width: '70%',
  margin: '0px',
};

export const Home = () => {
  return (
    <div className="frame">
      <div className="div">
      <section className="navbar_top_main">
      <section className="navbar">
        <div className="logo_main">
           <div className="text-wrapper-2"><NavLink to='/'><div className='Logo_txt'><img style={imageStyle} src='https://brandkiln.com/wp-content/uploads/2021/12/BK_white-e1656676473666.png' alt='BRANDKLIN BLOG AI
'/></div></NavLink></div>
        </div>
        </section>
        <section className="navbar_link">
         <Link to='/write'> <div className="text-wrapper-4">Generate Blog</div></Link>
         <Link to='/blogs-ideas'><div className="text-wrapper-5">Blogs Ideas</div></Link>
         <Link to='/keyword-checker'><div className="text-wrapper-6">Keyword Research Tools</div></Link>
         <Link to='/image-generator'><div className="text-wrapper-7">Generate images</div></Link>
         <Link to='/write'><div className="text-wrapper-8">Grammar check</div></Link>
        </section>
        <section className="logo_main">
           <div className="text-wrapper-2">Login</div>
        </section>
        </section>
        <div className="overlap">
          <div className="group">
            <div className="ellipse" />
            <div className="overlap-group">
              <div className="ellipse-2" />
              <div className="ellipse-3" />
            </div>
          </div>
          </div><div className="maintext">
        <h1 className="h-1">An AI Blog Writer</h1>
        <div className="text-wrapper-3">Blog Writer AI.</div></div>
        <div className="para">
        <p className="p">
        All-in-one platform: AI blog generator + keyword tool. Creates engaging blogs, suggests SEO keywords, streamlines content, boosts search engine visibility.
        </p></div>
        <div className="cta_main">
        <div className="cta">
            <div className="div-wrapper">
            <Link to='/'> <div className="text-wrapper">Tutorial</div></Link>
            </div>
            <div className="div-wrapper-2">
            <Link to='/write'><div className="text-wrapper">Try Now</div></Link>
            </div>
          </div>
          </div><div className="main_img_down">
        <img className="element" alt="Element" src="../images/group-2.png" />
</div>
      </div>
      
    </div>
  );
};
export default Home;