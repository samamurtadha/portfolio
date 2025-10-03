import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // allow Vue to handle both .vue and .md
    }),
    Markdown()
  ],
})
