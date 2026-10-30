// Blog collection: every .mdx file in src/content/blog/ becomes one post.
// The file name becomes the URL slug, e.g. src/content/blog/hello-world.mdx -> /blog/hello-world
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Accepts "2026-10-27" in frontmatter; coerced to a Date.
    pubDate: z.coerce.date(),
    // Path to an image in public/, e.g. "/blog/my-banner.jpg".
    // Put your banner in public/blog/ and write its path here.
    banner: z.string().optional(),
    bannerAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // draft: true -> hidden from the homepage section and /blog list.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
