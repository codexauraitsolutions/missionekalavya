import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/ui/CTASection';
import FAQAccordion from '@/components/ui/FAQAccordion';

const FAQS = [
  { question: 'What is Mission Ekalavya?', answer: "Mission Ekalavya is India's first structured UPSC foundation program designed specifically for school students from Class 6 to Class 12, integrating NCERT learning with competitive exam preparation." },
{ 
    question: 'Why Start Early?', 
    answer: `The Civil Services Examination is not merely an examination. It is a journey that requires:
•	Strong NCERT Understanding 
•	Current Affairs Awareness 
•	Writing Skills 
•	Critical Thinking 
•	Leadership Qualities 
•	Social Awareness 
Mission Ekalavya develops these abilities from school age itself.`
  },


  { question: 'Who can join this program?', answer: 'Students currently studying in Classes 6 to 12 can join Mission Ekalavya. We have different batches for different grade levels.' },
  { question: 'Is the program completely online?', answer: 'Yes, Mission Ekalavya is a fully online program with live interactive classes, recorded sessions, and online tests.' },
  { question: 'Are recordings available if I miss a class?', answer: 'Yes, all live classes are recorded and available in your student dashboard for later viewing.' },
  { question: 'How are tests conducted?', answer: 'Weekly and monthly tests are conducted online through our platform. Students receive instant results and detailed performance analysis.' },
  { question: 'What is the course duration?', answer: 'We offer two programs: 18-month program for Classes 6-10 and 36-month comprehensive program for Classes 6-12.' },
  { question: 'Is mentorship provided?', answer: 'Yes, students receive regular mentorship sessions from experienced faculty and guest lectures from IAS officers.' },
  { question: 'How can parents track progress?', answer: 'Parents receive monthly progress reports, can access the parent dashboard, and schedule parent-teacher meetings.' },
  { question: 'What is the fee structure?', answer: '18-month program: ₹45,000 | 36-month program: ₹75,000. EMI options and early bird discounts available.' },
  { question: 'Is there a scholarship test?', answer: 'Yes, we conduct a scholarship test for meritorious students. Top performers can get up to 100% fee waiver.' },
  { question: 'What is the batch size?', answer: 'We maintain small batch sizes of 30-40 students to ensure personalized attention and effective doubt clearing.' },
  { question: 'Do you provide study materials?', answer: 'Yes, we provide comprehensive study materials, notes, and practice questions for all subjects.' },
  { question: 'Can I switch between programs?', answer: 'Yes, you can upgrade from 18-month to 36-month program within the first 3 months by paying the difference amount.' },
  { question: 'Is there a refund policy?', answer: 'Yes, we offer a 7-day money-back guarantee after the first class if you are not satisfied with the program.' },
  { question: 'What technology do I need?', answer: 'You need a smartphone, tablet, or laptop with a stable internet connection. Our platform works on all devices.' },
];

export default function FAQPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about Mission Ekalavya" />

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[640px] mx-auto bg-white p-9 rounded-2xl text-center shadow-sm border border-black/[0.06]">
            <h2 className="text-red text-[28px] font-extrabold mb-3">Still Have Questions?</h2>
            <p className="text-[#555] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Please contact our support team.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link href="/contact" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
                Contact Us
              </Link>
              <a href="tel:+91XXXXXXXXXX" className="inline-block border-2 border-red text-red font-bold px-7 py-3 rounded-lg hover:bg-red hover:text-white transition-all">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join Mission Ekalavya and get all your doubts cleared"
      />
    </>
  );
}
