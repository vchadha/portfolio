import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Varun Chadha",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-slate-400">
      <p className="font-mono text-sm font-semibold tracking-widest text-teal-300 uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xs text-center leading-normal">
        Sorry, this page doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
          role="img"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        Back to home
      </Link>
    </div>
  );
}
