import { Github, Linkedin, Mail } from "lucide-react";

const email = "abdellatif.meziane18@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/abdellatif-meziane";
const githubUrl = "https://github.com/abdellatifmeziane";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-16 pb-24 text-center sm:px-6 sm:py-20 sm:pb-28"
    >
      <h2 className="text-2xl font-semibold text-gold sm:text-3xl">Contact</h2>
      <p className="mx-auto mt-4 max-w-md text-base text-white/70">
        Open to backend roles and freelance projects. Reach out anytime.
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-gold transition-opacity hover:opacity-80"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        {email}
      </a>
      <div className="mt-8 flex items-center justify-center gap-6">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/70 transition-colors hover:text-gold"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="h-6 w-6" aria-hidden="true" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white/70 transition-colors hover:text-gold"
          aria-label="GitHub profile"
        >
          <Github className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
