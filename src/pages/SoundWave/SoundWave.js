import React from 'react';
import './SoundWave.css';
import logo3 from './logo3.png';
import Navbar from '../../components/NavbarComponent/Navbar';


function SoundWave() {
  return (
    <div className="BannerSoundWave">
      <Navbar />
     <div className='Photo'>
     <img className="image" src={logo3} alt="logo3" /></div>
      <div className="iconAspa1 d-flex justify-content-end"></div>
      <div className="iconAspa1 d-flex justify content:end"></div>
      <div className="text-banner-1">
      <h1>Feel The Music</h1> 
    <p>Stream Over 20 thousand song with one<br>click</br> </p>
    <button className='button'>Join Now</button></div>
     </div>
  );
}

export default SoundWave;