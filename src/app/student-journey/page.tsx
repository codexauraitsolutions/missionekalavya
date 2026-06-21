import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

const JOURNEY_STEPS = [
  { title: 'Enroll', text: 'Register for the program' },
  { title: 'Attend Live Classes', text: 'Interactive online sessions' },
  { title: 'Complete Assignments', text: 'Weekly practice material' },
  { title: 'Take Weekly Tests', text: 'Regular assessments' },
  { title: 'Mentorship Sessions', text: 'Personalized guidance' },
  { title: 'Become Future Leader', text: 'Achieve your goals' },
];

export default function StudentJourneyPage() {
  return (
    <>
      <PageHero title="Your Journey to Success" subtitle="6 Steps to Become a Future Leader" />

      <section className="py-24 bg-light relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "url('/images/img4.png')", backgroundSize: '420px 420px' }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-3.5">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.title} className="flex items-center gap-3.5">
                <div className="group text-center bg-white px-5 py-6.5 rounded-2xl min-w-[148px] shadow-sm border border-black/[0.06] hover:shadow-lg hover:-translate-y-1.5 transition-all relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-orange scale-x-0 group-hover:scale-x-100 transition-transform" />
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-red to-red-dark text-white rounded-full flex items-center justify-center text-[21px] font-extrabold mx-auto mb-3.5 shadow-md group-hover:scale-105 transition-transform">
                    {i + 1}
                  </div>
                  <h3 className="text-[13.5px] font-bold text-dark mb-1">{step.title}</h3>
                  <p className="text-xs text-[#555]">{step.text}</p>
                </div>
                {i < JOURNEY_STEPS.length - 1 && (
                  <span className="text-orange text-2xl font-bold hidden sm:inline">→</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-10 rounded-2xl bg-gradient-to-br from-yellow to-orange">
            <h2 className="text-dark text-3xl font-extrabold mb-3">Start Your Journey Today!</h2>
            <p className="mb-5 text-dark/80">Join thousands of students on the path to civil services</p>
            <Link
              href="/demo-registration"
              className="inline-block bg-red text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Register for Free Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
