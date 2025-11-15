Import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; 

/**
 * Fonction de rendu exposée au niveau global par Webpack (Utilisée par LWC).
 * @param {HTMLElement} container - L'élément DOM du LWC où monter l'application.
 * @param {object} props - Les propriétés (données) passées du LWC à React.
 */
function ReactApp(container, props) {
    if (container) {
        // Mode Production (LWC/Salesforce)
        ReactDOM.render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>,
            container
        );
    } else {
        console.error(`Le conteneur DOM passé par le LWC est invalide.`);
    }
}

// =========================================================================
// Logique d'exécution locale pour le développement (pour le navigateur standard)
// =========================================================================

// Vérifie si l'application est en cours d'exécution dans un environnement non-Salesforce
// et si l'élément DOM 'root' existe (ce qui est le cas dans public/index.html).
const devRoot = document.getElementById('root');
if (devRoot) {
    console.log("Démarrage en mode Développement Local...");
    ReactDOM.render(
        <React.StrictMode>
            {/* En mode dev, on passe des données mockées (fausses) pour simuler l'entrée du LWC.
            */}
            <App initialMessage="Ceci est un message de test en mode dev !" />
        </React.StrictMode>,
        devRoot
    );
}

// Export pour le LWC (mode Production)
export default ReactApp;