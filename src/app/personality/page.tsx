import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

const KEY_AREAS = [
  { label: 'Public Speaking', text: 'Regular speaking exercises, debates, and presentations to overcome stage fear' },
  { label: 'Communication Skills', text: 'Written and verbal communication training for effective expression' },
  { label: 'Leadership Skills', text: 'Team leading exercises, group projects, and decision-making scenarios' },
  { label: 'Time Management', text: 'Effective study planning, prioritization, and execution strategies' },
  { label: 'Team Building', text: 'Collaborative learning, group discussions, and peer mentoring' },
  { label: 'Confidence Building', text: 'Motivational sessions, positive reinforcement, and success stories' },
  { label: 'Interview Skills', text: 'Mock interviews, body language training, and feedback sessions' },
  { label: 'Emotional Intelligence', text: 'Self-awareness, empathy training, and stress management' },
];

const ACTIVITIES = [
  'Weekly group discussions on current topics',
  'Monthly debate competitions with certificates',
  'Leadership workshops by industry experts',
  'Personality assessment and personalized feedback',
  'Goal setting and progress tracking sessions',
  'Extempore speaking practice',
  'Role-playing exercises for real-life scenarios',
];

export default function PersonalityPage() {
  return (
    <>
      <PageHero title="Personality Development" subtitle="Building Future Leaders for Tomorrow" />

      <section className="py-[88px]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-red text-[30px] font-extrabold mb-4.5 tracking-tight">Building Future Leaders</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Mission Ekalavya goes beyond academics and focuses on holistic development of students. We
            believe that future civil servants need more than just bookish knowledge - they need strong
            character, leadership abilities, and excellent communication skills.
          </p>

          <h3 className="text-dark font-bold mt-6.5 mb-3">🎯 Key Areas of Personality Development:</h3>
          <ul className="ml-5.5 space-y-2.5 mb-4.5">
            {KEY_AREAS.map((a) => (
              <li key={a.label} className="leading-relaxed text-[#555]">
                <strong className="text-dark">{a.label}:</strong> {a.text}
              </li>
            ))}
          </ul>

          <h3 className="text-dark font-bold mt-6.5 mb-3">📅 Activities Include:</h3>
          <ul className="ml-5.5 space-y-2.5 mb-4.5">
            {ACTIVITIES.map((a) => (
              <li key={a} className="leading-relaxed text-[#555]">{a}</li>
            ))}
          </ul>

          <div className="bg-light p-7.5 rounded-2xl mt-7.5 text-center">
            <h3 className="text-red font-bold text-lg mb-2.5">🎓 Ready to Transform Your Personality?</h3>
            <p className="mb-5 text-[#555]">Join Mission Ekalavya and become a confident future leader</p>
            <Link
              href="/demo-registration"
              className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Register for Free Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
