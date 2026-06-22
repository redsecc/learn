import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// RedSec deploys to the custom domain redsec.cc, so the site lives at the
// domain root and `base` stays '/'. If you ever move this to a project page
// (https://<USERNAME>.github.io/<REPO>) set `base: '/<REPO>'` and point
// `site` at the github.io URL instead.
export default defineConfig({
  site: 'https://redsec.cc',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    // expressive-code must be registered before mdx so its code blocks win.
    // Options live in ./ec.config.mjs so the <Code> component works in pages.
    expressiveCode(),
    mdx(),
    sitemap(),
  ],
});
