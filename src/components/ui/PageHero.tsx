interface PageHeroProps {
  title: string;
  subtitle?: string;
}


export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white text-center pt-32 pb-16 bg-gradient-to-br from-red-dark via-red to-[#4a1500]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange/20 blur-3xl animate-orb" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h1 className="animate-fade-up text-[42px] font-extrabold tracking-tight mb-3">{title}</h1>
        {subtitle && (
          <p className="animate-fade-up text-[16.5px] opacity-90 max-w-[640px] mx-auto" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
