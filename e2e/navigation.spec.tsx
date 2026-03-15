import { test, expect } from "@playwright/test";

test("verify all internal navigation links are functional", async ({
  page,
}) => {
  await page.goto("/");

  // 1. Get all hrefs from 'a' tags that start with '/' (internal links)
  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll((links: HTMLAnchorElement[]) =>
      links.map((link) => link.getAttribute("href")),
    );

  // 2. Filter out duplicates and the root
  const uniqueLinks = Array.from(new Set(hrefs)).filter((link) => link !== "/");

  for (const link of uniqueLinks) {
    console.log(`Checking navigation to: ${link}`);

    // 3. Navigate and check for success
    if (link) {
      await page.goto(link, { waitUntil: "domcontentloaded" });
      const response = await page.goto(link);

      // Ensure the page didn't 404 or 500
      expect(response?.status()).toBeLessThan(400);
    }

    // Optional: Ensure a common element (like your Nav or Footer) still exists
    await expect(page.locator("nav")).toBeVisible();
  }
});
