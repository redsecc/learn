import { getCollection, type CollectionEntry } from 'astro:content';

export interface Section {
  slug: string;
  title: string;
  summary: string;
  icon: string;
}

// Ordered top-level sections (the GitBook-style groups). Add/reorder here.
export const SECTIONS: Section[] = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    summary: 'New here? What RedSec is and how to set up to follow along.',
    icon: '>',
  },
  {
    slug: 'ctfs',
    title: 'CTFs',
    summary: 'Capture the flag: formats, tooling, and worked challenges.',
    icon: '{}',
  },
  {
    slug: 'bug-bounties',
    title: 'Bug bounties',
    summary: 'Hunt real targets: recon, scoping, and reports that pay.',
    icon: '$',
  },
  {
    slug: 'finding-vulnerabilities',
    title: 'Finding vulnerabilities',
    summary: 'The core bug classes and how to actually find them.',
    icon: '#',
  },
];

export const sectionMeta = (slug: string): Section | undefined =>
  SECTIONS.find((s) => s.slug === slug);

export const sectionOf = (id: string): string => id.split('/')[0];
export const pageSlugOf = (id: string): string => id.split('/').slice(1).join('/');

export type Doc = CollectionEntry<'docs'>;

/** All docs sorted by section order, then page order. */
export async function getSortedDocs(): Promise<Doc[]> {
  const docs = await getCollection('docs');
  const sectionIndex = (id: string) =>
    SECTIONS.findIndex((s) => s.slug === sectionOf(id));
  return docs.sort((a, b) => {
    const sa = sectionIndex(a.id);
    const sb = sectionIndex(b.id);
    if (sa !== sb) return sa - sb;
    return a.data.order - b.data.order;
  });
}

/** Docs grouped by section, in section + page order. */
export async function getDocsBySection(): Promise<{ section: Section; pages: Doc[] }[]> {
  const docs = await getSortedDocs();
  return SECTIONS.map((section) => ({
    section,
    pages: docs
      .filter((d) => sectionOf(d.id) === section.slug)
      .sort((a, b) => a.data.order - b.data.order),
  })).filter((g) => g.pages.length > 0);
}
