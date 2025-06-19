export async function getMetadata(name: string) {
  const { metadata } = await import(`../app/(projects)/${name}/page.mdx`);
  return metadata;
}
