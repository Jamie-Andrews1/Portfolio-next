import React from "react";
import styles from "@/app/page.module.css";
export function Heading({ main }: { main: string }) {
  const letters = main.split("");

  return (
    <>
      {letters.map((l, i) => {
        return (
          <span
            className={styles.splitHead + " visible"}
            style={{
              transitionDelay: `${0.2 * i}s`,
            }}
            key={i}
          >
            <h1>{l}</h1>
          </span>
        );
      })}
    </>
  );
}
