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
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group bg-white p-7.5 rounded-2xl border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red to-orange scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                  <div className="text-[44px] mb-3.5 group-hover:scale-110 group-hover:-rotate-3 transition-transform">{s.icon}</div>
                  <h2 className="text-red text-[21px] font-extrabold mb-3.5">{s.title}</h2>
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="text-sm text-[#555] flex items-center gap-2 border-b border-[#f0f0f0] py-1.5">
                        <span className="text-orange font-bold text-xs">→</span> {it}
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
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>What Makes Our Curriculum Special?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
            {HIGHLIGHTS.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group bg-white p-8 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
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

      <CTASection
        title="Ready to Master the Curriculum?"
        subtitle="Join Mission Ekalavya and build a strong foundation for UPSC"
      />
    </>
  );
}
