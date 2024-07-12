import { merge } from "webpack-merge";
import MergeJsonPlugin from "./MergeJsonPlugin.mjs";
import common from "./webpack.common.mjs";

export default merge(common, {
  mode: "development",
  devtool: "cheap-source-map",
  plugins: [
    new MergeJsonPlugin({
      files: [
        "manifest/manifest.common.json",
        "manifest/manifest.development.json",
      ],
      to: "../manifest.json",
    }),
  ],
});
