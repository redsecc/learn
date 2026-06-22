import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Learning paths — metadata only (no body). Stored as YAML data files.
const paths = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/paths' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    order: z.number(),
    // One-glyph label used in the path card chamfer mark.
    icon: z.string().default('//'),
    // Optional accent override; defaults to brand red in the UI.
    accent: z.string().optional(),
  }),
});

// Lessons — MDX content with frontmatter.
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    path: z.string(), // a path slug
    order: z.number(),
    difficulty: z.enum(['intro', 'core', 'advanced']),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

// Labs — guided challenge pages (static; no live infra).
const labs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: z.object({
    title: z.string(),
    objective: z.string(),
    difficulty: z.enum(['intro', 'core', 'advanced']),
    summary: z.string().optional(),
    path: z.string().optional(),
    targetUrl: z.string().url().optional(),
    download: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Reference — cheatsheets / quick reference pages.
const reference = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reference' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { paths, lessons, labs, reference };
