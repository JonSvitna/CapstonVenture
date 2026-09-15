import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capstoneventuregroup.com"),
  title: {
    default: "Capstone Venture Group | Land Management",
    template: "%s | Capstone Venture Group",
  },
  description:
    "Full-service land management for residential and commercial properties — landscaping, hardscaping, land clearing, excavation, demolition, site prep, and hauling. One team, start to finish.",
  keywords: [
    "land management",
    "land clearing",
    "excavation",
    "hardscaping",
    "site preparation",
    "New York",
  ],
  openGraph: {
    title: "Capstone Venture Group | Land Management",
    description:
      "From clearing and excavation to hardscape and final grade—one accountable crew from start to finish.",
    type: "website",
    images: [{ url: "/images/hero-bg.jpg", width: 1672, height: 941 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
