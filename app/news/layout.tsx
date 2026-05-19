import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Blog | Kaytherix Industries | Rare Earth Industry Updates",
  description:
    "Read the latest news, articles, and industry insights about rare earth elements, strategic metals, EV materials, semiconductors, and advanced manufacturing.",
  alternates: {
    canonical: "https://kaytherix.com/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
