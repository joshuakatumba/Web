import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Support both VITE_ and NEXT_PUBLIC_ for Supabase public keys (never expose SUPABASE_SECRET_KEY)
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});

