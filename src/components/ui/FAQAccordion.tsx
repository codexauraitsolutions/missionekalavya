'use client';

import { useState } from 'react';

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[800px] mx-auto mt-11">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="bg-white mb-3 rounded-2xl overflow-hidden shadow-md border border-black/[0.06] hover:shadow-lg transition-all">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full text-left px-8 py-4 pr-[60px] font-extrabold text-[16px] relative transition-colors ${
                isOpen ? 'bg-red text-white' : 'bg-white text-dark hover:bg-[#fef8ef] hover:text-red'
              }`}
            >
              {item.question}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl font-normal">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? '800px' : '0px' }}
            >
              <p className="px-8 py-6 text-[15px] text-[#555] leading-loose text-left whitespace-pre-line">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
