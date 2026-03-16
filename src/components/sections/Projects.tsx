import SectionCard from "@/components/ui/SectionCard";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import TechTagList from "@/components/ui/TechTagList";
import AuthorList from "@/components/ui/AuthorList";
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

          {/* Games */}
          {games.map((game) => (
            <li key={game.title} className="mb-12">
              <SectionCard image={{ src: game.image, alt: `${game.title} screenshot`, aspect: game.imageAspect ?? "video" }}>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <SectionLabel>{game.jam}</SectionLabel>
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={game.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${game.title} on itch.io (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      {game.title}
                    </a>
                  </h3>
                  <AuthorList authors={game.authors} myName={game.myName} />
                  <p className="mt-2 text-sm leading-normal">{game.description}</p>
                  <TechTagList techs={game.techs} />
                </div>
              </SectionCard>
            </li>
          ))}

          {/* Publications */}
          {publications.map((pub) => (
            <li key={pub.title} className="mb-12">
              <SectionCard>
                <div className="z-10 sm:col-span-8">
                  <SectionLabel>{pub.venue}</SectionLabel>
                  <h3 className="font-medium leading-snug text-slate-200">
                    {pub.url ? (
                      <a
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
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
                  <p className="mt-2 text-sm leading-normal">{pub.description}</p>
                  <TechTagList techs={pub.techs} />
                </div>
              </SectionCard>
            </li>
          ))}

          {/* Volunteering */}
          {volunteering.map((vol) => (
            <li key={vol.title} className="mb-12">
              <SectionCard>
                <div className="z-10 sm:col-span-8">
                  <SectionLabel>{vol.venue}</SectionLabel>
                  <h3 className="font-medium leading-snug text-slate-200">
                    {vol.title} ·{" "}
                    <span className="inline-block">{vol.company}</span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{vol.description}</p>
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
