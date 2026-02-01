import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Aura App Ventures - We build your app. You keep the equity.",
  description: "We partner with top influencers to build premium mobile apps—completely free. You focus on your audience. We handle design, development, App Store publishing, and everything in between.",
  keywords: ["mobile app development", "influencer apps", "app development", "equity partnership", "free app development"],
  authors: [{ name: "Aura App Ventures" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aura App Ventures - We build your app. You keep the equity.",
    description: "We partner with top influencers to build premium mobile apps—completely free.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura App Ventures - We build your app. You keep the equity.",
    description: "We partner with top influencers to build premium mobile apps—completely free.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
