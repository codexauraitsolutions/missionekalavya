import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Reveal from '@/components/ui/Reveal';

const TEAM = [
  { name: 'Balalatha Madam ', role: 'Current Affirs & Motivation', bio: 'Ex-IAS Officer with 15+ years of experience in civil services training', color: '9b0000' },
  { name: 'Umesh Reddy Sir ', role: 'History', bio: 'PhD in Ancient History, 12+ years teaching experience', color: 'f89d01' },
  { name: 'Rahul Tiwari Sir ', role: 'Econmy & Current Affairs', bio: 'Former UPSC topper, specializes in Geography & Environment', color: '9b0000' },
  { name: 'Devanad Sir ', role: 'Polity & Governance', bio: 'LLM, PhD in Constitutional Law, 10+ years experience', color: 'f89d01' },
  { name: 'Raja Sir ', role: 'Geography & International Relations', bio: 'MA Economics, former Economic Advisor', color: '9b0000' },
  { name: 'Vinay Sir ', role: 'Communication Skills', bio: 'Certified Soft Skills Trainer, Motivational Speaker', color: 'f89d01' },
  // { name: 'Dr. Ravi Shankar', role: 'Science Faculty', bio: 'PhD in Physics, 8+ years experience in competitive exam training', color: '9b0000' },
  // { name: 'Neha Gupta', role: 'Current Affairs Expert', bio: 'Former journalist, specializes in current affairs analysis', color: 'f89d01' },
];

const WHY_TEAM = [
  { icon: 'fa-star', title: 'Experienced Faculty', text: 'Minimum 8+ years of teaching experience in UPSC coaching' },
  { icon: 'fa-chalkboard-user', title: 'Student-Centric Approach', text: 'Focus on conceptual clarity and doubt resolution' },
  { icon: 'fa-handshake', title: 'Personal Mentorship', text: 'One-on-one guidance for every student' },
  { icon: 'fa-trophy', title: 'Proven Track Record', text: 'Successful track record of producing top rankers' },
];

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Expert Faculty Team
" subtitle="Learn from the best mentors and educators" />

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 50}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] text-center hover:shadow-lg hover:-translate-y-2 transition-all h-full">
                  <div className="overflow-hidden">
                    <Image
                      src={`https://placehold.co/400x400/${member.color}/white?text=${encodeURIComponent(member.name)}`}
                      alt={member.name}
                      width={400}
                      height={400}
                      unoptimized
                      className="w-full h-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-red font-bold mt-4.5 mb-1">{member.name}</h3>
                  <p className="text-orange font-semibold text-[13.5px]">{member.role}</p>
                  <p className="px-4.5 pb-5.5 pt-2 text-[#555] text-[13.5px]">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Why Learn From Our Team?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
            {WHY_TEAM.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="group bg-white p-8 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-red scale-x-0 group-hover:scale-x-100 transition-transform" />
                  <i className={`fas ${f.icon} text-[44px] text-orange mb-4 block group-hover:scale-110 group-hover:-rotate-6 group-hover:text-red transition-all`} />
                  <h3 className="text-red font-bold mb-2.5">{f.title}</h3>
                  <p className="text-[#555] text-sm">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Learn From India's Best Faculty"
        subtitle="Join Mission Ekalavya and get mentored by experts"
      />
    </>
  );
}
