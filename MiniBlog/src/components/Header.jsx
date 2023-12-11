import "../assets/css/components/Header.css";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import pinterest from "../assets/images/pinterest-circular-logo-symbol.png";
import be from "../assets/images/social.png";
import search from "../assets/images/magnifying-glass.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to='/' style={{ all: 'unset', cursor: 'pointer' }}><div className="logo">RUNO</div></Link>
            <div className="nav">
                <ul className="nav-links">
                    <li><Link to='/' style={{ all: 'unset', cursor: 'pointer' }}>Home</Link></li>
                    <li>About</li>
                    <li><Link to='/secondary' style={{ all: 'unset', cursor: 'pointer' }}>Secondary</Link></li>
                    <li><Link to='/secondaryitem' style={{ all: 'unset', cursor: 'pointer' }}>Secondary Item</Link></li>
                    <li>Contact Us</li>
                </ul>
                <ul className="icons">
                    <li className="facebook"><img src={facebook} alt="facebook" /></li>
                    <li className="twitter"><img src={twitter} alt="twitter" /></li>
                    <li className="youtube"><img src={youtube} alt="youtube" /></li>
                    <li className="pinterest"><img src={pinterest} alt="pinterest" /></li>
                    <li className="be"><img src={be} alt="be" /></li>
                </ul>
                <div className="search">
                    <img src={search} alt="search" />
                </div>
            </div>
        </header>
    )
}
export default Header
