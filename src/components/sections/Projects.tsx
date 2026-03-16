import SectionCard from "@/components/ui/card/SectionCard";
import SectionHeader from "@/components/ui/card/SectionHeader";
import SectionLabel from "@/components/ui/card/SectionLabel";
import SubsectionTitle from "@/components/ui/card/SubsectionTitle";

import TechTagList from "@/components/ui/tags/TechTagList";

import AuthorList from "@/components/ui/content/AuthorList";
import RoleBadge from "@/components/ui/content/RoleBadge";
import GitHubLink from "@/components/ui/content/GitHubLink";

import { publications } from "@/data/publications";
import { volunteering } from "@/data/volunteering";
import { games } from "@/data/games";

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
                      className="link-card"
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${game.title} (opens in a new tab)`}
                    >
                      <span className="card-link-overlay" />
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
                        className="link-card"
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${pub.title} (opens in a new tab)`}
                      >
                        <span className="card-link-overlay" />
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
