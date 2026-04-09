export interface Experience {
  period: string; // Display period (e.g., "Dec 2024 — Present")
  ariaLabel: string; // Accessible label for screen readers (e.g., "December 2024 to Present")
  title: string; // Job title
  company: string | null; // Company name, null for non-company entries
  url: string | null; // Company website URL, null if not applicable
  description: string; // Job description/responsibilities
  techs: string[]; // Technologies used
}

export const experiences: Experience[] = [
  {
    period: "Dec 2024 — Present",
    ariaLabel: "December 2024 to Present",
    title: "Senior Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Designed and deployed a cryptographic audit trail that verifies the integrity \
      and authenticity of every transaction our platform produces — a core part of our \
      security posture. On the performance side, we're hitting around 83ms end-to-end \
      transaction latency. I've also been championing formal verification as a practical \
      engineering tool: presented at two internal conferences, stood up a company-wide \
      community of practice, and we're building toward production pilots.",
    techs: ["AWS KMS", "TLA+/PlusCal", "Kubernetes/Helm", "Temporal"],
  },
  {
    period: "Jul 2023 — Dec 2024",
    ariaLabel: "July 2023 to December 2024",
    title: "Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Co-designed the core transaction processing layer for a new multi-line-of-business \
      platform — moving from a system built for a single client (12M accounts) to one \
      currently serving 50M accounts and architected to scale to 500M. A big part of that \
      was rethinking our data model: redesigning schemas from the ground up for DynamoDB's \
      single-table paradigm, working directly with AWS to validate our approach. \
      Also diagnosed and resolved a stubborn multi-week Redis degradation that was \
      impacting response times for Capital One Auto Finance.",
    techs: ["Docker", "Cassandra", "DynamoDB", "Redis"],
  },
  {
    period: "Aug 2022 — Jul 2023",
    ariaLabel: "August 2022 to July 2023",
    title: "Associate Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Built the core financial ledger microservices in Scala and ZIO that formed the \
      foundation of our platform. Set up monitoring infrastructure in Splunk and New Relic, \
      then ran an alerting audit to clean up stale alerts and close coverage gaps — the \
      kind of unglamorous work that makes on-call a lot less painful. Also delivered a \
      legally-compliant account purge system for Auto Finance, which had to remove \
      inactive accounts under a strict regulatory policy without touching system performance.",
    techs: ["Scala", "ZIO", "Cassandra", "Splunk", "New Relic"],
  },
  {
    period: "2020 — 2022",
    ariaLabel: "2020 to 2022",
    title: "Graduate Research Assistant",
    company: "UW–Madison",
    url: "https://www.wisc.edu",
    description:
      "Researched IoT device detection for combating Intimate Partner Surveillance. \
      Built a market analysis tool that catalogued spy devices across major retail \
      categories and surfaced real-world misuse patterns from product reviews — one \
      finding being that commercial spy detectors are largely ineffective at catching them. \
      Also simulated sensor spoofing attacks in autonomous vehicle scenarios using CARLA \
      and Openpilot, demonstrating how manipulated sensor data could cause crashes.",
    techs: ["Python", "CARLA", "Openpilot", "IoT", "Cyber-Physical Systems"],
  },
  {
    period: "2017 — 2021",
    ariaLabel: "2017 to 2021",
    title: "Early Experience",
    company: null,
    url: null,
    description:
      "Intern at Capital One (2021) — contributed to a ML-based text extraction pipeline with \
      in-memory caching and Kafka streams. Intern at Garmin (2019) — fixed C/C++ bugs and \
      contributed to UI features. Intern at Red Nova Labs (2017–2018) — built APIs and SDKs \
      for self-storage management software and implemented OAuth 2.0 authorization.",
    techs: ["Python", "Kafka", "PostgreSQL", "C/C++", "Ruby on Rails"],
  },
];
