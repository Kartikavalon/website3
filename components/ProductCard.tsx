interface ProductCardProps {
  id: string;
  name: string;
  symbol: string;
  category: string;
  purityGr?: string;
  shortDescription: string;
  href: string;
}

export default function ProductCard({
  name,
  symbol,
  category,
  purityGr,
  shortDescription,
  href,
}: ProductCardProps) {
  return (
    <a
      href={href}
      className="group relative p-6 bg-white border border-gray-300 rounded hover:border-primary-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-block px-3 py-1 bg-primary-600/10 text-primary-600 text-xs font-sans uppercase tracking-wider rounded-full">
          {category}
        </span>
      </div>

      {/* Symbol Circle */}
      <div className="mb-4 w-12 h-12 rounded-full bg-primary-600/10 border border-primary-600/30 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
        <span className="font-serif font-bold text-primary-600 text-lg">{symbol}</span>
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-semibold text-slate-100 mb-2 group-hover:text-primary-600 transition-colors">
        {name}
      </h3>

      <p className="font-sans text-sm text-slate-400 mb-4">{shortDescription}</p>

      {purityGr && (
        <p className="font-sans text-xs text-primary-400 drop-shadow-[0_0_20px_rgba(20,184,166,0.5)] mb-4">
          Purity: {purityGr}
        </p>
      )}

      {/* Arrow */}
      <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-sans font-semibold group-hover:translate-x-1 transition-transform">
        Learn More <span>→</span>
      </div>
    </a>
  );
}
