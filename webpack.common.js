const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: path.join(__dirname, "src/content.jsx")
  },
  output: {
    path: path.join(__dirname, "build/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "../" }
      ],
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"]
  }
};
