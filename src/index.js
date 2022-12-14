import React from 'react';
import ReactDOM from 'react-dom/client';
import SongWeb from './components/SongWebComponent/Songweb';
import Discover from './components/DiscoverComponent/Discover';
import Join from './components/JoinComponent/Join';
import Navbar from './components/NavbarComponent/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SongWeb />
    <Discover />
    <Join />
    <Navbar />
  </React.StrictMode>
);


