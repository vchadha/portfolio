import ProfileAside from "./ProfileAside";
import DetailsSection from "./DetailsSection";

export default function Home() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <a href="#nav" className="sr-only focus:not-sr-only">
        Skip to navigation
      </a>
      <div className="flex flex-col md:flex-row min-h-screen w-full overflow-y-auto">
        <ProfileAside />
        <DetailsSection />
      </div>
    </>
  );
}
