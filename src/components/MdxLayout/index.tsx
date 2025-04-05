import "./styles.css";
import Head from "next/head";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <div className="mdxlayout">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </Head>
        {children}
      </div>
      ;
    </>
  );
}
