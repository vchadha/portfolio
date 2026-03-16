export interface Publication {
  venue: string;
  title: string;
  url: string | null;
  authors: string[];
  myName: string;
  description: string;
  techs: string[];
}

export const publications: Publication[] = [
  {
    venue: "Publication · USENIX Security 2023",
    title:
      "Sneaky Spy Devices and Defective Detectors: The Ecosystem of Intimate Partner \
      Surveillance with Covert Devices",
    url: "https://www.usenix.org/system/files/usenixsecurity23-ceccio.pdf",
    authors: [
      "Rose Ceccio",
      "Sophie Stephenson",
      "Varun Chadha",
      "Danny Yuxing Huang",
      "Rahul Chatterjee",
    ],
    myName: "Varun Chadha",
    description:
      "Studied the ecosystem of covert surveillance devices used in intimate partner \
      abuse, analysing detection gaps and consumer spy device markets.",
    techs: ["Python", "IoT", "Intimate Partner Surveillance", "Security Research"],
  },
  {
    venue: "Presentation · CANSec 2019",
    title: "Characterizing Sensor Input Spoofing Attacks",
    url: null,
    authors: ["Varun Chadha", "Jacob Marshall"],
    myName: "Varun Chadha",
    description:
      "Characterised sensor spoofing attack vectors in unmanned aerial vehicles.",
    techs: ["ArduCopter", "Python", "LLVM", "Cyber-physical Systems", "Security Research"],
  },
];