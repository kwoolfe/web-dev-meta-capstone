import "./footer.scss"
import logo from '../Assets/grey_logo.png'
import { Link } from "react-router-dom";

function Footer () {

    return (
        <footer>
        <div className="row" id="row-footer">
        <div className="row-content" id="footer-row-content">
            <img 
                src = {logo}
                alt = "A chef preparing food"
                height = {300}
            />
            <div id = "footer-right">
                <div className="footer-nav-box">
                    <h3>Navigation</h3>
                    <nav>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="/Reservations">Reservations</Link></li>
                            <li><Link to="/Order">Order online</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-nav-box">
                    <h3>Contact</h3>
                    <ul id="footer-contact">
                        <li>123 Food Street,<br/>Chicago</li>
                        <li>(00) 4321 4567 21</li>
                        <li>hello@littlelemon.com</li>
                    </ul>
                </div>
                <div className="footer-nav-box">
                    <h3>Social media</h3>
                    <nav><ul>
                        <li><a href = "//www.facebook.com">Facebook</a></li>
                        <li><a href = "//www.instagram.com">Instagram</a></li>
                        <li><a href = "//twitter.com">Twitter</a></li>
                    </ul></nav>
                </div>
            </div>
        </div>
        </div>
        </footer>
    );
}

export default Footer;