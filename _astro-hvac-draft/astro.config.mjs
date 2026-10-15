import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://prestigedataops.com",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
});
