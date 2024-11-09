import Container from "@/components/layout/Container";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import Uvod from "@/markdown/uvod.mdx";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Container>
          <ProseWrapper>
            <Uvod />
          </ProseWrapper>
        </Container>
      </main>
    </div>
  );
}
