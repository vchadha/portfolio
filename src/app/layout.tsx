import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "/favicon/site.webmanifest",
  title: "Varun Chadha",
  description:
    "Senior software engineer building resilient, formally verified systems.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Varun Chadha",
    description:
      "Senior software engineer building resilient, formally verified systems.",
    url: "https://varunchadha.dev",
    siteName: "Varun Chadha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Chadha",
    description:
      "Senior software engineer building resilient, formally verified systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              history.scrollRestoration = 'manual';
              if (sessionStorage.getItem('scrollY')) {
                document.documentElement.style.opacity = '0';
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
