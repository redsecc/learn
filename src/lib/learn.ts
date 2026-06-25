import { getCollection, type CollectionEntry } from 'astro:content';

export interface Section {
  slug: string;
  title: string;
  summary: string;
  icon: string;
}

// Ordered top-level sections. Add/reorder here; pages are discovered from
// src/content/learn/<section>/<page>.mdx.
export const SECTIONS: Section[] = [
  {
    slug: 'getting-started',
    title: 'Getting started',
    summary: 'New here? Start with the platform, safe practice, and study habits.',
    icon: '>',
  },
  {
    slug: 'foundations',
    title: 'Security foundations',
    summary: 'Core concepts: risk, trust boundaries, threat modeling, and HTTP basics.',
    icon: 'fn',
  },
  {
    slug: 'tooling-workflows',
    title: 'Tools and workflows',
    summary: 'Practical workflows for notes, terminals, proxies, wordlists, and repeatable testing.',
    icon: 'tl',
  },
  {
    slug: 'linux',
    title: 'Linux',
    summary: 'Shell skills, permissions, services, logs, and safe privilege escalation practice.',
    icon: 'sh',
  },
  {
    slug: 'networking',
    title: 'Networking',
    summary: 'TCP/IP, DNS, TLS, routing, service discovery, and packet analysis.',
    icon: 'ip',
  },
  {
    slug: 'web-security',
    title: 'Web security',
    summary: 'How modern web apps work and where common security assumptions fail.',
    icon: 'www',
  },
  {
    slug: 'api-security',
    title: 'API security',
    summary: 'REST, GraphQL, authorization, schema review, and safe API testing.',
    icon: 'api',
  },
  {
    slug: 'authentication',
    title: 'Authentication',
    summary: 'Login flows, sessions, reset logic, MFA, OAuth, and identity mistakes.',
    icon: 'key',
  },
  {
    slug: 'access-control',
    title: 'Access control',
    summary: 'Ownership checks, role boundaries, multi-tenant data, and authorization review.',
    icon: 'acl',
  },
  {
    slug: 'injection',
    title: 'Injection',
    summary: 'SQL, command, template, LDAP, and deserialization injection fundamentals.',
    icon: 'sql',
  },
  {
    slug: 'client-side-security',
    title: 'Client-side security',
    summary: 'Browser trust, JavaScript review, XSS, CORS, CSP, and frontend storage.',
    icon: 'js',
  },
  {
    slug: 'cloud-security',
    title: 'Cloud security',
    summary: 'Identity, storage, serverless, metadata, logging, and cloud review patterns.',
    icon: 'cld',
  },
  {
    slug: 'containers',
    title: 'Containers',
    summary: 'Docker, Kubernetes, image hygiene, runtime boundaries, and cluster basics.',
    icon: 'ctr',
  },
  {
    slug: 'active-directory',
    title: 'Active Directory',
    summary: 'Windows domains, Kerberos concepts, delegation, and defensive lab practice.',
    icon: 'ad',
  },
  {
    slug: 'cryptography',
    title: 'Cryptography',
    summary: 'Practical crypto failures: encoding, randomness, modes, tokens, and protocols.',
    icon: 'xor',
  },
  {
    slug: 'forensics',
    title: 'Forensics',
    summary: 'Files, memory, logs, packet captures, timelines, and evidence handling.',
    icon: 'img',
  },
  {
    slug: 'reverse-engineering',
    title: 'Reverse engineering',
    summary: 'Static and dynamic analysis, file formats, strings, control flow, and patching basics.',
    icon: 'rev',
  },
  {
    slug: 'binary-exploitation',
    title: 'Binary exploitation',
    summary: 'Memory layout, mitigations, crashes, and lab-only exploitation concepts.',
    icon: 'bin',
  },
  {
    slug: 'ctfs',
    title: 'CTFs',
    summary: 'Capture the flag: formats, tooling, and worked challenges.',
    icon: 'ctf',
  },
  {
    slug: 'bug-bounties',
    title: 'Bug bounties',
    summary: 'Hunt real targets: recon, scoping, and reports that pay.',
    icon: 'bb',
  },
  {
    slug: 'finding-vulnerabilities',
    title: 'Finding vulnerabilities',
    summary: 'The core bug classes and how to actually find them.',
    icon: 'bug',
  },
  {
    slug: 'reporting-career',
    title: 'Reporting and career',
    summary: 'Clear writeups, responsible disclosure, portfolios, interviews, and growth.',
    icon: 'rep',
  },
];

export const sectionMeta = (slug: string): Section | undefined =>
  SECTIONS.find((s) => s.slug === slug);

export const sectionOf = (id: string): string => id.split('/')[0];
export const pageSlugOf = (id: string): string => id.split('/').slice(1).join('/');

export type Lesson = CollectionEntry<'learn'>;

/** All lessons sorted by section order, then page order. */
export async function getSortedLessons(): Promise<Lesson[]> {
  const lessons = await getCollection('learn');
  const sectionIndex = (id: string) =>
    SECTIONS.findIndex((s) => s.slug === sectionOf(id));
  return lessons.sort((a, b) => {
    const sa = sectionIndex(a.id);
    const sb = sectionIndex(b.id);
    if (sa !== sb) return sa - sb;
    return a.data.order - b.data.order;
  });
}

/** Lessons grouped by section, in section + page order. */
export async function getLessonsBySection(): Promise<{ section: Section; pages: Lesson[] }[]> {
  const lessons = await getSortedLessons();
  return SECTIONS.map((section) => ({
    section,
    pages: lessons
      .filter((d) => sectionOf(d.id) === section.slug)
      .sort((a, b) => a.data.order - b.data.order),
  })).filter((g) => g.pages.length > 0);
}
