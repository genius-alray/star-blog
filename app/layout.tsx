/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoFont = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Blog",
  description: "三位好朋友的博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className=" min-w-full min-h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={
          notoFont.className +
          " select-none min-w-full min-h-full bg-slate-200 dark:bg-slate-950 text-slate-900 dark:text-slate-400"
        }
      >
        <header className="absolute">
          <span>Star Blog</span>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
