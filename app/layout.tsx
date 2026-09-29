import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";

export const metadata: Metadata = {
  title: {
    default: "Savanna Mind — Learn Practical AI",
    template: "%s | Savanna Mind",
  },
  description:
    "Sign in to Savanna Mind and build practical AI skills for Africa through guided lessons and hands-on practice.",
  applicationName: "Savanna Mind",
  keywords: [
    "Savanna Mind",
    "AI learning",
    "practical AI skills",
    "AI for Africa",
    "Kenya",
  ],
  authors: [{ name: "Savanna Mind" }],
  creator: "Savanna Mind",
  metadataBase: new URL("https://savannamind.com"),
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
