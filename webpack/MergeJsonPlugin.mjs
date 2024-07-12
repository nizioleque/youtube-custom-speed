import fs from "fs";
import path from "path";
import { merge } from "webpack-merge";

// adapted from sibiraj-s on GitHub
// https://github.com/sibiraj-s/merge-json-webpack-plugin/blob/master/src/index.js

const PluginName = "MergeJsonPlugin";

class MergeJsonPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(PluginName, (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: PluginName,
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        async () => {
          try {
            await this.processJson(compiler, compilation);
          } catch (err) {
            compilation.errors.push(err);
          }
        },
      );
    });
  }

  async processJson(compiler, compilation) {
    const RawSource = compiler.webpack.sources.RawSource;
    const { files, to: outputPath } = this.options;

    if (files === undefined || outputPath === undefined) {
      throw new Error(`Missing required options`);
    }

    const filePaths = files.map((file) =>
      path.isAbsolute(file)
        ? file
        : path.resolve(compiler.options.context, file),
    );

    const filePromises = filePaths.map(async (filePath) => {
      const fileExists = fs.existsSync(filePath);

      if (!fileExists) {
        const err = `File does not exist: ${filePath}`;
        throw new Error(err);
      }

      compilation.fileDependencies.add(filePath);

      const jsonStr = await fs.promises.readFile(filePath, "utf-8");
      return JSON.parse(jsonStr);
    });

    const fileContents = await Promise.all(filePromises);
    const mergedJson = merge(...fileContents);
    const formattedJson = JSON.stringify(mergedJson);
    const outputJson = new RawSource(formattedJson);

    compilation.emitAsset(outputPath, outputJson);
  }
}

export default MergeJsonPlugin;
