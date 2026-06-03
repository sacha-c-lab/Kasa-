import '../components/Footer.scss'
import logo from '../assets/Logo_footer.webp'


const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved.</p>
        </footer>
    )
}

export default Footer
