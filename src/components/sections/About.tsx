export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-20 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky header on mobile/tablet, visually hidden on desktop. */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[--bg-75] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-[--text-primary] uppercase lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <p className="mb-4">
          I'm a software engineer who cares deeply about building things that
          work — provably, reliably, and under pressure.
        </p>
        <p className="mb-4">
          Currently I'm a senior engineer at{" "}
          <a
            className="inline-link"
            href="https://www.capitalone.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Capital One (opens in a new tab)"
          >
            Capital One
          </a>
          , where I build financial ledger software handling up to 50 million
          accounts daily — distributed systems where correctness, integrity, and
          availability aren't negotiable. My work spans everything from
          designing tamper-resistant data pipelines and hitting sub-150ms
          transaction targets, to championing formal verification as a practical
          engineering tool rather than an academic curiosity.
        </p>
        <p className="mb-4">
          Before that, I spent time as a graduate researcher at{" "}
          <a
            className="inline-link"
            href="https://www.wisc.edu"
            target="_blank"
            rel="noopener noreferrer"
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
          Outside of financial systems, my deepest passion is game development
          and engine architecture — one of the few domains where performance,
          correctness, and real-time systems all collide at once. I've shipped
          several games across game jams and led teams building engines from
          scratch.
        </p>
        <p>
          Away from the keyboard I'm usually cooking Indian food, listening to
          jazz, or working on whatever game jam is coming up next.
        </p>
      </div>
    </section>
  );
}
