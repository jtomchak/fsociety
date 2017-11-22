module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.rs$/,
        use: {
          loader: "rust-wasm-loader",
          options: {
            // The path to the webpack output relative to the project root
            path: "build"
          }
        }
      }
    ]
  },
  // The .wasm 'glue' code generated by Emscripten requires these node builtins,
  // but won't actually use them in a web environment. We tell Webpack to not resolve those
  // require statements since we know we won't need them.
  externals: {
    fs: true,
    path: true
  }
};
