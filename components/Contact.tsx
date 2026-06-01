import { email } from "@/data/site";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section id="contact" className="mx-auto max-w-[600px] pb-[100px] text-center">
        <RevealOnScroll>
          <p className="mb-5 font-mono text-base text-gold">What&apos;s Next?</p>
          <h2 className="mb-5 text-[clamp(40px,5vw,60px)] font-bold leading-[1.1] text-white">
            Get In Touch
          </h2>
          <p className="text-white/80">
            I&apos;m currently open to backend roles and freelance projects.
            Whether you have a question or just want to say hi, my inbox is
            always open — I&apos;ll do my best to get back to you.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <a href={`mailto:${email}`} className="btn-primary mt-12 px-10 py-4">
            Say Hello
          </a>
          <p className="mt-6 font-mono text-xs text-white/60">
            {email}
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
