import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Shield, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <footer className="bg-brand-dark text-gray-300 border-t-2 border-brand-dark">
      
      {/* Upper Footer CTA Block with strong geometric identity */}
      <div className="bg-brand-orange py-12 text-white text-center relative overflow-hidden border-b-2 border-brand-dark">
        {/* Sparkles or dots background decor */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black tracking-wide font-rounded">
            🎉 給孩子一個充滿歡笑與收穫的精彩週末！
          </h3>
          <p className="text-xs sm:text-sm text-white/95 max-w-lg mx-auto font-bold leading-relaxed">
            熱門體驗名額有限，立即加入官方 LINE 領取「新會員首報折價券 NT$ 100 」，開啟寶貝的小店長與職人探索之旅！
          </p>
          <div className="pt-2">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-line-green border-2 border-brand-dark text-base font-black rounded-full shadow-[4px_4px_0px_0px_#2D3436] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2D3436] transition-all gap-2"
            >
              <MessageCircle className="w-6 h-6 fill-line-green text-line-green" />
              立即加 LINE 領取優惠與報名
            </a>
          </div>
          <p className="text-[10px] text-white/80 font-bold">
            已有 8,500+ 位爸媽成功領取首報折扣！
          </p>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                <span className="text-white font-bold text-xl font-rounded">啟</span>
              </div>
              <span className="font-rounded font-extrabold text-2xl tracking-tight text-white">
                啟夢教育
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed text-justify">
              「啟夢教育」是全台最全最優惠兒童活動網站。我們相信每一次的角色扮演、每一趟親近自然的山林旅程，都是滋養孩子心靈與天賦的重要土壤。我們嚴格把關師資、安全與無毒耗材，陪伴每個家庭寫下最美好的回憶。
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1 font-bold">
                <Shield className="w-4 h-4 text-emerald-400" />
                安全履約保證
              </span>
              <span className="flex items-center gap-1 font-bold">
                <Heart className="w-4 h-4 text-brand-orange fill-brand-orange" />
                爸媽安心首選
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white tracking-widest border-l-4 border-brand-orange pl-2 font-rounded">
              服務分類
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-bold">
              <li>
                <Link to="/category/subject" className="hover:text-brand-orange transition-colors">➔ 主題活動</Link>
              </li>
              <li>
                <Link to="/category/study" className="hover:text-brand-orange transition-colors">➔ 國際留遊學</Link>
              </li>
              <li>
                <Link to="/category/team" className="hover:text-brand-orange transition-colors">➔ 團隊介紹</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-orange transition-colors">➔ 常見問題</Link>
              </li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-white tracking-widest border-l-4 border-brand-orange pl-2 font-rounded">
              聯絡我們 / 客服諮詢
            </h4>
            <div className="space-y-2 text-xs text-gray-400 font-bold">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>客服時間：每日10:00～21:00（週日休息）</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>電子信箱：service@parentchildfun.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Disclaimer / Copyright */}
        <div className="mt-12 pt-6 border-t border-brand-border text-center text-[10px] text-gray-500 leading-relaxed font-bold">
          <p className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-400 font-rounded">
            <Link to="/privacy" className="hover:text-brand-orange hover:underline transition-colors">
              🔒 「啟夢教育」隱私權政策
            </Link>
          </p>
          <p>© {new Date().getFullYear()} 啟夢教育. All Rights Reserved. 版權所有，不得任意轉載或剽竊。</p>
          <p className="mt-1">
            本網站所提供之旅遊與體驗推薦資訊，均為第三方特約優質商家之活動推介。實際行程履約責任由各活動主辦方依消保法負責，保險與退費細則請詳閱活動說明或諮詢 LINE 客服。
          </p>
        </div>

      </div>
    </footer>
  );
}
