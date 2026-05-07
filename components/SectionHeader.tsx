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
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent mx-auto mt-6" />
      )}
    </div>
  );
}
