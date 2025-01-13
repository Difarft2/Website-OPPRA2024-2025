import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {visualizer} from 'rollup-plugin-visualizer';
// import svgo from 'vite-plugin-svgo';

// https://vite.dev/config/
export default defineConfig({
  base: '/web2024/',
  define: {
    "process.env.BLUEBIRD_DEBUG": "true",
  },
  plugins: [
    react(),
    // visualizer(),
    // svgo({
    //   svgoConfig: {
    //     plugins: [
    //       { removeViewBox: false },
    //       { removeDimensions: true },
    //     ],
    //   },
    // }),
  ],
  build: {
    manifest: true,
    outDir: "dist",
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      output: {
        manualChunks: {
          docxHandler: ["mammoth"],
          vendor: ["react", "react-dom"],
        },
      },
    },
    optimizeDeps: {
      exclude: ["bluebird"],
    },
  },
});