# Varun Chadha - Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and TypeScript.

**Live site:** [vchadha.vercel.app](https://vchadha.vercel.app/)

---

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Inter](https://rsms.me/inter/) — typeface
- [Vercel](https://vercel.com/) — deployment

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js app router (layout, page, globals)
├── components/
│   ├── layout/           # Page-level structural components
│   ├── sections/         # Scrollable content sections (About, Experience, Projects)
│   └── ui/               # Reusable primitives (cards, tags, badges)
├── data/                 # Content as typed data (experience, games, publications)
├── context/              # React context providers (ActiveSectionContext)
├── hooks/                # Custom React hooks
└── lib/                  # Shared utilities
```

## Development

**Format code:**

```bash
bun run format
```

**Check formatting without writing:**

```bash
bun run format:check
```

## Deployment

The site deploys automatically to Vercel on push to `main`.

## Acknowledgements

Designed in [Figma](https://figma.com). Design inspired by
[Brittany Chiang](https://brittanychiang.com),
[Tammy Taabassum](https://taamannae.dev),
[Perry Wang](https://perryw-2023.webflow.io/),
and [Aashrey Sharma](https://aashreysharma.com).
