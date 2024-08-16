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
        <header className="h-12 backdrop-blur-lg bg-slate-300 dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-30 sticky top-0 px-4 flex items-center border-b-2 border-opacity-20 border-slate-400 z-10">
          <span className="text-2xl text-orange-400 font-bold">Star Blog</span>
        </header>
        <main className="mx-auto container py-4 px-1">{children}</main>
      </body>
    </html>
  );
}
