import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ href, className, children }: Props) {
  return (
    <a href={`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}${href}`} className={className}>
      {children}
    </a>
  );
}
