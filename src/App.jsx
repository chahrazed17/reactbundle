import React, { useState } from 'react';
// import './App.css'; // Maintenu pour la structure si nécessaire

function App({ initialMessage }) {
    // État pour les champs du formulaire
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        pin: '',
        accountType: 'courant', // Défaut à 'Courant'
        acceptTerms: false, // CLÉ : Cet état doit passer à true pour activer le bouton.
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Style de base (inspiré de Tailwind/design moderne)
    const containerStyle = {
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9fafb', // Léger gris clair
        color: '#1f2937', // Texte sombre
        margin: '20px auto',
        maxWidth: '500px',
        border: '1px solid #e5e7eb',
        fontFamily: 'system-ui, sans-serif',
    };

    const headerStyle = {
        color: '#10b981', // Vert turquoise (couleur d'accentuation)
        textAlign: 'center',
        marginBottom: '20px',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '10px',
    };

    const formGroupStyle = {
        marginBottom: '15px',
        textAlign: 'left',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: '600',
        fontSize: '0.9rem',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        boxSizing: 'border-box',
        fontSize: '1rem',
    };

    const selectStyle = {
        ...inputStyle,
        appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5H5z%22%20fill%3D%22%236b7280%22%2F%3E%3C%2Fsvg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.7rem top 50%',
        backgroundSize: '0.65rem auto',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#10b981',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: formData.acceptTerms ? 'pointer' : 'not-allowed',
        fontSize: '1rem',
        fontWeight: '700',
        marginTop: '20px',
        opacity: formData.acceptTerms ? 1 : 0.6,
        transition: 'background-color 0.3s',
    };

    // Gestion des changements de champ
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            // Logique de mise à jour pour la case à cocher
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.acceptTerms) {
            console.error("Veuillez accepter les conditions générales.");
            return;
        }
        console.log("Données du compte bancaire (Frontend) :", formData);
        // Ici, en temps normal, vous enverriez les données à un backend.
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div style={{...containerStyle, backgroundColor: '#d1fae5', color: '#065f46'}}>
                <h2 style={{...headerStyle, color: '#065f46', borderBottom: 'none'}}>🎉 Compte Créé avec Succès !</h2>
                <p style={{textAlign: 'center'}}>
                    Vos informations sont en cours de validation. <br/>
                    Bienvenue dans la banque React/LWC.
                </p>
                <div style={{marginTop: '20px', fontSize: '0.9rem', textAlign: 'left', padding: '10px', borderTop: '1px solid #a7f3d0'}}>
                    <p>Référence LWC initiale: *{initialMessage}*</p>
                </div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Ouverture de Compte Bancaire</h1>
            
            <form onSubmit={handleSubmit}>
                
                {/* 1. Nom Complet */}
                <div style={formGroupStyle}>
                    <label htmlFor="fullName" style={labelStyle}>Nom Complet</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Jean Dupont"
                        required
                    />
                </div>

                {/* 2. Email */}
                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Adresse E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="votre.email@domaine.com"
                        required
                    />
                </div>

                {/* 3. Code PIN/Mot de passe */}
                <div style={formGroupStyle}>
                    <label htmlFor="pin" style={labelStyle}>Code PIN (4 chiffres)</label>
                    <input
                        type="password"
                        id="pin"
                        name="pin"
                        value={formData.pin}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="****"
                        minLength="4"
                        maxLength="4"
                        pattern="\d{4}"
                        title="Doit contenir exactement 4 chiffres"
                        required
                    />
                </div>

                {/* 4. Type de Compte */}
                <div style={formGroupStyle}>
                    <label htmlFor="accountType" style={labelStyle}>Type de Compte Souhaité</label>
                    <select
                        id="accountType"
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="courant">Compte Courant</option>
                        <option value="epargne">Compte Épargne</option>
                        <option value="premium">Compte Premium</option>
                    </select>
                </div>

                {/* 5. Conditions Générales */}
                <div style={{...formGroupStyle, display: 'flex', alignItems: 'center'}}>
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        style={{marginRight: '10px'}}
                        // La désactivation du bouton est gérée par l'état React, c'est plus fiable.
                    />
                    <label htmlFor="acceptTerms" style={{...labelStyle, fontWeight: 'normal', marginBottom: '0'}}>
                        J'accepte les <a href="#" style={{color: '#10b981', textDecoration: 'underline'}}>Conditions Générales</a>.
                    </label>
                </div>

                {/* Bouton de Soumission : Désactivé si acceptTerms est FAUX */}
                <button type="submit" style={buttonStyle} disabled={!formData.acceptTerms}>
                    Créer Mon Compte Bancaire
                </button>
                
                <p style={{fontSize: '0.8rem', textAlign: 'center', marginTop: '15px', color: '#6b7280'}}>
                    Donnée LWC initiale: {initialMessage}
                </p>

            </form>
        </div>
    );
}

export default App;