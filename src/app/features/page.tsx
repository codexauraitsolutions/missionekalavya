import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';

const FEATURES = [
  { icon: 'fa-chalkboard-user', title: 'Expert Faculty', text: 'Learn from experienced educators and UPSC mentors' },
  { icon: 'fa-laptop', title: 'Live + Recorded Classes', text: 'Attend live or watch recordings anytime' },
  { icon: 'fa-users', title: 'Weekly Online Sessions', text: 'Regular interactive sessions with faculty' },
  { icon: 'fa-star', title: 'Personalized Mentorship', text: 'One-on-one guidance for each student' },
  { icon: 'fa-newspaper', title: 'Current Affairs Coverage', text: 'Daily updates and monthly magazines' },
  { icon: 'fa-pen-fancy', title: 'Essay Writing Practice', text: 'Regular practice with expert feedback' },
  { icon: 'fa-book', title: 'E-Books Access', text: 'Complete digital library of resources' },
  { icon: 'fa-tasks', title: 'Weekly & Monthly Tests', text: 'Regular assessments with analytics' },
  { icon: 'fa-chart-simple', title: 'Parent Progress Reports', text: 'Monthly updates on student performance' },
  { icon: 'fa-shield-alt', title: 'Safe Learning Environment', text: 'Secure and monitored online platform' },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero title="Why Parents Choose Mission Ekalavya" subtitle="Features That Make Us Different" />

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="group bg-white p-8 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-red scale-x-0 group-hover:scale-x-100 transition-transform" />
                  <i className={`fas ${f.icon} text-[44px] text-orange mb-4 block group-hover:scale-110 group-hover:-rotate-6 group-hover:text-red transition-all`} />
                  <h3 className="text-red font-bold mb-2.5 text-base">{f.title}</h3>
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
