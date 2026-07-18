import React from 'react';
import { Activity } from '../types';
import { Heart, Trash2, ArrowRight, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface FavoritesPageProps {
  favorites: Activity[];
  onRemoveFavorite: (id: string) => void;
}

export default function FavoritesPage({ favorites, onRemoveFavorite }: FavoritesPageProps) {
  const navigate = useNavigate();
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
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

      {/* Page Header */}
      <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-orange font-black text-xs uppercase font-rounded mb-1">
            <Heart className="w-4 h-4 fill-brand-orange text-brand-orange" />
            <span>My Saved List</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded">我的活動收藏袋</h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-1 font-bold">
            在這裡管理您為寶貝預先挑選的精彩課程，您可以隨時點擊查看詳情或直接 LINE 諮詢小幫手報名！
          </p>
        </div>
        {favorites.length > 0 && (
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-line-green hover:bg-line-green-hover text-white text-xs sm:text-sm font-black border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436]"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white" />
            一次諮詢多個活動
          </a>
        )}
      </div>

      {/* Grid of Saved Items */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((act) => (
            <div
              key={act.id}
              className="group bg-white rounded-2xl border-2 border-brand-dark p-4 sm:p-5 shadow-[4px_4px_0px_0px_#2D3436] hover:shadow-[6px_6px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row gap-4 relative"
            >
              {/* Thumbnail */}
              <div 
                className="w-full sm:w-32 h-32 rounded-xl overflow-hidden border-2 border-brand-dark shrink-0 cursor-pointer"
                onClick={() => navigate(`/activity/${act.id}`)}
              >
                <img
                  src={act.image}
                  alt={act.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-between min-w-0 pr-6">
                <div>
                  <span className="text-[9px] px-2.5 py-0.5 border border-brand-dark bg-brand-yellow-light text-brand-yellow-text rounded-md font-bold uppercase tracking-wider">
                    {act.category === 'subject' ? '主題活動' :
                     act.category === 'colearning' ? '親子共學' :
                     act.category === 'study' ? '海外留遊學' : '體驗活動'}
                  </span>
                  <h3
                    onClick={() => navigate(`/activity/${act.id}`)}
                    className="text-base sm:text-lg font-black text-brand-dark hover:text-brand-orange cursor-pointer transition-colors line-clamp-1 mt-1.5 font-rounded"
                  >
                    {act.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-bold mt-1 leading-relaxed">
                    🎯 適合：{act.age} • ⏱️ 時間：{act.duration}
                  </p>
                  <p className="text-xs text-brand-muted font-bold mt-0.5 leading-relaxed">
                    📍 地點：{act.fullAddress}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-brand-border">
                  <span className="text-sm font-black text-brand-orange font-rounded">
                    {act.price.split(' ')[0]}
                  </span>
                  <Link
                    to={`/activity/${act.id}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-brand-dark hover:text-brand-orange font-rounded"
                  >
                    看活動詳情 <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Absolute Remove Trash Icon */}
              <button
                onClick={() => onRemoveFavorite(act.id)}
                className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-orange transition-colors cursor-pointer rounded-full hover:bg-brand-bg border border-transparent hover:border-brand-border"
                title="自收藏袋移除"
              >
                <Trash2 className="w-4.5 h-4.5" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-16 text-center max-w-lg mx-auto space-y-5 shadow-[4px_4px_0px_0px_#2D3436]">
          <span className="text-7xl block animate-bounce">🎒</span>
          <div className="space-y-1">
            <h2 className="text-lg font-black text-brand-dark font-rounded">您的活動收藏袋空空的</h2>
            <p className="text-xs sm:text-sm text-brand-muted font-bold max-w-xs leading-relaxed mx-auto">
              瀏覽活動時點擊右上角愛心 🤍 即可存入。快去為您的寶貝挑選這週末最有趣的體驗吧！
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-brand-orange border-2 border-brand-dark text-white font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] hover:translate-y-0.5 transition-all font-rounded"
            >
              去探索精選活動
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
