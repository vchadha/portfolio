import ProfileAside from "@/components/layout/ProfileAside";
import Footer from "@/components/layout/Footer";
import ScanlineOverlay from "@/components/layout/ScanlineOverlay";
import PixelFoliage from "@/components/layout/PixelFoliage";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

import PixelDivider from "@/components/ui/content/PixelDivider";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <a href="#nav" className="skip-link">
        Skip to navigation
      </a>
      <ScanlineOverlay />
      <PixelFoliage />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <ProfileAside />
          <main
            id="content"
            tabIndex={-1}
            className="pt-24 lg:w-[52%] lg:py-24"
          >
            <About />
            <PixelDivider />
            <Experience />
            <PixelDivider />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
