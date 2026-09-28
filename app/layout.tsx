import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "savanna mind — Where Algorithms Serve Communities",
    template: "%s | savanna mind",
  },
  description:
    "savanna mind builds intelligent systems that put people and communities first.",
  applicationName: "savanna mind",
  keywords: [
    "savanna mind",
    "AI for communities",
    "intelligent systems",
    "human-centered AI",
    "Kenya",
  ],
  authors: [{ name: "savanna mind" }],
  creator: "savanna mind",
  metadataBase: new URL("https://savannamind.com"),
  openGraph: {
    type: "website",
    siteName: "savanna mind",
    title: "savanna mind — Where Algorithms Serve Communities",
    description:
      "We design intelligent systems that lift people up, one community at a time.",
    images: [
      {
        url: "/hero-section.png",
        width: 1200,
        height: 630,
        alt: "savanna mind — where algorithms serve communities",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "savanna mind — Where Algorithms Serve Communities",
    description:
      "We design intelligent systems that lift people up, one community at a time.",
    images: ["/hero-section.png"],
  },
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F26",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-body">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="main-content" className="site-shell">
          {children}
        </div>
      </body>
    </html>
  );
}
