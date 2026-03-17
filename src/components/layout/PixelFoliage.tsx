"use client";

import React from "react";

const U = 4; // px per grid unit
const COLS = 32; // grid columns wide per side
const SVG_H = 720;

type Span = [number, number];

interface DropNode {
  row: number;
  side: "left" | "right" | "both";
}

interface Drop {
  col: number;
  start: number;
  end: number;
  nodes: DropNode[];
}

// ─── Hash & texture ──────────────────────────────────────────────────────────

function dh(x: number, y: number): number {
  let v = ((x * 374761393) ^ (y * 668265263)) >>> 0;
  v = ((v ^ (v >>> 13)) * 1274126177) >>> 0;
  v = ((v ^ (v >>> 16)) * 2246822519) >>> 0;
  return (v ^ (v >>> 17)) >>> 0;
}

type LC = "a" | "b" | "c" | null;

function leafPixel(col: number, row: number, edge: boolean, top: boolean): LC {
  const v = dh(col, row) % 100;
  // Diagonal phase (col*2 + row*3) creates ~45° leaf structure
  const phase = (((col * 2 + row * 3) % 6) + 6) % 6;
  const b = phase < 2 ? 10 : phase > 3 ? -8 : 0;

  if (top) return v < 48 ? null : v < 65 + b ? "c" : v < 84 ? "b" : "a";
  if (edge) return v < 32 ? null : v < 50 ? "a" : v < 78 + b ? "b" : "c";
  return v < 8 ? null : v < 26 ? "a" : v < 72 + b ? "b" : "c";
}

// ─── Occupied set & rendering ─────────────────────────────────────────────────

function buildOcc(rows: Span[][]): Set<string> {
  const occ = new Set<string>();
  rows.forEach((spans, r) =>
    spans.forEach(([s, e]) => {
      for (let c = s; c <= e; c++) occ.add(`${c},${r}`);
    })
  );
  return occ;
}

function renderSpans(
  rows: Span[][],
  occ: Set<string>,
  prefix: string
): React.ReactNode[] {
  return rows.flatMap((spans, row) =>
    spans.flatMap(([s, e]) => {
      const out: React.ReactNode[] = [];
      for (let c = s; c <= e; c++) {
        const edge =
          !occ.has(`${c - 1},${row}`) ||
          !occ.has(`${c + 1},${row}`) ||
          !occ.has(`${c},${row - 1}`) ||
          !occ.has(`${c},${row + 1}`);
        const top = !occ.has(`${c},${row - 1}`);
        const color = leafPixel(c, row, edge, top);
        if (!color) continue;
        out.push(
          <rect
            key={`${prefix}-${row}-${c}`}
            x={c * U}
            y={row * U}
            width={U}
            height={U}
            className={`fol-${color}`}
          />
        );
      }
      return out;
    })
  );
}

