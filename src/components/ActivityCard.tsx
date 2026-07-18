import React from 'react';
import { Activity } from '../types';
import { Heart, Calendar, Clock, MapPin, Users, Award, AlertCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ActivityCardProps {
  activity: Activity;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onSelect: () => void;
}

export default function ActivityCard({ activity, isFavorite, onFavoriteToggle, onSelect }: ActivityCardProps) {
  // Configured LINE link
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  // Category labels and colors matching geometric balance palette
  const categoryConfig: Record<string, { label: string; color: string }> = {
    subject: { label: '主題活動', color: 'bg-brand-orange text-white border-brand-dark' },
    colearning: { label: '親子共學', color: 'bg-[#A0CED9] text-brand-dark border-brand-dark' },
    study: { label: '海外留遊學', color: 'bg-emerald-500 text-white border-brand-dark' },
    team: { label: '團隊介紹', color: 'bg-[#0E2356] text-white border-brand-dark' },
  };

  const currentCategory = categoryConfig[activity.category] || { label: '精選活動', color: 'bg-brand-bg text-brand-dark border-brand-dark' };

  // Calculate spots percentage
  const spotsPercent = (activity.spotsLeft / activity.spots) * 100;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border-2 border-brand-dark overflow-hidden shadow-[4px_4px_0px_0px_#0E2356] hover:shadow-[6px_6px_0px_0px_#0E2356] hover:-translate-y-1 transition-all duration-300">
      
      {/* Card Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-bg border-b-2 border-brand-dark">
        <img
          src={activity.image}
          alt={activity.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 flex gap-1.5 items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-black border-2 ${currentCategory.color} shadow-xs`}>
            {currentCategory.label}
          </span>
          {activity.isPopular && (
            <span className="px-2.5 py-1 bg-brand-orange border-2 border-brand-dark text-white text-[10px] font-black rounded-full shadow-xs flex items-center gap-0.5">
              🔥 熱門
            </span>
          )}
          {activity.isNew && (
            <span className="px-2.5 py-1 bg-brand-yellow border-2 border-brand-dark text-brand-dark text-[10px] font-black rounded-full shadow-xs flex items-center gap-0.5">
              🌟 全新
            </span>
          )}
        </div>

        {/* Favorite Heart Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-brand-dark shadow-xs hover:text-brand-orange transition-colors cursor-pointer"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-brand-orange text-brand-orange' : 'text-brand-muted'}`} />
        </button>

        {/* Spot warning if very low */}
        {activity.spotsLeft <= 3 && activity.category !== 'colearning' && (
          <div className="absolute bottom-3 left-3 bg-brand-orange text-white border-2 border-brand-dark px-2.5 py-1 rounded-md text-[10px] font-black flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            最後 {activity.spotsLeft} 個名額！
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2.5">
          {activity.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-brand-bg text-brand-muted border border-brand-border rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          onClick={onSelect}
          className="text-lg font-black text-brand-dark hover:text-brand-orange cursor-pointer transition-colors line-clamp-1 mb-2 font-rounded"
        >
          {activity.title}
        </h3>

        {/* Key Info row */}
        <div className="grid grid-cols-2 gap-2 text-xs text-brand-gray mb-4 bg-brand-bg border border-brand-border p-2.5 rounded-xl">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-brand-orange" />
            <span className="font-bold truncate">{activity.age}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-baby-blue" />
            <span className="font-bold">{activity.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-text" />
            <span className="font-bold truncate">{activity.location}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
          {activity.shortDesc}
        </p>

        {/* Separator / Pricing / Slots bar */}
        <div className="mt-auto pt-4 border-t border-brand-border flex flex-col gap-3">
          
          {/* Price & Status */}
          <div className="flex items-baseline justify-between">
            <div className="text-brand-muted text-[10px] font-bold">體驗費用</div>
            <div className="text-sm font-black text-brand-orange font-rounded">
              {activity.category === 'colearning' && activity.price.includes('免費') ? '精選旅遊指南' : activity.price.split(' ')[0]}
            </div>
          </div>

          {/* Spots visual bar (Only if not a travel guide) */}
          {activity.category !== 'colearning' && (
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-brand-muted font-bold">
                <span>名額搶購度</span>
                <span>剩餘 {activity.spotsLeft} / {activity.spots} 名</span>
              </div>
              <div className="w-full h-2 bg-brand-bg border border-brand-border rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    spotsPercent <= 25 ? 'bg-brand-orange' : 'bg-brand-yellow'
                  }`}
                  style={{ width: `${spotsPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Core Action buttons with thick geometry outline */}
          <div className="grid grid-cols-12 gap-2 pt-1">
            <button
              onClick={onSelect}
              className="col-span-4 px-2 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark text-xs font-black rounded-xl transition-all cursor-pointer text-center"
            >
              詳細資訊
            </button>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-8 inline-flex items-center justify-center py-2.5 rounded-xl bg-line-green hover:bg-line-green-hover border-2 border-brand-dark text-white text-xs font-black shadow-xs transition-all text-center gap-1"
            >
              立即 LINE 報名
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
