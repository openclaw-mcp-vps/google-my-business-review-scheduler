import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Review Scheduler — Automate Your Review Campaigns",
  description: "Schedule automated review request campaigns for Google My Business listings via email and SMS. Boost your local reputation on autopilot."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5a78a53b-4628-4754-8274-c00621065dc3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
