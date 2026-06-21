'use client';

import { useState } from 'react';

const CATEGORIES = ['All', 'UPSC Tips', 'Study Materials', 'Current Affairs', 'Motivation', 'Announcements'];

export default function CategoryFilter() {
  const [active, setActive] = useState('All');

  return (
    <div className="flex gap-2.5 justify-center flex-wrap my-7.5">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-2 rounded-full text-[13.5px] font-semibold border transition-all ${
            active === cat
              ? 'bg-red text-white border-red'
              : 'bg-white border-black/10 hover:bg-red hover:text-white hover:border-red'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
