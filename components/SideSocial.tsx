import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/site";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function SideSocial() {
  return (
    <div
      className="fixed bottom-0 left-10 z-10 hidden md:block"
      aria-label="Social links"
    >
      <ul className="side-line m-0 flex list-none flex-col items-center p-0">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.name as keyof typeof iconMap];
          return (
            <li key={link.name} className="mb-5 last:mb-5">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 text-muted transition-transform duration-300 ease-default hover:-translate-y-1 hover:text-gold"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
