import React from 'react';
import { Activity } from '../types';
import { X, Calendar, Clock, MapPin, Sparkles, Award, CheckCircle, Heart, MessageCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

export default function ActivityModal({ activity, onClose, isFavorite, onFavoriteToggle }: ActivityModalProps) {
  if (!activity) return null;

  // LINE url
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  // Category label configurations
  const categoryLabels: Record<string, string> = {
    subject: '主題活動',
    colearning: '親子共學',
    study: '海外留遊學',
    team: '團隊介紹',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/40 backdrop-blur-xs">
      {/* Background overlay click */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_0px_#2D3436] border-2 border-brand-dark z-10">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full text-brand-dark hover:bg-brand-bg border-2 border-brand-dark shadow-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Top Image */}
        <div className="relative aspect-[16/9] w-full bg-brand-bg border-b-2 border-brand-dark">
          <img
            src={activity.image}
            alt={activity.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {/* Category Banner & Floating Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-dark border border-brand-dark text-xs font-black rounded-full mb-2 font-rounded">
                {categoryLabels[activity.category]}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight font-rounded">
                {activity.title}
              </h2>
            </div>
            
            <button
              onClick={onFavoriteToggle}
              className="p-3 bg-white rounded-full border-2 border-brand-dark shadow-xs text-brand-muted hover:text-brand-orange transition-colors cursor-pointer"
              title="加入收藏"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'fill-brand-orange text-brand-orange' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Stats Grid with Geometric structure */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-brand-bg p-4 rounded-xl border-2 border-brand-dark">
            <div className="text-center sm:border-r-2 border-brand-border">
              <span className="block text-[10px] text-brand-muted font-bold uppercase">適合年齡</span>
              <span className="text-xs font-black text-brand-orange mt-1 block">{activity.age}</span>
            </div>
            <div className="text-center sm:border-r-2 border-brand-border">
              <span className="block text-[10px] text-brand-muted font-bold uppercase">活動時間</span>
              <span className="text-xs font-black text-baby-blue mt-1 block">{activity.duration}</span>
            </div>
            <div className="text-center sm:border-r-2 border-brand-border">
              <span className="block text-[10px] text-brand-muted font-bold uppercase">活動地點</span>
              <span className="text-xs font-black text-brand-yellow-text mt-1 block">{activity.location}</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] text-brand-muted font-bold uppercase">體驗費用</span>
              <span className="text-xs font-black text-brand-dark mt-1 block truncate">
                {activity.category === 'colearning' && activity.price.includes('免費') ? '資訊推薦' : activity.price.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <h3 className="text-base font-black text-brand-dark flex items-center gap-1.5 font-rounded">
              <Sparkles className="w-4.5 h-4.5 text-brand-yellow-text" />
              活動介紹
            </h3>
            <p className="text-sm text-brand-gray font-bold leading-relaxed text-justify">
              {activity.description}
            </p>
          </div>

          {/* Learning Objectives - For parenting values */}
          <div className="space-y-3 bg-brand-yellow-light/20 p-5 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2D3436]">
            <h3 className="text-base font-black text-brand-dark flex items-center gap-1.5 font-rounded">
              <Award className="w-4.5 h-4.5 text-brand-orange" />
              四大核心學習目標
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activity.learningGoals.map((goal, i) => (
                <li key={i} className="flex gap-2 items-start text-xs text-brand-gray font-bold leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-line-green shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Included */}
          <div className="space-y-3">
            <h3 className="text-base font-black text-brand-dark flex items-center gap-1.5 font-rounded">
              <Info className="w-4.5 h-4.5 text-baby-blue" />
              費用包含與贈品
            </h3>
            <div className="flex flex-wrap gap-2">
              {activity.included.map((inc, i) => (
                <span key={i} className="text-xs bg-white text-brand-dark px-3.5 py-2 rounded-xl border-2 border-brand-dark font-black shadow-[2px_2px_0px_0px_#2D3436]">
                  🎁 {inc}
                </span>
              ))}
            </div>
          </div>

          {/* Date & Location Specifics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-brand-border">
            <div className="space-y-1.5">
              <h4 className="text-xs font-black text-brand-muted uppercase tracking-wider">開課場次日期</h4>
              <div className="flex items-start gap-2 text-xs text-brand-gray font-bold">
                <Calendar className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{activity.date}</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xs font-black text-brand-muted uppercase tracking-wider">活動詳細地址</h4>
              <div className="flex items-start gap-2 text-xs text-brand-gray font-bold">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{activity.fullAddress}</span>
              </div>
            </div>
          </div>

          {/* Registration Guide Info Box */}
          <div className="p-4 bg-brand-yellow-light rounded-xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_#2D3436] flex gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div className="text-xs text-brand-dark leading-relaxed font-bold">
              <p className="font-black mb-0.5">如何報名此活動？</p>
              請點選下方<b>「立即 LINE 報名與諮詢」</b>，客服助理將會引導您填寫「家長姓名、寶貝名字、年齡與活動梯次」，10分鐘內即可為您完成保留名額！
            </div>
          </div>

          {/* Footer Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-brand-border">
            <button
              onClick={onClose}
              className="px-6 py-3.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full transition-all cursor-pointer text-center"
            >
              回活動列表
            </button>
            
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-line-green hover:bg-line-green-hover border-2 border-brand-dark text-white font-black text-base shadow-[4px_4px_0px_0px_#2D3436] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              立即 LINE 報名與諮詢
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
