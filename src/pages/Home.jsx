import Banner from "../components/Banner"
import bannerImage from "../assets/Banner_home.webp"
import Card from "../components/Card"
import "./Home.scss"
import data from "../data.json"

// Page d'accueil — affiche la bannière et la grille de logements
// Les données viennent du fichier JSON local (remplace l'API backend)
const Home = () => {
    return (
        <div className="home">
            <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
            {/* Génération dynamique des cards à partir des données JSON */}
            <section className="cards-grid">
                {data.map((logement) => (
                    <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </section>
        </div>
    )
}

export default Home
