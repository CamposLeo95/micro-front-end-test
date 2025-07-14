import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_dash',
      filename: 'remoteEntry.js',
      exposes: { './HelloDash': './src/HelloDash.tsx' },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext', cssCodeSplit: false },
  server: { port: 5001, strictPort: true },
  preview: {
    port: 5001,        
    strictPort: true,
  },
});