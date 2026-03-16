export interface Experience {
  period: string;
  ariaLabel: string;
  title: string;
  company: string | null;
  url: string | null;
  description: string;
  techs: string[];
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
      "Co-led major redesign of financial transaction processing, improving performance \
      and reliability. Migrated database infrastructure from Cassandra to DynamoDB, \
      designing schemas aligned to a single-table paradigm. Led triage and resolution of \
      AWS Redis production issues, reducing downtime incidents. Researched regional failover \
      and data recovery strategies for high availability.",
    techs: ["Docker", "Cassandra", "DynamoDB", "Redis"],
  },
  {
    period: "Aug 2022 — Jul 2023",
    ariaLabel: "August 2022 to July 2023",
    title: "Associate Software Engineer",
    company: "Capital One",
    url: "https://www.capitalone.com",
    description:
      "Built core financial ledger microservices in Scala with ZIO and Cassandra. \
      Built monitoring dashboards and alerting systems using Splunk and New Relic. \
      Led project to purge accounts securely from our financial ledger, ensuring \
      regulatory compliance without performance degradation. Mentored on-call engineers \
      and conducted alerting audits to improve incident response efficiency.",
    techs: ["Scala", "ZIO", "Cassandra", "Splunk", "New Relic"],
  },
  {
    period: "2020 — 2022",
    ariaLabel: "2020 to 2022",
    title: "Graduate Research Assistant",
    company: "UW–Madison",
    url: "https://www.wisc.edu",
    description:
      "Conducted research on IoT device detection for combating Intimate Partner \
      Surveillance (IPS). Developed a Python market analysis tool for consumer spy \
      devices and simulated sensor spoofing attacks in self-driving car scenarios using \
      CARLA and Openpilot. Published at USENIX Security 2023.",
    techs: ["Python", "CARLA", "Openpilot", "IoT", "Cyber-Physical Systems"],
  },
  {
    period: "2017 — 2021",
    ariaLabel: "2017 to 2021",
    title: "Early Experience",
    company: null,
    url: null,
    description:
      "Intern at Capital One (2021) — built an ML-based text extraction pipeline with \
      in-memory caching and Kafka streams. Intern at Garmin (2019) — fixed C/C++ bugs \
      and contributed to UI features. Intern at Red Nova Labs (2017–2018) — built APIs \
      and SDKs for self-storage management software and implemented OAuth 2.0 authorization.",
    techs: ["Python", "Kafka", "PostgreSQL", "C/C++", "Ruby on Rails"],
  },
];
