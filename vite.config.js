import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['workInProgres.png'] // Agrega aquí el nombre del archivo que deseas externalizar
    }
  }




})

