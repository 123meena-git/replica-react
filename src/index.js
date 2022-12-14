import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client'
import "./styles/Navbar.css"
import SongWeb from './components/SongWebComponent/SongWeb';
import Discover from './components/DiscoverComponent/Discover';
import Join from './components/JoinComponent/Join';
import Navbar from './components/NavbarComponent/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <SongWeb />
    <Discover />
    <Join />
    
  </React.StrictMode>
);


