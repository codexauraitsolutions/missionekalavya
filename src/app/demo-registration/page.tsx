import PageHero from '@/components/ui/PageHero';
import DemoRegistrationForm from '@/components/forms/DemoRegistrationForm';

export default function DemoRegistrationPage() {
  return (
    <>
      <PageHero title="Free Demo Class Registration" subtitle="Experience Mission Ekalavya before you enroll" />

      <section className="py-20 bg-light">
        <div className="max-w-[580px] mx-auto px-6">
          <div className="bg-white p-11 rounded-[22px] shadow-lg border border-black/[0.06]">
            <div className="text-center mb-7.5">
              <h2 className="text-red text-[26px] font-extrabold mb-2">Register for Free Demo Class</h2>
              <p className="text-[#555] text-sm">
                Fill the form below. Our counselor will contact you to schedule the demo class.
              </p>
            </div>
            <DemoRegistrationForm />
          </div>
        </div>
      </section>
    </>
  );
}
