import './Navbar.css';
import logo from './asset/logo.svg';

function Navbar() {
    return (
    <header>
    <a href="NAV" class="land" src={logo.svg}>SoundWave</a>
    <ul>
    <li><a href="NAV">Discover</a></li>
    <li><a href="NAV">Join</a></li>
        </ul>
    </header>
    )
 }
 export default Navbar;