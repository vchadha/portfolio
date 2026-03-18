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
      "Designed and deployed data tampering prevention and detection techniques \
      for our financial ledger, improving transaction integrity and compliance. \
      Achieved sub-150ms transaction processing through distributed system performance \
      optimisation. Demonstrated benefits of formal verification in distributed microservices \
      to internal teams.",
    techs: ["AWS KMS", "TLA+/PlusCal", "Kubernetes/Helm", "Temporal"],
  },
  {
    period: "Jul 2023 — Dec 2024",
    ariaLabel: "July 2023 to December 2024",
    title: "Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Co-led major redesign of financial transaction processing supporting 50 million \
      daily account transactions, improving performance and reliability. \
      Migrated database infrastructure from Cassandra to DynamoDB, co-designing \
      schemas aligned to a single-table paradigm. Led triage and resolution of AWS Redis \
      production issues, reducing downtime incidents. Researched regional failover and \
      data recovery strategies for high availability.",
    techs: ["Docker", "Cassandra", "DynamoDB", "Redis"],
  },
  {
    period: "Aug 2022 — Jul 2023",
    ariaLabel: "August 2022 to July 2023",
    title: "Associate Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Built core financial ledger microservices in Scala with ZIO and Cassandra supporting 12 million \
      daily account transactions. Co-designed a compliant account purge system that removed closed accounts \
      at scale without performance degradation. Built monitoring infrastructure using Splunk and New Relic, \
      and mentored on-call engineers to improve incident response efficiency.",
    techs: ["Scala", "ZIO", "Cassandra", "Splunk", "New Relic"],
  },
  {
    period: "2020 — 2022",
    ariaLabel: "2020 to 2022",
    title: "Graduate Research Assistant",
    company: "UW–Madison",
    url: "https://www.wisc.edu",
    description:
      "Conducted research on IoT device detection for combating Intimate Partner Surveillance (IPS). \
      Developed a Python market analysis tool for consumer spy devices and simulated sensor spoofing \
      attacks in self-driving car scenarios using CARLA and Openpilot.",
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
