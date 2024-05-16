import './header.scss'
import logo from '../Assets/Logo.svg'
import hamburger_icon from '../Assets/icon _hamburger_menu.svg'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

function Header() {
    const [menuShown, setMenuShown] = useState(false);
    const isBigScreen = useMediaQuery({query: '(min-width: 750px)'})

    return(
        <>
        <header className="row" id="row-header">
            <div className="row-content" id="row-content-header">
            <img
                src={logo}
                alt="Little Lemon logo"
                height={50}
            />
            <button
                aria-controls='header-navbar'
                aria-expanded='false'
                aria-label='Toggle navigation links'
            >
            <img
                id="hamburger-menu"
                src={hamburger_icon}
                onClick={()=>{setMenuShown(!menuShown);}}
            />
            </button>
            {menuShown | isBigScreen
             ? <NavList/>
             : null
            }
            </div>
        </header>
        </>
    );
}

function NavList () {
    return (
        <nav id="header-navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/About">About</Link></li>
                <li><Link to = "/Menu">Menu</Link></li>
                <li><Link to = "/Reservations">Reservations</Link></li>
                <li><Link to = "/Order">Order Online</Link></li>
            </ul>
        </nav>
    )
}

export default Header;