import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SoundWave from '../pages/SoundWave/SoundWave';
import Discover from  '../pages/Discover/Discover';
import Join from  '../pages/Join/Join';

import App from '../App.js'


 const Router= () =>{
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/SoundWave" element={<SoundWave />}></Route>
            <Route path="/Discover" element={<Discover />}></Route>
            <Route path="/Join" element={<Join />}></Route>

          </Routes>
        </BrowserRouter>
     
     
    );
  };
  export default Router;