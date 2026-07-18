import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <div id="faq-section" className="py-16 bg-brand-bg border-t-2 border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-yellow-light border-2 border-brand-dark text-brand-dark rounded-full text-xs font-bold font-rounded mb-3">
            <HelpCircle className="w-4 h-4 text-brand-orange" />
            <span>貼心家長問答集</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight font-rounded">
            常見問題解答 (FAQ)
          </h2>
          <p className="text-sm text-brand-muted mt-2 font-bold">
            在為寶貝報名活動前，讓我們先替您解答常見的大小疑問。
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border-2 border-brand-dark overflow-hidden shadow-[2px_2px_0px_0px_#2D3436] transition-all"
              >
                {/* Accordion Toggle */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-black text-brand-dark hover:text-brand-orange transition-colors cursor-pointer font-rounded"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-muted shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-5 border-t-2 border-brand-border pt-4 bg-brand-bg/30">
                    <p className="text-xs sm:text-sm text-brand-gray font-bold leading-relaxed whitespace-pre-line text-justify">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-white p-6 sm:p-8 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2D3436] max-w-2xl mx-auto">
          <p className="text-sm font-black text-brand-dark font-rounded">🤔 還有其他想要詢問的細節或客製包場需求嗎？</p>
          <p className="text-xs text-brand-muted mt-1.5 font-bold leading-relaxed">
            沒問題！歡迎直接點選下方按鈕加入我們的官方 LINE，與線上親子活動規劃專家直接一對一諮詢，服務親切，完全不收額外費用喔。
          </p>
          <div className="mt-5">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-line-green border-2 border-brand-dark text-white text-sm font-black shadow-[2px_2px_0px_0px_#2D3436] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2D3436] transition-all gap-1.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              加 LINE 與專人諮詢
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
