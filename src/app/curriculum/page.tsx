import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Reveal from '@/components/ui/Reveal';

const SUBJECTS = [
  { icon: '🌍', title: 'Geography', items: ['World Geography', 'Indian Geography', 'Physical Geography', 'Human Geography', 'Economic Geography'] },
  { icon: '📜', title: 'History', items: ['Ancient India', 'Medieval India', 'Modern India', 'Art & Culture', 'World History'] },
  { icon: '🔬', title: 'Science', items: ['Physics', 'Chemistry', 'Biology', 'Environmental Science', 'Scientific Developments'] },
  { icon: '💰', title: 'Economics', items: ['Indian Economy Fundamentals', 'Microeconomics', 'Macroeconomics', 'Budget & Planning', 'Economic Reforms'] },
  { icon: '⚖️', title: 'Polity', items: ['Indian Constitution', 'Indian Governance', 'Political System', 'Fundamental Rights', 'Directive Principles'] },
  { icon: '👥', title: 'Society', items: ['Social Issues', 'Indian Society', 'Social Justice', 'Women Empowerment', 'Poverty & Development'] },
];

const HIGHLIGHTS = [
  { icon: 'fa-book', title: 'NCERT Focus', text: 'Complete coverage of all NCERT textbooks from Class 6 to 12' },
  { icon: 'fa-newspaper', title: 'Current Affairs Integration', text: 'Regular updates connecting textbook knowledge with current events' },
  { icon: 'fa-pen-fancy', title: 'Answer Writing Practice', text: 'Regular practice of writing answers for UPSC pattern' },
  { icon: 'fa-chart-line', title: 'Progress Tracking', text: 'Regular assessments to track conceptual understanding' },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero title="Our Curriculum" subtitle="Complete NCERT Subjects Covered for UPSC Foundation" />

      <section className="py-24 bg-white">
  <div className="max-w-[1200px] mx-auto pl-12 pr-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SUBJECTS.map((s, i) => (
        <Reveal key={s.title} delay={i * 80}>
          <div className="group bg-white p-8 rounded-3xl border-2 border-transparent shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red to-orange" />
            <div className="relative z-10 text-5xl text-orange mb-5 group-hover:text-red group-hover:rotate-45 transition-all duration-300 no-spin">
              <div className="site-icon">{s.icon}</div>
            </div>
            <h2 className="text-red text-xl font-extrabold mb-4">{s.title}</h2>
            <ul className="space-y-3">
              {s.items.map((it) => (
                <li key={it} className="text-left text-gray-600 text-sm flex items-center gap-3 border-b border-[#f0f0f0] py-2.5">
                  <span className="text-orange font-bold text-lg">→</span> {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto pl-12 pr-6">
          <SectionTitle>What Makes Our Curriculum Special?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
            {HIGHLIGHTS.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="group bg-white p-8 rounded-3xl text-center border-2 border-transparent shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-red" />
                  <div className="relative z-10 text-5xl text-orange mb-5 group-hover:text-red group-hover:rotate-45 transition-all duration-300 no-spin">
                    <div className="site-icon">
                      <i className={`fas ${f.icon}`} />
                    </div>
                  </div>
                  <h3 className="text-red font-extrabold text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Master the Curriculum?"
        subtitle="Join Mission Ekalavya and build a strong foundation for UPSC"
      />
    </>
  );
}