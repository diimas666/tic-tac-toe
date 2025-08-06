// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tic-tac-toe/', // ← важно! твой путь на GitHub Pages
});
