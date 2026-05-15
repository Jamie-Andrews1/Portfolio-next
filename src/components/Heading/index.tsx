import { type ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className={styles.heading} {...props} />;
}
