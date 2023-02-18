/// <reference types="vitest" />

import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig, { alias } from './vite.config';

// https://vitejs.dev/config/

export default mergeConfig(
  viteConfig,
  defineConfig({
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
  })
);
