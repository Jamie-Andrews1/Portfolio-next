import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/Heading";
import Image, { ImageProps } from "next/image";
import MdxLayout from "./components/MdxLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    h3: ({ children }) => (
      <h3
        style={{
          fontWeight: "500",
        }}
      >
        {children}
      </h3>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        width={700}
        height={400}
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
        alt={""}
      />
    ),
    ...components,
    wrapper({ components, ...rest }) {
      return <MdxLayout {...rest} />;
    },
  };
}
