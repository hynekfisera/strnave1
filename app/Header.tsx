import Container from "@/components/layout/Container";
import Link from "next/link";
import React from "react";

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  {
    href: "/",
    text: "Úvod",
  },
  {
    href: "/psy1",
    text: "PSY1",
  },
  {
    href: "/psy2",
    text: "PSY2",
  },
  {
    href: "/pknf",
    text: "PKNF",
  },
  {
    href: "/veda",
    text: "Věda",
  },
  {
    href: "https://oliva.uhk.cz/",
    text: "Blackboard",
  },
];

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-blue-500">
      <Container className="flex justify-between">
        <div>
          <Link href="/" className="text-lg lg:text-xl text-white font-semibold">
            PhDr. Věra Strnadová, Ph.D.
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="lg:text-lg font-medium text-white hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
