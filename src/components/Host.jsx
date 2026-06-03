import './Host.scss'

// Affiche les informations de l'hôte d'un logement
const Host = ({ name, picture }) => {
    return (
        <div className="host">
            <span className="host__name">{name}</span>
            <img src={picture} alt={name} className="host__picture" />
        </div>
    )
}

export default Host
