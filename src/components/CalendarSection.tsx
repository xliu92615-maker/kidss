import React, { useState } from 'react';
import { Calendar as CalendarIcon, Sparkles, ChevronRight, MessageCircle } from 'lucide-react';
import { Activity } from '../types';
import { ACTIVITIES } from '../data';

interface CalendarSectionProps {
  onSelectActivity: (activity: Activity) => void;
}

export default function CalendarSection({ onSelectActivity }: CalendarSectionProps) {
  // We list some specific upcoming weekend dates in June/July 2026
  const weekendDates = [
    { id: 'd1', day: '六', dateStr: '06/27', label: '六月 27 日', note: '熱門牙醫課' },
    { id: 'd2', day: '日', dateStr: '06/28', label: '六月 28 日', note: '披薩店長班' },
    { id: 'd3', day: '六', dateStr: '07/04', label: '七月 04 日', note: '藍帶烘焙坊' },
    { id: 'd4', day: '日', dateStr: '07/05', label: '七月 05 日', note: '消防英雄課' },
    { id: 'd5', day: '六', dateStr: '07/11', label: '七月 11 日', note: '超商小店長' },
    { id: 'd6', day: '日', dateStr: '07/12', label: '七月 12 日', note: '昆蟲夜間探險' },
  ];

  const [selectedDateId, setSelectedDateId] = useState('d1');

  // Map of which activities run on which weekend
  const dateActivitiesMap: Record<string, string[]> = {
    d1: ['career-1', 'career-3', 'manager-3'], // Dentist, Baker, Bookstore
    d2: ['career-2', 'manager-2', 'career-3'], // Firefighter, Pizza, Baker
    d3: ['career-3', 'manager-1', 'activity-2'], // Baker, Convenience Store, Paint Party
    d4: ['career-2', 'manager-2', 'activity-2'], // Firefighter, Pizza, Paint Party
    d5: ['manager-1', 'career-1', 'manager-3'], // Convenience Store, Dentist, Bookstore
    d6: ['activity-1', 'career-2', 'manager-2'], // Insect exploration, Firefighter, Pizza
  };

  const activeActivityIds = dateActivitiesMap[selectedDateId] || [];
  const featuredActivities = ACTIVITIES.filter((act) => activeActivityIds.includes(act.id));
  const selectedDateLabel = weekendDates.find(d => d.id === selectedDateId)?.label || '';

  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <div className="bg-brand-bg border-y-2 border-brand-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-yellow-light border-2 border-brand-dark text-brand-dark rounded-full text-xs font-bold font-rounded mb-3">
            <CalendarIcon className="w-4 h-4 text-brand-orange" />
            <span>互動週末行事曆</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight font-rounded">
            週末親子計畫：寶貝去哪兒？
          </h2>
          <p className="text-sm text-brand-muted mt-2 font-bold">
            點選下方即將到來的週末日期，快速預覽當天開辦的體驗活動，即時安排精彩生活！
          </p>
        </div>

        {/* Date Selector Row with Geometric design */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-4xl mx-auto mb-10">
          {weekendDates.map((d) => {
            const isSelected = d.id === selectedDateId;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDateId(d.id)}
                className={`flex flex-col items-center p-3.5 rounded-xl border-2 border-brand-dark transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange text-white shadow-[2px_2px_0px_0px_#2D3436] scale-102'
                    : 'bg-white text-brand-dark shadow-[2px_2px_0px_0px_#2D3436] hover:bg-brand-bg'
                }`}
              >
                <span className="text-[10px] uppercase font-black tracking-wider opacity-80 mb-1 font-rounded">
                  星期{d.day}
                </span>
                <span className="text-lg font-black font-rounded">{d.dateStr}</span>
                <span className={`text-[9px] font-black mt-2 px-1.5 py-0.5 rounded-full border border-brand-dark ${
                  isSelected ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-yellow-light text-brand-yellow-text'
                }`}>
                  {d.note}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Activity List Card with bold geometric design */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-dark shadow-[6px_6px_0px_0px_#2D3436]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-brand-border pb-4 mb-6 gap-3">
            <div>
              <p className="text-xs text-brand-orange font-black uppercase">您已選取</p>
              <h3 className="text-lg font-black text-brand-dark flex items-center gap-1.5 mt-0.5 font-rounded">
                📅 {selectedDateLabel} 精選開班場次
              </h3>
            </div>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-black text-line-green hover:text-line-green-hover gap-1 bg-green-50 border border-green-200 px-3.5 py-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-line-green text-line-green" />
              點我直接指定日期報名
            </a>
          </div>

          <div className="space-y-4">
            {featuredActivities.length > 0 ? (
              featuredActivities.map((act) => (
                <div
                  key={act.id}
                  onClick={() => onSelectActivity(act)}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border-2 border-brand-border hover:border-brand-dark hover:bg-brand-bg transition-all cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Thumbnail */}
                    <img
                      src={act.image}
                      alt={act.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover shrink-0 border border-brand-dark"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border border-brand-dark ${
                          act.category === 'subject' ? 'bg-baby-blue text-white' :
                          act.category === 'colearning' ? 'bg-[#A0CED9] text-brand-dark' :
                          act.category === 'study' ? 'bg-emerald-500 text-white' : 'bg-brand-orange text-white'
                        }`}>
                          {act.category === 'subject' ? '主題活動' :
                           act.category === 'colearning' ? '親子共學' :
                           act.category === 'study' ? '海外留遊學' : '體驗活動'}
                        </span>
                        {act.spotsLeft <= 3 && (
                          <span className="text-[9px] text-brand-orange font-black animate-pulse">最後名額</span>
                        )}
                      </div>
                      <h4 className="text-sm font-black text-brand-dark mt-1.5 group-hover:text-brand-orange transition-colors font-rounded">
                        {act.title}
                      </h4>
                      <p className="text-xs text-brand-muted mt-1 flex items-center gap-3 font-bold">
                        <span>👶 {act.age}</span>
                        <span>⏱️ {act.duration}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-border">
                    <div className="text-right">
                      <span className="block text-[10px] text-brand-muted font-bold">體驗費用</span>
                      <span className="text-sm font-black text-brand-orange font-rounded">{act.price.split(' ')[0]}</span>
                    </div>
                    <div className="p-2.5 bg-brand-bg border border-brand-border group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-dark rounded-xl transition-all">
                      <ChevronRight className="w-5 h-5 text-brand-dark group-hover:text-white" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-brand-muted text-sm font-bold">今日暫無排程，歡迎加 LINE 預約客製化包場服務！</p>
            )}
          </div>

          {/* Special Booking Note */}
          <p className="text-center text-[11px] text-brand-muted font-bold mt-6 bg-brand-bg py-2.5 rounded-xl border border-brand-border">
            🔔 貼心提示：本表為預排參考，實際名額以 LINE 客服即時預約確認為準。歡迎 6 人以上團體客製私場喔！
          </p>

        </div>

      </div>
    </div>
  );
}
