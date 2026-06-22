import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// RedSec deploys to the custom domain redsec.cc, so the site lives at the
// domain root and `base` stays '/'. If you ever move this to a project page
// (https://<USERNAME>.github.io/<REPO>) set `base: '/<REPO>'` and point
// `site` at the github.io URL instead.
export default defineConfig({
  site: 'https://learn.redsec.cc',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    // expressive-code must be registered before mdx so its code blocks win.
    // Options live in ./ec.config.mjs so the <Code> component works in pages.
    expressiveCode(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        // Prioritise the landing page and the learning content.
        if (item.url === 'https://learn.redsec.cc/') {
          item.priority = 1.0;
        } else if (/\/(lessons|paths)\//.test(item.url)) {
          item.priority = 0.8;
        } else if (/\/(labs|reference)\//.test(item.url)) {
          item.priority = 0.7;
        } else {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});
