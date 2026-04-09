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
      "EECS Survival battle screenshot. A 2D top-down pixel art game with a \
      player character dodging paper balls.",
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
      Led the engine team implementing a cutscene system leveraging BeanShell, \
      a physics and collision system, sprite animation system, and an audio system. \
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
      "SPRAWL screenshot. A 3D city builder game where the player is placing buildings \
      to construct a town. There is a phone in the bottom right for the in game simulated \
      social media.",
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
       an alternative controller — a salvaged children's toy clock that we wired and soldered \
       into a fully functional USB gamepad. Handling the hardware engineering meant getting into \
       the clock's internals and turning something designed to tell time into something designed \
       to shoot things.",
    techs: ["Unity", "C#", "Embedded Systems", "Alt Ctrl", "Game Jam"],
  },
  {
    title: "Dino Soar",
    url: "https://justinro-underscore.itch.io/dino-soar",
    repo: "https://github.com/justinro-underscore/DinoJam2023",
    image: "/images/games/dino-soar.png",
    imageAspect: "cover",
    imageAlt:
      "Dino Soar level screenshot. A dinosaur is navigating a 2D side facing level, \
      dodging dinosaurs to retrieve its egg.",
    jam: "DINOJAM3 · 2023",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole", "Alex Shadley"],
    myName: "Varun Chadha",
    description:
      "A QWOP-style pteranodon flying game built for DINOJAM3 — we placed 3rd. Implemented the level \
      selection screen, menu system, enemy AI, and co-designed gameplay levels.",
    techs: ["Unity", "C#", "Game Jam", "Dino Jam"],
  },
  {
    title: "Tick Tick Za!",
    url: "https://justinro-underscore.itch.io/tick-tick-za",
    repo: "https://github.com/The-Lost-Rats/CosmicCrust",
    image: "/images/games/tick-tick-za.png",
    imageAspect: "cover",
    imageAlt:
      "Tick Tick Za! level screenshot. There is a conveyor belt carrying pizza dough down \
      the screen, and the player is grabbing ingredients from stations to make pizzas.",
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
    image: "/images/games/lost-raturn.png",
    imageAspect: "cover",
    imageAlt:
      "Lost & Raturn level screenshot. A 2D rat is running up the legs of a man to return an item he dropped.",
    jam: "Global Game Jam · 2021",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole"],
    myName: "Varun Chadha",
    description:
      "A 2D arcade game built for the Global Game Jam 2021. Implemented player health, \
      menu system, leg mechanics, and high score backend.",
    techs: ["Unity", "C#", "Game Jam", "Global Game Jam"],
  },
];
