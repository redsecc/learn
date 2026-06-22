import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Docs — GitBook-style documentation. Files live under
// src/content/docs/<section>/<page>.mdx, so the entry id is "<section>/<page>".
// The section is derived from the id's first path segment.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { docs };
