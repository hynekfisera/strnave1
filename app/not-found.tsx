import Container from "@/components/layout/Container";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import StrankaNenalezena from "@/markdown/strankanenalezena.mdx";

export default function NotFound() {
  return (
    <Container className="flex flex-col">
      <ProseWrapper>
        <StrankaNenalezena />
      </ProseWrapper>
    </Container>
  );
}
