// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/kcmair/developer/Byu-I/WDD_330/sleep-outside/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/kcmair/developer/Byu-I/WDD_330/sleep-outside";
var vite_config_default = defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/index.html"),
        cart: resolve(__vite_injected_original_dirname, "src/cart/index.html"),
        product: resolve(__vite_injected_original_dirname, "src/product_pages/index.html"),
        product_list: resolve(__vite_injected_original_dirname, "src/product-list/index.html"),
        checkout: resolve(__vite_injected_original_dirname, "src/checkout/index.html"),
        checkout_success: resolve(__vite_injected_original_dirname, "src/checkout/success.html"),
        login: resolve(__vite_injected_original_dirname, "src/login/index.html"),
        orders: resolve(__vite_injected_original_dirname, "src/orders/index.html")
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/partials",
          // Path to the source directory
          dest: "partials"
          // Path to the destination in `dist`
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2NtYWlyL2RldmVsb3Blci9CeXUtSS9XRERfMzMwL3NsZWVwLW91dHNpZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rY21haXIvZGV2ZWxvcGVyL0J5dS1JL1dERF8zMzAvc2xlZXAtb3V0c2lkZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2NtYWlyL2RldmVsb3Blci9CeXUtSS9XRERfMzMwL3NsZWVwLW91dHNpZGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25hbWVzcGFjZVxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiAnc3JjLycsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXguaHRtbCcpLFxuICAgICAgICBjYXJ0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jYXJ0L2luZGV4Lmh0bWwnKSxcbiAgICAgICAgcHJvZHVjdDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcHJvZHVjdF9wYWdlcy9pbmRleC5odG1sJyksXG4gICAgICAgIHByb2R1Y3RfbGlzdDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcHJvZHVjdC1saXN0L2luZGV4Lmh0bWwnKSxcbiAgICAgICAgY2hlY2tvdXQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NoZWNrb3V0L2luZGV4Lmh0bWwnKSxcbiAgICAgICAgY2hlY2tvdXRfc3VjY2VzczogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY2hlY2tvdXQvc3VjY2Vzcy5odG1sJyksXG4gICAgICAgIGxvZ2luOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9sb2dpbi9pbmRleC5odG1sJyksXG4gICAgICAgIG9yZGVyczogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvb3JkZXJzL2luZGV4Lmh0bWwnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJ3NyYy9wYXJ0aWFscycsIC8vIFBhdGggdG8gdGhlIHNvdXJjZSBkaXJlY3RvcnlcbiAgICAgICAgICBkZXN0OiAncGFydGlhbHMnLCAvLyBQYXRoIHRvIHRoZSBkZXN0aW5hdGlvbiBpbiBgZGlzdGBcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxlQUFlO0FBRW5XLFNBQVMsb0JBQW9CO0FBRjdCLElBQU0sbUNBQW1DO0FBR3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUN6QyxNQUFNLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsUUFDOUMsU0FBUyxRQUFRLGtDQUFXLDhCQUE4QjtBQUFBLFFBQzFELGNBQWMsUUFBUSxrQ0FBVyw2QkFBNkI7QUFBQSxRQUM5RCxVQUFVLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsUUFDdEQsa0JBQWtCLFFBQVEsa0NBQVcsMkJBQTJCO0FBQUEsUUFDaEUsT0FBTyxRQUFRLGtDQUFXLHNCQUFzQjtBQUFBLFFBQ2hELFFBQVEsUUFBUSxrQ0FBVyx1QkFBdUI7QUFBQSxNQUNwRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsS0FBSztBQUFBO0FBQUEsVUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
