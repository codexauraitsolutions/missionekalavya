import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/ui/CTASection';
import Lightbox from '@/components/ui/Lightbox';

const GALLERY_ITEMS = [
  { caption: 'Interactive Classroom Session', text: 'Classroom Session', color: '9b0000' },
  { caption: 'Personality Development Workshop', text: 'Workshop', color: 'f89d01' },
  { caption: 'Annual Day Celebration', text: 'Annual Day', color: '9b0000' },
  { caption: 'Student Achievement Award', text: 'Award Ceremony', color: 'f89d01' },
  { caption: 'One-on-One Mentorship', text: 'Mentorship', color: '9b0000' },
  { caption: 'Student Study Groups', text: 'Study Group', color: 'f89d01' },
  { caption: 'Guest Lecture by IAS Officer', text: 'Guest Lecture', color: '9b0000' },
  { caption: 'Live Online Classes', text: 'Online Class', color: 'f89d01' },
  { caption: 'Educational Field Trips', text: 'Field Trip', color: '9b0000' },
  { caption: 'Weekly Quiz Competition', text: 'Quiz Competition', color: 'f89d01' },
  { caption: 'Inter-School Debate Competition', text: 'Debate Session', color: '9b0000' },
  { caption: 'Program Completion Ceremony', text: 'Graduation', color: 'f89d01' },
];

const VIDEOS = [
  { title: 'Introduction to Mission Ekalavya', duration: '2:30 min' },
  { title: 'Student Success Stories', duration: '4:15 min' },
  { title: 'Parent Testimonials', duration: '3:45 min' },
  { title: 'Behind the Scenes - Classroom', duration: '2:00 min' },
];

export default function GalleryPage() {
  const images = GALLERY_ITEMS.map((item) => ({
    src: `https://placehold.co/600x400/${item.color}/white?text=${encodeURIComponent(item.text)}`,
    alt: item.caption,
    caption: item.caption,
  }));

  return (
    <>
      <PageHero title="Our Gallery" subtitle="Moments from our classes, events, and student achievements" />

      <section className="py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <Lightbox images={images} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle>Video Highlights</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-11">
            {VIDEOS.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 text-center shadow-sm border border-black/[0.06] hover:shadow-lg hover:-translate-y-1.5 transition-all"
              >
                <i className="fas fa-play-circle text-[44px] text-orange mb-3.5 block" />
                <h3 className="text-red font-bold text-[15px] mb-1.5">{v.title}</h3>
                <p className="text-[#555] text-sm mb-3">Watch: {v.duration}</p>
                <a href="#" className="text-red font-bold text-[13.5px] hover:text-orange hover:tracking-wide transition-all">
                  Watch Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Our Success Story"
        subtitle="Join Mission Ekalavya and start your journey today"
      />
    </>
  );
}
