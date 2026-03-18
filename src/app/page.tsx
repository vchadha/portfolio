import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

import ProfileAside from "@/components/layout/ProfileAside";
import Footer from "@/components/layout/Footer";
import ScanlineOverlay from "@/components/layout/ScanlineOverlay";
import PixelFoliage from "@/components/layout/PixelFoliage";
import SpotlightEffect from "@/components/layout/SpotlightEffect";
import MobileSectionDots from "@/components/layout/MobileSectionDots";
import KonamiCowsay from "@/components/layout/KonamiCowsay";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

import PixelDivider from "@/components/ui/content/PixelDivider";

export default function Home() {
  return (
    // Wrap the entire app in ActiveSectionProvider to manage section visibility and navigation state across components using single instance of the hook
    <ActiveSectionProvider>
      {/* Skip links for accessibility - allow keyboard users to jump to content or navigation */}
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <a href="#nav" className="skip-link">
        Skip to navigation
      </a>

      {/* Visual effects that enhance the retro gaming aesthetic */}
      <ScanlineOverlay />
      <SpotlightEffect />
      <PixelFoliage />
      <MobileSectionDots />
      <KonamiCowsay />

      {/* Main layout container with responsive design */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Profile sidebar - sticky on desktop, full width on mobile */}
          <ProfileAside />

          {/* Main content area with proper focus management for skip links */}
          <main
            id="content"
            tabIndex={-1}
            className="pt-24 lg:w-[52%] lg:py-24"
          >
            {/* Content sections separated by pixel art dividers */}
            <About />
            <PixelDivider />
            <Experience />
            <PixelDivider />
            <Projects />
            <PixelDivider />
            <Footer />
          </main>
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
