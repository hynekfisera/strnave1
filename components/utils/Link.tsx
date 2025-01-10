import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  file?: boolean;
};

export default function Link({ href, className, children, file }: Props) {
  let hrefBuilder = "";

  if (href.startsWith("http")) {
    hrefBuilder = href;
  } else {
    hrefBuilder += process.env.NEXT_PUBLIC_BASE_URL ?? "";

    if (!href.includes("index") || process.env.NODE_ENV !== "development") {
      hrefBuilder += href;
    }

    if (process.env.NODE_ENV !== "development" && !file) {
      hrefBuilder += ".html";
    } else if (href.includes("index")) {
      hrefBuilder += "/";
    }
  }

  return (
    <a
      href={hrefBuilder}
      className={`${className ?? ""} cursor-pointer select-none`}
    >
      {children}
    </a>
  );
}
