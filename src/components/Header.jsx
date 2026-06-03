import '../components/Header.scss';
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo_header.webp'  

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Kasa logo" className="header__logo" />
            <nav className="header__nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
            </nav>
        </header>
    );
}
export default Header;
