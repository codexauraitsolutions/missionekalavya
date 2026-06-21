import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Reveal from '@/components/ui/Reveal';

const TOOLKIT = [
  { icon: 'fa-book', title: 'NCERT eBooks', text: 'Complete NCERT textbooks for Classes 6-12', cta: 'Download →' },
  { icon: 'fa-map', title: 'Atlas & Maps', text: 'Detailed maps for Geography preparation', cta: 'Download →' },
  { icon: 'fa-calendar-alt', title: 'India Year Book', text: 'Latest India Year Book for current affairs', cta: 'Download →' },
  { icon: 'fa-newspaper', title: 'Daily Current Affairs', text: 'Updated daily with important news', cta: 'Access →' },
  { icon: 'fa-file-alt', title: 'Digital Newspaper', text: 'E-newspaper for daily reading', cta: 'Read →' },
  { icon: 'fa-question-circle', title: 'Weekly Quizzes', text: 'Test your knowledge every week', cta: 'Start →' },
  { icon: 'fa-file-pdf', title: 'Previous Year Questions', text: 'PYQs for UPSC and other exams', cta: 'Download →' },
  { icon: 'fa-video', title: 'Recorded Lectures', text: 'Access to all recorded sessions', cta: 'Watch →' },
  { icon: 'fa-chart-line', title: 'Performance Analytics', text: 'Track your progress and improvement', cta: 'View →' },
];

const STEPS = [
  { title: 'Enroll in Program', text: 'Join Mission Ekalavya program' },
  { title: 'Login to Dashboard', text: 'Access your student dashboard' },
  { title: 'Explore Resources', text: 'Download or access any resource' },
];

export default function EToolkitPage() {
  return (
    <>
      <PageHero title="Digital Learning Resources" subtitle="Everything you need for UPSC preparation at your fingertips" />

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {TOOLKIT.map((t, i) => (
              <Reveal key={t.title} delay={i * 50}>
                <div className="group bg-white p-8.5 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <i className={`fas ${t.icon} text-[46px] text-orange mb-3.5 block group-hover:scale-110 group-hover:text-red transition-all relative z-10`} />
                  <h3 className="text-red font-bold mb-2 relative z-10">{t.title}</h3>
                  <p className="text-[#555] text-sm relative z-10">{t.text}</p>
                  <a href="#" className="inline-block mt-auto pt-3.5 text-red font-bold text-[13.5px] hover:text-orange hover:tracking-wide transition-all relative z-10">
                    {t.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>How to Access E-Toolkit?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-11">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-white p-7.5 rounded-2xl text-center shadow-sm border border-black/[0.06] hover:shadow-lg hover:-translate-y-2 transition-all">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-red to-red-dark text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-3.5 shadow-md">
                  {i + 1}
                </div>
                <h3 className="font-bold text-dark mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#555]">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-white px-7 py-5 rounded-xl inline-flex items-center gap-2 shadow-sm mx-auto">
            <i className="fas fa-lock text-orange" />
            <p className="text-sm text-dark font-medium">
              All resources are available exclusively for enrolled students
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Access to Complete E-Toolkit"
        subtitle="Join Mission Ekalavya and unlock all digital learning resources"
      />
    </>
  );
}
