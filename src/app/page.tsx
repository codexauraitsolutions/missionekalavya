'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BENEFITS = [
  { icon: '🧠', title: 'Critical Thinking', text: 'Develop analytical and problem-solving skills from an early age.' },
  { icon: '📚', title: 'Strong NCERT Foundation', text: 'Master NCERT concepts essential for UPSC and other exams.' },
  { icon: '📰', title: 'Current Affairs Awareness', text: 'Stay updated with daily news and events.' },
  { icon: '🎯', title: 'Goal-Oriented Learning', text: 'Structured approach towards exam preparation.' },
  { icon: '🏆', title: 'Leadership Development', text: 'Build confidence and leadership qualities.' },
  { icon: '🇮🇳', title: 'Nation Building Mindset', text: 'Develop sense of responsibility towards society.' },
];

const SUBJECTS = [
  { icon: '🌍', title: 'Geography', items: ['World Geography', 'Indian Geography', 'Physical Geography'] },
  { icon: '📜', title: 'History', items: ['Ancient India', 'Medieval India', 'Modern India', 'Art & Culture'] },
  { icon: '🔬', title: 'Science', items: ['Physics', 'Chemistry', 'Biology'] },
  { icon: '💰', title: 'Economics', items: ['Indian Economy Fundamentals', 'Budget & Planning'] },
  { icon: '⚖️', title: 'Polity', items: ['Indian Constitution', 'Indian Governance', 'Fundamental Rights'] },
  { icon: '👥', title: 'Society', items: ['Social Issues', 'Indian Society', 'Social Justice'] },
];

const TOOLKIT = [
  { icon: 'fa-book', title: 'NCERT eBooks', text: 'Complete NCERT textbooks for Classes 6-12', cta: 'Download →' },
  { icon: 'fa-map', title: 'Atlas & Maps', text: 'Detailed maps for Geography preparation', cta: 'Download →' },
  { icon: 'fa-newspaper', title: 'Daily Current Affairs', text: 'Updated daily with important news', cta: 'Access →' },
  { icon: 'fa-question-circle', title: 'Weekly Quizzes', text: 'Test your knowledge every week', cta: 'Start →' },
  { icon: 'fa-file-pdf', title: 'Previous Year Questions', text: 'PYQs for UPSC and other exams', cta: 'Download →' },
  { icon: 'fa-video', title: 'Recorded Lectures', text: 'Access to all recorded sessions', cta: 'Watch →' },
];

const PERSONALITY_FEATURES = [
  { icon: 'fa-microphone-alt', title: 'Public Speaking', text: 'Regular speaking exercises and debates' },
  { icon: 'fa-comments', title: 'Communication Skills', text: 'Written and verbal communication training' },
  { icon: 'fa-users', title: 'Leadership Skills', text: 'Team leading exercises and group projects' },
  { icon: 'fa-clock', title: 'Time Management', text: 'Effective study planning and execution' },
  { icon: 'fa-handshake', title: 'Team Building', text: 'Collaborative learning and group activities' },
  { icon: 'fa-brain', title: 'Emotional Intelligence', text: 'Self-awareness and empathy training' },
];

const ESSAY_TOPICS = [
  'India @ 2047', 'Artificial Intelligence', 'Poverty and Development', 'One Nation One Election',
  "India's Space Achievements", 'Renewable Energy', 'Demographic Dividend', 'Cultural Heritage of India',
];

const JOURNEY_STEPS = [
  { title: 'Enroll', text: 'Register for the program' },
  { title: 'Attend Live Classes', text: 'Interactive online sessions' },
  { title: 'Complete Assignments', text: 'Weekly practice material' },
  { title: 'Take Weekly Tests', text: 'Regular assessments' },
  { title: 'Mentorship Sessions', text: 'Personalized guidance' },
  { title: 'Become Future Leader', text: 'Achieve your goals' },
];

