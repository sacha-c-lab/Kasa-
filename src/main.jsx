import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss' // styles globaux : reset CSS, body, #root
import Router from './router'

// Point d'entrée de l'application — monte le Router dans le DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
