import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    Icons(),
    laravel({
      input: 'resources/js/app.js',
      ssr: 'resources/js/ssr.js',
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      '~css': path.resolve('resources/css'),
      '~data': path.resolve('resources/data'),
      '~img': path.resolve('resources/img'),
      'ziggy-js': path.resolve('vendor/tightenco/ziggy')
    }
  }
});
