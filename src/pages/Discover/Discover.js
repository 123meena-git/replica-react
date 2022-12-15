import React from 'react';
import './Discover.css';
import microphone from './img/microphone.svg';
import albums from './img/albums.svg';
import more from './img/more.svg';
import covers from './img/covers.jpg'
import Navbar from '../../components/NavbarComponent/Navbar';
import Footer from '../../components/FooterComponent/Footer';

function Discover () {
  return (
    <div className="BannerDiscover">
      <Navbar />
      <div className="text-banner-1">
      <h2>Discover new music</h2>
      <img  src={microphone} alt="microphone" />Charts
      <img  src={albums} alt="albums" />Albums
      <img  src={more} alt="more" />More
      <p>By joining you can benefit by listening to the latest albums released.</p></div>
       
       <div className="iconAspa1 d-flex justify-content-end"></div>
        <div className="iconAspa1 d-flex justify content:end"></div> 
         
          <div className="imagen">
         <div className='photo'>
     <img className="image" src={covers} alt="covers" /></div>
  </div>
  <Footer />
  </div>
  
  );
}

export default Discover;
