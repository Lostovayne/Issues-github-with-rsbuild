import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: { index: "./src/main.tsx" },
    define: {
      "process.env": JSON.stringify({
        GITHUB_TOKEN: process.env.GITHUB_TOKEN
      }),
    },
  },
  html: {
    template: "./index.html",
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
});
