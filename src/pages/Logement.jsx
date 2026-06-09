import { useParams } from "react-router-dom"
import Rating from "../components/Rating"
import Tag from "../components/Tag"
import Collapse from "../components/Collapse"
import Host from "../components/Host"
import Gallery from "../components/Gallery"
import './Logement.scss';
import data from "../data.json"
import Layout from "../layouts/Layout"
import Error from './Error'



const Logement = () => {
    const { id } = useParams()
    const logement = data.find((item) => item.id === id)
    if (!logement) {
        return <Error/>
    }


    return (
        <>
            <Gallery pictures={logement.pictures} />
            <section className="logement-description">
                <div className="logement__info-left">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="logement__tags">
                        {logement.tags.map((tag) => (
                            <Tag key={tag} tags={tag} />
                        ))}
                    </div>
                </div>
                <div className="logement__info-right">
                    <Host name={logement.host.name} picture={logement.host.picture} />
                    <Rating rating={logement.rating} />
                </div>
            </section>
            <div className="logement__collapses">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={
                    logement.equipments.map((equipment) => (
                        <p key={equipment}>{equipment}</p>
                    ))
                } />
            </div>
        </>
    )
}

export default Logement
