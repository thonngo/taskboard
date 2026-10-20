import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Не забудь вернуть плагин React!
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})