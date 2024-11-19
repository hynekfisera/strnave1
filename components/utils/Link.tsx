import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ href, className, children }: Props) {
  let hrefBuilder = "";

  hrefBuilder += process.env.NEXT_PUBLIC_BASE_URL ?? "";

  if (!href.includes("index") || process.env.NODE_ENV !== "development") {
    hrefBuilder += href;
  }

  if (process.env.NODE_ENV !== "development") {
    hrefBuilder += ".html";
  } else if (href.includes("index")) {
    hrefBuilder += "/";
  }

  return (
    <a href={hrefBuilder} className={`${className ?? ""} cursor-pointer`}>
      {children}
    </a>
  );
}
