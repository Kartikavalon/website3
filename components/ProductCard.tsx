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
      className="group relative p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 transition-all duration-300 hover:shadow-card-lift hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-600 via-amber-400 to-cyan-400 group-hover:opacity-100 opacity-50 transition-opacity" />

      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400/10 to-cyan-400/10 text-amber-600 text-xs font-sans uppercase tracking-wider rounded-full border border-amber-400/30 group-hover:border-amber-400/60 transition-all">
          {category}
        </span>
      </div>

      {/* Symbol Circle with gradient */}
      <div className="mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-navy-600/20 to-cyan-400/20 border border-navy-600/40 flex items-center justify-center group-hover:shadow-glow-cyan transition-all">
        <span className="font-serif font-bold text-navy-600 text-lg">{symbol}</span>
      </div>

      {/* Content */}
      <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
        {name}
      </h3>

      <p className="font-sans text-sm text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>

      {purityGr && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-sans text-gray-500">Purity:</span>
          <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-900 rounded">{purityGr}</span>
        </div>
      )}

      {/* Learn More link */}
      <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-sans font-semibold group-hover:gap-3 transition-all">
        Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </a>
  );
}
