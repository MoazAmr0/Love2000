import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/M.H/',
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 3000, host: '0.0.0.0' },
});