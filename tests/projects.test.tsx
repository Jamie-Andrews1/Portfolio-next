import { describe, it, expect } from "vitest";
import { getProjects } from "../src/projects";

describe("getProjects with Actual Data", () => {
  it("should read real metadata from the filesystem", async () => {
    const projects = await getProjects();

    // Verify it actually found your real folders
    expect(projects.length).toBeGreaterThan(0);

    // Verify the data matches your actual MDX frontmatter
    // For example, if your first project is 'portfolio'
    const portfolio = projects.find((p) => p.slug === "recipes");
    expect(portfolio).toBeDefined();
    expect(portfolio?.title).toBe("Recipe Sharer");
  });
});
