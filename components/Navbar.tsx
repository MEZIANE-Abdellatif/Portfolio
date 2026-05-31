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
        className={`glass-nav fixed inset-x-0 top-0 z-50 flex h-[var(--nav-height)] items-center px-6 transition-[height,box-shadow] duration-300 ease-default sm:px-10 lg:px-[50px] ${
          scrolled ? "h-[var(--nav-scroll-height)] shadow-glass" : ""
        }`}
      >
        <nav
          className="flex w-full items-center justify-between font-mono text-foreground"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="text-2xl font-bold text-gold transition-transform duration-300 ease-default hover:-translate-x-1 hover:-translate-y-1"
            aria-label="Abdellatif Meziane — Home"
          >
            AM
          </a>

          <ol className="hidden list-none items-center p-0 md:flex">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="mx-1">
                  <a
                    href={link.href}
                    className={`relative px-2.5 py-2.5 text-xs transition-colors duration-300 ease-default hover:text-gold ${
                      isActive ? "text-gold" : ""
                    }`}
                  >
                    <span className="mr-1 text-gold">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-2.5 right-2.5 h-px bg-gold"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
            <li className="ml-4">
              <a href="#contact" className="btn-outline px-4 py-3 text-xs">
                Contact
              </a>
            </li>
          </ol>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gold transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`glass fixed inset-0 z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-default md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <ol className="flex list-none flex-col items-center gap-2 p-0 text-center">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex min-h-[44px] items-center px-5 py-3 font-mono text-lg transition-colors hover:text-gold ${
                  activeSection === link.href
                    ? "text-gold"
                    : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2 text-gold">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              className="btn-outline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}
