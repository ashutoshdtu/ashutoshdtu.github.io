import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.ashutoshmishra.net',
    compressHTML: true,
    build: {
        assets: '_assets',
        inlineStylesheets: 'auto',
        // assetsPrefix: 'https://cdn.example.com'
    },
});
