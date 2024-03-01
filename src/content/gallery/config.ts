import { defineCollection, z } from "astro:content";
import fs from "node:fs/promises";

export const gallery = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: z.string().transform(async (altText) => {
        if (altText.startsWith("./")) {
          const url = new URL(altText.substring(2), import.meta.url);
          const file = fs.readFile(url, "utf8");
          return file;
        }
        return altText;
      }),
    }),
});
