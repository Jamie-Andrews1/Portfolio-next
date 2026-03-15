import { readdir } from "fs/promises";
import { type project } from "./helpers/projectTypes";
import * as z from "zod";

const ProjectSchema = z.object({
  index: z.number(),
  title: z.string(),
  stack: z.string(),
  slug: z.string(),
  thumb: z.string(),
  featuredImg: z.string(),
  url: z.string(),
  desc: z.string(),
});

export async function getProjects(): Promise<project[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/(projects)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const projects = await Promise.all(
    slugs.toReversed().map(async ({ name }) => {
      if (name) {
        const { metadata } = await import(
          /* @vite-ignore */ `./app/(projects)/${name}/page.mdx`
        );
        const validated = ProjectSchema.safeParse(metadata);

        if (!validated.success) {
          console.error(`Project ${name} has bad data:`, validated.error);
          return null;
        }
        return validated.data;
      }
    }),
  );

  return projects
    .filter((p): p is project => p !== null)
    .sort((a, b) => a.index - b.index);
}
