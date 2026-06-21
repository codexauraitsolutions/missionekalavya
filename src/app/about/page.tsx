import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';

const WHY_CHOOSE = [
  { icon: 'fa-chalkboard-user', title: 'Expert Faculty', text: 'Learn from experienced educators and UPSC mentors' },
  { icon: 'fa-laptop-code', title: 'Live Interactive Classes', text: 'Real-time learning with doubt clearing sessions' },
  { icon: 'fa-book-open', title: 'Comprehensive Curriculum', text: 'Complete coverage of NCERT and advanced topics' },
  { icon: 'fa-chart-line', title: 'Regular Assessments', text: 'Weekly tests and performance tracking' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Mission Ekalavya" subtitle="Nurturing Young Minds for Civil Services Excellence" />

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-red text-[32px] font-extrabold mb-5 tracking-tight">About Mission Ekalavya</h2>
                <p className="text-[#555] leading-relaxed mb-4">
                  Mission Ekalavya is an exclusive online learning program developed by CSB IAS Academy to
                  nurture young aspirants from Classes 6 to 12.
                </p>
                <p className="text-[#555] leading-relaxed mb-4">
                  The program integrates NCERT learning, current affairs, essay writing, personality
                  development, quizzes, tests, and mentorship into a structured curriculum designed
                  specifically for school students.
                </p>
                <p className="text-[#555] leading-relaxed mb-4">
                  Students gradually develop the knowledge and skills required for future success in Civil
                  Services, State Services, Olympiads, Scholarships, and other competitive examinations.
                </p>
                <Link
                  href="/programs"
                  className="inline-block mt-2 bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  Explore Programs →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group">
                <Image
                  src="https://placehold.co/600x400/9b0000/white?text=Mission+Ekalavya"
                  alt="About Mission Ekalavya"
                  width={600}
                  height={400}
                  className="w-full rounded-[22px] shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  unoptimized
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden py-[86px] text-white bg-gradient-to-br from-red-dark via-red to-[#4a1500]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <Reveal>
            <div className="bg-white/[0.08] border border-white/[0.13] p-10 rounded-[22px] text-center backdrop-blur-md hover:bg-white/[0.14] hover:-translate-y-1.5 transition-all">
              <h2 className="text-yellow text-[27px] font-extrabold mb-4">🎯 Our Vision</h2>
              <p className="opacity-90">
                To create a generation of knowledgeable, ethical, confident, and socially responsible
                leaders who contribute meaningfully to the nation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white/[0.08] border border-white/[0.13] p-10 rounded-[22px] text-center backdrop-blur-md hover:bg-white/[0.14] hover:-translate-y-1.5 transition-all">
              <h2 className="text-yellow text-[27px] font-extrabold mb-4">⭐ Our Mission</h2>
              <p className="opacity-90">
                To provide world-class foundational education and UPSC-oriented guidance to school
                students across India.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Why Choose Mission Ekalavya?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
            {WHY_CHOOSE.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group bg-white p-8 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-red scale-x-0 group-hover:scale-x-100 transition-transform" />
                  <i className={`fas ${f.icon} text-[44px] text-orange mb-4 block group-hover:scale-110 group-hover:-rotate-6 group-hover:text-red transition-all`} />
                  <h3 className="text-red font-bold mb-2.5">{f.title}</h3>
                  <p className="text-[#555] text-sm">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
