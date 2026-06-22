import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';

const COMPARISON = [
  ['Duration', '18 Months', '36 Months'],
  ['Classes per week', '4 days', '5 days'],
  ['NCERT Coverage', 'Classes 6-10', 'Classes 6-12'],
  ['Essay Writing', 'Basic', 'Advanced'],
  ['Mentorship', 'Monthly', 'Weekly'],
  ['Mock Tests', 'Monthly', 'Weekly'],
  ['Personality Development', 'No', 'Yes'],
  ['Leadership Training', 'No', 'Yes'],
  ['Price', '₹15,000', '₹30,000'],
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs" subtitle="Choose the right path for your UPSC journey" />

      <section className="py-20 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <Reveal>
              <div className="bg-white rounded-[22px] p-11 relative shadow-sm border border-black/[0.07] hover:shadow-lg hover:-translate-y-2 transition-all h-full">
                <span className="absolute -top-3.5 right-6 bg-gradient-to-br from-orange to-[#c97a00] text-white px-4.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  18 Months Program
                </span>
                <h2 className="text-red text-[25px] font-extrabold mb-2">📘 Classes 6 to 10</h2>
                <p className="inline-block bg-light px-3.5 py-1 rounded-full text-[13px] font-semibold text-dark mb-4">
                  Complete NCERT Foundation
                </p>
                <h3 className="font-bold text-dark mb-3 mt-4">What&apos;s Included:</h3>
                <ul className="space-y-2.5 mb-7">
                  {[
                    'Complete NCERT Coverage (Classes 6-10)',
                    'Live Interactive Classes - 4 days/week',
                    'Recorded Sessions for revision',
                    'Weekly Assignments',
                    'Monthly Tests with detailed analysis',
                    'Current Affairs updates',
                    'Doubt clearing sessions',
                    'Study materials and notes',
                  ].map((f) => (
                    <li key={f} className="text-[14.5px] flex items-start gap-2.5 border-b border-black/[0.06] pb-2.5">✅ {f}</li>
                  ))}
                </ul>
                <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
                  Enroll Now →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-[#fff8ec] rounded-[22px] p-11 relative shadow-[0_8px_32px_rgba(248,157,1,0.18)] border-2 border-orange hover:-translate-y-2 hover:shadow-lg transition-all h-full">
                <span className="absolute -top-3.5 right-6 bg-gradient-to-br from-orange to-[#c97a00] text-white px-4.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  Most Popular
                </span>
                <h2 className="text-red text-[25px] font-extrabold mb-2">🎯 Classes 6 to 12</h2>
                <p className="inline-block bg-white px-3.5 py-1 rounded-full text-[13px] font-semibold text-dark mb-4">
                  Comprehensive UPSC Foundation
                </p>
                <h3 className="font-bold text-dark mb-3 mt-4">What&apos;s Included:</h3>
                <ul className="space-y-2.5 mb-7">
                  {[
                    'Complete NCERT Coverage (Classes 6-12)',
                    'Advanced UPSC Foundation',
                    'Essay Writing Training & Practice',
                    'Leadership Training Workshops',
                    'Personality Development Sessions',
                    'Mentorship by IAS Officers',
                    'Competitive Exam Orientation',
                    'Live Classes - 5 days/week',
                    'Recorded Sessions',
                    'Weekly Tests + Monthly Mock Exams',
                    'Current Affairs Magazine',
                    '24/7 Doubt Support',
                  ].map((f) => (
                    <li key={f} className="text-[14.5px] flex items-start gap-2.5 border-b border-black/[0.06] pb-2.5">✅ {f}</li>
                  ))}
                </ul>
                <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
                  Enroll Now →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Program Comparison</SectionTitle>
          <div className="overflow-x-auto mt-11 rounded-2xl shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="bg-red text-white font-bold text-left px-4.5 py-3.5 text-sm">Features</th>
                  <th className="bg-red text-white font-bold text-left px-4.5 py-3.5 text-sm">18 Months Program</th>
                  <th className="bg-red text-white font-bold text-left px-4.5 py-3.5 text-sm">36 Months Program</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4.5 py-3.5 text-sm border-b border-black/[0.06]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join India's Best UPSC Foundation Program for School Students"
      />
    </>
  );
}
