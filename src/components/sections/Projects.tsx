import SectionCard from "@/components/ui/SectionCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTagList from "@/components/ui/TechTagList";
import AuthorList from "@/components/ui/AuthorList";
import { publications } from "@/data/publications";
import { volunteering } from "@/data/volunteering";
import { games } from "@/data/games";

function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-xs font-semibold tracking-widest text-slate-500 uppercase">
      {children}
    </h3>
  );
}

function RoleBadge({ role }: { role: string }) {
  return (
    <span className="ml-2 rounded-full bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-300">
      {role}
    </span>
  );
}

function GitHubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="View source on GitHub (opens in a new tab)"
      className="relative mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
      <span>Source</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects and publications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeader title="Projects" />

      <div>
        <ul className="group/list">
          {/* ── Games ────────────────────────────────── */}
          <li className="mb-6">
            <SubsectionTitle>Games</SubsectionTitle>
          </li>

          {games.map((game) => (
            <li key={game.title} className="mb-12">
              <SectionCard
                image={{
                  src: game.image,
                  alt: `${game.title} screenshot`,
                  aspect: game.imageAspect ?? "cover",
                }}
              >
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <SectionLabel>{game.jam}</SectionLabel>
                  <h3 className="leading-snug font-medium text-slate-200">
                    <a
                      className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={game.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${game.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      {game.title}
                    </a>
                    {game.role && <RoleBadge role={game.role} />}
                  </h3>
                  <AuthorList authors={game.authors} myName={game.myName} />
                  <p className="mt-2 text-sm leading-normal">
                    {game.description}
                  </p>
                  <TechTagList techs={game.techs} />
                  {game.repo && <GitHubLink href={game.repo} />}
                </div>
              </SectionCard>
            </li>
          ))}

          {/* ── Research ─────────────────────────────── */}
          <li className="mt-4 mb-6">
            <SubsectionTitle>Research</SubsectionTitle>
          </li>

          {publications.map((pub) => (
            <li key={pub.title} className="mb-12">
              <SectionCard>
                <div className="z-10 sm:col-span-8">
                  <SectionLabel>{pub.venue}</SectionLabel>
                  <h3 className="leading-snug font-medium text-slate-200">
                    {pub.url ? (
                      <a
                        className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${pub.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <AuthorList authors={pub.authors} myName={pub.myName} />
                  <p className="mt-2 text-sm leading-normal">
                    {pub.description}
                  </p>
                  <TechTagList techs={pub.techs} />
                </div>
              </SectionCard>
            </li>
          ))}

          {/* ── Volunteering ─────────────────────────── */}
          <li className="mt-4 mb-6">
            <SubsectionTitle>Volunteering</SubsectionTitle>
          </li>

          {volunteering.map((vol) => (
            <li key={vol.title} className="mb-12">
              <SectionCard>
                <div className="z-10 sm:col-span-8">
                  <SectionLabel>{vol.venue}</SectionLabel>
                  <h3 className="leading-snug font-medium text-slate-200">
                    {vol.title} ·{" "}
                    <span className="inline-block">{vol.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {vol.description}
                  </p>
                  <TechTagList techs={vol.techs} />
                </div>
              </SectionCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
