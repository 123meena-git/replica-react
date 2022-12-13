import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SongWeb from './components/SongWebComponent/Songweb';
import Discover from './components/DiscoverComponent/Discover';
import Join from './components/JoinComponent/Join';
import Navbar from './components/NavbarComponent/Navbar'
import Footer from './components/Footercomponent/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SongWeb />
    <Discover />
    <Join />
    <Navbar />
    <Footer />
  </React.StrictMode>
);


