import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import '../components/NavbarComponent/Navbar';
import '../components/SoundWaveComponent/SoundWave';
import '../components/DiscoverComponent/Discover';
import '../components/JoinComponent/Join';
import '../components/Footercomponent/Footer';
import App from '../App.js'
import Navbar from "../components/NavbarComponent/Navbar";

 const Router= () =>{
    return (
        <BrowserRouter>
        <Navbar />
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