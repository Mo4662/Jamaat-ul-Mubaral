// export default defineConfig({
//   plugins: [react()],
//   base: '/Jamaat-ul-Mubaral/'
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // must match your repo name exactly (case-sensitive)
  base: '/Jamaat-ul-Mubaral/',
})

