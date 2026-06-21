import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CTASection from '@/components/ui/CTASection';
import CategoryFilter from '@/components/ui/CategoryFilter';
import Reveal from '@/components/ui/Reveal';

const POSTS = [
  { title: 'Why Start UPSC Preparation Early? Benefits for School Students', meta: 'March 15, 2026 | UPSC Tips', excerpt: 'Discover how early exposure to UPSC concepts can give students a competitive edge and build a strong foundation for future success...', color: '9b0000', img: 'UPSC+Preparation' },
  { title: 'Mastering NCERT Books: A Complete Guide for UPSC Aspirants', meta: 'March 10, 2026 | Study Materials', excerpt: 'Learn effective strategies to read and retain NCERT content for long-term memory and how to integrate them with current affairs...', color: 'f89d01', img: 'NCERT+Books' },
  { title: 'How to Read Newspapers Effectively for UPSC Preparation', meta: 'March 5, 2026 | Current Affairs', excerpt: "Newspaper reading is crucial for current affairs. Here's a systematic approach to extract relevant information without wasting time...", color: '9b0000', img: 'Newspaper+Reading' },
  { title: 'Personality Development Tips for Future Civil Servants', meta: 'February 28, 2026 | Motivation', excerpt: 'Develop leadership, communication, and analytical skills from an early age to become an effective administrator...', color: 'f89d01', img: 'Personality+Development' },
  { title: 'Complete Guide to Olympiad Preparation for School Students', meta: 'February 20, 2026 | Study Materials', excerpt: 'How to prepare for Olympiads alongside UPSC foundation program. Tips, resources, and strategies for success...', color: '9b0000', img: 'Olympiad+Preparation' },
  { title: 'Top Scholarship Opportunities for School Students in India', meta: 'February 15, 2026 | Announcements', excerpt: 'Explore various scholarship programs available for school students and how to apply for them to fund your education...', color: 'f89d01', img: 'Scholarship+Opportunities' },
  { title: 'Time Management Strategies for School Students Preparing for UPSC', meta: 'February 10, 2026 | UPSC Tips', excerpt: 'Learn how to balance school studies, extracurricular activities, and UPSC preparation effectively...', color: '9b0000', img: 'Time+Management' },
  { title: 'Answer Writing Practice: How to Improve from Class 6 Itself', meta: 'February 5, 2026 | UPSC Tips', excerpt: 'Start early with answer writing practice. Tips, formats, and common mistakes to avoid...', color: 'f89d01', img: 'Answer+Writing' },
  { title: "A Parent's Guide to Supporting Your Child's UPSC Journey", meta: 'January 28, 2026 | Motivation', excerpt: 'How parents can provide the right guidance, motivation, and support for children aspiring for civil services...', color: '9b0000', img: 'Parent+Guide' },
];

export default function BlogPage() {
  return (
    <>
      <PageHero title="Our Blog" subtitle="Insights, tips, and updates for UPSC aspirants" />

      <section className="pt-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <CategoryFilter />
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 60}>
                <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] hover:shadow-lg hover:-translate-y-1.5 transition-all">
                  <div className="overflow-hidden group">
                    <Image
                      src={`https://placehold.co/600x400/${post.color}/white?text=${post.img}`}
                      alt={post.title}
                      width={600}
                      height={400}
                      unoptimized
                      className="w-full h-[205px] object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4.5 pt-4.5 flex-1">
                    <span className="text-orange text-xs font-semibold">{post.meta}</span>
                    <h2 className="text-lg font-bold text-red mt-2 mb-2 leading-snug">{post.title}</h2>
                    <p className="text-[#555] text-sm leading-relaxed pb-2">{post.excerpt}</p>
                  </div>
                  <Link href="/blog-single" className="inline-flex items-center gap-1.5 mx-4.5 mb-5.5 mt-auto text-red font-bold text-sm hover:gap-2.5 hover:text-orange transition-all">
                    Read More →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="flex gap-2 justify-center mt-11">
            {['1', '2', '3'].map((p, i) => (
              <a
                key={p}
                href="#"
                className={`w-[38px] h-[38px] flex items-center justify-center rounded-lg border font-semibold text-sm transition-colors ${
                  i === 0 ? 'bg-red text-white border-red' : 'bg-white border-black/10 text-dark hover:bg-red hover:text-white hover:border-red'
                }`}
              >
                {p}
              </a>
            ))}
            <a href="#" className="w-auto px-4 h-[38px] flex items-center justify-center rounded-lg border border-black/10 text-dark font-semibold text-sm hover:bg-red hover:text-white hover:border-red transition-colors">
              Next →
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-[640px] mx-auto px-6 text-center bg-white p-11 rounded-2xl shadow-md">
          <h2 className="text-red text-[28px] font-extrabold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-[#555] mb-6">
            Get the latest UPSC tips, study materials, and announcements directly in your inbox
          </p>
          <form className="flex flex-wrap gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 min-w-[220px] px-4 py-3 border border-black/15 rounded-lg outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(248,157,1,0.13)] transition-shadow"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[#888] mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection
        title="Want to Get More Such Insights?"
        subtitle="Join Mission Ekalavya and get access to exclusive study materials and guidance"
      />
    </>
  );
}
