"use client";

import Container from "@/components/layout/Container";
import Link from "@/components/utils/Link";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
  subject: "PSY1" | "PSY2";
};

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  {
    href: "/materialy",
    text: "Materiály",
  },
  {
    href: "/ukoly",
    text: "Úkoly a zajímavosti",
  },
  {
    href: "/prezentace",
    text: "Prezentace",
  },
  {
    href: "/seminarni-prace",
    text: "Seminární práce",
  },
  {
    href: "/zkouska",
    text: "Zkouška",
  },
];

export default function Navigation({ subject }: Props) {
  const [visible, setVisible] = useState(false);

  let linkPrefix = "";

  if (subject === "PSY1") {
    linkPrefix = "/psy1";
  } else if (subject === "PSY2") {
    linkPrefix = "/psy2";
  }

  return (
    <header className="w-full py-3 lg:py-4 px-6 bg-gray-100 sticky top-0 border-b border-b-gray-200">
      <Container className="flex justify-between items-center">
        <div>
          <Link
            href={linkPrefix}
            className="lg:text-lg text-gray-800 font-semibold"
          >
            {subject}
          </Link>
        </div>
        <nav
          className={`absolute top-[45px] z-10 left-0 right-0 bg-gray-100 max-md:border-b max-md:border-b-gray-200 md:bg-transparent md:static ${visible ? "flex" : "hidden"} md:!flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row max-md:w-full pb-4 px-8 md:p-0 items-end md:items-center gap-4 md:gap-5">
            {links.map((link) => (
              <li
                key={linkPrefix + link.href}
                onClick={() => setVisible(false)}
              >
                <Link
                  href={linkPrefix + link.href}
                  className="text-gray-800 hover:underline select-none"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          aria-label="Zobrazit navigaci"
          className="md:hidden"
          onClick={() => setVisible((v) => !v)}
        >
          <FontAwesomeIcon
            icon={visible ? faChevronUp : faChevronDown}
            className="text-gray-700 text-lg select-none p-2 -m-2"
          />
        </button>
      </Container>
    </header>
  );
}
