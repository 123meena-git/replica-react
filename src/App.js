import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SoundWave from './pages/SoundWave/SoundWave';
import Discover from './pages/Discover/Discover';
import Join from './pages/Join/Join';
import Navbar from "./components/NavbarComponent/Navbar";
import Footer from './components/FooterComponent/Footer';



function App () {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<SoundWave />} />
          <Route path="Discover" element={<Discover />} />
          <Route path="Join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};
export default App;

