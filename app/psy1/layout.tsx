import type { Metadata } from "next";
import Navigation from "../Navigation";

export const metadata: Metadata = {
  title: "PSY1",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation subject="PSY1" />
      {children}
    </div>
  );
}
