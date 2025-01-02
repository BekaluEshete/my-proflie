import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Personal-Portfolio/',  // Ensure this is correct for your app's subdirectory if needed
  root: '.',
  build: {
    rollupOptions: {
      input: './src/index.jsx', // Specify the custom entry point
    }, 
   } // Set the root directory to current working directory
})
// git remote rename origin old-origin