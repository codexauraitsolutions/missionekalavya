import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

const TOPICS = [
  'India @ 2047', 'Artificial Intelligence', 'Poverty and Development', 'One Nation One Election',
  "India's Space Achievements", 'Renewable Energy', 'Demographic Dividend', 'Cultural Heritage of India',
  'Science and Technology', 'Women Empowerment', 'Climate Change', 'Digital India',
];

const PROGRAM_FEATURES = [
  'Regular Essay Writing Practice',
  'Detailed Evaluation by Experts',
  'Personalized Feedback on Each Essay',
  'Model Answers for Reference',
  'Writing Workshops and Masterclasses',
  'Vocabulary Building Sessions',
];

export default function EssayWritingPage() {
  return (
    <>
      <PageHero title="Essay Writing Program" subtitle="Master the Art of Expression" />

      <section className="py-[88px]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-red text-[30px] font-extrabold mb-4.5 tracking-tight">
            Essay Writing for UPSC Foundation
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Essay writing is a crucial component of UPSC Mains examination. Our program helps students
            develop structured thinking, articulate ideas clearly, and present arguments effectively from
            an early age.
          </p>

          <h3 className="text-dark font-bold mt-6.5 mb-3.5">📝 Topics We Cover:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-7">
            {TOPICS.map((topic) => (
              <div
                key={topic}
                className="bg-light px-4 py-3.5 rounded-[10px] text-center font-semibold text-sm border border-red/[0.12] text-dark hover:bg-red hover:text-white hover:border-red hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
              >
                {topic}
              </div>
            ))}
          </div>

          <h3 className="text-dark font-bold mt-6.5 mb-3">✨ Features of Our Essay Program:</h3>
          <ul className="ml-5.5 space-y-2.5 mb-4.5">
            {PROGRAM_FEATURES.map((f) => (
              <li key={f} className="leading-relaxed text-[#555]">✔ {f}</li>
            ))}
          </ul>

          <div className="bg-gradient-to-br from-red to-dark p-7.5 rounded-2xl mt-7.5 text-center text-white">
            <h3 className="font-bold text-lg mb-2.5">🏆 Weekly Essay Competition</h3>
            <p className="mb-5 opacity-90">
              Participate in weekly essay writing competitions and win certificates!
            </p>
            <Link
              href="/demo-registration"
              className="inline-block bg-yellow text-dark font-semibold px-6 py-2.5 rounded-md hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Join Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
