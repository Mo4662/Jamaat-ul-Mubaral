import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Jamaat-ul-Mubaral/', // <= exact repo name, leading and trailing slashes
})
