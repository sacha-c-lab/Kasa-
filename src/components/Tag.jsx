import './Tag.scss'

// Badge affiché sur la page logement pour identifier les caractéristiques
const Tag = ({ tags }) => {
    return <span className="tag">{tags}</span>
}

export default Tag
