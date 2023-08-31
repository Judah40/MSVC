import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        <div
        
        className="max-w-6xl mx-auto"
        >{children}</div>
      </body>
    </html>
  );
}
