"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="Wesly beranda">
          wesly<span>.</span>
        </a>
        <button
          className="menu"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          Menu
        </button>
        <nav
          id="navigation"
          className={isOpen ? "open" : ""}
          aria-label="Navigasi utama"
          onClick={() => setIsOpen(false)}
        >
          <a href="#projects">Proyek</a>
          <a href="#about">Tentang</a>
          <a href="#experience">Pengalaman</a>
          <a className="nav-contact" href="#contact">
            Mari terhubung
          </a>
        </nav>
      </div>
    </header>
  );
}
