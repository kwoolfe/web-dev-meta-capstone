import chef_image from './Assets/restaurant chef B.jpg'

function Footer () {
    return (
        <footer>
            <img 
                src = {chef_image}
                alt = "A chef preparing food"
                height = {300}
            />
            <div>
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
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social media</h3>
                <nav><ul>
                    <li><a href = "www.facebook.com">Facebook</a></li>
                    <li><a href = "www.instagram.com">Instagram</a></li>
                    <li><a href = "twitter.com">Twitter</a></li>
                </ul></nav>
            </div>
        </footer>
    );
}

export default Footer;