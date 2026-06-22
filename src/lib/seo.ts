import { SITE } from './site';
import { withBase } from './base';

/** Absolute URL for a base-relative path (for JSON-LD `url`/`item`). */
export function abs(path = '/'): string {
  return new URL(withBase(path), SITE.url).href;
}

interface Crumb {
  name: string;
  path: string;
}

/** Build a schema.org BreadcrumbList node. */
export function breadcrumb(items: Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export const ORG_REF = { '@id': `${SITE.url}/#org` };
export const SITE_REF = { '@id': `${SITE.url}/#website` };
