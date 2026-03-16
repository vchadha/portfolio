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
          {/* Senior Software Engineer */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="December 2024 to Present"
              >
                Dec 2024 — Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  <a
                    className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.capitalone.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Senior Software Engineer at Capital One (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      Senior Software Engineer ·{" "}
                      <span className="inline-block">Capital One</span>
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Designed and deployed data tampering prevention and detection
                  techniques for our financial ledger, improving transaction
                  integrity and compliance. Achieved sub-150ms transaction
                  processing through distributed system performance
                  optimisation. Demonstrated benefits of formal verification in
                  distributed microservices to internal teams.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {[
                    "AWS KMS",
                    "TLA+/PlusCal",
                    "Kubernetes/Helm",
                    "Temporal",
                  ].map((tech) => (
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

          {/* Software Engineer */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="July 2023 to December 2024"
              >
                Jul 2023 — Dec 2024
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  <a
                    className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.capitalone.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Software Engineer at Capital One (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      Software Engineer ·{" "}
                      <span className="inline-block">Capital One</span>
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Co-led major redesign of financial transaction processing,
                  improving performance and reliability. Migrated database
                  infrastructure from Cassandra to DynamoDB, designing schemas
                  aligned to a single-table paradigm. Led triage and resolution
                  of AWS Redis production issues, reducing downtime incidents.
                  Researched regional failover and data recovery strategies for
                  high availability.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {["Docker", "Cassandra", "DynamoDB", "Redis"].map((tech) => (
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

          {/* Associate Software Engineer */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="August 2022 to July 2023"
              >
                Aug 2022 — Jul 2023
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  <a
                    className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.capitalone.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Associate Software Engineer at Capital One (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      Associate Software Engineer ·{" "}
                      <span className="inline-block">Capital One</span>
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Built core financial ledger microservices in Scala with ZIO
                  and Cassandra. Built monitoring dashboards and alerting
                  systems using Splunk and New Relic. Led project to purge
                  accounts securely from our financial ledger, ensuring
                  regulatory compliance without performance degradation.
                  Mentored on-call engineers and conducted alerting audits to
                  improve incident response efficiency.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {["Scala", "ZIO", "Cassandra", "Splunk", "New Relic"].map(
                    (tech) => (
                      <li key={tech} className="mt-2 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                          {tech}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </li>

          {/* Graduate Research Assistant */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="2020 to 2022"
              >
                2020 — 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  Graduate Research Assistant ·{" "}
                  <span className="inline-block">UW–Madison</span>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Conducted research on IoT device detection for combating
                  Intimate Partner Surveillance (IPS). Developed a Python market
                  analysis tool for consumer spy devices and simulated sensor
                  spoofing attacks in self-driving car scenarios using CARLA and
                  Openpilot. Published at USENIX Security 2023.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {[
                    "Python",
                    "CARLA",
                    "Openpilot",
                    "IoT",
                    "Cyber-Physical Systems",
                  ].map((tech) => (
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

          {/* Early Experience */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header
                className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="2017 to 2021"
              >
                2017 — 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug font-medium text-slate-200">
                  Early Experience
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Intern at{" "}
                  <span className="font-medium text-slate-200">
                    Capital One
                  </span>{" "}
                  (2021) — built an ML-based text extraction pipeline with
                  in-memory caching and Kafka streams. Intern at{" "}
                  <span className="font-medium text-slate-200">Garmin</span>{" "}
                  (2019) — fixed C/C++ bugs and contributed to UI features.
                  Intern at{" "}
                  <span className="font-medium text-slate-200">
                    Red Nova Labs
                  </span>{" "}
                  (2017–2018) — built APIs and SDKs for self-storage management
                  software and implemented OAuth 2.0 authorization.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {[
                    "Python",
                    "Kafka",
                    "PostgreSQL",
                    "C/C++",
                    "Ruby on Rails",
                  ].map((tech) => (
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
        </ol>

        <div className="mt-12">
          <a
            className="group/link inline-flex items-baseline text-base leading-tight font-medium font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            View Full Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
