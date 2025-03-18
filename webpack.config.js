import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

/** @type {import('webpack').Configuration} */
const config = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app.[contenthash].js",
    publicPath: "/",
  },
  optimization: {
    moduleIds: "named", // ✅ Uses meaningful names first
    chunkIds: "named",
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource", // ✅ Modern Webpack asset handling
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.ids.DeterministicModuleIdsPlugin({
      maxLength: 5, // ✅ Ensures large numbers like 61544
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[contenthash].css",
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  devServer: {
    static: [
      {
        directory: path.join(process.cwd(), "public"),
        publicPath: "/",
      },
      {
        directory: path.join(process.cwd(), "dist"),
      },
    ],
    compress: true,
    port: 8080,
    historyApiFallback: true, // ✅ For Vue Router support
  },
};

export default config; // ✅ Export as ESM
