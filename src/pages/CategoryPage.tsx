import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ACTIVITIES } from '../data';
import { Activity } from '../types';
import ActivityCard from '../components/ActivityCard';
import { ArrowLeft, Search, RefreshCw, Star, ShieldCheck, Award, Sparkles, Heart, Smile, Users, Compass, Globe, Plane, BookOpen, Camera, Eye, ChevronLeft, ChevronRight, X, Play, Pause, Maximize2 } from 'lucide-react';

const studyGallery = [
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80', title: '美國常春藤名校學術營' },
  { src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80', title: '日本筑波宇宙太空探險' },
  { src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80', title: '新加坡國立大學雙語思辨' },
  { src: 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=1200&q=80', title: '古典英倫劍橋撐篙體驗' },
  { src: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=1200&q=80', title: '澳洲大自然與荒野求生' },
  { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80', title: '美國矽谷科技與史丹佛探秘' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80', title: '團隊合作挑戰賽' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80', title: '歡樂戶外探索時光' },
  { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80', title: '大自然生態觀察' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80', title: '戶外尋寶與大地遊戲' },
  { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80', title: '五感彩繪與創意繪畫' },
  { src: 'https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=1200&q=80', title: '程式積木與機器人實作' },
  { src: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=1200&q=80', title: '學員成果簡報發表會' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', title: '做中學、學中玩的趣味課堂' },
  { src: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80', title: '科學顯微鏡探索' },
  { src: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=1200&q=80', title: '戶外趣味體能對抗' }
];

interface CategoryPageProps {
  favorites: Activity[];
  onFavoriteToggle: (activity: Activity) => void;
}

export default function CategoryPage({ favorites, onFavoriteToggle }: CategoryPageProps) {
  const { catId } = useParams<{ catId: string }>();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState<'all' | '3-6' | '7-10' | '10-plus'>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay effect for the study gallery hero stage
  useEffect(() => {
    if (!isAutoplay || catId !== 'study' || activePhotoIndex !== null) return;
    const interval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % studyGallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoplay, catId, activePhotoIndex]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveHeroIndex(0);
  }, [catId]);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : studyGallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null && prev < studyGallery.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  // Helper age matcher
  const matchAge = (activityAge: string, filter: typeof ageFilter) => {
    if (filter === 'all') return true;
    
    // Parse the numbers from age string, e.g., "4 - 9 歲" -> [4, 9]
    const matches = activityAge.match(/\d+/g);
    if (!matches) return true; // fallback
    
    const minAge = parseInt(matches[0], 10);
    const maxAge = matches[1] ? parseInt(matches[1], 10) : minAge;

    if (filter === '3-6') {
      return minAge <= 6 && maxAge >= 3;
    }
    if (filter === '7-10') {
      return minAge <= 10 && maxAge >= 7;
    }
    if (filter === '10-plus') {
      return maxAge >= 10;
    }
    return true;
  };

  // Category mapping
  const categoryLabels: Record<string, string> = {
    subject: '主題活動',
    colearning: '親子共學',
    team: '團隊介紹與理念',
    study: '海外留遊學',
    all: '全部體驗活動',
  };

  const categoryEmojis: Record<string, string> = {
    subject: '',
    colearning: '',
    team: '',
    study: '',
    all: '',
  };

  const categoryDescs: Record<string, string> = {
    subject: '生態探索、五感彩繪、野外求生、水上運動與夢幻氣墊城堡，豐富精彩的主題活動！',
    colearning: '夜宿海生館、綠世界探險、科普恐龍、鐵道輕旅行等親子同樂共學，拉近彼此距離。',
    team: '啟夢教育專業團隊介紹與教育理念，陪伴孩子在做中學、學中玩！',
    study: '專為學童與青少年量身打造的海外遊學、冬夏令營，開拓國際視野與自主能力。',
    all: '為您篩選出最適合寶貝的體驗項目，讓孩子在做中學、學中玩！',
  };

  const currentLabel = categoryLabels[catId || 'all'] || '體驗活動';
  const currentEmoji = categoryEmojis[catId || 'all'] || '✨';
  const currentDesc = categoryDescs[catId || 'all'] || '精選推薦活動';

  // Filter activities
  const filteredActivities = ACTIVITIES.filter((act) => {
    // 1. Category match
    const categoryMatch = catId === 'all' || !catId || act.category === catId;

    // 2. Search match
    const searchQueryTrim = searchQuery.trim().toLowerCase();
    const searchMatch = searchQueryTrim === '' || 
      act.title.toLowerCase().includes(searchQueryTrim) ||
      act.shortDesc.toLowerCase().includes(searchQueryTrim) ||
      act.description.toLowerCase().includes(searchQueryTrim) ||
      act.location.toLowerCase().includes(searchQueryTrim) ||
      act.tags.some(t => t.toLowerCase().includes(searchQueryTrim));

    // 3. Age match
    const ageMatch = matchAge(act.age, ageFilter);

    // 4. Location match
    const locationMatch = locationFilter === 'all' || act.location.includes('各縣市') || act.location.includes(locationFilter) || act.fullAddress.includes(locationFilter);

    return categoryMatch && searchMatch && ageMatch && locationMatch;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setAgeFilter('all');
    setLocationFilter('all');
  };

  const uniqueCities = ['台北', '新北', '桃園', '新竹', '台中', '宜蘭', '屏東'];

  if (catId === 'study') {
    const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';
    const activePhoto = studyGallery[activeHeroIndex];

    const nextSlide = () => {
      setActiveHeroIndex((prev) => (prev + 1) % studyGallery.length);
    };

    const prevSlide = () => {
      setActiveHeroIndex((prev) => (prev - 1 + studyGallery.length) % studyGallery.length);
    };

    return (
      <div className="min-h-screen bg-neutral-50/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header with Minimalist Back Button */}
          <div className="flex flex-col gap-6">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-semibold py-1.5 px-3 rounded-lg hover:bg-neutral-100 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-brand-orange" />
                返回首頁
              </Link>
            </div>

            {/* Premium, Clean Title & Subtitle */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight font-rounded">
                啟夢教育｜國際留遊學
              </h1>
              <p className="text-sm sm:text-base text-neutral-500 font-medium leading-relaxed">
                每一張照片，都是孩子成長最珍貴的回憶。歡迎一起回顧啟夢教育歷年的精彩時刻。
              </p>
              <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full mt-2"></div>
            </div>
          </div>

          {/* Interactive Hero Slider Stage */}
          <div className="relative group max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-neutral-200/60 shadow-lg shadow-neutral-200/50">
            {/* Main Active Image Display */}
            <div 
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-900 overflow-hidden cursor-pointer"
              onClick={() => setActivePhotoIndex(activeHeroIndex)}
            >
              {/* Image with smooth transition effect on change */}
              <img
                key={activeHeroIndex}
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-cover select-none animate-fade-in transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Clean Top-Right Float HUD */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <span className="text-xs font-mono font-bold bg-black/50 text-white px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10 select-none">
                  {activeHeroIndex + 1} / {studyGallery.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex(activeHeroIndex);
                  }}
                  className="p-1.5 bg-black/50 hover:bg-black/70 hover:scale-105 active:scale-95 text-white rounded-full transition-all border border-white/10 cursor-pointer backdrop-blur-md"
                  title="放大相片"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Prev / Next Slide Arrows (always available for easy clicking) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/10 hover:scale-105 active:scale-95 cursor-pointer z-10"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md border border-white/10 hover:scale-105 active:scale-95 cursor-pointer z-10"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Slider Control Bar (Play, Pause, Progress Dots) */}
            <div className="px-6 py-4 bg-white border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  isAutoplay 
                    ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200' 
                    : 'bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20'
                }`}
              >
                {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isAutoplay ? '暫停自動輪播' : '開始自動輪播'}
              </button>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 scrollbar-none justify-center">
                {studyGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeHeroIndex 
                        ? 'w-6 bg-brand-orange' 
                        : 'w-2 bg-neutral-200 hover:bg-neutral-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Autoplay Pulse indicator */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                {isAutoplay ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                    </span>
                    輪播中
                  </>
                ) : (
                  <span>已暫停</span>
                )}
              </div>
            </div>
          </div>

          {/* Scrolling Thumbnails Scroller strip */}
          <div className="space-y-3 max-w-4xl mx-auto text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 font-rounded">
              快速切換精彩相簿 ({studyGallery.length} 張)
            </h4>
            
            <div className="relative">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-200 scroll-smooth snap-x">
                {studyGallery.map((photo, index) => {
                  const isActive = index === activeHeroIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveHeroIndex(index)}
                      className={`relative flex-shrink-0 w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden snap-start transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'ring-4 ring-brand-orange ring-offset-2 scale-95 shadow-md shadow-brand-orange/10' 
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Clean Minimal LINE Consultation Bar */}
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between max-w-4xl mx-auto mt-12">
            <div className="flex gap-4 items-center text-left">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-2xl shrink-0">
                📷
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800 text-base sm:text-lg">期待孩子成為下一張精彩照片的主角嗎？</h4>
                <p className="text-neutral-500 text-xs sm:text-sm font-medium">歡迎與啟夢教育官方 LINE 客服諮詢，為您提供專屬的一對一課程顧問諮詢！</p>
              </div>
            </div>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full md:w-auto px-6 py-3 rounded-full bg-line-green hover:bg-line-green-hover text-white text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-98"
            >
              💬 LINE 專人預約諮詢
            </a>
          </div>



          {/* Lightbox Modal (Fully functional with Left/Right arrows, Image counter, Close button) */}
          {activePhotoIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex flex-col justify-between bg-neutral-950/98 backdrop-blur-md animate-fade-in text-white"
              onClick={() => setActivePhotoIndex(null)}
            >
              {/* Lightbox Header Bar */}
              <div 
                className="flex items-center justify-between px-6 py-4 w-full bg-gradient-to-b from-black/60 to-transparent z-10" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-neutral-400 text-xs sm:text-sm font-medium tracking-widest font-mono">
                    {activePhotoIndex + 1} / {studyGallery.length}
                  </span>
                  <span className="h-4 w-[1px] bg-neutral-800"></span>
                  <span className="text-neutral-100 text-xs sm:text-sm font-semibold truncate max-w-[200px] sm:max-w-md">
                    {studyGallery[activePhotoIndex].title}
                  </span>
                </div>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 hover:bg-white/10 text-neutral-300 hover:text-white rounded-full transition-all cursor-pointer active:scale-90"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Center Area: Image & Nav Arrows */}
              <div 
                className="relative flex-1 flex items-center justify-center px-4 md:px-24" 
                onClick={(e) => e.stopPropagation()}
              >
                {/* Prev Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : studyGallery.length - 1));
                  }}
                  className="absolute left-4 p-3 bg-white/5 hover:bg-white/15 hover:text-white text-neutral-300 rounded-full transition-all border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 cursor-pointer z-20"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Large Image */}
                <div className="relative max-w-full max-h-[72vh] flex items-center justify-center">
                  <img
                    src={studyGallery[activePhotoIndex].src}
                    alt={studyGallery[activePhotoIndex].title}
                    className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl animate-scale-up border border-neutral-800/50"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Next Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null && prev < studyGallery.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-4 p-3 bg-white/5 hover:bg-white/15 hover:text-white text-neutral-300 rounded-full transition-all border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 cursor-pointer z-20"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              {/* Lightbox Footer Bar */}
              <div 
                className="px-6 py-6 w-full text-center bg-gradient-to-t from-black/60 to-transparent z-10 space-y-1" 
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wide">
                  {studyGallery[activePhotoIndex].title}
                </p>
                <p className="text-neutral-400 text-xs">
                  啟夢教育 ． 歷年精彩體驗活動足跡
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (catId === 'team') {
    const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Header with Back Button */}
        <div className="flex flex-col gap-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded"
            >
              <ArrowLeft className="w-4 h-4 text-brand-orange" />
              返回首頁
            </Link>
          </div>

          <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436]">
            <div className="flex items-center gap-2 text-brand-orange font-black text-xs uppercase font-rounded mb-1">
              <span>BRAND AND VISION</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded flex items-center gap-2">
              團隊介紹與理念
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-bold">
              啟夢教育專業團隊介紹，我們深信：在體驗中學習、在快樂中成長！
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark font-rounded uppercase tracking-wider flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-brand-orange animate-pulse" />
              四大核心教育理念
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-bold mt-1">
              我們堅持以最高規格的內容與安全防護，陪伴每個孩子的成長道路
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[3px_3px_0px_0px_#2D3436] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border-2 border-brand-dark flex items-center justify-center">
                <Compass className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-base font-black text-brand-dark font-rounded">1. 體驗式學習</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                擺脫傳統書本死記硬背！讓孩子在做中學、學中玩，建立具體生活認知，啟發邏輯思維與理解力。
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[3px_3px_0px_0px_#2D3436] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1145BA]/10 border-2 border-brand-dark flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#1145BA]" />
              </div>
              <h3 className="text-base font-black text-brand-dark font-rounded">2. 100% 安全保障</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                所有營隊與活動皆經由官方實地安全勘查，嚴格維持1:5至1:8高師生比，並配備完整意外傷害保險。
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[3px_3px_0px_0px_#2D3436] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow-light text-brand-yellow-text border-2 border-brand-dark flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-yellow-text" />
              </div>
              <h3 className="text-base font-black text-brand-dark font-rounded">3. 啟發式引導</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                我們不給標準答案！以趣味問答與情境模擬，鼓勵孩子主動提出疑問、思考，並勇敢進行口語表達。
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[3px_3px_0px_0px_#2D3436] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 border-2 border-brand-dark flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-base font-black text-brand-dark font-rounded">4. 暖心陪伴傾聽</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                我們尊重每個孩子的獨特心靈與性格特質。用包容與傾聽，給予孩子最充足的正向肯定與自信能量。
              </p>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark font-rounded uppercase tracking-wider flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-[#1145BA]" />
              明星引導師團隊
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted font-bold mt-1">
              幼教及各專業領域頂尖師資，給孩子最專業的引領與最溫暖的陪伴
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Teacher 1 */}
            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-full bg-brand-yellow border-4 border-brand-dark flex items-center justify-center text-4xl shrink-0 shadow-sm font-rounded">
                🎓
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-black bg-brand-orange text-white px-2.5 py-0.5 border-2 border-brand-dark rounded-full font-rounded">
                    創辦人 / 總顧問
                  </span>
                  <h3 className="text-lg font-black text-brand-dark font-rounded mt-1">廖校長 (Principal Liao)</h3>
                  <p className="text-xs text-brand-orange font-bold">兒童心理學碩士 / 資深兒童教育發展顧問</p>
                </div>
                <p className="text-xs text-brand-muted font-bold leading-relaxed">
                  廖校長擁有超過 15 年的幼兒與中小學教育研究經驗。她深信「體驗是最好的學校，興趣是最好的老師」，致力於將繁瑣的職業知識轉化為超萌、好懂的沉浸式互動遊戲。
                </p>
              </div>
            </div>

            {/* Teacher 2 */}
            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-brand-dark flex items-center justify-center text-4xl shrink-0 shadow-sm font-rounded">
                🦗
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-black bg-[#1145BA] text-white px-2.5 py-0.5 border-2 border-brand-dark rounded-full font-rounded">
                    自然生態引導師
                  </span>
                  <h3 className="text-lg font-black text-brand-dark font-rounded mt-1">昆蟲哥哥 (Brother Insect)</h3>
                  <p className="text-xs text-[#1145BA] font-bold">國立台灣大學昆蟲學系畢業 / 生態作家</p>
                </div>
                <p className="text-xs text-brand-muted font-bold leading-relaxed">
                  昆蟲哥哥是全台人氣爆棚的野外探索明星！他擅長以超級生動、充滿故事與趣味的情境引導，帶領孩子在絕對安全的環境中親近大自然、尋訪甲蟲，啟發自然科普興趣。
                </p>
              </div>
            </div>

            {/* Teacher 3 */}
            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-full bg-rose-100 border-4 border-brand-dark flex items-center justify-center text-4xl shrink-0 shadow-sm font-rounded">
                🍰
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-black bg-brand-yellow text-brand-dark px-2.5 py-0.5 border-2 border-brand-dark rounded-full font-rounded">
                    主廚與食育引導師
                  </span>
                  <h3 className="text-lg font-black text-brand-dark font-rounded mt-1">甜點姐姐 (Sister Pastry)</h3>
                  <p className="text-xs text-brand-orange font-bold">前五星級酒店主廚 / 專職兒童食育美學講師</p>
                </div>
                <p className="text-xs text-brand-muted font-bold leading-relaxed">
                  甜點姐姐專注於推廣安全的無明火兒童烘焙與五感食育。她把重量、容量等數學與化學概念融入搓麵團與蛋糕擠花中，培養手部精細動作，也讓孩子在創作中學會珍惜食物。
                </p>
              </div>
            </div>

            {/* Teacher 4 */}
            <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-brand-dark flex items-center justify-center text-4xl shrink-0 shadow-sm font-rounded">
                👨‍🚒
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] font-black bg-brand-dark text-white px-2.5 py-0.5 border-2 border-brand-dark rounded-full font-rounded">
                    安全總監 / 教官
                  </span>
                  <h3 className="text-lg font-black text-brand-dark font-rounded mt-1">陳教官 (Instructor Chen)</h3>
                  <p className="text-xs text-brand-dark font-bold">退役消防隊長 / 特種急救與野外求生教練</p>
                </div>
                <p className="text-xs text-brand-muted font-bold leading-relaxed">
                  陳教官擁有紅十字會急救員、水上救生等多重專業證照。他負責全程督導啟夢教育旗下所有活動場地的安全勘查與安全防護，提供高達1:5至1:8的安全比例，萬無一失。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Warm Note / LINE Helper */}
        <div className="bg-brand-yellow-light/20 rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row items-center gap-4 justify-between max-w-5xl mx-auto mt-6">
          <div className="flex gap-3 items-center text-left">
            <span className="text-3xl">💡</span>
            <div className="text-xs text-brand-dark leading-relaxed font-bold">
              <h4 className="font-black text-sm mb-0.5">想為您學校的孩子或自組團體客製開班嗎？</h4>
              啟夢教育團隊隨時準備為您服務！不論是幼稚園自組體驗、社區包班還是學校課後探索，歡迎與我們加 LINE 聯繫。
            </div>
          </div>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-full bg-line-green hover:bg-line-green-hover text-white text-xs font-black border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436] font-rounded"
          >
            💬 LINE 立即預約諮詢
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* 1. Header with Back Button */}
      <div className="flex flex-col gap-4">
        {/* Prominent Back Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded"
          >
            <ArrowLeft className="w-4 h-4 text-brand-orange" />
            返回首頁
          </Link>
        </div>

        {/* Page Title Card */}
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-orange font-black text-xs uppercase font-rounded mb-1">
              <span>STANDALONE PAGE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded flex items-center gap-2">
              {currentLabel}
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-bold">
              {currentDesc}
            </p>
          </div>
          
          <div className="text-xs font-black text-brand-dark bg-brand-bg px-4 py-2 rounded-xl border-2 border-brand-dark font-rounded">
            符合條件活動：<span className="text-brand-orange text-base font-black">{filteredActivities.length}</span> 個
          </div>
        </div>
      </div>

      {/* 2. Filters Panel */}
      <div className="bg-white rounded-xl p-6 border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2D3436] space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Search Input */}
          <div className="lg:col-span-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark pointer-events-none" />
            <input
              type="text"
              placeholder={`在「${currentLabel}」中搜尋關鍵字... 如: 醫生、手作、地點`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-brand-bg/50 border-2 border-brand-dark focus:border-brand-orange focus:bg-white rounded-xl text-sm transition-all outline-none text-brand-dark font-bold placeholder-brand-muted"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-brand-dark hover:text-brand-orange cursor-pointer font-rounded"
              >
                清除
              </button>
            )}
          </div>

          {/* Age Filter */}
          <div className="lg:col-span-3 flex items-center gap-2">
            <span className="text-xs font-black text-brand-dark shrink-0 font-rounded">適合年齡:</span>
            <div className="flex bg-brand-bg p-1 rounded-xl border-2 border-brand-dark w-full">
              {[
                { value: 'all' as const, label: '全部' },
                { value: '3-6' as const, label: '3-6歲' },
                { value: '7-10' as const, label: '7-10歲' },
                { value: '10-plus' as const, label: '10歲+' },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setAgeFilter(item.value)}
                  className={`flex-1 text-center py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer font-rounded ${
                    ageFilter === item.value
                      ? 'bg-brand-orange text-white border border-brand-dark shadow-xs'
                      : 'text-brand-dark hover:text-brand-orange'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="lg:col-span-3 flex items-center gap-2">
            <span className="text-xs font-black text-brand-dark shrink-0 font-rounded">地區:</span>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full py-2.5 px-3 bg-brand-bg border-2 border-brand-dark hover:border-brand-orange rounded-xl text-xs font-black text-brand-dark outline-none transition-all cursor-pointer font-rounded"
            >
              <option value="all">📍 全部台灣地區</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  📍 {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters helper */}
        {(searchQuery || ageFilter !== 'all' || locationFilter !== 'all') && (
          <div className="flex items-center justify-between pt-3 border-t border-brand-border text-xs">
            <span className="text-brand-muted font-bold">
              篩選中：{searchQuery && `"${searchQuery}" `}{ageFilter !== 'all' && `年齡 `}{locationFilter !== 'all' && `地區 `}
            </span>
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-brand-orange hover:text-brand-orange/85 font-black hover:underline cursor-pointer font-rounded"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              清除篩選條件
            </button>
          </div>
        )}
      </div>

      {/* 3. Activities List Grid */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isFavorite={favorites.some((fav) => fav.id === activity.id)}
              onFavoriteToggle={() => onFavoriteToggle(activity)}
              onSelect={() => navigate(`/activity/${activity.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border-2 border-brand-dark p-16 text-center max-w-lg mx-auto space-y-4 shadow-[4px_4px_0px_0px_#2D3436]">
          <span className="text-6xl block animate-bounce">🎈</span>
          <div className="space-y-1">
            <h3 className="text-base font-black text-brand-dark font-rounded">找不到符合條件的活動項目</h3>
            <p className="text-xs text-brand-muted font-bold leading-relaxed">
              目前「{currentLabel}」下沒有完全符合篩選條件的體驗。建議調整年齡、地區或關鍵字，也可以點擊下方按鈕重置條件。
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-brand-yellow hover:bg-brand-yellow/85 border-2 border-brand-dark text-brand-dark font-black text-xs rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded"
            >
              重置篩選
            </button>
          </div>
        </div>
      )}

      {/* Warm Note / LINE Helper */}
      <div className="bg-brand-yellow-light/20 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col sm:flex-row items-center gap-4 justify-between mt-12">
        <div className="flex gap-3 items-center">
          <span className="text-3xl">💡</span>
          <div className="text-xs text-brand-dark leading-relaxed font-bold">
            <h4 className="font-black text-sm mb-0.5">沒找到心儀的週末活動或時間對不上？</h4>
            親切客服小幫手隨時在線！歡迎直接加 LINE 詢問預約包場，我們可以為您客製化開課或推薦。
          </div>
        </div>
        <a
          href="https://line.me/R/ti/p/@parentchildfun"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 rounded-full bg-line-green hover:bg-line-green-hover text-white text-xs font-black border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436] font-rounded"
        >
          💬 LINE 立即諮詢推薦
        </a>
      </div>

    </div>
  );
}
