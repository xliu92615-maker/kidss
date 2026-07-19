import React from 'react';
import { Star, MessageCircle, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function FeedbackSection() {
  return (
    <div className="py-16 bg-white overflow-hidden border-b-2 border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-yellow-light border-2 border-brand-dark text-brand-dark rounded-full text-xs font-bold font-rounded mb-3">
            <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>家長真實好評回饋</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight font-rounded">
            看看其他寶貝與家長的快樂時光
          </h2>
          <p className="text-sm text-brand-muted mt-2 font-bold">
            100% 真實體驗反饋！感謝全台上千位爸爸媽媽對我們的信任與大力推薦。
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-brand-bg border-2 border-brand-dark rounded-xl p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_#2D3436] hover:shadow-[6px_6px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all"
            >
              {/* Card Quote Decorator */}
              <span className="absolute top-4 right-6 text-5xl font-black text-brand-orange/20 font-rounded pointer-events-none">
                “
              </span>

              {/* Main Comment */}
              <div className="space-y-4">
                {/* Rating and Activity Title */}
                <div className="space-y-1">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <span className="inline-block text-[10px] font-black text-brand-dark bg-brand-yellow-light border border-brand-dark px-2 py-0.5 rounded-md">
                    體驗：{t.activityTitle}
                  </span>
                </div>

                {/* Content text */}
                <p className="text-xs sm:text-sm text-brand-gray font-bold leading-relaxed text-justify">
                  {t.content}
                </p>
              </div>

              {/* Parent & Child info footer */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t-2 border-brand-border">
                <img
                  src={t.avatar}
                  alt={t.parentName}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-dark"
                />
                <div>
                  <h4 className="text-xs font-black text-brand-dark">
                    {t.parentName}
                  </h4>
                  <p className="text-[10px] text-brand-muted font-bold mt-0.5">
                    寶貝 {t.childName} ({t.childAge})
                  </p>
                </div>
                <span className="ml-auto text-[9px] text-brand-muted font-mono font-bold">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge with neat outline */}
        <div className="mt-12 text-center bg-brand-yellow-light border-2 border-brand-dark p-6 rounded-xl shadow-[4px_4px_0px_0px_#2D3436] max-w-2xl mx-auto">
          <p className="text-xs text-brand-dark leading-relaxed font-bold">
            💖 <b>「啟夢教育」承諾：</b>所有分享皆獲得家長授權同意。我們極度注重個人隱私與肖像安全，每堂活動皆配有專業隨堂攝影師，照片均可於課後透過官方 LINE 連結下載，為您珍藏孩子成長的每一個瞬間。
          </p>
        </div>

      </div>
    </div>
  );
}
