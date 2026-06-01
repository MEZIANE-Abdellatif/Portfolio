import { Github, Linkedin } from "lucide-react";
import { email, socialLinks } from "@/data/site";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Footer() {
  return (
    <footer
      className="flex min-h-[70px] flex-col items-center justify-center px-4 py-6 text-center"
      style={{ borderTop: "1px solid rgba(201, 168, 76, 0.15)" }}
    >
      <ul className="mb-3 flex list-none items-center justify-center gap-4 p-0 md:hidden">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.name as keyof typeof iconMap];
          return (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 text-white/60 transition-colors hover:text-gold"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="font-mono text-xs leading-relaxed text-white/60">
        Designed &amp; built by{" "}
        <a
          href={`mailto:${email}`}
          className="text-white transition-colors hover:text-gold"
        >
          Abdellatif Meziane
        </a>
        {" · "}
        Warsaw, Poland
      </p>
      <p className="mt-2 font-mono text-xs text-white/40">
        © {new Date().getFullYear()} — All rights reserved.
      </p>
    </footer>
  );
}
