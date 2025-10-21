import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hoja-deVida/', // 👈 debe coincidir EXACTAMENTE con el nombre del repositorio
});
