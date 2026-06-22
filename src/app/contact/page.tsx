import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/ui/CTASection';
import ContactForm from '@/components/forms/ContactForm';

const OFFICES = [
  { icon: 'fa-map-marker-alt', title: 'Hyderabad Office', lines: [' Bala Latha’s Tushara building, Near Sub- Register Office, Ashok Nagar, Hyderabad, Telangana - 500080.'] },
  { icon: 'fa-map-marker-alt', title: 'Vijayawada Office', lines: ['CSB IAS ACADEMY, Lagadapati’s Block, Andhra Loyola College, Veterinary Colony, Vijayawada, Andhra Pradesh – 520008'] },
  { icon: 'fa-phone-alt', title: 'Phone Numbers', lines: ['+91 89776 25796'] },
  { icon: 'fa-envelope', title: 'Email Addresses', lines: ['missionekalavya.csb@gmail.com'] },
  { icon: 'fa-clock', title: 'Working Hours', lines: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: Closed'] },
];

const QUICK_FAQS = [
  { q: 'How can I enroll?', a: 'Click on "Enroll Now" button or call our support team for assistance.' },
  { q: 'Is there a demo class?', a: 'Yes, we offer free demo classes. Register using the demo registration form.' },
  { q: 'What is the batch size?', a: 'We maintain small batches of 30-40 students for personalized attention.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with us for any queries" />

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-13">
            <div>
              <h2 className="text-red text-[28px] font-extrabold mb-3">Get in Touch</h2>
              <p className="text-[#555] mb-7">Have questions about our programs? We&apos;re here to help you.</p>

              {OFFICES.map((office) => (
                <div key={office.title} className="flex gap-4 mb-6 items-start">
                  <i className={`fas ${office.icon} text-orange text-[21px] mt-0.5 min-w-[24px]`} />
                  <div>
                    <h3 className="font-bold text-dark mb-1">{office.title}</h3>
                    {office.lines.map((line) => (
                      <p key={line} className="text-[#555] text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-7">
                <h3 className="font-bold text-dark mb-3">Follow Us</h3>
                <div className="flex gap-2.5">
                  {['fa-youtube', 'fa-facebook-f', 'fa-instagram', 'fa-telegram', 'fa-linkedin-in'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-10 h-10 rounded-[10px] bg-light flex items-center justify-center text-dark hover:bg-red hover:text-white hover:-translate-y-0.5 transition-all"
                    >
                      <i className={`fab ${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-4xl font-extrabold text-red mb-11">Find Us Here</h2>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="text-center text-[#555] text-sm mt-4 flex items-center justify-center gap-1.5">
            <i className="fas fa-map-pin text-orange" /> CSB IAS Academy - Main Office, Banjara Hills, Hyderabad
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-4xl font-extrabold text-red mb-11">Quick Answers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {QUICK_FAQS.map((f) => (
              <div key={f.q} className="bg-light p-7 rounded-2xl text-center">
                <i className="fas fa-question-circle text-orange text-[34px] mb-3 block" />
                <h3 className="font-bold text-dark mb-1.5">{f.q}</h3>
                <p className="text-[#555] text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join Mission Ekalavya and build your future today"
      />
    </>
  );
}
