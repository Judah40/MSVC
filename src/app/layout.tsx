"use client";

import Footer from "@/components/Footer/page";
import "./globals.css";

import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
