'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, APP_LINKS } from '@/lib/nav-links';

// Links shown directly in the bar at the "lg" breakpoint.
// The rest collapse into a "More" dropdown so things never cram together.
const PRIMARY_COUNT_LG = 6;
const PRIMARY_COUNT_XL = 9;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    // 'click' (not 'mousedown') so a click on a Link inside the dropdown
    // gets to navigate first - mousedown fires before the Link's own click
    // handler, which was closing the menu before navigation could happen.
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const primaryLg = NAV_LINKS.slice(0, PRIMARY_COUNT_LG);
  const overflowLg = NAV_LINKS.slice(PRIMARY_COUNT_LG);
  const primaryXl = NAV_LINKS.slice(0, PRIMARY_COUNT_XL);
  const overflowXl = NAV_LINKS.slice(PRIMARY_COUNT_XL);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md'
          : 'bg-white/90 backdrop-blur-md border-b border-black/5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-[64px] gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Mission Ekalavya"
              width={160}
              height={64}
              className="h-[46px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav - xl: show 9 links + More, lg: show 6 + More, below lg: hidden */}
          <nav className="hidden lg:flex items-center flex-1 justify-center min-w-0">
            <ul className="flex items-center list-none">
              {/* lg-only set */}
              <div className="flex lg:flex xl:hidden items-center">
                {primaryLg.map((link) => (
                  <NavItem key={link.href} link={link} active={isActive(link.href)} />
                ))}
              </div>
              {/* xl set */}
              <div className="hidden xl:flex items-center">
                {primaryXl.map((link) => (
                  <NavItem key={link.href} link={link} active={isActive(link.href)} />
                ))}
              </div>
            </ul>

            {/* More dropdown - lg breakpoint */}
            {overflowLg.length > 0 && (
              <div ref={moreRef} className="relative lg:block xl:hidden">
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-md transition-colors ${
                    moreOpen || overflowLg.some((l) => isActive(l.href))
                      ? 'text-red'
                      : 'text-dark hover:text-red'
                  }`}
                >
                  More
                  <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                {moreOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg border border-black/[0.06] py-2 min-w-[160px] animate-fade-up" style={{ animationDuration: '180ms' }}>
                    {overflowLg.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-[13.5px] font-medium transition-colors ${
                          isActive(link.href) ? 'text-red bg-light' : 'text-dark hover:text-red hover:bg-light'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* More dropdown - xl breakpoint */}
            {overflowXl.length > 0 && (
              <div ref={moreRef} className="relative hidden xl:block">
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-md transition-colors ${
                    moreOpen || overflowXl.some((l) => isActive(l.href))
                      ? 'text-red'
                      : 'text-dark hover:text-red'
                  }`}
                >
                  More
                  <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>
                {moreOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-black/[0.06] py-2 min-w-[160px] animate-fade-up" style={{ animationDuration: '180ms' }}>
                    {overflowXl.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-[13.5px] font-medium transition-colors ${
                          isActive(link.href) ? 'text-red bg-light' : 'text-dark hover:text-red hover:bg-light'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* App store buttons - desktop only, far right */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <StoreButton
              href={APP_LINKS.playStore}
              icon="fa-google-play"
              eyebrow="GET IT ON"
              label="Google Play"
            />
            <StoreButton
              href={APP_LINKS.appStore}
              icon="fa-apple"
              eyebrow="DOWNLOAD ON THE"
              label="App Store"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-1 rounded-md hover:bg-light active:scale-95 transition-all shrink-0"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white border-t border-black/[0.06] shadow-lg ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <nav className="overflow-y-auto max-h-[70vh]">
          <ul className="flex flex-col list-none py-2">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center px-6 py-3 text-[15px] font-medium border-b border-black/[0.04] transition-colors ${
                    isActive(link.href) ? 'text-red bg-light' : 'text-dark'
                  }`}
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-3 py-5">
            <StoreButton
              href={APP_LINKS.playStore}
              icon="fa-google-play"
              eyebrow="GET IT ON"
              label="Google Play"
            />
            <StoreButton
              href={APP_LINKS.appStore}
              icon="fa-apple"
              eyebrow="DOWNLOAD ON THE"
              label="App Store"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ link, active }: { link: { href: string; label: string }; active: boolean }) {
  return (
    <li>
      <Link
        href={link.href}
        className={`relative block px-3 py-2 mx-0.5 text-[13px] font-semibold whitespace-nowrap rounded-md transition-colors duration-200 ${
          active ? 'text-red' : 'text-dark hover:text-red'
        }`}
      >
        {link.label}
        <span
          className={`absolute left-3 right-3 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-red to-orange transition-transform duration-300 origin-left ${
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </Link>
    </li>
  );
}

function StoreButton({
  href,
  icon,
  eyebrow,
  label,
}: {
  href: string;
  icon: string;
  eyebrow: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 bg-dark text-white pl-2.5 pr-3.5 py-[7px] rounded-[8px] transition-all duration-200 hover:bg-red hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(155,0,0,0.3)] active:translate-y-0"
    >
      <i className={`fab ${icon} text-[18px]`} />
      <span className="flex flex-col items-start leading-none">
        <span className="opacity-70 text-[7.5px] font-medium tracking-wide">{eyebrow}</span>
        <span className="font-bold text-[12px] mt-0.5">{label}</span>
      </span>
    </a>
  );
}
