import React from 'react';
import { Sparkles, Calendar, Award, Compass, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onCategorySelect: (category: 'all' | 'career' | 'manager' | 'activity' | 'travel') => void;
}

export default function Hero({ onExploreClick, onCategorySelect }: HeroProps) {
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  const quickFeatures = [
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: '小小職業體驗營',
      desc: '牙醫、消防員、烘焙師等，換上專屬制服，啟迪寶貝夢想！',
      category: 'career' as const,
      color: 'bg-brand-orange text-white hover:bg-brand-orange-hover'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-dark" />,
      title: '小小店長特輯',
      desc: '超商、披薩、文青書店管理員，養成金錢觀與待客禮儀！',
      category: 'manager' as const,
      color: 'bg-brand-yellow text-brand-dark hover:bg-brand-yellow-light'
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: '精選親子活動',
      desc: '夜間生態探索、瘋狂五感塗鴉，創造親子最親密回憶。',
      category: 'activity' as const,
      color: 'bg-baby-orange text-white hover:opacity-90'
    },
    {
      icon: <Compass className="w-6 h-6 text-white" />,
      title: '親子旅遊資訊',
      desc: '精選宜蘭親近小動物、夜宿海生館等深度懶人包。',
      category: 'travel' as const,
      color: 'bg-brand-yellow-light text-brand-yellow-text hover:opacity-90'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-brand-bg pt-10 pb-16 border-b border-brand-border">
      {/* Geometric Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-yellow-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-5 left-1/3 w-64 h-64 bg-baby-blue/15 rounded-full blur-3xl -z-10" />

      {/* Decorative solid outline shapes */}
      <div className="absolute top-12 right-24 w-12 h-12 border-4 border-brand-yellow rounded-lg rotate-12 opacity-40 hidden lg:block" />
      <div className="absolute bottom-16 left-20 w-16 h-16 border-4 border-brand-orange rounded-full opacity-30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-yellow-light border-2 border-brand-dark text-brand-dark rounded-full text-xs font-bold font-rounded shadow-[2px_2px_0px_0px_#0E2356]">
              <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
              <span>全台最好玩的幼兒及學童體驗平台</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-tight">
              陪伴寶貝在歡笑中
              <br />
              <span className="relative inline-block text-brand-orange font-black mt-2 font-rounded">
                探索無限可能！
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              「啟夢教育」為您精挑細選最溫馨、安全、且富有啟發性的親子活動！無論是超萌的<b>小小店長、職業體驗營、自然生態探索、或是熱門深度親子旅遊</b>，在我們這裡皆可一鍵預約！我們專注於最優質的親子互動，帶給孩子受用一生的美好體驗。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-orange border-2 border-brand-dark text-white font-extrabold text-base shadow-[4px_4px_0px_0px_#0E2356] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0E2356] transition-all cursor-pointer"
              >
                探索體驗活動
              </button>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-line-green border-2 border-brand-dark text-white font-extrabold text-base shadow-[4px_4px_0px_0px_#0E2356] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#0E2356] transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2 fill-white" />
                加 LINE 報名諮詢
              </a>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-brand-dark/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-brand-orange font-rounded">15,000+</span>
                <span className="text-xs font-bold text-brand-muted">孩子快樂體驗</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-brand-yellow-text font-rounded">4.9★</span>
                <span className="text-xs font-bold text-brand-muted">1200+ 家長好評</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-black text-baby-blue font-rounded">100%</span>
                <span className="text-xs font-bold text-brand-muted">安全無毒保證</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Banner with Geometric frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[32px] overflow-hidden border-4 border-brand-dark shadow-[8px_8px_0px_0px_#0E2356]">
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
                alt="Happy kid playing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay Floating badge 1 */}
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-2xl shadow-sm flex items-center gap-2 border-2 border-brand-dark">
                <div className="w-10 h-10 rounded-full bg-brand-yellow-light border border-brand-dark flex items-center justify-center text-lg">👩‍👦</div>
                <div>
                  <p className="text-xs font-black text-brand-dark">小小店長熱烈報名中</p>
                  <p className="text-[10px] font-bold text-brand-muted">剩餘極少名額，手速要快！</p>
                </div>
              </div>

              {/* Overlay Floating badge 2 */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border-2 border-brand-dark">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-black text-brand-dark">LINE 客服在線中</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Categories Navigation Bar */}
        <div className="mt-16">
          <p className="text-center font-extrabold text-brand-dark text-sm mb-6 tracking-wider font-rounded">🔍 點選下列主題，快速瀏覽精選推薦活動</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFeatures.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onCategorySelect(item.category)}
                className={`p-6 rounded-2xl border-2 border-brand-dark cursor-pointer transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_#0E2356] hover:shadow-[6px_6px_0px_0px_#0E2356] ${item.color}`}
              >
                <div className="p-3 bg-white border border-brand-dark rounded-xl shadow-xs inline-block mb-3">
                  {/* ensure white backgrounds still render correctly */}
                  <span className="text-2xl">
                    {idx === 0 ? '🦷' : idx === 1 ? '🏪' : idx === 2 ? '🎨' : '🦕'}
                  </span>
                </div>
                <h3 className="text-base font-extrabold flex items-center justify-between">
                  {item.title}
                  <span className="text-xs font-bold">➔</span>
                </h3>
                <p className="text-xs mt-1.5 line-clamp-2 leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
