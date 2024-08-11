import { defineConfig } from "rollup";
export default defineConfig({
  input: ["./index.js","./a/index.js"],
  output: {
    dir: "dist",
    entryFileNames: "entry-[name]-[hash].js",
  },
});
