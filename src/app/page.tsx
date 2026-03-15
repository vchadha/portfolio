import ProfileAside from "@/components/ProfileAside";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <a href="#nav" className="sr-only focus:not-sr-only">
        Skip to navigation
      </a>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <ProfileAside />
        <main id="content" className="md:w-7/12 w-full flex-1 p-6 md:p-12">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}