const WHY_PARENTS = [
  { icon: 'fa-chalkboard-user', title: 'Expert Faculty', text: 'Learn from experienced educators and UPSC mentors' },
  { icon: 'fa-laptop', title: 'Live + Recorded Classes', text: 'Attend live or watch recordings anytime' },
  { icon: 'fa-star', title: 'Personalized Mentorship', text: 'One-on-one guidance for each student' },
  { icon: 'fa-tasks', title: 'Weekly & Monthly Tests', text: 'Regular assessments with analytics' },
  { icon: 'fa-chart-simple', title: 'Parent Progress Reports', text: 'Monthly updates on student performance' },
  { icon: 'fa-shield-alt', title: 'Safe Learning Environment', text: 'Secure and monitored online platform' },
];

const METRICS = [
  { number: '5000+', label: 'Students Guided' },
  { number: '50+', label: 'Expert Mentors' },
  { number: '1000+', label: 'Hours of Content' },
  { number: '100%', label: 'Concept-Based Learning' },
];

const TESTIMONIALS = [
  { text: 'My child has developed immense confidence and awareness after joining Mission Ekalavya.', name: 'Rajesh Kumar', role: 'Parent of Class 8 Student' },
  { text: 'The classes made learning Geography and Current Affairs interesting and engaging.', name: 'Priya Sharma', role: 'Class 9 Student' },
  { text: "Best decision we made for our daughter's future. The faculty is exceptional.", name: 'Anita Verma', role: 'Parent of Class 7 Student' },
];

