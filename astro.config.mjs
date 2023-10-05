import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [
    sitemap(),
    react({
      include: ["**/react/*"],
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
