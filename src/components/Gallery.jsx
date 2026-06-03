import { useState } from 'react'
import './Gallery.scss'

// Carrousel d'images pour la page logement
// pictures : tableau d'URLs d'images
const Gallery = ({ pictures }) => {
    const [index, setIndex] = useState(0)

    // % pictures.length permet de boucler : dernière image → première et inversement
    const next = () => setIndex((index + 1) % pictures.length)
    const prev = () => setIndex((index - 1 + pictures.length) % pictures.length)

    return (
        <div className="gallery">
            <img src={pictures[index]} alt={`photo ${index + 1}`} className="gallery__image" />
            {/* Boutons et compteur masqués s'il n'y a qu'une seule image */}
            {pictures.length > 1 && (
                <>
                    <button className="gallery__btn gallery__btn--prev" onClick={prev}>‹</button>
                    <button className="gallery__btn gallery__btn--next" onClick={next}>›</button>
                    <span className="gallery__counter">{index + 1}/{pictures.length}</span>
                </>
            )}
        </div>
    )
}

export default Gallery
