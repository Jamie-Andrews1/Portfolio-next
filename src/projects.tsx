import { readdir } from "fs/promises";
import { type project } from "./helpers/projectTypes";

export async function getProjects(): Promise<project[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir("./src/app/(projects)", { withFileTypes: true })
  ).filter(dirent => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const projects = await Promise.all(
    slugs.map(async ({ name }) => {
      if (name) {
        const { metadata } = await import(`./app/(projects)/${name}/page.mdx`);

        return { slug: name, ...metadata };
      } else {
        console.warn(`page not found: ${name}`);
        return null;
      }
    })
  );
  return projects.filter(p => p !== null); // Exclude null entries
}
