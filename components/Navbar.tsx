"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`nav-bar fixed inset-x-0 top-0 z-50 flex h-[var(--nav-height)] items-center px-6 sm:px-10 lg:px-[50px] ${
          scrolled ? "nav-bar-scrolled h-[var(--nav-scroll-height)]" : "bg-transparent"
        }`}
      >
        <nav
          className="flex w-full max-w-6xl mx-auto items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="group flex items-center gap-2 font-bold tracking-tight"
            aria-label="Abdellatif Meziane — Home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/50 text-lg text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy">
              AM
            </span>
          </a>

          <ol className="hidden list-none items-center gap-8 p-0 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:bg-gold after:transition-all hover:text-gold ${
                      isActive
                        ? "text-gold after:w-full"
                        : "text-white/80 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#contact" className="btn-primary px-4 py-2 text-xs">
                Hire me
              </a>
            </li>
          </ol>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
                isOpen ? "absolute translate-y-0 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "my-1.5"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
                isOpen ? "absolute -translate-y-0 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy/95 backdrop-blur-md transition-transform duration-300 ease-default md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <ol className="flex list-none flex-col items-center gap-2 p-0 text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex min-h-[44px] items-center px-5 py-3 text-lg transition-colors hover:text-gold ${
                  activeSection === link.href ? "text-gold" : "text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Hire me
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
