export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky header on mobile/tablet, visually hidden on desktop. */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <p className="mb-4">
          I'm a software engineer who cares deeply about building things that
          work — provably, reliably, and under pressure. I have a soft spot for
          any problem that rewards thinking carefully before writing a single
          line of code.
        </p>
        <p className="mb-4">
          Currently I'm a senior engineer at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.capitalone.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Capital One (opens in a new tab)"
          >
            Capital One
          </a>
          , where I build financial ledger software — distributed systems that
          handle millions of transactions and where correctness, integrity, and
          availability aren't negotiable. My work spans everything from
          designing tamper-resistant data pipelines and hitting sub-150ms
          transaction targets, to championing formal verification as a practical
          engineering tool rather than an academic curiosity.
        </p>
        <p className="mb-4">
          Before that, I spent time as a graduate researcher at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.wisc.edu"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="University of Wisconsin-Madison (opens in a new tab)"
          >
            UW–Madison
          </a>
          , working on combating IoT surveillance and challenging autonomous
          vehicle security. That research taught me to think rigorously about
          adversarial systems — how things break, who breaks them, and how to
          build with that in mind. It's a lens I still carry into every system I
          design.
        </p>
        <p className="mb-4">
          Outside of financial systems, my deepest technical passion is game
          development and engine architecture. There's something uniquely
          demanding about building a game engine from scratch — you're
          simultaneously a compiler writer, a real-time systems engineer, a
          renderer, and a tools developer. It's one of the few domains where
          performance, correctness, and creativity all collide at once, and I
          find that irresistible.
        </p>
        <p className="mb-4">
          I'm equally drawn to the intersection of formal methods and
          engineering — building software that can be reasoned about and proven
          right, not just tested into confidence.
        </p>
        <p>
          Away from the keyboard I'm usually cooking Indian food, hunting for
          jazz records, or deep in a rabbit hole I'll never fully climb out of.
        </p>
      </div>
    </section>
  );
}
