import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FavoritesSidebar from './components/FavoritesSidebar';
import ActivityModal from './components/ActivityModal';

// Pages
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ActivityDetail from './pages/ActivityDetail';
import FaqPage from './pages/FaqPage';
import FavoritesPage from './pages/FavoritesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CharityPage from './pages/CharityPage';

import { ACTIVITIES } from './data';
import { Activity } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<'all' | 'subject' | 'colearning' | 'team' | 'study'>('all');
  
  // State for favorites
  const [favorites, setFavorites] = useState<Activity[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  
  // Keep selectedActivity modal fallback if needed, or set to null
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('parent_child_favorites');
    if (stored) {
      try {
        const ids = JSON.parse(stored) as string[];
        const matched = ACTIVITIES.filter(act => ids.includes(act.id));
        setFavorites(matched);
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
  }, []);

  // Save favorites helper
  const handleFavoriteToggle = (activity: Activity) => {
    let updated: Activity[] = [];
    const exists = favorites.some(f => f.id === activity.id);
    if (exists) {
      updated = favorites.filter(f => f.id !== activity.id);
    } else {
      updated = [...favorites, activity];
    }
    setFavorites(updated);
    localStorage.setItem('parent_child_favorites', JSON.stringify(updated.map(u => u.id)));
  };

  const handleRemoveFavorite = (id: string) => {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem('parent_child_favorites', JSON.stringify(updated.map(u => u.id)));
  };

  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';

  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-brand-dark font-sans antialiased flex flex-col justify-between">
        <div>
          {/* 1. Sticky Notification Top Warning */}
          <div className="bg-brand-orange text-white text-xs sm:text-sm font-black py-2.5 px-4 text-center relative z-50 flex items-center justify-center gap-1.5 shadow-xs border-b-2 border-brand-dark font-rounded">
            <span className="animate-bounce">📣</span>
            <span>暑假早鳥享好康：即日起加入官方 LINE 預約，首報現折 NT$ 100 元！名額限時限量搶訂中！</span>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-yellow font-black ml-1.5 flex items-center gap-0.5 cursor-pointer"
            >
              立即搶名額 ➔
            </a>
          </div>

          {/* 2. Top Navigation Bar (Shared across all pages) */}
          <Navbar
            onCategoryChange={setCurrentCategory}
            currentCategory={currentCategory}
            favoriteCount={favorites.length}
            onOpenFavorites={() => setIsFavoritesOpen(true)}
          />

          {/* 3. Main Routes view area */}
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  favorites={favorites} 
                  onFavoriteToggle={handleFavoriteToggle} 
                />
              } 
            />
            <Route 
              path="/category/:catId" 
              element={
                <CategoryPage 
                  favorites={favorites} 
                  onFavoriteToggle={handleFavoriteToggle} 
                />
              } 
            />
            <Route 
              path="/activity/:id" 
              element={
                <ActivityDetail 
                  favorites={favorites} 
                  onFavoriteToggle={handleFavoriteToggle} 
                />
              } 
            />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/charity" element={<CharityPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route 
              path="/favorites" 
              element={
                <FavoritesPage 
                  favorites={favorites} 
                  onRemoveFavorite={handleRemoveFavorite} 
                />
              } 
            />
          </Routes>
        </div>

        {/* 4. Footer component (Shared across all pages) */}
        <Footer />

        {/* 5. Floating LINE Circular Sticky Button */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-line-green border-2 border-brand-dark text-white shadow-[4px_4px_0px_0px_rgba(45,52,70,1)] transition-all duration-300 hover:scale-110"
          >
            {/* Animated pulsing outer rings */}
            <span className="absolute inset-0 rounded-full bg-line-green animate-ping opacity-25"></span>
            <MessageCircle className="w-7 h-7 fill-white text-line-green" />
            
            {/* Circular float description on hover */}
            <span className="absolute right-16 scale-0 group-hover:scale-100 bg-brand-dark text-white text-[10px] font-black px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap border-2 border-brand-dark shadow-[2px_2px_0px_0px_rgba(45,52,70,1)]">
              加 LINE 立即報名 / 領取 100 元優惠 💬
            </span>
          </a>
        </div>

        {/* 6. Favorites Sidebar pocket (Legacy support / Quick sidebar option if triggered) */}
        <FavoritesSidebar
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
          onSelectActivity={(act) => setSelectedActivity(act)}
        />

        {/* 7. Activity Detail Modal (Fallback modal view if selectedActivity is set) */}
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          isFavorite={selectedActivity ? favorites.some(f => f.id === selectedActivity.id) : false}
          onFavoriteToggle={() => selectedActivity && handleFavoriteToggle(selectedActivity)}
        />

      </div>
    </Router>
  );
}
