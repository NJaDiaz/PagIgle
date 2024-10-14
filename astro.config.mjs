import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";


export default defineConfig({
  integrations: [tailwind(), react(), svelte()],
  build: {
    outDir: 'dist',
  },
  site: 'https://NJaDiaz.github.io',
  base: 'https://github.com/NJaDiaz/PagIgle.git',
});