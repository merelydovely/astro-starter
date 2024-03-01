import { defineCollection, z } from "astro:content";
import { parseInline } from "marked";

export const updates = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string().transform((title) => parseInline(title) ?? ""),
      created_at: z.date(),
      tags: z.array(z.string()).optional().default([]),
    }),
});
