import "../css/Header.css";
import logo from "../Images/dogLogo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="dog logo" />
      </div>
      <div className="navs">Home</div>
      <div className="navs">About</div>
      <div className="navs">Contact</div>
      <div className="desc">
        <h1>Dog Paradise</h1>
        <p>Your one-stop destination for adorable dogs!</p>
      </div>
    </header>
  );
};

export default Header;
