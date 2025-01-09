import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ProseWrapper({ children, className }: Props) {
  return (
    <div
      className={`py-12 px-6 md:px-0 prose max-w-none prose-p:text-justify prose-a:text-sky-600 hover:prose-a:text-sky-700 prose-a:transition prose-a:duration-100 prose-headings:text-gray-800 prose-h1:text-2xl md:prose-h1:text-3xl ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
