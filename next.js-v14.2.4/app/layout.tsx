import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from '@public/next.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LHagfoss | Next.js v14",
  description: "Developed by Lucas Hagfoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}