import Header from "../components/Header"
import Footer from "../components/Footer"
import './Layout.scss'

// Layout commun à toutes les pages
// children = le contenu de la page courante injecté entre Header et Footer
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
