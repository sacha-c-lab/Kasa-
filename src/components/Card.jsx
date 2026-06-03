import "./Card.scss"
import { NavLink } from "react-router-dom"

// Carte d'un logement affichée dans la grille de la page Home
// id : identifiant utilisé pour construire l'URL de la page logement
const Card = ({ id, title, cover }) => {
    return (
        <NavLink to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card__image" />
            <h2 className="card__title">{title}</h2>
        </NavLink>
    )
}

export default Card
