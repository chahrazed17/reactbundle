import React, { useState } from 'react';
import './App.css'; // Supposons un fichier CSS simple

function App({ initialMessage }) {
    const [count, setCount] = useState(0);

    // Style simple pour l'exemple
    const containerStyle = {
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center'
    };
    const buttonStyle = {
        padding: '8px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    return (
        <div style={containerStyle}>
            <h2>Application React intégrée</h2>
            <p>Message de LWC : **{initialMessage}**</p>
            <p>Compteur interne React : {count}</p>
            <button 
                style={buttonStyle}
                onClick={() => setCount(c => c + 1)}
            >
                Incrémenter le Compteur
            </button>
        </div>
    );
}

export default App;