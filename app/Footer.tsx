import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 text-center text-sm text-gray-700">
      Vytvořili{" "}
      <a href="https://hynekfisera.cz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
        Hynek Fišera
      </a>{" "}
      a{" "}
      <a href="mailto:martin.polacek@uhk.cz" className="text-sky-600 hover:underline">
        Martin Poláček
      </a>
    </footer>
  );
}
