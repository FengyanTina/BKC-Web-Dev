import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    //base: '/BKC-Web-Dev/',
    base: '/',
  plugins: [react()],
})
