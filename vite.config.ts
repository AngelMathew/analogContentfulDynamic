/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  // prerender property to configure routes to be rendered at build time.
  plugins: [
    analog({
      static: true,
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/blog',
          {
            contentDir: 'src/content/blog',
            transform: (file: PrerenderContentFile) => {
              // do not include files marked as draft in frontmatter
              if (file.attributes?.['draft']) {
                return false;
              }
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes?.['slug'] || file.name;
              return `/blog/${slug}`;
            },

          },
        ],
        sitemap: {
          host: ' https://662a72e15de2a603cf015a9a--comforting-taiyaki-efdb1f.netlify.app/blog',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
