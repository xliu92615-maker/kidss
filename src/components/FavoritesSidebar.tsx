import React from 'react';
import { X, Heart, MessageCircle, Trash2, ArrowRight } from 'lucide-react';
import { Activity } from '../types';
import { motion } from 'motion/react';

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Activity[];
  onRemoveFavorite: (id: string) => void;
  onSelectActivity: (activity: Activity) => void;
}

export default function FavoritesSidebar({ isOpen, onClose, favorites, onRemoveFavorite, onSelectActivity }: FavoritesSidebarProps) {
  if (!isOpen) return null;

  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs cursor-pointer" onClick={onClose} />
      
      {/* Panel sliding Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l-2 border-brand-dark shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 bg-brand-bg border-b-2 border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎒</span>
              <div>
                <h2 className="text-base font-black text-brand-dark font-rounded">我的活動收藏袋</h2>
                <p className="text-[10px] text-brand-muted font-bold">已收藏 {favorites.length} 個精彩體驗</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border-2 border-brand-dark hover:bg-brand-bg text-brand-dark cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List items scrollable container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favorites.length > 0 ? (
              favorites.map((act) => (
                <div
                  key={act.id}
                  className="flex gap-3 p-3 bg-white rounded-xl border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436] hover:-translate-y-0.5 transition-all group relative"
                >
                  {/* Thumbnail image */}
                  <img
                    src={act.image}
                    alt={act.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover cursor-pointer shrink-0 border border-brand-dark"
                    onClick={() => {
                      onSelectActivity(act);
                      onClose();
                    }}
                  />

                  {/* Title & info details */}
                  <div className="flex-1 min-w-0 pr-6">
                    <span className="text-[9px] px-2 py-0.5 border border-brand-dark bg-brand-yellow-light text-brand-yellow-text rounded-md font-bold">
                      {act.category === 'career' ? '職業體驗' :
                       act.category === 'subject' ? '主題活動' :
                       act.category === 'colearning' ? '親子共學' :
                       act.category === 'study' ? '海外留遊學' : '體驗活動'}
                    </span>
                    <h4
                      onClick={() => {
                        onSelectActivity(act);
                        onClose();
                      }}
                      className="text-xs sm:text-sm font-black text-brand-dark mt-1 hover:text-brand-orange cursor-pointer transition-colors line-clamp-1 font-rounded"
                    >
                      {act.title}
                    </h4>
                    <p className="text-[10px] text-brand-muted font-bold mt-0.5">{act.age} • {act.location}</p>
                    <p className="text-xs font-black text-brand-orange mt-1 font-rounded">{act.price.split(' ')[0]}</p>
                  </div>

                  {/* Absolute Delete Button */}
                  <button
                    onClick={() => onRemoveFavorite(act.id)}
                    className="absolute top-3 right-3 p-1.5 text-brand-muted hover:text-brand-orange transition-colors cursor-pointer"
                    title="移除收藏"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <span className="text-6xl animate-bounce">🎒</span>
                <div className="space-y-1">
                  <p className="text-sm font-black text-brand-dark font-rounded">收藏袋目前空空如也</p>
                  <p className="text-xs text-brand-muted font-bold max-w-[240px] leading-relaxed mx-auto">
                    看中喜歡的親子活動或小小店長嗎？點擊卡片右上角的愛心 🤍，就能隨時在這裡找到它們喔！
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          {favorites.length > 0 && (
            <div className="p-6 bg-brand-bg border-t-2 border-brand-border space-y-3">
              <div className="text-xs text-brand-dark leading-relaxed bg-brand-yellow-light p-3.5 rounded-xl border-2 border-brand-dark font-bold shadow-[2px_2px_0px_0px_#2D3436]">
                💡 <b>報名叮嚀：</b>加 LINE 後，您可以直接貼上收藏的活動名稱，客服助理能一次為您查詢多堂名額，安排更省時！
              </div>
              
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 bg-line-green hover:bg-line-green-hover border-2 border-brand-dark text-white font-black rounded-full text-sm shadow-[2px_2px_0px_0px_#2D3436] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2D3436] transition-all gap-1.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                將收藏清單傳送 LINE 報名
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
