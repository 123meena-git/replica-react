
import './SongWeb.css';
import logo3 from './asset/logo3.png';

function SongWeb() {
  return (
    <div className="BannerSongWeb">
     <div className="image">
     <img src={logo3} alt="logo3" /></div>
      <div class="iconAspa1 d-flex justify-content-end"></div>
      <div class="iconAspa1 d-flex justify content:end"></div>
      <div class="text-banner-1">
      <h1>Feel The Music</h1> 
    <p>Stream Over 20 thousand song with one click</p>
    <button className='button-bck'>Join Now</button></div>
     </div>
  );
}

export default SongWeb;
