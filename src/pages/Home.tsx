import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, Calendar, HelpCircle, Heart, ChevronRight, 
  MessageCircle, Star, ShieldCheck, Award, Info, ChevronLeft,
  Compass, Users, Smile, HeartHandshake, Quote, ArrowRight,
  ShieldAlert, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ACTIVITIES, TESTIMONIALS, FAQS } from '../data';
import { Activity } from '../types';
import ActivityCard from '../components/ActivityCard';
// @ts-ignore
import charityImage from '../assets/images/regenerated_image_1784366194627.png';
// @ts-ignore
import farmerBannerImage from '../assets/images/farmer_planting_banner_1784375020517.jpg';

interface HomeProps {
  favorites: Activity[];
  onFavoriteToggle: (activity: Activity) => void;
}

export default function Home({ favorites, onFavoriteToggle }: HomeProps) {
  const navigate = useNavigate();
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  // --- 1. Sliding Image Carousel State & Data ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 'slide-3',
      image: charityImage,
      title: '大手牽小手・愛心齊步走',
      subtitle: '主辦人：王景富主任 ── 攜手關懷弱勢孩童，將溫暖與愛傳遞到每個角落！',
      badge: '公益活動',
      badgeColor: 'bg-brand-orange text-white',
      link: '/charity',
      hideButtons: true
    },
    {
      id: 'slide-2',
      image: farmerBannerImage,
      title: '小農夫生存挑戰 ── 限時半價優惠中！',
      subtitle: '一場突如其來的大雨打亂了農場！現在需要勇敢的小農夫們出動完成任務！活動費用半價優惠 399 元！',
      badge: '限時半價',
      badgeColor: 'bg-brand-orange text-white',
      link: '/activity/travel-2',
      hideButtons: false
    }
  ];

  // Auto-play interval for Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // --- 3. Popular Activities ---
  const filteredActs = ACTIVITIES.slice(0, 4);

  // --- 4. Interactive Accordion FAQ State ---
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Sliding Top Hero Banner Carousel */}
      <div className="relative w-full">
        <div className="relative h-[280px] sm:h-[450px] lg:h-[520px] w-full overflow-hidden bg-brand-dark">
          {/* Slides display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-75"
              />
              {/* Slide text details overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8">
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-2 sm:space-y-4">
                  {slides[currentSlide].badge && (
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 border-2 border-brand-dark rounded-full text-[10px] sm:text-xs font-black shadow-sm ${slides[currentSlide].badgeColor}`}>
                        {slides[currentSlide].badge}
                      </span>
                    </div>
                  )}
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-rounded">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-xs sm:text-base text-gray-200 font-bold max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-relaxed line-clamp-2">
                    {slides[currentSlide].subtitle}
                  </p>
                  {!slides[currentSlide].hideButtons && (
                    <div className="pt-2 flex gap-3">
                      <Link
                        to={slides[currentSlide].link}
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-brand-yellow hover:bg-brand-yellow/90 border-2 border-brand-dark text-brand-dark font-black text-xs sm:text-sm rounded-full shadow-[3px_3px_0px_0px_#0E2356] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0E2356] transition-all font-rounded"
                      >
                        立即探索課程
                      </Link>
                      <a
                        href={lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-line-green hover:bg-line-green-hover border-2 border-brand-dark text-white font-black text-xs sm:text-sm rounded-full shadow-[3px_3px_0px_0px_#0E2356] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0E2356] transition-all flex items-center gap-1 font-rounded"
                      >
                        加 LINE 客服諮詢
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Controls */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white border-2 border-brand-dark text-brand-dark transition-all cursor-pointer shadow-sm active:scale-95 z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Controls */}
          <button
            onClick={handleNextSlide}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white border-2 border-brand-dark text-brand-dark transition-all cursor-pointer shadow-sm active:scale-95 z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Navigation dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-brand-dark transition-all cursor-pointer ${
                  currentSlide === index ? 'bg-brand-yellow w-6 sm:w-8' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Welcome Slogan & Highlight Badges */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-yellow-light text-brand-yellow-text border-2 border-brand-dark rounded-full text-xs font-black shadow-xs uppercase tracking-wider font-rounded">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>全台唯一 24H 專業親子活動與職人營隊推薦門戶</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark leading-tight font-rounded">
          啟迪孩子夢想，在 <span className="text-brand-orange underline decoration-wavy decoration-3">體驗中快樂學習</span>
        </h1>
        
        <p className="text-sm sm:text-base text-brand-muted font-bold max-w-2xl mx-auto leading-relaxed">
          全台最專業、最高規格的親子活動及職人體驗代訂推薦！我們深信「生活即教育，體驗即學習」，省去繁雜的多站比價與註冊手續，一鍵加 LINE 客服立刻由小幫手為您安排！
        </p>
      </div>

      {/* 3. 認識啟夢 (Get to Know QiMeng / Brand Vision) - BEAUTIFUL REDESIGNED SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-brand-dark p-6 sm:p-12 shadow-[8px_8px_0px_0px_#0E2356] space-y-12">
          
          {/* Heading */}
          <div className="text-center space-y-2">
            <span className="text-brand-orange font-black text-xs uppercase tracking-wider font-rounded block">
              🤝 GET TO KNOW QIMENG
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded flex items-center justify-center gap-2">
              <span>🤝</span> 認識啟夢 ‧ 陪伴孩子的週末探索旅程
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-bold max-w-2xl mx-auto">
              堅持「體驗式教育、安全至上、溫暖陪伴」的初衷，陪伴孩子從做中學、學中玩，勇敢探索無限未来！
            </p>
          </div>

          {/* Grid Layout of Promises */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-amber-50/50 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#0E2356] hover:-translate-y-1 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/25 border-2 border-brand-dark flex items-center justify-center text-2xl">
                ✨
              </div>
              <h3 className="text-base sm:text-lg font-black text-brand-dark font-rounded">1. 體驗式核心教育</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-bold leading-relaxed">
                擺脫傳統書本死記硬背！讓孩子換上制服，在沉浸式角色扮演與動手實作中，深刻理解生活常識並啟發未來志向。
              </p>
            </div>

            <div className="bg-blue-50/50 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#0E2356] hover:-translate-y-1 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-baby-blue/15 border-2 border-brand-dark flex items-center justify-center text-2xl">
                🛡️
              </div>
              <h3 className="text-base sm:text-lg font-black text-brand-dark font-rounded">2. 100% 實地安全勘查</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-bold leading-relaxed">
                所有營隊活動場地均由官方實地勘查。嚴格控制 1:5 至 1:8 高師生比，配備急救設備，並投保完整海外與公共責任意外險。
              </p>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#0E2356] hover:-translate-y-1 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border-2 border-brand-dark flex items-center justify-center text-2xl">
                🗣️
              </div>
              <h3 className="text-base sm:text-lg font-black text-brand-dark font-rounded">3. 啟發引導不設限</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-bold leading-relaxed">
                引導師不提供標準答案。透過趣味的情境提問與互動遊戲，激發孩子好奇心，勇敢上台發表想法，訓練邏輯與表達。
              </p>
            </div>

            <div className="bg-purple-50/50 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#0E2356] hover:-translate-y-1 transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border-2 border-brand-dark flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="text-base sm:text-lg font-black text-brand-dark font-rounded">4. 一鍵專人貼心客服</h3>
              <p className="text-xs sm:text-sm text-brand-muted font-bold leading-relaxed">
                免去繁瑣的多網比價與註冊流程！喜歡的活動直接加 LINE 傳給小幫手，10 分鐘內即由專人為您辦理，省心又省力。
              </p>
            </div>

          </div>

          {/* Statistics counter badges */}
          <div className="bg-brand-bg rounded-2xl border-2 border-brand-dark p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-inner">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-brand-orange font-rounded">50+ 位</div>
              <div className="text-[10px] sm:text-xs text-brand-muted font-bold">合作專業領域與幼師師資</div>
            </div>
            <div className="space-y-1 border-l-2 border-brand-border/60">
              <div className="text-2xl sm:text-3xl font-black text-baby-blue font-rounded">10,000+ 人</div>
              <div className="text-[10px] sm:text-xs text-brand-muted font-bold">累計報名體驗學童人數</div>
            </div>
            <div className="space-y-1 border-l-0 lg:border-l-2 border-brand-border/60 pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-brand-yellow-text font-rounded">99.6%</div>
              <div className="text-[10px] sm:text-xs text-brand-muted font-bold">家長滿意回饋與好評率</div>
            </div>
            <div className="space-y-1 border-l-2 border-brand-border/60 pt-4 lg:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-rounded">24小時</div>
              <div className="text-[10px] sm:text-xs text-brand-muted font-bold">專人 LINE 小幫手貼心回覆</div>
            </div>
          </div>

        </div>
      </div>



      {/* 5. 本月熱門活動 (Popular Recommendations Showcase) - NEW ADDITION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-1">
          <span className="text-brand-orange font-black text-xs uppercase tracking-wider font-rounded block">
            🔥 HOT CAMPS FOR KIDS
          </span>
          <h2 className="text-2xl font-black text-brand-dark font-rounded">
            本月熱門活動
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-bold">
            最受全台家長歡迎的超高口碑課程，剩餘名額緊張，搶訂從速！
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActs.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isFavorite={favorites.some((f) => f.id === activity.id)}
              onFavoriteToggle={() => onFavoriteToggle(activity)}
              onSelect={() => navigate(`/activity/${activity.id}`)}
            />
          ))}
        </div>

        {/* Browse all button */}
        <div className="text-center pt-4">
          <Link
            to="/category/all"
            className="inline-flex items-center gap-1 px-6 py-3 bg-white hover:bg-brand-bg border-2 border-brand-dark text-brand-dark font-black text-sm rounded-full shadow-[3px_3px_0px_0px_#0E2356] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0E2356] transition-all font-rounded"
          >
            <span>瀏覽全部精彩體驗活動</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </Link>
        </div>

      </div>

      {/* 6. 家長真實見證 (Parent Testimonials Showcase) - BEAUTIFUL ADDITION */}
      <div className="bg-brand-yellow-light/10 border-y-2 border-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-1">
            <span className="text-brand-orange font-black text-xs uppercase tracking-wider font-rounded block">
              💬 HEARTFELT FEEDBACK
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded flex items-center justify-center gap-2">
              <span>💬</span> 家長真實好評推薦
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-bold max-w-2xl mx-auto">
              看看其他寶貝在啟夢教育活動中的收穫！我們堅持最貼心溫暖的陪伴與最正向的引導。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#0E2356] hover:shadow-[6px_6px_0px_0px_#0E2356] transition-all flex flex-col justify-between space-y-4 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-brand-orange/10">
                  <Quote className="w-12 h-12 fill-brand-orange/10 text-brand-orange/5" />
                </div>

                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow-text" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-dark font-bold leading-relaxed relative z-10">
                    「{t.content}」
                  </p>
                </div>

                {/* Parent Avatar & Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                  <img
                    src={t.avatar}
                    alt={t.parentName}
                    className="w-10 h-10 rounded-full border border-brand-dark object-cover"
                  />
                  <div>
                    <div className="text-xs font-black text-brand-dark">
                      {t.parentName} (寶貝：{t.childName}，{t.childAge})
                    </div>
                    <div className="text-[10px] text-brand-orange font-bold font-rounded">
                      參與：{t.activityTitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 7. Easy booking guide 3 steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-yellow-light/20 rounded-2xl border-2 border-brand-dark p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0E2356] space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-black text-brand-dark font-rounded flex items-center justify-center gap-1.5">
              <span>💡</span> LINE 客服快速報名只需簡單 3 步驟
            </h3>
            <p className="text-xs text-brand-muted font-medium mt-0.5">
              免除多站跳轉註冊，10分鐘內為您的寶貝完成週末熱門體驗報名！
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center text-xs">
            <div className="space-y-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-black text-sm border-2 border-brand-dark shadow-[1px_1px_0px_0px_#0E2356]">
                1
              </span>
              <h4 className="font-black text-brand-dark">挑選體驗主題與活動</h4>
              <p className="text-brand-muted font-bold leading-relaxed px-4">
                點擊上方主題卡片，進入獨立分頁瀏覽活動詳情，選擇適合您孩子的項目。
              </p>
            </div>

            <div className="space-y-2 border-t sm:border-t-0 sm:border-x border-brand-border pt-4 sm:pt-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-black text-sm border-2 border-brand-dark shadow-[1px_1px_0px_0px_#0E2356]">
                2
              </span>
              <h4 className="font-black text-brand-dark">一鍵加官方 LINE 諮詢</h4>
              <p className="text-brand-muted font-bold leading-relaxed px-4">
                點擊右下角懸浮按鈕或活動頁中的報名鈕，加官方 LINE 好友，由專員為您服務。
              </p>
            </div>

            <div className="space-y-2 pt-4 sm:pt-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange text-white font-black text-sm border-2 border-brand-dark shadow-[1px_1px_0px_0px_#0E2356]">
                3
              </span>
              <h4 className="font-black text-brand-dark">專人快速確認並保留</h4>
              <p className="text-brand-muted font-bold leading-relaxed px-4">
                向客服小幫手傳送您想預約的活動與日期，10 分鐘內立即為您確認預約完成！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FAQ Accordion section on Home Page - USER CONVENIENCE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-brand-orange font-black text-xs uppercase tracking-wider font-rounded block">
            ❓ FAQ HELP CENTER
          </span>
          <h2 className="text-2xl font-black text-brand-dark font-rounded">
            常見問題指南 FAQ
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-bold">
            解答您對活動費用、保險、安全保障與取消機制的常見疑惑
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-xl border-2 border-brand-dark overflow-hidden shadow-[2px_2px_0px_0px_#0E2356] transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4 font-black text-xs sm:text-sm text-brand-dark flex justify-between items-center hover:bg-brand-bg transition-colors font-rounded gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronRight className={`w-4 h-4 text-brand-muted transition-transform shrink-0 ${isOpen ? 'rotate-90 text-brand-orange' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-brand-muted font-bold leading-relaxed border-t border-brand-border bg-brand-bg/25 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/faq"
            className="text-xs font-black text-brand-dark hover:text-brand-orange transition-colors font-rounded underline underline-offset-4"
          >
            查看更多 FAQ 完整常見問題 ➔
          </Link>
        </div>
      </div>

    </div>
  );
}
