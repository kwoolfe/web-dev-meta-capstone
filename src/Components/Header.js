import './header.scss'
import logo from '../Assets/Logo.svg'
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header class="row" id="row-header">
            <div class="row-content" id="row-content-header">
            <img 
                src={logo} 
                alt="Little Lemon logo" 
                height={50}
            />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/About">About</Link></li>
                    <li><Link to = "/Menu">Menu</Link></li>
                    <li><Link to = "/Reservations">Reservations</Link></li>
                    <li><Link to = "/Order">Order Online</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;