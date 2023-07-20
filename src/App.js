import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/Home/Index';
// import Login from './pages/Login/login';
import Write from './Component/pages/chats';
import Header from './Component/Header';
import BlogGenrate from './Component/pages/blogideas';
import Keywordchecker from './Component/pages/kgr';


export const App = () => {
  return ( <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs-ideas" element={<BlogGenrate />} />
        <Route path="/keyword-checker" element={<Keywordchecker />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;