import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluebird Visual — Independent Creative Studio",
  description: "Bluebird Visual creates meaningful visual experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
