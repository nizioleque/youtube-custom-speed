import { merge } from "webpack-merge";
import MergeJsonPlugin from "./MergeJsonPlugin.mjs";
import common from "./webpack.common.mjs";

export default merge(common, {
  mode: "production",
  plugins: [
    new MergeJsonPlugin({
      files: [
        "manifest/manifest.common.json",
        "manifest/manifest.production.json",
      ],
      to: "../manifest.json",
    }),
  ],
});
