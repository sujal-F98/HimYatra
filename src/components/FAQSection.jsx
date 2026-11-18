import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/travelData';

export default function FAQSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-[#0c1514] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about planning, booking, permits, and traveling in Himachal Pradesh & Uttarakhand.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#142321] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-600/30 text-emerald-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">Have a specific question or custom dates?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Speak directly to our travel experts at {COMPANY_INFO.phone}.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2 shrink-0 shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Ask A Travel Expert</span>
          </button>
        </div>

      </div>
    </section>
  );
}
