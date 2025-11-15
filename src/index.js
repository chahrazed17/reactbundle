import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

/**
 * Fonction de rendu exposée au niveau global.
 * @param {HTMLElement} container - L'élément DOM (div) du LWC où monter l'application. 
 * @param {object} props - Les propriétés (données) passées du LWC à React.
 */
function renderReactApp(container, props) {
    
    if (container) {
        // Démarre le rendu React dans le conteneur cible du LWC
        ReactDOM.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>,
            container
        );
    } else {
        console.error(`Le conteneur DOM (objet) passé est invalide. LWC n'a pas pu trouver l'hôte.`);
    }
}

// Exportez la fonction de rendu comme 'default' pour Webpack
export default renderReactApp;