import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins:   
 [react()],
  base: '/', // Define a base para os URLs
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ['framer-motion'], // Add Framer Motion to the include list if necessary
  },
});