export default function HomePage() {
  // State for scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center pt-32 pb-16 text-white bg-gradient-to-br from-red-dark via-red to-[#4a1500]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute -top-36 -right-36 w-[550px] h-[550px] rounded-full bg-orange/20 blur-3xl animate-orb pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <h1 className="animate-fade-up text-[58px] leading-[1.08] font-extrabold tracking-tight mb-5 bg-gradient-to-br from-white via-white to-yellow bg-clip-text text-transparent">
            MISSION EKALAVYA
          </h1>
          <h2 className="animate-fade-up text-[21px] font-semibold text-yellow mb-3.5" style={{ animationDelay: '100ms' }}>
            Nurturing Young Brains for Tomorrow's Leaders
          </h2>
          <h3 className="animate-fade-up text-[19px] font-semibold text-yellow mb-3.5" style={{ animationDelay: '140ms' }}>
            Building the Future Civil Servants, Administrators, Scientists, Leaders, and Nation Builders of India.
          </h3>
          <p className="animate-fade-up text-[17px] opacity-90 max-w-[680px] mx-auto mb-9 leading-relaxed" style={{ animationDelay: '180ms' }}>
            Mission Ekalavya is a pioneering initiative by CSB IAS Academy designed to introduce students from Classes 6 to 12 to the world of knowledge, leadership, critical thinking, and competitive excellence. Through structured NCERT learning, current affairs, personality development, essay writing, and mentorship, we prepare students for success in academics, competitive examinations, and life.           </p>
          <div className="animate-fade-up flex gap-4 justify-center flex-wrap" style={{ animationDelay: '260ms' }}>
            <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-lg shadow-orange/35 hover:-translate-y-1 hover:shadow-xl transition-all">
              ✅ Enroll Now
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white/75 text-white font-bold px-7 py-3 rounded-lg hover:bg-white hover:text-red transition-all">
              💬 Book Free Counseling
            </Link>
            <a href="/assets/brochure.pdf" className="inline-block border-2 border-white/75 text-white font-bold px-7 py-3 rounded-lg hover:bg-white hover:text-red transition-all">
              📥 Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Why Start UPSC Early */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle
            subtitle={[
              'Civil Services preparation is not merely about clearing an examination. It is about developing awareness, leadership qualities, analytical thinking, communication skills, and a deep understanding of society.',
              'Mission Ekalavya introduces these concepts at the school level, helping students build a strong academic foundation while simultaneously preparing for future competitive examinations.',
            ]}
          >
            Why Start UPSC Preparation Early?
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="group bg-white border border-black/[0.07] rounded-2xl p-9 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                  <div className="site-icon text-5xl mb-5 flag-float" style={{ animationDelay: `${i * 0.2}s` }}>{b.icon}</div>
                  <h3 className="text-red font-bold text-[17px] mb-2.5">{b.title}</h3>
                  <p className="text-[#555] text-sm">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br from-orange/[0.06] to-red/[0.04] [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionTitle>Program Structure</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-11">
            <Reveal>
              <div className="bg-white rounded-[22px] p-11 relative shadow-sm border border-black/[0.07] hover:shadow-lg hover:-translate-y-3 transition-all">
                <span className="absolute -top-3.5 right-6 bg-gradient-to-br from-orange to-[#c97a00] text-white px-4.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  18 Months Program
                </span>
                <h3 className="text-red text-[26px] font-extrabold mb-5">Classes 6 to 10</h3>
                <ul className="space-y-2.5 mb-7">
                  {['Complete NCERT Coverage', 'Live Interactive Classes', 'Recorded Sessions', 'Weekly Assignments', 'Monthly Tests', 'Current Affairs'].map((f) => (
                    <li key={f} className="text-[14.5px] flex items-center gap-2.5 border-b border-black/[0.06] pb-2.5">✅ {f}</li>
                  ))}
                </ul>
                <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-red to-red-dark text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
                  Enroll Now →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-[#fff8ec] rounded-[22px] p-11 relative shadow-[0_8px_32px_rgba(248,157,1,0.18)] border-2 border-orange hover:-translate-y-3 hover:shadow-lg transition-all">
                <span className="absolute -top-3.5 right-6 bg-gradient-to-br from-orange to-[#c97a00] text-white px-4.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  36 Months Program
                </span>
                <h3 className="text-red text-[26px] font-extrabold mb-5">Classes 6 to 12</h3>
                <ul className="space-y-2.5 mb-7">
                  {['Complete NCERT Coverage', 'Advanced UPSC Foundation', 'Essay Writing Training', 'Leadership Training', 'Personality Development', 'Mentorship Sessions', 'Competitive Exam Orientation'].map((f) => (
                    <li key={f} className="text-[14.5px] flex items-center gap-2.5 border-b border-black/[0.06] pb-2.5">✅ {f}</li>
                  ))}
                </ul>
                <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-red to-red-dark text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
                  Enroll Now →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle subtitle="Complete NCERT Subjects Covered for UPSC Foundation">
            Curriculum Coverage
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {SUBJECTS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group bg-white p-8 rounded-3xl border-2 border-transparent shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red to-orange" />
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange to-red rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className="site-icon text-white text-2xl">{s.icon}</div>
                  </div>
                  <h2 className="text-red text-xl font-extrabold mb-4">{s.title}</h2>
                  <ul className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="text-left text-gray-600 text-sm flex items-center gap-3 border-b border-[#f0f0f0] py-2.5">
                        <span className="text-orange font-bold text-lg">→</span> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E-Toolkit - UPDATED DESIGN */}
      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle subtitle="Everything you need for UPSC preparation at your fingertips">
            Digital Learning Resources
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {TOOLKIT.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className="group bg-white p-8 rounded-3xl text-center border-2 border-transparent shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/8 to-red/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red to-orange" />
                  <i className={`fas ${t.icon} text-5xl text-orange mb-4 block group-hover:text-red relative z-10 transition-colors duration-300`} />
                  <h3 className="text-red font-extrabold text-lg mb-3 relative z-10">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10 flex-grow">{t.text}</p>
                  <a href="#" className="inline-block mt-5 text-red font-bold text-sm hover:text-orange hover:tracking-wide transition-all relative z-10 group-hover:underline underline-offset-4">
                    {t.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Building Future Leaders - UPDATED DESIGN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle subtitle="Mission Ekalavya goes beyond academics and focuses on holistic development">
            Building Future Leaders
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {PERSONALITY_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group bg-light p-8 rounded-3xl text-center border-2 border-transparent shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange to-red" />
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange to-red rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${f.icon} text-white text-2xl`} />
                  </div>
                  <h3 className="text-red font-extrabold text-lg mb-3">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay Writing */}
      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle subtitle="Master the art of expression with structured essay practice">
            Essay Writing Program
          </SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ESSAY_TOPICS.map((topic) => (
              <div
                key={topic}
                className="bg-white px-4 py-3.5 rounded-[10px] text-center font-semibold text-sm border border-red/[0.12] text-dark hover:bg-red hover:text-white hover:border-red hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                {topic}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/essay-writing" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Student Journey */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "url('/images/img4.png')", backgroundSize: '420px 420px' }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionTitle>Your Journey to Success</SectionTitle>
          <div className="flex flex-wrap justify-center items-center gap-3.5 mt-11">
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
        </div>
      </section>

      {/* Why Parents Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Why Parents Choose Mission Ekalavya</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {WHY_PARENTS.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group bg-white p-8 rounded-2xl text-center border border-black/[0.06] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden h-full flex flex-col">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-red scale-x-0 group-hover:scale-x-100 transition-transform" />
                  <i className={`fas ${f.icon} text-[46px] text-orange mb-4.5 block group-hover:text-red`} />
                  <h3 className="text-red font-bold mb-2.5 text-base">{f.title}</h3>
                  <p className="text-[#555] text-sm">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange via-[#e08a00] to-[#c97a00] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.18)_0%,transparent_45%),radial-gradient(circle_at_85%_50%,rgba(155,0,0,0.12)_0%,transparent_45%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
            {METRICS.map((m, i) => (
              <div key={m.label} className={`py-7 px-5.5 relative ${i > 0 ? 'lg:border-l lg:border-white/25' : ''}`}>
                <span className="block text-5xl font-extrabold text-dark mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.12)]">
                  {m.number}
                </span>
                <span className="text-[14.5px] font-semibold text-dark/80">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <SectionTitle>What Parents & Students Say</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="relative bg-light border border-black/[0.06] p-8.5 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all">
                  <span className="absolute top-3.5 left-5.5 text-[88px] text-orange/[0.14] font-serif leading-none">&ldquo;</span>
                  <p className="italic text-[#444] text-[14.5px] leading-loose mb-5 relative z-10">&quot;{t.text}&quot;</p>
                  <div className="border-t-2 border-yellow pt-3.5">
                    <strong className="block text-red text-[15px] font-bold">{t.name}</strong>
                    <span className="text-[13px] text-[#888]">{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* App Image Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-center items-center">
            <Image
              src="/images/app.png"
              alt="Mission Ekalavya Learners' Hub App"
              width={900}
              height={700}
              className="rounded-2xl shadow-2xl object-contain w-full max-w-5xl h-auto"
              priority
            />
          </div>
        </div>
      </section> */}
            {/* ========== APP IMAGE SECTION WITH DOWNLOAD BUTTONS ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* App Image */}
            <Image
              src="/images/app.png"
              alt="Mission Ekalavya Learners' Hub App"
              width={900}
              height={700}
              className="rounded-2xl shadow-2xl object-contain w-full max-w-5xl h-auto"
              priority
            />

            {/* Download Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=co.varys.lipnp&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 border border-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.691 2.092L14.772 8.6 17.777 5.596 3.691 2.092zm-1.248 1.32v17.176l7.744-8.588-7.744-8.588zm15.203 3.416l-3.344 3.344 3.344 3.344 4.742-2.67-4.742-4.018zM3.691 21.908l11.081-6.508-3.005-3.005-8.076 9.513zm13.939-5.804l-3.344-3.344-3.344 3.344 3.344 3.344 3.344-3.344z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-medium">GET IT ON</div>
                  <div className="text-base font-bold tracking-tight">Google Play</div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/myinstitute/id1472483563"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 border border-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-medium">Download on the</div>
                  <div className="text-base font-bold tracking-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - UPDATED */}
      <section className="relative overflow-hidden text-center bg-gradient-to-br from-[#1a1a1a] via-dark to-[#4a0000] text-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(248,157,1,0.16)_0%,transparent_45%),radial-gradient(circle_at_90%_50%,rgba(248,226,59,0.1)_0%,transparent_45%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-[40px] font-extrabold mb-4 tracking-tight">Start Your Journey Today</h2>
          <p className="text-lg opacity-90 mb-9">Join India&apos;s Best UPSC Foundation Program for School Students</p>
          <div className="flex gap-[1rem] justify-center flex-wrap"> 
            <Link href="/demo-registration" className="inline-block bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
              Book Your Appointment
            </Link>
            <Link href="/scholarship-registration" className="inline-block border-2 border-white/75 text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-red transition-all">
              Apply for Scholarship Test
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-red to-red-dark text-white shadow-lg shadow-red/30 hover:shadow-xl hover:shadow-red/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-white/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
}