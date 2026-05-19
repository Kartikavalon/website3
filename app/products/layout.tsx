import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Kaytherix Industries | Rare Earth Elements & Strategic Metals",
  description:
    "Browse our complete catalog of rare earth elements, strategic metals, advanced materials, industrial chemicals, and precision substrates with detailed specifications.",
  alternates: {
    canonical: "https://kaytherix.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
