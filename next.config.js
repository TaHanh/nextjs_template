const path = require('path');
const { i18n } = require('./next-i18next.config')

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/utils/generate-site-map.js')
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: ['file-loader'],
    })
    return config
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  i18n,
  output: {
    path: path.resolve(__dirname, 'app/dist'), // Where all the output files get dropped after webpack is done with them
    filename: 'bundle.js' // The name of the webpack bundle that's generated
  },
};
