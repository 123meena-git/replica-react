import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import '../components/NavbarComponent/Navbar';
import '../components/SongWebComponent/SongWeb';
import '../components/DiscoverComponent/Discover';
import '../components/JoinComponent/Join';
import '../components/Footercomponent/Footer';
import App from '../App.js'
import Navbar from "../components/NavbarComponent/Navbar";

 const Router= () =>{
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/Navbar" element={<Navbar/>}></Route>
            <Route path="/SongWeb" element={<SongWeb />}></Route>
            <Route path="/Discover" element={<Discover />}></Route>
            <Route path="/Join" element={<Join />}></Route>
            <Route path="/Footer" element={<footer/>}></Route>
          </Routes>
        </BrowserRouter>
     
     
    );
  };
  export default Router;