import "../assets/css/components/Footer.css";
import facebook from "../assets/images/facebook.svg";
import pinterest from "../assets/images/pinterest-circular-logo-symbol.png";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import be from "../assets/images/social.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mainFooter">
                <div className="infoBoxes1">
                    <div className="titles">Contact the Publisher</div>
                    <div className="infoContent">mike@runo.com</div>
                    <div className="infoContent">+944 450 904 505</div>
                </div>
                <div className="infoBoxes2">
                    <div className="titles">Explorate</div>
                    <div className="infoContent">About</div>
                    <div className="infoContent">Partners</div>
                    <div className="infoContent">Job Opportunities</div>
                    <div className="infoContent">Advertise</div>
                    <div className="infoContent">Membership</div>
                </div>
                <div className="infoBoxes3">
                    <div className="titles">Headquarter</div>
                    <div className="infoContent">
                        191 Middleville Road,
                        NY 1001, Sydney
                        Australia
                    </div>
                </div>
                <div className="infoBoxes4">
                    <div className="titles">Connections</div>
                    <div className="images">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={be} alt="be" />
                    </div>
                </div>
            </div>
            <div className="secondaryFooter">
                <div>2021 | RUNO Publisher Studio</div>
                <div className="subscribe">Subscribe Now</div>
            </div>
        </footer>
    )
}
export default Footer
