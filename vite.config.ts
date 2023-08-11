import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path';

export default ({ mode }) =>
  defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly', // 我们使用驼峰形式
      },
    },
    server: {
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_BASE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
