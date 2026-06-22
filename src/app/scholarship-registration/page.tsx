import PageHero from '@/components/ui/PageHero';
import ScholarshipRegistrationForm from '@/components/forms/ScholarshipRegistrationForm';

const TEST_DETAILS = [

  ' Mission Ekalavya Boot Camp is a transformational learning experience designed by CSB IAS Academy to help students discover their potential beyond textbooks. Through engaging workshops, personality development sessions, current affairs awareness, leadership activities, and UPSC foundation learning, students develop the knowledge, confidence, and vision required to become tomorrows changemakers.',
];

export default function ScholarshipRegistrationPage() {
  return (
    <>
      <PageHero title="Scholarship Test Registration" subtitle="Earn up to 100% scholarship on your program fee" />

      <section className="py-20 bg-light">
        <div className="max-w-[580px] mx-auto px-6">
          <div className="bg-white p-11 rounded-[22px] shadow-lg border border-black/[0.06]">
            <div className="mb-7.5">
              <h2 className="text-red text-[26px] font-extrabold mb-3 text-center">Register For Upcoming Boot Camp Programme</h2>
              <p className="text-[#555] text-sm font-semibold mb-2.5">Description:</p>
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
