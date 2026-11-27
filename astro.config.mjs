// @ts-check
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeHighlight from 'rehype-highlight';
import { common } from 'lowlight';
import apache from 'highlight.js/lib/languages/apache';
import properties from 'highlight.js/lib/languages/properties';

// Last change of each blog post, keyed by slug (the file name), for the sitemap
const postsDir = './src/content/blog/posts';
const postLastmod = Object.fromEntries(
  fs.readdirSync(postsDir).map((file) => {
    const source = fs.readFileSync(`${postsDir}/${file}`, 'utf-8');
    const [, date] =
      source.match(/^updated:\s*"?([^"\n]+)"?$/m) ??
      source.match(/^date:\s*"?([^"\n]+)"?$/m) ??
      [];
    return [file.replace(/\.md$/, ''), date];
  }),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.neuron-ai.dev',
  markdown: {
    // Blog code snippets are highlighted with highlight.js at build time
    syntaxHighlight: false,
    processor: unified({
      rehypePlugins: [
        [rehypeHighlight, { languages: { ...common, apache, properties } }],
      ],
    }),
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(partners|become-a-partner)\/$/.test(page),
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1];
        if (slug && postLastmod[slug]) {
          item.lastmod = new Date(postLastmod[slug]).toISOString();
        }
        return item;
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '~components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '~styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '~assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '~consts': fileURLToPath(new URL('./src/consts', import.meta.url)),
      },
    },
  },
});
