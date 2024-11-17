import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@typings': path.resolve(__dirname, 'src/typings/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@elements': path.resolve(__dirname, 'src/components/elements/'),
      '@blocks': path.resolve(__dirname, 'src/components/blocks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@tables': path.resolve(__dirname, 'src/assets/tables/'),
      '@schedules': path.resolve(__dirname, 'src/assets/schedules/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
