import React from "react";
import dynamic from "next/dynamic";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { Heading } from "@/components/MainHeading";

const FontAwesomeIcon = dynamic(() =>
  import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon)
);
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Home Page",
  description: "By Jamie",
};

export default function page() {
  return (
    <section className={styles.header}>
      <div className={styles.welcome}>
        <div className={styles.splitHead}>
          <Heading main={"Welcome..."} />
        </div>
        <p>
          <a href="mailto:andrews_j@live.co.uk">Email me @</a>
        </p>
      </div>

      <span className={styles.projLinks}>
        <Link href="/projects" className={styles.btn}>
          My Portfolio Projects
        </Link>
        <Link
          className={styles.git}
          href="https://github.com/Jamie-Andrews1"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon
            width={44.6}
            height={44.6}
            className="fa-brands fa-github fa-2x"
            icon={faGithub}
          />
        </Link>
      </span>
    </section>
  );
}
