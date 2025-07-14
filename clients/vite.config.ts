import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_clients',
      filename: 'remoteEntry.js',
      exposes: { 
        './HelloClients': './src/HelloClients.tsx',
        './ButtonClient': './src/ButtonClient.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext', cssCodeSplit: false },
  server: { port: 5002, strictPort: true },
  preview: { port: 5002, strictPort: true},
});
