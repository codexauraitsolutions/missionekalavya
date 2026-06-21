'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: { src: string; alt: string; caption: string }[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSrc(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {images.map((img) => (
          <div
            key={img.src}
            onClick={() => setOpenSrc(img.src)}
            className="group relative overflow-hidden rounded-2xl shadow-sm cursor-zoom-in"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              unoptimized
              className="w-full h-[235px] object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white px-3.5 pt-7 pb-3.5 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {openSrc && (
        <div
          onClick={() => setOpenSrc(null)}
          className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center cursor-zoom-out"
        >
          <Image
            src={openSrc}
            alt="Enlarged"
            width={900}
            height={600}
            unoptimized
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </>
  );
}
