import SectionCard from "@/components/ui/SectionCard";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTagList from "@/components/ui/TechTagList";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionHeader title="Experience" />

      <div>
        <ol className="group/list">
          {experiences.map((exp) => (
            <li key={`${exp.title}-${exp.period}`} className="mb-12">
              <SectionCard>
                <header
                  className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                  aria-label={exp.ariaLabel}
                >
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="leading-snug font-medium text-slate-200">
                    {exp.url ? (
                      <a
                        className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">{exp.company}</span>
                        </span>
                      </a>
                    ) : (
                      <span>{exp.title}</span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {exp.description}
                  </p>
                  <TechTagList techs={exp.techs} />
                </div>
              </SectionCard>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            className="group/link inline-flex items-baseline text-base leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
