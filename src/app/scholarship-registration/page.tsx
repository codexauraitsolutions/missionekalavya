import PageHero from '@/components/ui/PageHero';
import ScholarshipRegistrationForm from '@/components/forms/ScholarshipRegistrationForm';

const TEST_DETAILS = [
  '📅 Test Date: 25th March 2026',
  '⏰ Time: 10:00 AM - 12:00 PM',
  '💻 Mode: Online',
  '📝 Syllabus: Class-level General Knowledge, Reasoning, and Basic UPSC Concepts',
  '🏆 Scholarship: Up to 100% fee waiver for top performers',
];

export default function ScholarshipRegistrationPage() {
  return (
    <>
      <PageHero title="Scholarship Test Registration" subtitle="Earn up to 100% scholarship on your program fee" />

      <section className="py-20 bg-light">
        <div className="max-w-[580px] mx-auto px-6">
          <div className="bg-white p-11 rounded-[22px] shadow-lg border border-black/[0.06]">
            <div className="mb-7.5">
              <h2 className="text-red text-[26px] font-extrabold mb-3 text-center">Apply for Scholarship Test</h2>
              <p className="text-[#555] text-sm font-semibold mb-2.5">Test Details:</p>
              <ul className="bg-light p-4.5 rounded-[10px] border-l-[3px] border-orange space-y-1.5">
                {TEST_DETAILS.map((d) => (
                  <li key={d} className="text-sm text-[#555]">{d}</li>
                ))}
              </ul>
            </div>
            <ScholarshipRegistrationForm />
          </div>
        </div>
      </section>
    </>
  );
}
