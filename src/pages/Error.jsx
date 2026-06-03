import { NavLink } from "react-router-dom"
import './Error.scss'

// Page 404 — affichée pour toute route inexistante ou ID de logement invalide
const Error = () => {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error
