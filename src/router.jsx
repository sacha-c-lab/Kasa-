import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import Error from './pages/Error'

// Toute la logique de navigation est centralisée ici
// Chaque route est enveloppée dans Layout pour avoir le Header et le Footer
// La route * capture toutes les URLs non définies → page 404
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/logement/:id" element={<Layout><Logement /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><Error /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
