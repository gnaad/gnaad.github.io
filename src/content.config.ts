import { defineCollection } from 'astro:content';
import { z, coerce } from 'astro/zod';
import { glob } from 'astro/loaders';
import octiconsData from '@primer/octicons/build/data.json' with { type: 'json' };
import type { IconName } from '@primer/octicons';

const octicons = Object.keys(octiconsData) as IconName[];

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resume/projects' }),
  schema: z.object({
    title: z.string().meta({ description: 'Project title/name' }),
    icon: z.enum(octicons).meta({ description: 'Icon (via octicons)' }),
    link: z.url().meta({ description: 'Link to project' }),
    stack: z.array(z.string()).meta({ description: 'Tech stack' }).optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resume/work' }),
  schema: z.object({
    title: z.string().meta({ description: 'Job title' }),
    company: z.string(),
    period: z
      .string()
      .meta({ description: 'A human-readable date range' })
      .transform((val, ctx) => {
        const res = val
          .split('-')
          .map(x => x.trim())
          .map(x => (x === 'Present' ? new Date().toDateString() : x))
          .map(date => coerce.date().safeParse(date))
          .filter(r => r.success);

        if (res.length !== 2) {
          ctx.issues.push({
            code: 'custom',
            input: val,
            message: `Period must be a valid date range (where the word 'Present' is allowed for the end date) separated by a hyphen (e.g., "Oct 2024 - Apr 2025", "Oct 2024 - Present")`,
          });

          return z.NEVER;
        }

        return { raw: val, start: res[0]?.data as Date, end: res[1]?.data as Date };
      }),
  }),
});

export const collections = { projects, work };
