import type { Metadata } from "next";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Věda",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <ProseWrapper>{children}</ProseWrapper>
    </Container>
  );
}
