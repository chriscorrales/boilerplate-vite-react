/// <reference types="vitest" />
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

function isExternal(id: string) {
  return !id.startsWith('.') && !path.isAbsolute(id) && !id.startsWith('@');
}

const alias = {
  '@': path.resolve(__dirname, './src'),
  '@Components': path.resolve(__dirname, './src/components/'),
  '@Hooks': path.resolve(__dirname, './src/hooks'),
  '@Store': path.resolve(__dirname, './src/store'),
  '@Utils': path.resolve(__dirname, './src/utils')
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.spec.tsx'],
    alias: alias
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      fileName: 'core',
      entry: path.resolve(__dirname, './src/index.tsx'),
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: isExternal
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    deps: {
      registerNodeLoader: true
    },
    alias: alias,
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});
