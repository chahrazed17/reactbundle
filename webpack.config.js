const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    
    output: {
        filename: 'reactAppBundle.js', 
        path: path.resolve(__dirname, 'dist'),
        library: 'ReactApp', 
        libraryTarget: 'window', 
        libraryExport: 'default', 
    },

    // --- CORRECTION CRUCIALE : Exclure React et ReactDOM du bundle ---
    externals: {
        // 'react' dans le code source React sera remplacé par la variable globale 'React'
        "react": "React", 
        // 'react-dom' dans le code source React sera remplacé par la variable globale 'ReactDOM'
        "react-dom": "ReactDOM" 
    },
    // -----------------------------------------------------------------

    module: {
        rules: [
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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/inline',
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
};