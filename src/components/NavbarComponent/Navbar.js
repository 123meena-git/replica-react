import ReactLogo from './asset/logo.svg';
import './Navbar.css'

function Navbar() {
    return <nav className="Nav">
    <a href="/" className="SoundWave"><img src={ReactLogo} alt="React Logo" />SoundWave</a>
    <ul>
    <li >
        <a href="/Discover">Discover</a>
        </li>
    <li>
        <a href="/Join">Join</a>
        </li>
        </ul>
        </nav>
}
export default Navbar;