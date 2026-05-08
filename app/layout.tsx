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
  title: "Kaytherix Industries | Rare Earth Elements & Strategic Metals Supplier",
  description:
    "Global leader in rare earth element refining and strategic metals supply. Premium quality materials, high-purity processing, and export-grade production for advanced industries.",
  keywords: [
    "rare earth elements",
    "rare earth supplier",
    "strategic metals",
    "neodymium supplier",
    "tantalum supplier",
    "gallium supplier",
    "rare earth refinery",
    "metal refining",
    "sputtering targets",
    "high purity metals",
    "advanced materials",
    "industrial chemicals",
    "precision substrates",
    "aerospace materials",
    "semiconductor materials",
    "EV materials",
  ],
  authors: [{ name: "Kaytherix Industries" }],
  creator: "Kaytherix Industries",
  publisher: "Kaytherix Industries",
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaytherix.com",
    siteName: "Kaytherix Industries",
    title: "Kaytherix Industries | Rare Earth Elements & Strategic Metals",
    description:
      "Global leader in rare earth element refining and strategic metals supply. Premium quality materials for aerospace, semiconductors, EV, and advanced industrial applications.",
    images: [
      {
        url: "https://kaytherix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaytherix Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaytherix Industries",
    description: "Global supplier of rare earth elements and strategic metals",
  },
  alternates: {
    canonical: "https://kaytherix.com",
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
