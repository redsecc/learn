// Resolve an internal path against Astro's configured `base`.
// With the redsec.cc custom domain `base` is '/', so this is effectively an
// identity function — but using it everywhere means internal links keep
// working if the site is ever moved under a project subpath (e.g. /redsec).
const BASE = import.meta.env.BASE_URL; // e.g. '/' or '/redsec/'

export function withBase(path = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
