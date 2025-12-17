
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'product.html'),
                novidades: resolve(__dirname, 'novidades.html'),
                about: resolve(__dirname, 'about.html'),
            },
        },
    },
});
