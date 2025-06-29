import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.js']),
        vue(),
    ],
});
