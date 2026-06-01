import { email } from "@/data/site";

export default function SideEmail() {
  return (
    <div className="fixed bottom-0 right-10 z-10 hidden md:block">
      <div className="side-line flex flex-col items-center">
        <a
          href={`mailto:${email}`}
          className="my-5 p-2.5 font-mono text-xs tracking-widest text-white/60 transition-transform duration-300 ease-default [writing-mode:vertical-rl] hover:-translate-y-1 hover:text-gold"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
