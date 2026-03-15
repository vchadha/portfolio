export default function ProfileAside() {
  return (
    <aside
      aria-label="Profile"
      className="md:sticky md:top-0 md:h-screen md:w-5/12 w-full p-6 md:py-24 md:px-32 flex flex-col"
    >
      <h1 className="text-5xl font-bold leading-tight mb-2 text-black dark:text-zinc-50">
        Varun Chadha
      </h1>
      <p className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
        Software Engineer
      </p>

      <p className="text-m font-light mb-6 text-black dark:text-zinc-50">
        Building formally verified software.
      </p>

      <nav aria-label="On-page navigation" className="mb-8">
        <ul className="space-y-2 text-base">
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto mb-4">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/your-username"
              aria-label="GitHub profile"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-username"
              aria-label="LinkedIn profile"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
