import { getProjects } from "@/projects";
import { Link } from "next-view-transitions";

export default async function page() {
  const projects = await getProjects();
  return (
    <ul style={{ listStyle: "none", marginLeft: "10px" }}>
      {projects.map((p) => (
        <Link href={`/${p.slug}`} key={p.index}>
          <li>{p.stack}</li>
        </Link>
      ))}
    </ul>
  );
}
