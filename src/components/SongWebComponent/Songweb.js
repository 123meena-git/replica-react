
import './SongWeb.css';
import logo3 from './asset/logo3.png';

function SongWeb() {
  return (
    <div className="BannerSongWeb">
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <img src={logo3} alt="logo3" />
    </div>
    <div class="text">
    <h1> Feel The Music</h1> 
     <p>Stream Over 20 thousand song with one click</p>
     <button className='button-bck'>Join</button>
    </div>
  </div>
</div>
    
    </div>
  );
}

export default SongWeb;
