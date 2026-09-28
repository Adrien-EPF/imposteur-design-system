import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.css"],
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom"],
});
