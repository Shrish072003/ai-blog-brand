import React from "react";
import "./style.css";
import {Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className="frame">
      <div className="div">
      <section className="navbar_top_main">
      <section className="navbar">
        <div className="logo_main">
           <div className="text-wrapper-2">Shrish Ai</div>
        </div>
        </section>
        <section className="navbar_link">
         <Link to='/write'> <div className="text-wrapper-4">Services</div></Link>
          <div className="text-wrapper-5">Smart Contracts</div>
          <div className="text-wrapper-6">Solutions</div>
          <div className="text-wrapper-7">Roadmap</div>
          <div className="text-wrapper-8">Whitepaper</div>
        </section>
        <section className="logo_main">
           <div className="text-wrapper-2">Serendale</div>
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
        <div className="text-wrapper-3">Shrish AI.</div></div>
        <div className="para">
        <p className="p">
          Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of
          Stake, its consensus algorithm enables unlimited speeds.
        </p></div>
        <div className="cta_main">
        <div className="cta">
            <div className="div-wrapper">
              <div className="text-wrapper">Get started</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper">Ecosystems</div>
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