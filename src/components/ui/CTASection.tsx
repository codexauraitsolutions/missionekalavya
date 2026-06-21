import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryText = 'Register for Free Demo Class',
  primaryHref = '/demo-registration',
  secondaryText = 'Apply for Scholarship Test',
  secondaryHref = '/scholarship-registration',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden text-center bg-gradient-to-br from-[#1a1a1a] via-dark to-[#4a0000] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(248,157,1,0.16)_0%,transparent_45%),radial-gradient(circle_at_90%_50%,rgba(248,226,59,0.1)_0%,transparent_45%)] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-[40px] font-extrabold mb-4 tracking-tight">{title}</h2>
        <p className="text-lg opacity-90 mb-9">{subtitle}</p>
        <div className="flex gap-4.5 justify-center flex-wrap">
          <Link
            href={primaryHref}
            className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            {primaryText}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-block border-2 border-white/75 text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-red transition-all"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
