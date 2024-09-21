import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],   

  base: '/my-app', // Se você estiver usando um caminho base customizado
  build: {
    outDir: 'build', // Diretório de saída do build
  },
});