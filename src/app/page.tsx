import ProfileAside from "@/components/ProfileAside";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import SpotlightGradient from "@/components/SpotlightGradient";

export default function Home() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <a href="#nav" className="sr-only focus:not-sr-only">
        Skip to navigation
      </a>
      <div className="relative">
        <SpotlightGradient />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <ProfileAside />
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
              <About />
              <Experience />
              <Projects />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
