const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // File extensions to resolve
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "public/index.html"),
  })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'ts-loader',
        // exclude: /node_modules/,
        exclude: /node_modules|\.d\.ts$/, // this line as well
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false, // this option will solve the issue
            },
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    port: 3000,
  },
};