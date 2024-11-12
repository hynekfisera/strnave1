import Container from "@/components/layout/Container";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import Uvod from "@/markdown/uvod.mdx";

export default function Home() {
  return (
    <Container className="flex flex-col">
      <h1 className="hidden">PhDr. Věra Strnadová, Ph.D.</h1>
      <ProseWrapper>
        <Uvod />
      </ProseWrapper>
    </Container>
  );
}
