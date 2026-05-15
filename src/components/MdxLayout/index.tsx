import styles from "./styles.module.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <div className={styles.mdxlayout}>{children}</div>
    </>
  );
}
