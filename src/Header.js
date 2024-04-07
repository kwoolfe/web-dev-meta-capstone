import logo from './Assets/Logo.svg'

function Header() {
    return(
        <header>
            <img 
                src={logo} 
                alt="Little Lemon logo" 
                height={50}
            />
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
        </header>
    );
}

export default Header;