import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // Add the directories where your images are stored
      allow: [
        '/Users/ratchanon/Desktop/Billy191/RetroPGF-Hub',
        "/home/chaiyapatoam/project/RetroPGF-Hub"
        // Add more directories if needed
      ],
    },
  },
})
