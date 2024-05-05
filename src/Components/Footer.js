import "./footer.scss"
import logo from '../Assets/grey_logo.png'

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
            <div className="footer-nav-box">
                <h3>Navigation</h3>
                <nav>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Menu">Menu</a></li>
                        <li><a href="/Reservations">Reservations</a></li>
                        <li><a href="/Order">Order online</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-nav-box">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-nav-box">
                <h3>Social media</h3>
                <nav><ul>
                    <li><a href = "www.facebook.com">Facebook</a></li>
                    <li><a href = "www.instagram.com">Instagram</a></li>
                    <li><a href = "twitter.com">Twitter</a></li>
                </ul></nav>
            </div>
        </div>
        </div>
        </footer>
    );
}

export default Footer;