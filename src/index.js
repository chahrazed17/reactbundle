import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Fonction de rendu exposée au niveau global.
 * Le LWC appellera cette fonction pour monter le composant React.
 * @param {string} elementId - L'ID du DIV dans le LWC où monter l'application.
 * @param {object} props - Les propriétés (données) passées du LWC à React.
 */
function renderReactApp(elementId, props) {
    const container = document.getElementById(elementId);
    
    if (container) {
        // Démarre le rendu React dans le conteneur cible du LWC
        ReactDOM.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>,
            container
        );
    } else {
        console.error(`Le conteneur DOM avec l'ID "${elementId}" est introuvable.`);
    }
}

// IMPORTANT : Exportez la fonction de rendu comme 'default'. 
// Cela correspond à 'libraryExport: default' dans webpack.config.js.
export default renderReactApp;