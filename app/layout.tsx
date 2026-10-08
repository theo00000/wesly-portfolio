import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wesly Rismahadi — Frontend Engineer",
  description:
    "Portofolio Wesly Adam Rismahadi. Pengembangan frontend, aplikasi mobile, dan platform belajar dengan React, Next.js, dan TypeScript.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#121512" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body id="top">{children}</body>
    </html>
  );
}
