import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Reveal from '@/components/ui/Reveal';

const PLANS = [
  {
    title: '📘 11/2  Course (Single time Payment)',
    price: '₹15,000',
    // period: '(Full Program - One Time Payment)',
    features: ['Complete NCERT Coverage (Classes 6-10)', 'Live Classes - 2 days/week (Saturday & Sunday)', 'Recorded Sessions', 'Weekly Assignments', 'Monthly Tests', 'Current Affairs Updates', 'Study Materials PDF Handouts'],
    cta: 'Enroll Now',
    href: '/demo-registration',
    featured: false,
  },
  {
    title: '🎯 3 Years Course (Single time Payment)',
    price: '₹30,000',
    // period: '(Full Program - One Time Payment)',
    features: ['Complete NCERT Coverage (Classes 6-12)', 'Advanced UPSC Foundation', 'Essay Writing Training', 'Leadership Training', 'Personality Development', 'Mentorship Sessions', 'Competitive Exam Orientation', 'Live Classes - 2 days/week', 'Weekly Tests + Monthly Mock Exams', 'Study Materials PDF Handouts'],
    cta: 'Enroll Now',
    href: '/demo-registration',
    featured: true,
    badge: '⭐ Most Popular',
  },
];

const INCLUDED = [
  { title: 'Live Interactive Classes', text: 'Real-time learning with expert faculty' },
  { title: 'Live + Recorded Lectures', text: 'Access anytime for revision' },
  { title: 'Study Materials PDF', text: 'Comprehensive notes and resources' },
  { title: 'Doubt Clearing', text: '24/7 doubt resolution support' },
  { title: 'Weekly Assignments', text: 'Essay Writing & mock tests' },
];

const FAQ_PREVIEW = [
  { q: '❓ Who can join Mission Ekalavya??', a: 'Students from Classes 6 to 12.' },
  { q: '❓ Is the program online?', a: 'Yes, Yes, completely online.' },
  { q: '❓ Are recorded classes available?', a: 'Yes.' },
  { q: '❓ Is mentorship included?', a: 'Yes, Yes.' },
  { q: '❓ Are tests conducted regularly?', a: 'Yes, monthly' },
  { q: '❓ Is current affairs included?', a: 'Yes, daily updates.' },
    { q: '❓ Is there any registration fee?', a: 'No, registration is completely free. You only pay the program fee after enrollment confirmation.' },


];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Investment in Your Future" subtitle="Choose the plan that fits your needs" />

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.title} delay={i * 80}>
                <div
                  className={`relative h-full flex flex-col text-center p-10 rounded-[22px] shadow-sm border transition-all hover:-translate-y-2 hover:shadow-lg ${plan.featured
                    ? 'bg-gradient-to-br from-white to-[#fff8ec] border-2 border-orange scale-[1.02] shadow-[0_10px_40px_rgba(248,157,1,0.2)]'
                    : 'bg-white border-black/[0.07]'
                    }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3.5 right-6 bg-gradient-to-br from-orange to-[#c97a00] text-white px-4.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="font-extrabold text-lg text-dark mb-2">{plan.title}</h3>
                  <div className="text-[42px] font-extrabold text-red my-3">{plan.price}</div>
                  {/* <p className="text-sm text-[#555] mb-4.5">{plan.period}</p> */}
                  <ul className="text-left space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="text-sm">✅ {f}</li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* <div className="text-center mt-10 p-5.5 bg-light rounded-xl border-l-4 border-orange">
            <p className="text-sm mb-1.5">
              <i className="fas fa-rupee-sign text-orange" /> <strong>EMI Options Available</strong> |{' '}
              <i className="fas fa-percent text-orange" /> <strong>Early Bird Discount:</strong> 10% off till March 31, 2026
            </p>
            <p className="text-sm">
              <i className="fas fa-users text-orange" /> <strong>Group Discount:</strong> 5% additional off for 2+ students from same school
            </p>
          </div> */}
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>What&apos;s Included in Both Programs?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5 mt-11">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="group bg-white p-7.5 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all h-full">
                  <i className="fas fa-check-circle text-[40px] text-orange mb-3.5 block group-hover:scale-110 group-hover:text-red transition-all" />
                  <h3 className="text-red font-bold mb-2">{item.title}</h3>
                  <p className="text-[#555] text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="max-w-[760px] mx-auto space-y-4 mt-11">
            {FAQ_PREVIEW.map((f) => (
              <div key={f.q} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-1.5">{f.q}</h3>
                <p className="text-[#555] text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link href="/faq" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Invest in Your Future?"
        subtitle="Join Mission Ekalavya and start your UPSC journey today"
      />
    </>
  );
}
