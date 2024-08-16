import type { MDXComponents } from "mdx/types";
import HyperLink from "./components/HyperLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href }) => (
      <HyperLink target={href || "#"}>{children}</HyperLink>
    ),
  };
}