// Render an oval leaf cluster centered at (cx, cy) in absolute grid coords
function renderCluster(
  cx: number,
  cy: number,
  hw: number,
  hh: number,
  prefix: string
): React.ReactNode[] {
  // Build oval shape
  const relSpans: [number, Span][] = [];
  for (let dy = -hh; dy <= hh; dy++) {
    const t = dy / hh;
    const w = Math.round(hw * Math.sqrt(Math.max(0, 1 - t * t * 0.65)));
    const s = Math.max(0, cx - w);
    const e = Math.min(COLS - 1, cx + w);
    if (s <= e) relSpans.push([cy + dy, [s, e]]);
  }

  if (!relSpans.length) return [];

  // Normalized rows for local edge detection
  const minR = Math.min(...relSpans.map(([r]) => r));
  const normSpans: Span[][] = [];
  relSpans.forEach(([absR, span]) => {
    const ri = absR - minR;
    if (!normSpans[ri]) normSpans[ri] = [];
    normSpans[ri].push(span);
  });
  const occ = buildOcc(normSpans);

  const out: React.ReactNode[] = [];
  relSpans.forEach(([absR, [s, e]]) => {
    const ri = absR - minR;
    for (let c = s; c <= e; c++) {
      const edge =
        !occ.has(`${c - 1},${ri}`) ||
        !occ.has(`${c + 1},${ri}`) ||
        !occ.has(`${c},${ri - 1}`) ||
        !occ.has(`${c},${ri + 1}`);
      const top = !occ.has(`${c},${ri - 1}`);
      const color = leafPixel(c, absR, edge, top);
      if (!color) continue;
      out.push(
        <rect
          key={`${prefix}-${absR}-${c}`}
          x={c * U}
          y={absR * U}
          width={U}
          height={U}
          className={`fol-${color}`}
        />
      );
    }
  });
  return out;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const LEFT_ROWS: Span[][] = [
  [[0, 23]], // 0
  [[0, 23]], // 1
  [[0, 23]], // 2
  [[0, 23]], // 3
  [[0, 22]], // 4
  [
    [0, 21],
    [23, 23],
  ], // 5
  [[0, 22]], // 6
  [
    [0, 20],
    [22, 23],
  ], // 7
  [[0, 21]], // 8
  [
    [0, 19],
    [21, 22],
  ], // 9
  [[0, 20]], // 10
  [
    [0, 18],
    [20, 21],
  ], // 11
  [[0, 19]], // 12
  [
    [0, 17],
    [19, 20],
  ], // 13
  [[0, 18]], // 14
  [
    [0, 16],
    [18, 19],
  ], // 15
  [[0, 17]], // 16
  [
    [0, 15],
    [17, 18],
  ], // 17
  [[0, 16]], // 18
  [
    [0, 14],
    [16, 17],
  ], // 19
  [[0, 15]], // 20
  [[0, 14]], // 21
  [[0, 15]], // 22 — bump
  [[0, 13]], // 23
  [[0, 14]], // 24 — bump
  [[0, 12]], // 25
  [[0, 13]], // 26 — bump
  [[0, 11]], // 27
  [[0, 12]], // 28 — bump
  [[0, 10]], // 29
  [[0, 11]], // 30
  [[0, 9]], // 31
  [[0, 10]], // 32
  [[0, 8]], // 33
  [[0, 9]], // 34
  [[0, 7]], // 35
  [[0, 8]], // 36
  [[0, 6]], // 37
  [[0, 7]], // 38
  [[0, 5]], // 39
  [[0, 6]], // 40
  [[0, 4]], // 41
  [[0, 5]], // 42
  [[0, 3]], // 43
  [[0, 4]], // 44
  [[0, 2]], // 45
  [[0, 3]], // 46
  [[0, 1]], // 47
  [[0, 2]], // 48
  [[0, 1]], // 49
  [[0, 0]], // 50 — trunk
  [[0, 0]], // 51
  [[0, 0]], // 52
  [[0, 0]], // 53
  [[0, 0]], // 54
  [[0, 0]], // 55
  [[0, 0]], // 56
  [[0, 0]], // 57
  [[0, 0]], // 58
  [[0, 0]], // 59
];

const LEFT_DROPS: Drop[] = [
  {
    col: 23,
    start: 4,
    end: 50,
    nodes: [
      { row: 18, side: "right" },
      { row: 32, side: "both" },
      { row: 44, side: "right" },
    ],
  },
  {
    col: 22,
    start: 6,
    end: 42,
    nodes: [
      { row: 18, side: "right" },
      { row: 30, side: "both" },
      { row: 38, side: "right" },
    ],
  },
  {
    col: 21,
    start: 8,
    end: 58,
    nodes: [
      { row: 22, side: "both" },
      { row: 36, side: "right" },
      { row: 50, side: "both" },
    ],
  },
  {
    col: 20,
    start: 10,
    end: 48,
    nodes: [
      { row: 24, side: "right" },
      { row: 38, side: "both" },
      { row: 44, side: "left" },
    ],
  },
  {
    col: 19,
    start: 12,
    end: 64,
    nodes: [
      { row: 28, side: "both" },
      { row: 44, side: "right" },
      { row: 56, side: "both" },
    ],
  },
  {
    col: 18,
    start: 14,
    end: 52,
    nodes: [
      { row: 28, side: "left" },
      { row: 40, side: "both" },
      { row: 48, side: "right" },
    ],
  },
  {
    col: 17,
    start: 16,
    end: 70,
    nodes: [
      { row: 30, side: "both" },
      { row: 48, side: "left" },
      { row: 62, side: "both" },
    ],
  },
  {
    col: 16,
    start: 18,
    end: 60,
    nodes: [
      { row: 32, side: "right" },
      { row: 46, side: "both" },
      { row: 56, side: "left" },
    ],
  },
  {
    col: 15,
    start: 20,
    end: 76,
    nodes: [
      { row: 36, side: "both" },
      { row: 54, side: "right" },
      { row: 68, side: "both" },
    ],
  },
  {
    col: 14,
    start: 22,
    end: 66,
    nodes: [
      { row: 38, side: "left" },
      { row: 52, side: "both" },
      { row: 60, side: "right" },
    ],
  },
  {
    col: 13,
    start: 25,
    end: 80,
    nodes: [
      { row: 42, side: "both" },
      { row: 58, side: "left" },
      { row: 72, side: "both" },
    ],
  },
  {
    col: 12,
    start: 27,
    end: 70,
    nodes: [
      { row: 44, side: "right" },
      { row: 58, side: "both" },
      { row: 66, side: "left" },
    ],
  },
  {
    col: 11,
    start: 30,
    end: 86,
    nodes: [
      { row: 48, side: "both" },
      { row: 64, side: "right" },
      { row: 78, side: "both" },
    ],
  },
  {
    col: 10,
    start: 32,
    end: 76,
    nodes: [
      { row: 50, side: "left" },
      { row: 64, side: "both" },
      { row: 72, side: "right" },
    ],
  },
  {
    col: 9,
    start: 35,
    end: 90,
    nodes: [
      { row: 54, side: "both" },
      { row: 70, side: "left" },
      { row: 82, side: "both" },
    ],
  },
  {
    col: 8,
    start: 37,
    end: 82,
    nodes: [
      { row: 56, side: "right" },
      { row: 68, side: "both" },
      { row: 78, side: "left" },
    ],
  },
];

const RIGHT_ROWS: Span[][] = [
  [[0, 23]], // 0
  [[0, 23]], // 1
  [[0, 23]], // 2
  [[0, 23]], // 3
  [[0, 23]], // 4 — one more than left
  [[0, 22]], // 5
  [
    [0, 21],
    [23, 23],
  ], // 6
  [[0, 22]], // 7
  [
    [0, 21],
    [23, 23],
  ], // 8
  [[0, 20]], // 9
  [
    [0, 19],
    [21, 23],
  ], // 10 — wider block than left
  [[0, 20]], // 11
  [
    [0, 18],
    [20, 22],
  ], // 12
  [[0, 19]], // 13
  [
    [0, 18],
    [20, 21],
  ], // 14
  [[0, 19]], // 15 — wider here
  [[0, 17]], // 16
  [[0, 18]], // 17
  [[0, 16]], // 18
  [[0, 17]], // 19
  [[0, 15]], // 20
  [[0, 16]], // 21
  [[0, 14]], // 22
  [[0, 15]], // 23
  [[0, 13]], // 24
  [[0, 14]], // 25
  [[0, 12]], // 26
  [[0, 13]], // 27
  [[0, 11]], // 28
  [[0, 10]], // 29
  [[0, 11]], // 30
  [[0, 9]], // 31
  [[0, 10]], // 32
  [[0, 8]], // 33
  [[0, 9]], // 34
  [[0, 7]], // 35
  [[0, 8]], // 36
  [[0, 6]], // 37
  [[0, 7]], // 38
  [[0, 5]], // 39
  [[0, 6]], // 40
  [[0, 4]], // 41
  [[0, 5]], // 42
  [[0, 4]], // 43
  [[0, 3]], // 44
  [[0, 4]], // 45
  [[0, 3]], // 46
  [[0, 2]], // 47
  [[0, 1]], // 48
  [[0, 2]], // 49
  [[0, 1]], // 50
  [[0, 0]], // 51 — trunk
  [[0, 0]], // 52
  [[0, 0]], // 53
  [[0, 0]], // 54
  [[0, 0]], // 55
  [[0, 0]], // 56
  [[0, 0]], // 57
  [[0, 0]], // 58
  [[0, 0]], // 59
];

const RIGHT_DROPS: Drop[] = [
  {
    col: 23,
    start: 3,
    end: 38,
    nodes: [
      { row: 14, side: "right" },
      { row: 26, side: "both" },
      { row: 34, side: "right" },
    ],
  },
  {
    col: 22,
    start: 5,
    end: 52,
    nodes: [
      { row: 18, side: "both" },
      { row: 34, side: "right" },
      { row: 46, side: "both" },
    ],
  },
  {
    col: 21,
    start: 4,
    end: 46,
    nodes: [
      { row: 16, side: "right" },
      { row: 30, side: "both" },
      { row: 42, side: "left" },
    ],
  },
  {
    col: 20,
    start: 8,
    end: 60,
    nodes: [
      { row: 24, side: "both" },
      { row: 40, side: "left" },
      { row: 54, side: "both" },
    ],
  },
  {
    col: 19,
    start: 10,
    end: 50,
    nodes: [
      { row: 26, side: "right" },
      { row: 38, side: "both" },
      { row: 46, side: "left" },
    ],
  },
  {
    col: 18,
    start: 12,
    end: 66,
    nodes: [
      { row: 28, side: "both" },
      { row: 46, side: "right" },
      { row: 58, side: "both" },
    ],
  },
  {
    col: 17,
    start: 14,
    end: 56,
    nodes: [
      { row: 30, side: "left" },
      { row: 44, side: "both" },
      { row: 52, side: "right" },
    ],
  },
  {
    col: 16,
    start: 16,
    end: 72,
    nodes: [
      { row: 34, side: "both" },
      { row: 52, side: "left" },
      { row: 64, side: "both" },
    ],
  },
  {
    col: 15,
    start: 18,
    end: 62,
    nodes: [
      { row: 36, side: "right" },
      { row: 50, side: "both" },
      { row: 58, side: "left" },
    ],
  },
  {
    col: 14,
    start: 21,
    end: 78,
    nodes: [
      { row: 40, side: "both" },
      { row: 58, side: "right" },
      { row: 70, side: "both" },
    ],
  },
  {
    col: 13,
    start: 24,
    end: 68,
    nodes: [
      { row: 42, side: "left" },
      { row: 56, side: "both" },
      { row: 64, side: "right" },
    ],
  },
  {
    col: 12,
    start: 26,
    end: 84,
    nodes: [
      { row: 46, side: "both" },
      { row: 62, side: "left" },
      { row: 76, side: "both" },
    ],
  },
  {
    col: 11,
    start: 29,
    end: 74,
    nodes: [
      { row: 48, side: "right" },
      { row: 62, side: "both" },
      { row: 70, side: "left" },
    ],
  },
  {
    col: 10,
    start: 31,
    end: 88,
    nodes: [
      { row: 52, side: "both" },
      { row: 68, side: "right" },
      { row: 80, side: "both" },
    ],
  },
  {
    col: 9,
    start: 34,
    end: 78,
    nodes: [
      { row: 54, side: "left" },
      { row: 66, side: "both" },
      { row: 74, side: "right" },
    ],
  },
];

// ─── Panel component ──────────────────────────────────────────────────────────

interface PanelProps {
  rows: Span[][];
  drops: Drop[];
  side: "left" | "right";
}

function FoliagePanel({ rows, drops, side }: PanelProps) {
  const mainOcc = buildOcc(rows);
  const trunkStart = rows.length;
  const trunkRows = Math.ceil((SVG_H - trunkStart * U) / U);

  return (
    <svg width={COLS * U} height={SVG_H} viewBox={`0 0 ${COLS * U} ${SVG_H}`}>
      {/* Main foliage mass */}
      {renderSpans(rows, mainOcc, `${side}-m`)}

      {/* Trunk continues below mass */}
      {Array.from({ length: trunkRows }, (_, i) => {
        const r = trunkStart + i;
        const v = dh(0, r) % 10;
        return (
          <rect
            key={`${side}-trunk-${r}`}
            x={0}
            y={r * U}
            width={U}
            height={U}
            className={v < 4 ? "fol-a" : "fol-b"}
          />
        );
      })}

      {/* Vine drops */}
      {drops.flatMap((drop) => {
        const k = `${side}-d${drop.col}`;
        const out: React.ReactNode[] = [];

        // Vine stem
        for (let r = drop.start; r <= drop.end; r++) {
          const v = dh(drop.col * 13, r * 7) % 10;
          out.push(
            <rect
              key={`${k}-v${r}`}
              x={drop.col * U}
              y={r * U}
              width={U}
              height={U}
              className={v < 3 ? "fol-a" : "fol-b"}
            />
          );
        }

        // Leaf clusters at nodes — alternate sides create organic zigzag
        drop.nodes.forEach(({ row: nr, side: ns }, ni) => {
          if (ns === "left" || ns === "both") {
            out.push(...renderCluster(drop.col - 2, nr, 2, 2, `${k}-cl${ni}`));
          }
          if (ns === "right" || ns === "both") {
            out.push(...renderCluster(drop.col + 2, nr, 2, 2, `${k}-cr${ni}`));
          }
        });

        // Tip cluster at vine end
        out.push(...renderCluster(drop.col, drop.end + 2, 2, 2, `${k}-tip`));

        return out;
      })}
    </svg>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function PixelFoliage() {
  return (
    <>
      <div
        className="fol-container pointer-events-none fixed top-0 left-0 z-[1] hidden lg:block"
        aria-hidden="true"
      >
        <FoliagePanel rows={LEFT_ROWS} drops={LEFT_DROPS} side="left" />
      </div>
      <div
        className="fol-container pointer-events-none fixed top-0 right-0 z-[1] hidden lg:block"
        aria-hidden="true"
        style={{ transform: "scaleX(-1)" }}
      >
        <FoliagePanel rows={RIGHT_ROWS} drops={RIGHT_DROPS} side="right" />
      </div>
    </>
  );
}
