import { email } from "@/data/site";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="contact" className="mx-auto max-w-[600px] pb-[100px] text-center">
        <RevealOnScroll>
          <p className="mb-5 font-mono text-base text-gold">What&apos;s Next?</p>
          <h2 className="mb-5 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1] text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted">
            I&apos;m currently open to backend roles and freelance projects.
            Whether you have a question or just want to say hi, my inbox is
            always open — I&apos;ll do my best to get back to you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="glass mt-12 inline-block rounded-lg p-1">
            <a
              href={`mailto:${email}`}
              className="btn-filled block px-10 py-5"
            >
              Say Hello
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-muted">
            {email}
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
