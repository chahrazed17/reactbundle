const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'reactGitHubApp',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App.js', // composant racine React
          },
          shared: {
            react: { singleton: true, requiredVersion: deps.react },
            'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
          },
        })
      );
      return webpackConfig;
    },
  },
};
