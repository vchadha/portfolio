import ProfileAside from "./ProfileAside";
import DetailsSection from "./DetailsSection";

export default function Home() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <ProfileAside />
        <DetailsSection />
      </div>
    </>
  );
}
