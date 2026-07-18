import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ACTIVITIES } from '../data';
import { Activity } from '../types';
import { 
  ArrowLeft, Heart, Calendar, Clock, MapPin, Sparkles, 
  Award, CheckCircle, MessageCircle, Info, Share2, Copy, Check
} from 'lucide-react';

interface ActivityDetailProps {
  favorites: Activity[];
  onFavoriteToggle: (activity: Activity) => void;
}

export default function ActivityDetail({ favorites, onFavoriteToggle }: ActivityDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find the current activity
  const activity = ACTIVITIES.find(a => a.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!activity) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-12 max-w-lg mx-auto shadow-[4px_4px_0px_0px_#2D3436]">
          <span className="text-6xl block mb-4">🔍</span>
          <h2 className="text-xl font-black text-brand-dark font-rounded">找不到該體驗活動</h2>
          <p className="text-sm text-brand-muted mt-2 font-bold leading-relaxed">
            非常抱歉，此活動可能已下架或網址不正確。您可以返回首頁探索其他最新的小小店長與職業體驗營！
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-brand-orange border-2 border-brand-dark text-white font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] hover:translate-y-0.5 transition-all font-rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              返回首頁探索
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.some(f => f.id === activity.id);
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  // Category configurations
  const categoryLabels = {
    career: '小小職業體驗營',
    manager: '小小店長特輯',
    activity: '精選親子活動',
    travel: '親子旅遊資訊',
  };

  const categoryColors = {
    career: 'bg-brand-orange text-white',
    manager: 'bg-brand-yellow text-brand-dark',
    activity: 'bg-baby-blue text-white',
    travel: 'bg-[#A0CED9] text-brand-dark',
  };

  // Get similar activities (same category, excluding current one)
  const similarActivities = ACTIVITIES
    .filter(a => a.category === activity.category && a.id !== activity.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back button and Share row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded"
          >
            <ArrowLeft className="w-4 h-4 text-brand-orange" />
            返回首頁
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-muted hover:text-brand-dark font-bold text-xs sm:text-sm rounded-full transition-all cursor-pointer"
          >
            返回上一頁
          </button>
        </div>

        <div className="flex gap-2">
          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer"
            title="複製活動網址分享"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-line-green" />
                <span className="text-line-green">已複製連結！</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>複製連結分享</span>
              </>
            )}
          </button>

          {/* Favorite Toggle */}
          <button
            onClick={() => onFavoriteToggle(activity)}
            className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-xs sm:text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-brand-orange text-brand-orange' : 'text-brand-muted'}`} />
            <span>{isFavorite ? '已在收藏袋' : '加入收藏袋'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout - Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Media & Core Info - 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Display Card */}
          <div className="bg-white rounded-2xl border-2 border-brand-dark overflow-hidden shadow-[6px_6px_0px_0px_#2D3436]">
            {/* Aspect Ratio Header Image */}
            <div className="relative aspect-[16/9] w-full bg-brand-bg border-b-2 border-brand-dark">
              <img
                src={activity.image}
                alt={activity.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Overlays */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className={`px-3 py-1.5 border-2 border-brand-dark rounded-full text-xs font-black shadow-xs ${categoryColors[activity.category]}`}>
                  {categoryLabels[activity.category]}
                </span>
                {activity.isPopular && (
                  <span className="px-3 py-1.5 bg-brand-orange border-2 border-brand-dark text-white text-xs font-black rounded-full shadow-xs">
                    🔥 最熱門
                  </span>
                )}
              </div>
            </div>

            {/* Core Info Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-brand-dark leading-snug font-rounded">
                  {activity.title}
                </h1>
                <p className="text-sm text-brand-muted mt-2 font-bold leading-relaxed">
                  {activity.shortDesc}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-brand-bg p-4 rounded-xl border-2 border-brand-dark font-rounded">
                <div className="text-center border-r-2 border-brand-border last:border-0">
                  <span className="block text-[10px] text-brand-muted font-bold uppercase">適合年齡</span>
                  <span className="text-xs sm:text-sm font-black text-brand-orange mt-1 block">{activity.age}</span>
                </div>
                <div className="text-center sm:border-r-2 border-brand-border last:border-0">
                  <span className="block text-[10px] text-brand-muted font-bold uppercase">活動時間</span>
                  <span className="text-xs sm:text-sm font-black text-baby-blue mt-1 block">{activity.duration}</span>
                </div>
                <div className="text-center border-r-2 sm:border-r-2 border-brand-border last:border-0">
                  <span className="block text-[10px] text-brand-muted font-bold uppercase">活動地點</span>
                  <span className="text-xs sm:text-sm font-black text-brand-yellow-text mt-1 block">{activity.location}</span>
                </div>
                <div className="text-center last:border-0">
                  <span className="block text-[10px] text-brand-muted font-bold uppercase">體驗費用</span>
                  <span className="text-xs sm:text-sm font-black text-brand-dark mt-1 block truncate">
                    {activity.category === 'colearning' && activity.price.includes('免費') ? '資訊推薦' : activity.price.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-black text-brand-dark flex items-center gap-2 font-rounded border-b-2 border-brand-border pb-2">
                  <Sparkles className="w-5 h-5 text-brand-yellow-text" />
                  體驗內容介紹
                </h3>
                <p className="text-sm sm:text-base text-brand-gray font-bold leading-relaxed text-justify whitespace-pre-line">
                  {activity.description}
                </p>
              </div>

              {/* Core Learning Goals */}
              <div className="space-y-4 bg-brand-yellow-light/20 p-5 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2D3436]">
                <h3 className="text-lg font-black text-brand-dark flex items-center gap-2 font-rounded">
                  <Award className="w-5 h-5 text-brand-orange" />
                  四大核心學習目標（給寶貝的成長禮物）
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activity.learningGoals.map((goal, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-brand-gray font-bold leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-line-green shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h3 className="text-lg font-black text-brand-dark flex items-center gap-2 font-rounded border-b-2 border-brand-border pb-2">
                  <Info className="w-5 h-5 text-baby-blue" />
                  費用包含與好禮贈品
                </h3>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {activity.included.map((inc, i) => (
                    <span key={i} className="text-xs sm:text-sm bg-white text-brand-dark px-3.5 py-2 rounded-xl border-2 border-brand-dark font-black shadow-[2px_2px_0px_0px_#2D3436]">
                      🎁 {inc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Detail & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t-2 border-brand-border">
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-brand-muted uppercase tracking-wider">開課日期梯次</h4>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray font-bold">
                    <Calendar className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{activity.date}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-brand-muted uppercase tracking-wider">活動詳細地址</h4>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-gray font-bold">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span>{activity.fullAddress}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card & Help Tips - 5 cols */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          
          {/* Booking Card */}
          <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[6px_6px_0px_0px_#2D3436] space-y-6">
            <div>
              <span className="text-xs font-black text-brand-orange uppercase tracking-widest font-rounded block mb-1">RESERVATION</span>
              <h2 className="text-2xl font-black text-brand-dark font-rounded">預約報名</h2>
              <p className="text-xs text-brand-muted mt-1 font-bold">
                親切客服小幫手在線，免註冊即可透過 LINE 快速預約保留名額！
              </p>
            </div>

            {/* Price section */}
            <div className="bg-brand-bg p-4 rounded-xl border-2 border-brand-dark space-y-2">
              <span className="text-xs text-brand-muted font-bold block">優惠推廣體驗價</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand-orange font-rounded">{activity.price.split(' ')[0]}</span>
                {activity.category !== 'colearning' && (
                  <span className="text-xs text-brand-muted font-bold line-through">原價 NT$999起</span>
                )}
              </div>
              <p className="text-[10px] text-brand-muted font-medium">
                {activity.price.substring(activity.price.indexOf('(') !== -1 ? activity.price.indexOf('(') : 0)}
              </p>
            </div>

            {/* Quick spots left indicator */}
            {activity.category !== 'colearning' && (
              <div className="flex items-center justify-between border border-brand-border p-3.5 rounded-xl text-xs bg-brand-yellow-light/10">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🔥</span>
                  <span className="text-brand-dark font-black font-rounded">活動名額：剩下 {activity.spotsLeft} 位</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 font-black font-rounded">
                  即將額滿
                </span>
              </div>
            )}

            {/* Guide Steps */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-brand-dark uppercase tracking-wider font-rounded">LINE 預約超簡單 3 步驟：</h3>
              <div className="space-y-2 text-xs text-brand-gray font-bold">
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-black shrink-0 mt-0.5">1</span>
                  <span>點擊下方綠色按鈕，加入官方 LINE 好友</span>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-black shrink-0 mt-0.5">2</span>
                  <span>傳送<b>「我想預約：{activity.title}」</b></span>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-black shrink-0 mt-0.5">3</span>
                  <span>小幫手 10 分鐘內為您安排場次與報名手續</span>
                </div>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-full bg-line-green hover:bg-line-green-hover border-2 border-brand-dark text-white font-black text-lg shadow-[4px_4px_0px_0px_#2D3436] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                立即 LINE 報名與諮詢
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow"></span>
                </span>
              </a>
            </div>

            {/* Secure badge */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1 text-[10px] text-brand-muted font-bold">
                🛡️ 寶貝親子趣官方保障 • 24小時無憂安全保障
              </span>
            </div>

          </div>

          {/* Location details card */}
          <div className="bg-brand-yellow-light/20 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] flex gap-3.5">
            <span className="text-3xl shrink-0">💡</span>
            <div className="text-xs text-brand-dark leading-relaxed font-bold">
              <h4 className="font-black text-sm mb-1">關於「寶貝親子趣」品質承諾</h4>
              我們保證：所有體驗活動均經專員實地勘查。師資均備有幼教或專業證照，使用耗材 100% 採用無毒/環保安全材料，活動期間全程投保公共意外責任險。
            </div>
          </div>

        </div>

      </div>

      {/* Recommended / Similar Activities Grid Section */}
      {similarActivities.length > 0 && (
        <div className="mt-16 pt-12 border-t-2 border-brand-border space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-black text-brand-orange uppercase tracking-widest font-rounded block mb-1">MORE EXPERIENCES</span>
              <h2 className="text-2xl font-black text-brand-dark font-rounded">您可能也會感興趣的體驗</h2>
            </div>
            <Link
              to="/"
              className="text-xs sm:text-sm font-black text-brand-orange hover:underline flex items-center gap-0.5 font-rounded"
            >
              看更多精選活動 ➔
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarActivities.map((act) => (
              <div 
                key={act.id}
                className="group bg-white rounded-xl border-2 border-brand-dark overflow-hidden shadow-[3px_3px_0px_0px_#2D3436] hover:shadow-[5px_5px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-brand-bg border-b-2 border-brand-dark overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform group-hover:scale-102"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[9px] px-2 py-0.5 border border-brand-dark bg-brand-yellow-light text-brand-yellow-text rounded-md font-bold self-start mb-2">
                    {categoryLabels[act.category]}
                  </span>
                  <Link 
                    to={`/activity/${act.id}`}
                    className="text-sm font-black text-brand-dark hover:text-brand-orange line-clamp-1 mb-1 font-rounded transition-colors"
                  >
                    {act.title}
                  </Link>
                  <p className="text-[10px] text-brand-muted line-clamp-2 font-bold leading-relaxed flex-1 mb-3">
                    {act.shortDesc}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-2.5 border-t border-brand-border">
                    <span className="text-brand-orange font-black font-rounded">{act.price.split(' ')[0]}</span>
                    <Link
                      to={`/activity/${act.id}`}
                      className="text-[10px] font-black text-brand-dark hover:text-brand-orange flex items-center gap-0.5 font-rounded"
                    >
                      詳細資訊 ➔
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
