import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/** @type {import('tailwindcss').Config} */



// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00D9FF',
          500: '#00B8D4',
        },
        slate: {
          900: '#1A2332',
          800: '#2D3E50',
          700: '#3D4F63',
        }
      }
    },
  },
  plugins: [react(), tailwindcss()],
})
