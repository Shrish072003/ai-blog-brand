import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './app/Home/Index';
// import Login from './pages/Login/login';
import Write from './Main/write';
import BlogGenrate from './Main/blogidea';
import Keywordchecker from './Main/kgr';
import MainImagePage from './Main/imagegen';


export const App = () => {
  return ( <>
     <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs-ideas" element={<BlogGenrate />} />
        <Route path="/keyword-checker" element={<Keywordchecker />} />
        <Route path="/image-generator" element={<MainImagePage />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;