import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]", // This sets the output path for assets (including fonts)
      },
    },
    assetsInclude: /\.(woff|woff2|ttf|eot|otf)$/i, // Include common font file extensions
  },
});
