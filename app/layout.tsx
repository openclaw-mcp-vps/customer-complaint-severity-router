import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complaint Severity Router – Route Support Tickets by AI Severity",
  description: "AI analyzes support tickets and routes urgent complaints to senior staff automatically. Built for customer success managers at SaaS companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ddcfcfd-6ff5-4e3b-a190-748971e5c49d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
