import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '@/': path.resolve('./src/'),
    },
  },
}

export default config

export const route = {
  '/archive/:round/:slug': ({ round, slug }) => {
    // Load the corresponding content based on round and slug
    // You can import and render the appropriate Svelte component here
    // Example: import Content from `./${round}/${slug}.svelte`;
    // Return the content component
    return {
      module: Content,
      // Pass any props you want to the content component
      props: { round, slug },
    }
  },
}
