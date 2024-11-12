"use client";

import Container from "@/components/layout/Container";
import Link from "@/components/utils/Link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  {
    href: "/index.html",
    text: "Úvod",
  },
  {
    href: "/psy1.html",
    text: "PSY1",
  },
  {
    href: "/psy2.html",
    text: "PSY2",
  },
  {
    href: "/pknf.html",
    text: "První kroky",
  },
  {
    href: "/veda.html",
    text: "Věda",
  },
];

export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header className="w-full py-4 md:py-5 px-6 bg-sky-500 relative">
      <Container className="flex justify-between items-center">
        <div>
          <Link href="/index.html" className="text-lg text-white font-semibold">
            PhDr. Věra Strnadová, Ph.D.
          </Link>
        </div>
        <nav className={`absolute top-[59px] z-20 left-0 right-0 bg-sky-500 md:bg-transparent md:static ${visible ? "flex" : "hidden"} md:!flex md:items-center`}>
          <ul className="flex flex-col md:flex-row max-md:w-full pb-4 px-8 md:p-0 items-end md:items-center gap-4 md:gap-5">
            {links.map((link) => (
              <li key={link.href} onClick={() => setVisible(false)}>
                <Link href={link.href} className="font-semibold text-white hover:underline select-none">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button aria-label="Zobrazit navigaci" className="md:hidden" onClick={() => setVisible((v) => !v)}>
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl select-none p-2 -m-2" />
        </button>
      </Container>
    </header>
  );
}
