import "./Footer.css";
import LogoFb from "../../Assets/Facebook.png";
import LogoInsta from "../../Assets/Instagram.png";
import LogoYouTube from "../../Assets/YouTube.png";

function Footer(){
    return (
    <div className="footer">

    <div className="footer-contact">
      <p>+33 779 77 40 26</p>
      <p>redlightdistortion.metalband@gmail.com</p>
      <p>  <a>Press Kit</a> </p>
    </div>

    <div className="footer-social">
        <a href="https://www.facebook.com/redlightdistortion/" target="_blank"><img className="footer-social-image" src={LogoFb} alt="f" /></a><a href="https://www.instagram.com/redlightdistortion/" target="_blank"><img className="footer-social-image" src={LogoInsta} alt="f" /></a><a href="https://www.youtube.com/channel/UC1C7_waXIYi6cdy_jCPKoLQ" target="_blank"><img className="footer-social-image" src={LogoYouTube} alt="f" /></a>
    </div>
    </div>)
}

export default Footer;
