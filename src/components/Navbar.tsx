import React, { useState } from 'react';
import { Menu, X, MessageCircle, Heart, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onCategoryChange: (category: 'all' | 'career' | 'subject' | 'colearning' | 'team' | 'study') => void;
  currentCategory: string;
  favoriteCount: number;
  onOpenFavorites: () => void;
}

export default function Navbar({ onCategoryChange, currentCategory, favoriteCount, onOpenFavorites }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (val: 'team' | 'study') => {
    setIsOpen(false);
    navigate(`/category/${val}`);
  };

  // Official LINE URL
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <div className="sticky top-0 z-50 flex flex-col shadow-md">
      {/* Top Announcement Banner (PAW Patrol Style Yellow Bar) */}
      <div className="bg-brand-yellow text-brand-dark font-black text-center text-xs sm:text-sm py-2 px-4 tracking-wider flex justify-center items-center gap-1.5 border-b-2 border-[#1145BA] font-rounded">
        <span>📢</span>
        <span className="bg-brand-orange text-white text-[10px] px-2.5 py-0.5 rounded-full animate-bounce">
          感謝
        </span>
        <span>王景富主任全額贊助活動</span>
      </div>

      <nav className="bg-[#1145BA] border-b-4 border-brand-orange transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo with dynamic circle */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <span className="text-white font-bold text-xl font-rounded">啟</span>
              </div>
              <span className="font-rounded font-extrabold text-2xl tracking-tight text-white">
                啟夢教育
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-xs font-black px-2.5 py-0.5 bg-brand-yellow text-brand-dark rounded-full font-rounded">
                啟夢
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1.5 items-center">
              {/* Dropdown for All Activities (全部活動) */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`px-4.5 py-2 rounded-full text-sm font-black transition-all cursor-pointer flex items-center gap-1 ${
                    ['career', 'subject', 'colearning'].some(cat => location.pathname === `/category/${cat}`)
                      ? 'bg-brand-orange text-white border-2 border-white/20 shadow-xs scale-105'
                      : 'text-white/90 hover:text-brand-yellow hover:bg-white/10'
                  }`}
                >
                  <span>全部活動</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border-2 border-dashed border-[#0E2356] rounded-2xl shadow-[6px_6px_0px_0px_#0E2356] overflow-hidden p-2 z-50"
                    >
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/category/career');
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-black rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                          location.pathname === '/category/career'
                            ? 'bg-brand-orange text-white'
                            : 'text-[#0E2356] hover:bg-brand-bg hover:text-brand-orange'
                        }`}
                      >
                        <span>職業體驗</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/category/subject');
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-black rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                          location.pathname === '/category/subject'
                            ? 'bg-brand-orange text-white'
                            : 'text-[#0E2356] hover:bg-brand-bg hover:text-brand-orange'
                        }`}
                      >
                        <span>主題活動</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate('/category/colearning');
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-black rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                          location.pathname === '/category/colearning'
                            ? 'bg-brand-orange text-white'
                            : 'text-[#0E2356] hover:bg-brand-bg hover:text-brand-orange'
                        }`}
                      >
                        <span>親子共學</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Study Link */}
              <button
                onClick={() => handleNavClick('study')}
                className={`px-4.5 py-2 rounded-full text-sm font-black transition-all cursor-pointer ${
                  location.pathname === '/category/study'
                    ? 'bg-brand-orange text-white border-2 border-white/20 shadow-xs scale-105'
                    : 'text-white/90 hover:text-brand-yellow hover:bg-white/10'
                }`}
              >
                國際留遊學
              </button>

              {/* Team Link */}
              <button
                onClick={() => handleNavClick('team')}
                className={`px-4.5 py-2 rounded-full text-sm font-black transition-all cursor-pointer ${
                  location.pathname === '/category/team'
                    ? 'bg-brand-orange text-white border-2 border-white/20 shadow-xs scale-105'
                    : 'text-white/90 hover:text-brand-yellow hover:bg-white/10'
                }`}
              >
                團隊介紹
              </button>

              {/* Charity Link */}
              <Link
                to="/charity"
                className={`px-4.5 py-2 rounded-full text-sm font-black transition-all cursor-pointer ${
                  location.pathname === '/charity'
                    ? 'bg-brand-orange text-white border-2 border-white/20 shadow-xs scale-105'
                    : 'text-white/90 hover:text-brand-yellow hover:bg-white/10'
                }`}
              >
                大手牽小手・愛心齊步走
              </Link>
              
              {/* FAQ link */}
              <Link
                to="/faq"
                className={`px-4.5 py-2 rounded-full text-sm font-black transition-all flex items-center gap-1 ${
                  location.pathname === '/faq'
                    ? 'bg-brand-orange text-white border-2 border-white/20 shadow-xs scale-105'
                    : 'text-white/90 hover:text-brand-yellow hover:bg-white/10'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                常見問題
              </Link>
            </div>

            {/* Action Buttons (Fav + Line) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Favorites Pocket */}
              <Link
                to="/favorites"
                className={`relative p-2.5 transition-colors cursor-pointer rounded-full hover:bg-white/10 ${
                  location.pathname === '/favorites' ? 'text-brand-yellow bg-white/10' : 'text-white/90 hover:text-brand-yellow'
                }`}
                title="我的收藏袋"
              >
                <Heart className={`h-6 w-6 ${favoriteCount > 0 ? 'fill-brand-yellow text-brand-yellow animate-pulse' : ''}`} />
                {favoriteCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white ring-2 ring-[#1145BA]">
                    {favoriteCount}
                  </span>
                )}
              </Link>

              {/* Line CTA with shining effect */}
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-line-green hover:bg-line-green-hover text-white text-sm font-extrabold shadow-sm transition-all hover:-translate-y-0.5 border-2 border-white/10"
              >
                <MessageCircle className="w-5 h-5 mr-1.5 fill-white" />
                加LINE立即報名
                <span className="absolute right-2 top-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
                </span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center space-x-3">
              <Link
                to="/favorites"
                className={`relative p-2 transition-colors cursor-pointer rounded-full ${
                  location.pathname === '/favorites' ? 'text-brand-yellow bg-white/10' : 'text-white/90'
                }`}
              >
                <Heart className={`h-6 w-6 ${favoriteCount > 0 ? 'fill-brand-yellow text-brand-yellow' : ''}`} />
                {favoriteCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">
                    {favoriteCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-white/90 hover:text-brand-yellow hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#0F3FA0] border-t border-[#1A4DC0] overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 text-white">
                {/* Mobile Dropdown Category Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                      ['career', 'subject', 'colearning'].some(cat => location.pathname === `/category/${cat}`)
                        ? 'bg-white/10 text-brand-yellow'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    <span>全部活動</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileSubOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileSubOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            navigate('/category/career');
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                            location.pathname === '/category/career' ? 'bg-brand-orange text-white font-black' : 'text-white/80 hover:bg-white/5'
                          }`}
                        >
                          <span>職業體驗</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            navigate('/category/subject');
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                            location.pathname === '/category/subject' ? 'bg-brand-orange text-white font-black' : 'text-white/80 hover:bg-white/5'
                          }`}
                        >
                          <span>主題活動</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            navigate('/category/colearning');
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                            location.pathname === '/category/colearning' ? 'bg-brand-orange text-white font-black' : 'text-white/80 hover:bg-white/5'
                          }`}
                        >
                          <span>親子共學</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/category/study');
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    location.pathname === '/category/study'
                      ? 'bg-brand-orange text-white font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>國際留遊學</span>
                  <span className="text-brand-yellow">➔</span>
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/category/team');
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    location.pathname === '/category/team'
                      ? 'bg-brand-orange text-white font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>團隊介紹</span>
                  <span className="text-brand-yellow">➔</span>
                </button>

                {/* Mobile Charity Page Link */}
                <Link
                  to="/charity"
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    location.pathname === '/charity'
                      ? 'bg-brand-orange text-white font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>大手牽小手・愛心齊步走</span>
                  <span className="text-brand-yellow">➔</span>
                </Link>
                
                {/* Mobile FAQ link */}
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    location.pathname === '/faq'
                      ? 'bg-brand-orange text-white font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>常見問題</span>
                  <span className="text-brand-yellow">➔</span>
                </Link>

                {/* Mobile Favorites link */}
                <Link
                  to="/favorites"
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                    location.pathname === '/favorites'
                      ? 'bg-brand-orange text-white font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>🎒 我的活動收藏袋</span>
                  <span className="text-brand-yellow">➔</span>
                </Link>
                
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl bg-line-green hover:bg-line-green-hover text-white font-black shadow-md text-center text-lg gap-2"
                  >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    點我加 LINE 報名諮詢
                  </a>
                  <p className="text-center text-[11px] text-white/80 mt-2 font-bold">
                    客服時間：每日10:00～21:00（週日休息），專業諮詢秒回覆！
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
