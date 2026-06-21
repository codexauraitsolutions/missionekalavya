interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string | string[];
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  const subtitles = Array.isArray(subtitle) ? subtitle : subtitle ? [subtitle] : [];
  return (
    <>
      <h2 className="text-center text-4xl font-extrabold text-red mb-3.5 tracking-tight relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded after:bg-gradient-to-r after:from-red after:to-orange">
        {children}
      </h2>
      {subtitles.map((s, i) => (
        <p
          key={i}
          className={`text-center max-w-[740px] mx-auto text-[15.5px] text-[#555] leading-loose ${
            i === subtitles.length - 1 ? 'mb-12' : 'mb-4'
          }`}
        >
          {s}
        </p>
      ))}
    </>
  );
}
