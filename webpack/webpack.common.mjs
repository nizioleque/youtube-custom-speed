import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export default {
  entry: {
    content: "./src/content-script/index.tsx",
    action: "./src/action/index.tsx",
    background: "./src/background/index.ts",
  },
  module: {
    rules: [
      {
        include: path.resolve("./static"),
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        loader: "@svgr/webpack",
        options: { typescript: true },
      },
      {
        include: path.resolve("./src"),
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: { target: "esnext" },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "static", to: "../static" },
        { from: "_locales", to: "../_locales", noErrorOnMissing: true },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", "..."],
  },
  output: {
    path: path.resolve("./dist/js"),
    filename: "[name].js",
    clean: true,
  },
};
