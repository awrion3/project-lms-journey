import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // additional configuration
    build: {
        outDir: 'dist'
    },
    server: {
        proxy: 'http://localhost:8080'
    }
})
