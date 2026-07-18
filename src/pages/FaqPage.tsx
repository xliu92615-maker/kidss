import React from 'react';
import FaqSection from '../components/FaqSection';
import { HelpCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  return (
    <div className="py-10 space-y-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded mb-2"
        >
          <ArrowLeft className="w-4 h-4 text-brand-orange" />
          返回首頁
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-orange font-black text-xs uppercase font-rounded mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded">常見問題與說明</h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-bold">
              關於體驗流程、請假退費、保險安全等家長最關心的問題，我們在這裡為您解答。
            </p>
          </div>
          <a
            href="https://line.me/R/ti/p/@parentchildfun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-line-green hover:bg-line-green-hover text-white text-xs sm:text-sm font-black border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436]"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white" />
            線上 LINE 客服諮詢
          </a>
        </div>
      </div>
      
      <FaqSection />
    </div>
  );
}
