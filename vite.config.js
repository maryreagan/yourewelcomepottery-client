import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "src/fonts", // This sets the output path for assets (including fonts)

        entryFileNames: "js/app-[name]-[hash].js", // This sets the output pattern for entry (main) JavaScript files

      },
    },
    assetsInclude: /\.(woff|woff2|ttf|eot|otf)$/i, // Include common font file extensions
  },
  css: {
    assetFileNames: "css/app-[name].css",
  },
});
