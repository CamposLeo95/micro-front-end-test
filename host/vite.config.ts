import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
    react(),
    federation({
      name: 'host_app',
      remotes: {
        remote_dash: 'http://localhost:5001/assets/remoteEntry.js',
        remote_clients: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
