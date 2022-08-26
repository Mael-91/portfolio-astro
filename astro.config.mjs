import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind()],
  server: {
    port: 3000,
    host: '51.38.234.233'
  }
});