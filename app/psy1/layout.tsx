import type { Metadata } from "next";
import Navigation from "../Navigation";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import Container from "@/components/layout/Container";

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
      <Container>
        <ProseWrapper>{children}</ProseWrapper>
      </Container>
    </div>
  );
}
