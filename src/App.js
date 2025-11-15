import React from 'react';
import ReactDOM from 'react-dom';
// IMPORTANT : Forcer l'importation de App.jsx pour éviter toute ambiguïté avec App.js.
import App from './App.jsx'; 

/**
 * Fonction de rendu exposée au niveau global par Webpack.
 * @param {HTMLElement} container - L'élément DOM (div) du LWC où monter l'application, passé directement.
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
        // Ce message est un filet de sécurité si le LWC ne passe rien.
        console.error(`Le conteneur DOM (objet) passé est invalide. LWC n'a pas pu trouver l'hôte.`);
    }
}

// IMPORTANT : Exportez la fonction de rendu comme 'default'.
// C'est ce qui permet à Webpack de la nommer 'window.ReactApp' grâce aux paramètres 'library' et 'libraryExport'.
export default renderReactApp;