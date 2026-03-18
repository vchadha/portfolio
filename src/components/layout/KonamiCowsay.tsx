"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const QUOTES = [
  "All your base are belong to us.",
  "It's dangerous to go alone! Take this.",
  "Do a barrel roll!",
  "I used to be an adventurer like you... then I took an arrow to the knee.",
  "Hey! Look! Listen!",
  "Waka waka waka.",
  "The cake is a lie.",
  "Stay awhile and listen!",
  "Snake? Snake? SNAAAAKE!",
  "Praise the sun!",
  "It's a-me, Mario!",
  "The right man in the wrong place can make all the difference in the world.",
];

function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

// Cowsay box — wraps text at 36 chars
function buildCowsay(quote: string): string {
  const maxLen = 36;
  const words = quote.split(" ");
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    if ((current + " " + word).trim().length > maxLen) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  });
  if (current) lines.push(current.trim());

  const width = Math.max(...lines.map((l) => l.length));
  const top = " " + "_".repeat(width + 2);
  const bottom = " " + "-".repeat(width + 2);

  const boxLines = lines.map((line, i) => {
    const padded = line.padEnd(width, " ");
    if (lines.length === 1) return `< ${padded} >`;
    if (i === 0) return `/ ${padded} \\`;
    if (i === lines.length - 1) return `\\ ${padded} /`;
    return `| ${padded} |`;
  });

  const cow = [
    `        \\   ^__^`,
    `         \\  (oo)\\_______`,
    `            (__)\\       )\\/\\`,
    `                ||----w |`,
    `                ||     ||`,
  ].join("\n");

  return [top, ...boxLines, bottom, cow].join("\n");
}

export default function KonamiCowsay() {
  const [visible, setVisible] = useState(false);
  const [cowsay, setCowsay] = useState("");
  const [progress, setProgress] = useState(0);

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Dismiss on any key when visible
      if (visible) {
        setVisible(false);
        return;
      }

      setProgress((prev) => {
        const next = prev + 1;
        if (e.key !== KONAMI[prev]) return 0;
        if (next === KONAMI.length) {
          setCowsay(buildCowsay(randomQuote()));
          setVisible(true);
          return 0;
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Secret easter egg"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5, 4, 10, 0.85)" }}
      />

      {/* Cowsay box */}
      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ fontFamily: "var(--font-press-start)" }}
      >
        <pre
          className="text-left"
          style={{
            color: "var(--accent)",
            fontSize: "clamp(0.7rem, 1.6vw, 1.0rem)",
            lineHeight: "1.8",
            whiteSpace: "pre",
          }}
        >
          {cowsay}
        </pre>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Press any key to continue...
        </p>
      </div>
    </div>
  );
}
