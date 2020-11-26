const path = require("path");

module.exports = {
  entry: [
    "./src/js/dom-to-image.min.js",
    "./src/js/FileSaver.min.js",
    "./src/js/clipboard.min.js",
    "./src/js/form.js",
    "./src/js/export.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devtool: false,
  devServer: {
    contentBase: path.resolve(__dirname, "./src/"),
    port: 3999,
  }
};
