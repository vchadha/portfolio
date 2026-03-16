const experiences = [
  {
    period: "Dec 2024 — Present",
    ariaLabel: "December 2024 to Present",
    title: "Senior Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Designed and deployed data tampering prevention and detection \
      techniques for our financial ledger, improving transaction \
      integrity and compliance. Achieved sub-150ms transaction \
      processing through distributed system performance \
      optimisation. Demonstrated benefits of formal verification in \
      distributed microservices to internal teams.",
    techs: ["AWS KMS", "TLA+/PlusCal", "Kubernetes/Helm", "Temporal"],
  },
  {
    period: "Jul 2023 — Dec 2024",
    ariaLabel: "July 2023 to December 2024",
    title: "Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Co-led major redesign of financial transaction processing, \
      improving performance and reliability. Migrated database \
      infrastructure from Cassandra to DynamoDB, designing schemas \
      aligned to a single-table paradigm. Led triage and resolution \
      of AWS Redis production issues, reducing downtime incidents. \
      Researched regional failover and data recovery strategies for \
      high availability.",
    techs: ["Docker", "Cassandra", "DynamoDB", "Redis"],
  },
  {
    period: "Aug 2022 — Jul 2023",
    ariaLabel: "August 2022 to July 2023",
    title: "Associate Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Built core financial ledger microservices in Scala with ZIO \
      and Cassandra. Built monitoring dashboards and alerting \
      systems using Splunk and New Relic. Led project to purge \
      accounts securely from our financial ledger, ensuring \
      regulatory compliance without performance degradation. \
      Mentored on-call engineers and conducted alerting audits to \
      improve incident response efficiency.",
    techs: ["Scala", "ZIO", "Cassandra", "Splunk", "New Relic"],
  },
  {
    period: "2020 — 2022",
    ariaLabel: "2020 to 2022",
    title: "Graduate Research Assistant",
    company: "UW–Madison",
    url: "https://www.wisc.edu",
    description:
      "Conducted research on IoT device detection for combating \
      Intimate Partner Surveillance (IPS). Developed a Python market \
      analysis tool for consumer spy devices and simulated sensor \
      spoofing attacks in self-driving car scenarios using CARLA and \
      Openpilot. Published at USENIX Security 2023.",
    techs: ["Python", "CARLA", "Openpilot", "IoT", "Cyber-Physical Systems"],
  },
  {
    period: "2017 — 2021",
    ariaLabel: "2017 to 2021",
    title: "Early Experience",
    company: null,
    url: null,
    description:
      "Intern at Capital One (2021) — built an ML-based text extraction \
      pipeline with in-memory caching and Kafka streams. Intern at \
      Garmin (2019) — fixed C/C++ bugs and contributed to UI features. \
      Intern at Red Nova Labs (2017–2018) — built APIs and SDKs for self-storage \
      management software and implemented OAuth 2.0 authorization.",
    techs: ["Python", "Kafka", "PostgreSQL", "C/C++", "Ruby on Rails"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky header on mobile/tablet, visually hidden on desktop. */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp) => (
            <li key={`${exp.title}-${exp.period}`} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
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
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.techs.map((tech) => (
                      <li key={tech} className="mt-2 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
