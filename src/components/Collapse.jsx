import { useState } from 'react'
import './Collapse.scss'

// Accordéon réutilisable — fermé par défaut à l'initialisation
// title : titre affiché dans le header
// content : contenu affiché à l'ouverture (texte ou JSX)
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse'>
            <button className='collapse__header' onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                {/* Flèche CSS qui tourne selon l'état ouvert/fermé */}
                <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`} />
            </button>
            {/* Le contenu est toujours dans le DOM — max-height gère la visibilité */}
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse
