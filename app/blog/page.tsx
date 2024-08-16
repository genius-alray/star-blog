import TestPage from "@/blog-content/test.mdx";
import "../code-highlight.css";
export default function Page() {
  return (
    <div className="prose dark:prose-invert opacity-90 select-text selection:bg-secondary-400 selection:bg-opacity-40">
      <TestPage />
    </div>
  );
}
