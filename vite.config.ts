import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // Add the directories where your images are stored
      allow: [
        '/Users/ratchanon/Desktop/Billy191/Optimism Project/RetroPGF-Forum/public/data',
        '/Users/ratchanon/Desktop/Billy191/RetroPGF-Forum/public/data/retroPGF2-dataset',
        // Add more directories if needed
      ],
    },
  },
})
