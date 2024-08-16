import React from "react";

export default function HyperLink({
  target,
  children,
}: {
  target: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href={target}
        className="text-secondary-500 hover:text-secondary-400 bg-secondary-700 bg-opacity-0 hover:bg-opacity-20 rounded active:scale-95 inline-flex duration-100 no-underline px-1"
      >
        {children}
      </a>
    </>
  );
}
