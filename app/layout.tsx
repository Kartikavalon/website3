import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kaytherix Industries | Rare Earth Elements & Strategic Metals",
  description:
    "Premium supplier of rare earth elements, strategic metals, and advanced industrial materials. Global refining, high-purity processing, and export-grade metallurgy solutions.",
  keywords: [
    "rare earth elements",
    "strategic metals",
    "rare earth supplier",
    "metallurgy",
    "sputtering targets",
    "high purity metals",
    "rare earth refinery",
  ],
  openGraph: {
    title: "Kaytherix Industries | Rare Earth Elements & Strategic Metals",
    description: "Global supplier of rare earth elements, strategic metals, and advanced materials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
