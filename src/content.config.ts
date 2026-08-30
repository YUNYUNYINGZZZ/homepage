import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    status: z.enum(['进行中', '已完成']),
    tags: z.array(z.string()).default([]),
  }),
});

const shares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shares' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['book', 'movie', 'game', 'music', 'other']),
    creator: z.string(),
    year: z.number().optional(),
    genre: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { thoughts, skills, shares };
