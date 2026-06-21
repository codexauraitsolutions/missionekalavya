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
          <div key={item.question} className="bg-white mb-2.5 rounded-xl overflow-hidden shadow-sm border border-black/[0.06] hover:shadow-md transition-shadow">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`w-full text-left px-5.5 py-4.5 pr-[50px] font-bold text-[15px] relative transition-colors ${
                isOpen ? 'bg-red text-white' : 'bg-white text-dark hover:bg-[#fef8ef] hover:text-red'
              }`}
            >
              {item.question}
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl font-normal">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <p className="px-5.5 py-4.5 text-[14.5px] text-[#555] leading-loose">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
