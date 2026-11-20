import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Everything on the site is an entry in the archive: SAE, internship, collage, VJ piece, set.
 * One file per entry and language: src/content/work/<lang>/<slug>.mdx
 * A missing fr/tr file falls back to the English one.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      kind: z.enum(['dev', 'visuals', 'collage', 'music']),
      year: z.number().int(),
      status: z.enum(['live', 'in-progress', 'design']).optional(),
      context: z.string().optional(),
      team: z.string().optional(),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Drawn header for a card without a screenshot yet. */
      illustration: z.enum(['bracket', 'sheet']).optional(),
      /** Name of a module in src/sketches: the page gets a live sketch stage. */
      sketch: z.string().optional(),
      featured: z.boolean().default(false),
      /** Higher first inside the same year. */
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, notes };
