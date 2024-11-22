import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: {
    template: "%s | PhDr. Věra Strnadová, Ph.D.",
    default: "PhDr. Věra Strnadová, Ph.D.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans bg-gray-50 text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
