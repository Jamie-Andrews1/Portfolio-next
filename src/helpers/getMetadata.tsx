export async function getMetadata(name: any) {
  const { metadata } = await import(`../app/(projects)/${name}/page.mdx`);
  return metadata;
}
