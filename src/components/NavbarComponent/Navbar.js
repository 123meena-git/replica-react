import './Navbar.css';
import ReactLogo from './asset/logo.svg';

function Navbar() {
    return (
    <header>
    <a href="NAV" class="land"><img src={ReactLogo} alt="React Logo" />SoundWave</a>
    <ul>
    <li><a href="NAV">Discover</a></li>
    <li><a href="NAV">Join</a></li>
        </ul>
    </header>
    )
 }
 export default Navbar;