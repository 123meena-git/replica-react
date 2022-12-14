import './SongWeb.css';
import logo3 from './logo3.png';

function SongWeb() {
  return (
    <div className="BannerSongWeb">
     <div className='Photo'>
     <img className="image" src={logo3} alt="logo3" /></div>
      <div className="iconAspa1 d-flex justify-content-end"></div>
      <div className="iconAspa1 d-flex justify content:end"></div>
      <div className="text-banner-1">
      <h1>Feel The Music</h1> 
    <p>Stream Over 20 thousand song with one click</p>
    <button className='button-bck'>Join Now</button></div>
     </div>
  );
}

export default SongWeb;