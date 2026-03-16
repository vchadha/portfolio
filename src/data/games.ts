export interface Game {
  title: string;
  url: string;
  image: string;
  imageAspect?: "video" | "square" | "cover";
  jam: string;
  authors: string[];
  myName: string;
  description: string;
  techs: string[];
}

export const games: Game[] = [
  {
    title: "The Final Hour",
    url: "https://clayxavier.itch.io/the-final-hour",
    image: "/images/games/the-final-hour.jpg",
    imageAspect: "cover",
    jam: "MADE @ THE MADE · 2025",
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
    image: "/images/games/dino-soar.png",
    imageAspect: "cover",
    jam: "DINOJAM3 · 2023",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole", "Alex Shadley"],
    myName: "Varun Chadha",
    description:
      "A QWOP-style pteranodon flying game built for DINOJAM3. Implemented the level selection screen, menu system, enemy AI, and designed gameplay levels.",
    techs: ["Unity", "C#", "Game Jam", "Dino Jam"],
  },
  {
    title: "Tick Tick Za!",
    url: "https://justinro-underscore.itch.io/tick-tick-za",
    image: "/images/games/tick-tick-za.png",
    imageAspect: "cover",
    jam: "Ludum Dare 51 · 2022",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole"],
    myName: "Varun Chadha",
    description:
      "A chaotic pizza kitchen game built for Ludum Dare 51 around the theme \"Every 10 Seconds\". \
      Implemented multiple interactive station mini-games (pepper plants, ingredient dispenser, veggie wheel)\
      and menu systems.",
    techs: ["Unity", "C#", "Game Jam", "Ludum Dare"],
  },
  {
    title: "Lost & Raturn",
    url: "https://justinro-underscore.itch.io/lost-raturn",
    image: "/images/games/lost-raturn.jpg",
    imageAspect: "cover",
    jam: "Global Game Jam · 2021",
    authors: ["Justin Roderman", "Varun Chadha", "Sean Poole"],
    myName: "Varun Chadha",
    description:
      "A 2D arcade game built for the Global Game Jam 2021. Implemented player health, \
      menu system, leg mechanics, and high score backend.",
    techs: ["Unity", "C#", "Game Jam", "Global Game Jam"],
  },
];
