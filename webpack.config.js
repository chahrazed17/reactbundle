const path = require('path');

module.exports = {
    // 1. Point d'entrée de votre application React
    entry: './src/index.js', 
    mode: 'production', // Utiliser le mode production pour des bundles optimisés
    
    // 2. Définition de la sortie du bundle (TRÈS IMPORTANT pour LWC)
    output: {
        filename: 'reactAppBundle.js', // Le nom du fichier que vous zipperez
        path: path.resolve(__dirname, 'dist'),
        
        // --- PARAMÈTRES CLÉS POUR LWC ---
        // Expose l'application sous un nom global (ReactApp)
        library: 'ReactApp', 
        // Assure que la bibliothèque est attachée à l'objet 'window' (variable globale)
        libraryTarget: 'window', 
        // Supprime l'importation par défaut (évite les problèmes d'accès)
        libraryExport: 'default', 
    },

    module: {
        rules: [
            // Règle pour Babel (transpile JavaScript/JSX)
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // Règle pour les styles CSS
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Règle pour les fichiers images (SVG, PNG, JPG)
            // Ils sont encodés en Base64 et inclus directement dans le bundle JS.
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/inline',
            }
        ],
    },

    // Résolution pour gérer les imports sans extension
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};