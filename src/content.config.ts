import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const bio = defineCollection({
  loader: glob({ pattern: "bio.md", base: "./src/content" }),
  schema: z.object({ name: z.string(), avatar: z.string(), institution: z.string(), shortBio: z.string() }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    order: z.number(), institution: z.string(), program: z.string(), dates: z.string().optional(),
    logo: z.string().optional(), details: z.array(z.string()).default([]),
  }),
});

const overview = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/overview" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    href: z.string(),
    linkLabel: z.string(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    order: z.number(), organization: z.string(), role: z.string(), dates: z.string(),
    location: z.string().optional(), logo: z.string(), description: z.string().optional(),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leadership" }),
  schema: z.object({ order: z.number(), organization: z.string(), position: z.string() }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    order: z.number(), organization: z.string(), role: z.string(), advisor: z.string(),
    dates: z.string(), logo: z.string(), description: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    order: z.number(), title: z.string(), authors: z.string(), equalContribution: z.string().optional(),
    venue: z.string(), description: z.string().optional(), paper_url: z.url().nullable(),
    paper_label: z.string(), code_url: z.url(), results_url: z.url(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    order: z.number(), title: z.string(), subtitle: z.string().optional(), award: z.string().optional(),
    description: z.string(), technologies: z.array(z.string()).min(3).max(5),
    links: z.array(z.object({ label: z.string(), url: z.string() })),
    image: z.string(), imageAlt: z.string(),
  }),
});

export const collections = { bio, overview, education, leadership, work, research, publications, projects };
