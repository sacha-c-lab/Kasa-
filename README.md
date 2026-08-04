# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Kasa — Application de location de logements

## Contexte
Projet de formation (OpenClassrooms) : développer une SPA affichant des logements à louer.

## Objectifs
- Construire une architecture par composants réutilisables
- Mettre en place un routing dynamique par logement
- Reproduire une interface fidèle à une maquette Figma

## Stack technique
React · Vite · React Router · Sass/SCSS

## Compétences développées
Génération dynamique de pages à partir de données (route `/logement/:id`, nombre variable d'éléments comme les photos ou équipements selon le logement), architecture en composants réutilisables (Layout, Card, Rating, Collapse...), gestion de la navigation et des routes invalides (404).

## Résultats et impact
SPA fonctionnelle avec liste de logements, page de détail dynamique, carrousel photo, notation par étoiles et accordéons d'informations.

## Perspectives d'amélioration
Le projet utilise des données mockées en JSON (pas de vraie connexion backend) — brancher une vraie API serait la suite logique.
