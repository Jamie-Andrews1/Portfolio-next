import "./styles.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <div className="mdxlayout">{children}</div>;
    </>
  );
}
