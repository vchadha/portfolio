export interface Game {
  title: string;
  url: string;
  repo?: string;
  image: string;
  imageAspect?: "video" | "square" | "cover";
  imageAlt: string;
  jam: string;
  role?: string;
  authors: string[];
  myName: string;
  description: string;
  techs: string[];
}

export const games: Game[] = [
  {
    title: "EECS Survival",
    url: "https://github.com/justinro-underscore/EECSurvival-Game",
    repo: "https://github.com/justinro-underscore/EECSurvival-Game",
    image: "/images/games/eecs-survival.png",
    imageAspect: "cover",
    imageAlt:
      "EECS Survival Menu Screen. A pixel art style menu with the following options: \
      Start (play game), Suite (run test suite), Manual (manually test gameplay mechanics \
      in sandbox), Auto (fuzzy testing), Quit.",
    jam: "Software Engineering · 2019",
    role: "Engine Lead",
    authors: [
      "Varun Chadha",
      "Justin Roderman",
      "Harrison Luo",
      "Alex Kunz",
      "Noah Brabec",
    ],
    myName: "Varun Chadha",
    description:
      "A bullet-hell game built on a custom Java engine, written from scratch. \
      Led the engine team implementing a BeanShell script interpreter for cutscene rendering, \
      a physics and collision system, sprite animation system, and an audio engine. \
      Supported a full 5-level game with distinct boss attack patterns, and \
      a full integration test suite and automated input fuzzer.",
    techs: ["Java", "LWJGL", "OpenAL", "BeanShell", "Bullet Hell"],
  },
  {
    title: "SPRAWL",
    url: "https://chemelia.itch.io/sprawl",
    repo: "https://github.com/ameliajmoser/city-planning-game",
    image: "/images/games/sprawl.png",
    imageAspect: "cover",
    imageAlt:
      "SPRAWL Menu Screen. The words SPRAWL a city builder over a landscape.",
    jam: "Graduate Project · 2021",
    role: "Team Lead",
    authors: ["Varun Chadha", "Amelia Moser", "Aidan Myers", "Jonah Tostrud"],
    myName: "Varun Chadha",
    description:
      "A 3D narrative city-builder exploring community engagement and healthy urban design. \
      Led the team as project manager and technical lead — coordinating across design, programming, \
      and art disciplines to deliver a playable experience built in Unity.",
    techs: ["Unity", "C#", "City Builder", "Narrative"],
  },
  {
    title: "The Final Hour",
    url: "https://clayxavier.itch.io/the-final-hour",
    repo: "https://github.com/justinro-underscore/MadeAtMade2025",
    image: "/images/games/the-final-hour.jpg",
    imageAspect: "cover",
    imageAlt:
      "Photo of the custom game controller for The Final Hour, a children's toy \
      clock with wires soldered into the back and connected to a USB cable.",
    jam: "MADE @ THE MADE · 2025",
    role: "Hardware Engineer",
    authors: [
      "Justin Roderman",
      "Varun Chadha",
      "Cal Friedman",
      "Zane",
      "Jepsen LaGuerre",
      "Clay",
      "Aqua",
      "Jay",
    ],
    myName: "Varun Chadha",
    description:
      "A top-down naval, time, space shooter built for MADE @ THE MADE with \
       an alternative controller — a salvaged children's toy clock soldered into \
       a custom gamepad. Responsible for hardware engineering: wiring and soldering \
       the clock's internal components into a functional USB controller, mapping \
       physical dials and buttons to in-game inputs.",
    techs: ["Unity", "C#", "Embedded Systems", "Alt Ctrl", "Game Jam"],
  },
  {
    title: "Dino Soar",
    url: "https://justinro-underscore.itch.io/dino-soar",
    repo: "https://github.com/justinro-underscore/DinoJam2023",
    image: "/images/games/dino-soar.png",
    imageAspect: "cover",
    imageAlt:
      "Dino Soar Title Screen. A side-scrolling platformer with a dinosaur character. \
      The title 'Dino Soar' is displayed in large pixel art font with dinosaurs peeking out.",
    jam: "DINOJAM3 · 2023",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole", "Alex Shadley"],
    myName: "Varun Chadha",
    description:
      "A QWOP-style pteranodon flying game built for DINOJAM3. Implemented the level \
      selection screen, menu system, enemy AI, and designed gameplay levels.",
    techs: ["Unity", "C#", "Game Jam", "Dino Jam"],
  },
  {
    title: "Tick Tick Za!",
    url: "https://justinro-underscore.itch.io/tick-tick-za",
    repo: "https://github.com/The-Lost-Rats/CosmicCrust",
    image: "/images/games/tick-tick-za.png",
    imageAspect: "cover",
    imageAlt:
      "Tick Tick Za! Title Screenshot. Menu that says press enter to start.",
    jam: "Ludum Dare 51 · 2022",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole"],
    myName: "Varun Chadha",
    description:
      'A chaotic pizza kitchen game built for Ludum Dare 51 around the theme "Every 10 Seconds". \
      Implemented multiple interactive station mini-games (pepper plants, ingredient dispenser, veggie wheel)\
      and menu systems.',
    techs: ["Unity", "C#", "Game Jam", "Ludum Dare"],
  },
  {
    title: "Lost & Raturn",
    url: "https://justinro-underscore.itch.io/lost-raturn",
    repo: "https://github.com/justinro-underscore/Lost-Raturn",
    image: "/images/games/lost-raturn.jpg",
    imageAspect: "cover",
    imageAlt:
      "Lost & Raturn Title Screenshot. A side scrolling 2D pixel art game with a rat character.",
    jam: "Global Game Jam · 2021",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole"],
    myName: "Varun Chadha",
    description:
      "A 2D arcade game built for the Global Game Jam 2021. Implemented player health, \
      menu system, leg mechanics, and high score backend.",
    techs: ["Unity", "C#", "Game Jam", "Global Game Jam"],
  },
];
