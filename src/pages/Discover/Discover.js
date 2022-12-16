import React from 'react';
import './Discover.css';
import Microphone from './img/Microphone.svg';
import Albums from './img/Albums.svg';
import More from './img//More.svg';
import covers from './img/covers.jpg'
import Navbar from '../../components/NavbarComponent/Navbar';

function Discover () {
  return (
    <div className="BannerDiscover" >
      <Navbar />
      <div className="text-banner-1" >
      <h2>Discover new music</h2>
      <img  src={Microphone} alt="microphone" />Charts
      <img  src={Albums} alt="albums" />Albums
      <img  src={More} alt="more" />More
      <p>By joining you can benefit by listening to the latest albums released.</p></div>
       
       <div className="iconAspa1 d-flex justify-content-end" ></div>
        <div className="iconAspa1 d-flex justify content:end"></div> 
         
          <div className="imagen">
         <div className="photo">
     <img className="image" src={covers} alt="covers" /></div>
    
  </div>
  
  </div>
  
  );
}

export default Discover;
