import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Learning content. Files live under src/content/learn/<section>/<page>.mdx,
// so the entry id is "<section>/<page>". The section is derived from the id's
// first path segment.
const learn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    level: z.enum(['intro', 'core', 'advanced']).default('intro'),
    kind: z.enum(['tutorial', 'lab', 'reference', 'path']).default('tutorial'),
    duration: z.string().optional(),
  }),
});

export const collections = { learn };
