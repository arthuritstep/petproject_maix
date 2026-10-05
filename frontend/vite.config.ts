import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // или другой используемый плагин

export default defineConfig({
  plugins: [react()], // убедитесь, что функция плагина вызвана внутри массива
})
