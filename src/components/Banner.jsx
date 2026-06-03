import './Banner.scss'

// Bannière réutilisable avec image de fond et texte optionnel
// image : URL de l'image de fond
// text : texte affiché par-dessus (optionnel, absent sur la page About)
const Banner = ({ image, text }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{text}</h1>
        </div>
    )
}

export default Banner
