import styles from "../page.module.css";
import { getProjects } from "../../projects";
import { Projects, ProjectsSkeleton } from "@/components/Projects";
import { Suspense } from "react";

interface Props {}

export default async function page({}: Props) {
  const projects = await getProjects();
  return (
    <div className={styles.portfolio}>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects projects={projects} />
        <ProjectsSkeleton />
      </Suspense>
    </div>
  );
}
