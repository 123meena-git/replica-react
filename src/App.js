import React from "react";
import '../src/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongWeb from './SongWebComponent/Songweb';
import Discover from './DiscoverComponent/Discover';
import Join from './JoinComponent/Join';
import Footer from "./components/Footercomponent/Footer";


export default function App () {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/SongWeb" element={<SongWeb />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
   
  );
};


