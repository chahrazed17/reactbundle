// craco.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ajoute Module Federation à la configuration existante
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
          name: "reactGitHubApp",           // ← nom global pour LWC (window.reactGitHubApp)
          filename: "remoteEntry.js",       // ← fichier à uploader en Static Resource
          exposes: {
            "./App": "./src/App.js",        // ← chemin vers ton composant racine
          },
          shared: {
            react: { singleton: true, requiredVersion: "^18.2.0" },
            "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
          },
        }),
      ];
      return webpackConfig;
    },
  },
};
