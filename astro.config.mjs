import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // site: "https://gabrielforster.github.io",
  base: "/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  adapter: vercelStatic()
});
