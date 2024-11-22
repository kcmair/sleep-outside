import { resolve } from 'path';
// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        cart: resolve(__dirname, 'src/cart/index.html'),
        product: resolve(__dirname, 'src/product_pages/index.html'),
        product_list: resolve(__dirname, 'src/product-list/index.html'),
        checkout: resolve(__dirname, 'src/checkout/index.html'),
        checkout_success: resolve(__dirname, 'src/checkout/success.html'),
        login: resolve(__dirname, 'src/login/index.html'),
        orders: resolve(__dirname, 'src/orders/index.html'),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/partials', // Path to the source directory
          dest: 'partials', // Path to the destination in `dist`
        },
      ],
    }),
  ],
});
