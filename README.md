# RedSec — learning platform (learn.redsec.cc)

The RedSec learning site: a free, open, **GitBook-style** documentation app for
offensive security. No accounts, no trackers. Built with Astro + MDX.

> This is the `learn` site. The marketing/landing site (redsec.cc) lives on the
> **`main` branch** of `redsecc/website`. Deploy this one from its own repo
> (e.g. `redsecc/learn`) since GitHub Pages serves one site per repo.

## Structure

Docs are organized into **sections**, each a stack of MDX pages, rendered with a
persistent left sidebar, an "on this page" TOC, and prev/next navigation.

- Section metadata + ordering: `src/lib/docs.ts` (`SECTIONS`).
- Content: `src/content/docs/<section>/<page>.mdx`.
- Routes: `/` (landing), `/<section>` (section index), `/<section>/<page>` (doc).

### Add a page

1. Drop an MDX file in `src/content/docs/<section>/` with frontmatter:
   ```yaml
   ---
   title: My page
   order: 2
   summary: One-line description.
   ---
   ```
2. It appears in that section's sidebar and index automatically (ordered by
   `order`), with prev/next wired across the whole docs set.

### Add a section

Add an entry to `SECTIONS` in `src/lib/docs.ts`, then create
`src/content/docs/<new-section>/` with pages.

Use `import Callout from '../../../components/Callout.astro'` for note/tip/warning
callouts; fenced code blocks get copy buttons + terminal frames via Expressive
Code.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview
```

## Deploy (learn.redsec.cc)

`astro.config.mjs` sets `site: https://learn.redsec.cc`; `public/CNAME` pins the
domain; `.github/workflows/deploy.yml` builds + publishes via GitHub Pages.

1. Push this branch as `main` to its own repo (`redsecc/learn`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Settings → Pages → Custom domain: `learn.redsec.cc`, and add DNS:
   `CNAME  learn → redsecc.github.io`.

## License

[MIT](./LICENSE). For **authorized testing and education only**.
