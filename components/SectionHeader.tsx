interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-600 via-amber-500 to-cyan-500 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-lg text-gray-700 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="w-24 h-1 bg-gradient-to-r from-navy-600 via-amber-400 to-cyan-400 mx-auto mt-6 rounded-full" />
      )}
    </div>
  );
}
