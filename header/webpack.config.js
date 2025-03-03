const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'header', 
      filename: 'remoteEntry.js', 
      exposes: {
        './Header': './src/Header', 
      },
      shared: {
        // react: { singleton: true },
        // 'react-dom': { singleton: true },
      },
    }),
  ],
};
