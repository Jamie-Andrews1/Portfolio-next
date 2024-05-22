import { project } from "@/helpers/projectTypes";
import Link from "next/link";
import styles from "./projects.module.css";
import { Suspense } from "react";
import { Modal, ImageSkeleton } from "@/components/Modal/Modal";

export function Projects({ projects }: { projects: project[] }) {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <h3>Projects &amp; Websites I&apos;ve Created</h3>
      <div className={styles.projects} id="modal-root">
        {projects.map(({ slug, title, thumb, stack, desc, featuredImg }) => (
          <div key={slug}>
            <Suspense fallback={<ImageSkeleton />}>
              <Modal
                content={{
                  title: title,
                  image: thumb,
                  desc: desc,
                  banner: featuredImg,
                  slug: slug,
                }}
              />
            </Suspense>
            <Link href={`/${slug}`} title="Project Page">
              <h3>{title}</h3>
              <p>{stack}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div>
      <div
        style={{ width: "100%", height: "300px", backgroundColor: "gray" }}
      ></div>
      <h3
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "gray",
        }}
      ></h3>
      <p
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "gray",
        }}
      ></p>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <h3>Projects &amp; Websites I&apos;ve Created</h3>
      <div className={styles.projects} id="modal-root">
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
    </div>
  );
}
