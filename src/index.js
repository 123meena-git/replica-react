import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SongWeb from './components/SongWeb/Songweb';
import Discover from './components/DiscoverComponent/Discover';
import Join from './components/Join/Join';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SongWeb />
    <Discover />
    <Join />
  </React.StrictMode>
);


