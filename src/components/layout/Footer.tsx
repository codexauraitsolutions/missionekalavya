import Link from 'next/link';
import { Youtube, Facebook, Instagram, Send, MapPin, Phone, Mail,Megaphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#111] to-[#1e1e1e] text-white pt-[70px] pb-6">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-orange to-yellow" />
      <div className="absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full bg-orange/[0.07] blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-yellow font-bold text-[15px] mb-4 tracking-wide">
              Mission Ekalavya
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Nurturing Young Brains for Tomorrow's Leaders
            </p>
            <br />
            <p className="text-white/65 text-sm leading-relaxed">Building the next generation of informed citizens, responsible leaders, and future civil servants through knowledge, discipline, and excellence. 🇮🇳</p>
          </div>

          <div>
            <h4 className="text-yellow font-bold text-[15px] mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 list-none">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/programs', label: 'Programs' },
                { href: '/curriculum', label: 'Study Plan' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/65 text-sm hover:text-orange hover:pl-1.5 transition-all inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-yellow font-bold text-[15px] mb-4 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2 list-none">
              <li>
                <a href="#" className="text-white/65 text-sm hover:text-orange hover:pl-1.5 transition-all inline-block">
                  Brochure
                </a>
              </li>
              <li>
                <Link href="/e-toolkit" className="text-white/65 text-sm hover:text-orange hover:pl-1.5 transition-all inline-block">
                  NCERT Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/65 text-sm hover:text-orange hover:pl-1.5 transition-all inline-block">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow font-bold text-[15px] mb-4 tracking-wide">
              Contact Us
            </h4>
            <a
              href="https://maps.app.goo.gl/DbhSi5c3qDkTtJ2C7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 text-sm flex items-start gap-2 mb-2 hover:text-orange transition-colors group"
            >
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-orange group-hover:text-orange" />
              Hyderabad, Telangana
            </a>
            <a
              href="https://maps.app.goo.gl/eHy8on4uQ2K3eoyX9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 text-sm flex items-start gap-2 mb-2 hover:text-orange transition-colors group"
            >
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-orange group-hover:text-orange" />
              Vijayawada, Andhra Pradesh
            </a>
            <p className="text-white/65 text-sm flex items-start gap-2 mb-2">
              <Phone size={15} className="mt-0.5 flex-shrink-0 text-orange" />
              +91 89776 25796
            </p>
            <p className="text-white/65 text-sm flex items-start gap-2 mb-4">
              <Mail size={15} className="mt-0.5 flex-shrink-0 text-orange" />
              missionekalavya.csb@gmail.com
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: Youtube, href: 'https://www.youtube.com/@MISSIONEKALAVYA-CSBIAS' },
                { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61589084131841' },
                { Icon: Instagram, href: 'https://www.instagram.com/missionekalavya_csb_ias/' },
                { Icon: Megaphone, href: 'https://whatsapp.com/channel/0029Vb7q6Z9EFeXl0WTTkY40' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-[10px] bg-white/[0.07] border border-white/[0.09] flex items-center justify-center hover:bg-orange hover:border-orange hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(248,157,1,0.35)] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-5 border-t border-white/[0.08] text-[13px] text-white/40">
          <p>&copy; 2026 Mission Ekalavya - CSB IAS Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}