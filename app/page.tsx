import Container from "@/components/layout/Container";
import ProseWrapper from "@/components/markdown/ProseWrapper";
import Uvod from "@/markdown/uvod.mdx";
import Image from "next/image";
import Logo from "@/public/img/uhk.svg";
import Link from "@/components/utils/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <section className="py-12 sm:py-16 px-6 xl:px-0 flex flex-col items-center gap-6 sm:gap-7 bg-gray-100 border-b border-b-gray-200">
        <Image src={Logo} alt="UHK logo" className="h-full max-h-10 sm:max-h-12 w-auto" />
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-gray-900">PhDr. Věra Strnadová, Ph.D.</h1>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
          <Link href="/psy1" className="select-none font-medium text-gray-900 border border-gray-400 hover:border-sky-500 p-2 sm:p-3 rounded-md group text-center">
            Psychologie I <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-gray-400 group-hover:text-sky-500" />
          </Link>
          <Link href="/psy2" className="select-none font-medium text-gray-900 border border-gray-400 hover:border-sky-500 p-2 sm:p-3 rounded-md group text-center">
            Psychologie II <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-gray-400 group-hover:text-sky-500" />
          </Link>
        </div>
      </section>
      <Container className="flex flex-col">
        <ProseWrapper>
          <Uvod />
        </ProseWrapper>
      </Container>
    </div>
  );
}
