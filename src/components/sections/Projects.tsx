export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects and publications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky header on mobile/tablet, visually hidden on desktop. */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {/* USENIX Publication */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:col-span-8">
                <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Publication · USENIX Security 2023
                </p>
                <h3 className="leading-snug font-medium text-slate-200">
                  <a
                    className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Sneaky Spy Devices and Defective Detectors (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    Sneaky Spy Devices and Defective Detectors: The Ecosystem of
                    Intimate Partner Surveillance with Covert Devices
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  Rose Ceccio, Sophie Stephenson,{" "}
                  <span className="font-bold text-slate-300">Varun Chadha</span>
                  , Danny Yuxing Huang, Rahul Chatterjee
                </p>
                <p className="mt-2 text-sm leading-normal">
                  Studied the ecosystem of covert surveillance devices used in
                  intimate partner abuse, analysing detection gaps and consumer
                  spy device markets.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {["Python", "IoT", "Security Research"].map((tech) => (
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

          {/* CANSec Publication */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:col-span-8">
                <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Publication · CANSec 2019
                </p>
                <h3 className="leading-snug font-medium text-slate-200">
                  Characterizing Sensor Input Spoofing Attacks
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  <span className="font-bold text-slate-300">Varun Chadha</span>
                  , Jacob Marshall
                </p>
                <p className="mt-2 text-sm leading-normal">
                  Characterised sensor spoofing attack vectors in unmaned aerial
                  vehicles.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {[
                    "CARLA",
                    "Openpilot",
                    "ArduCopter",
                    "Python",
                    "LLVM",
                    "Security Research",
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

          {/* CODERS */}
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:col-span-8">
                <p className="mb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Volunteer · 2023 — 2025
                </p>
                <h3 className="leading-snug font-medium text-slate-200">
                  Instructor & Site Lead, CODERS
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Taught web and app development to middle and high school
                  students. Organised volunteer programmes as site lead.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {["Replit", "CodeHS", "MIT App Inventor"].map((tech) => (
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
        </ul>
      </div>
    </section>
  );
}
