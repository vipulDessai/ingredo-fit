import chokidar from "chokidar";
import tcm from "typed-css-modules";
import glob from "glob";

const { create } = tcm;

export class TypedCssModulesPlugin {
  constructor(options = {}) {
    this.watchPattern = options.watchPattern || "src/**/*.module.css";
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tapPromise("TypedCssModulesPlugin", async () => {
      await this.generateTypes();
    });

    compiler.hooks.watchRun.tap("TypedCssModulesPlugin", (compilation) => {
      this.startWatching();
    });
  }

  async generateTypes() {
    const tcm = create();
    const files = await this.getFiles(this.watchPattern);

    for (const file of files) {
      console.log(`[Typed CSS Modules] Generating types for ${file}`);
      await tcm.process(file, { outDir: path.dirname(file) });
    }
  }

  startWatching() {
    const watcher = chokidar.watch(this.watchPattern, {
      persistent: true,
    });

    watcher.on("change", async (filePath) => {
      console.log(`[Typed CSS Modules] Regenerating types for ${filePath}`);
      const tcm = create();
      await tcm.process(filePath, { outDir: path.dirname(filePath) });
    });
  }

  async getFiles(pattern) {
    return new Promise((resolve, reject) => {
      glob(pattern, (err, files) => {
        if (err) reject(err);
        else resolve(files);
      });
    });
  }
}
