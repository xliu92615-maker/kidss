import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Award, BookOpen, Gift, ArrowLeft, MessageCircle, CheckCircle, ChevronRight, Users, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function CharityPage() {
  const lineUrl = 'https://line.me/R/ti/p/@parentchildfun';
  
  // Custom states for interactive mock Certificate generator
  const [childName, setChildName] = useState('');
  const [selectedProject, setSelectedProject] = useState('「為愛閱讀」偏鄉圖書募捐計畫');
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const charityProjects = [
    {
      id: 'charity-1',
      title: '「為愛閱讀」偏鄉圖書募捐計畫 📚',
      badge: '持續募集中',
      badgeBg: 'bg-brand-orange text-white',
      desc: '引導孩子整理家裡閒置、保存完好的繪本或圖書，並親手寫下一張溫馨的祝福卡片。我們會定期打包寄送至偏鄉或山區小學，培養孩子分享愛與感恩的美好德行。',
      target: '500 本圖書（目前已募集 412 本）',
      icon: BookOpen,
      color: 'bg-brand-orange/10 text-brand-orange border-brand-orange',
    },
    {
      id: 'charity-2',
      title: '「小小守護者」海洋保護淨灘小英雄 🏖️',
      badge: '暑期限定檔',
      badgeBg: 'bg-[#A0CED9] text-brand-dark',
      desc: '大手拉小手走入美麗的北海岸，在專業環保教練與安全人員戒護下，帶領寶貝進行淨灘。不僅能學習海洋生態與無痕山林（LNT）原則，還能將撿拾到的乾淨貝殼/漂流木進行美學手作，獲得志工感謝狀！',
      target: '減少 100kg 海洋垃圾（已累計 85kg）',
      icon: Users,
      color: 'bg-baby-blue/10 text-baby-blue border-baby-blue',
    },
    {
      id: 'charity-3',
      title: '「溫暖微光」陪伴育幼院童烘焙同樂會 🧁',
      badge: '秋季預告中',
      badgeBg: 'bg-brand-yellow text-brand-dark',
      desc: '特別與在地優質育幼院攜手，舉辦溫馨的烘焙派對。由啟夢的烘焙老師指導，帶領報名家庭與育幼院的小夥伴們一對一組隊，親手揉麵團、烘烤小蛋糕。在平等的互動中，學會用尊重與熱情融化隔閡。',
      target: '全年度 6 場派對（已圓滿辦理 4 場）',
      icon: Smile,
      color: 'bg-brand-yellow/10 text-brand-yellow-text border-brand-yellow-text',
    },
    {
      id: 'charity-4',
      title: '「愛心便當守護者」獨居長者溫馨送餐 🍱',
      badge: '常態性活動',
      badgeBg: 'bg-emerald-500 text-white',
      desc: '與社區長青關懷協會合作，由家長陪伴孩子，親手盛裝熱騰騰的健康便當，並在社工老師帶領下逐戶造訪獨居長輩，遞上溫暖問候與親手繪製的卡片。短短的一聲問好，卻能為老人家帶來無比的安慰。',
      target: '累計送餐 300 戶（目前已達 224 戶）',
      icon: Gift,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500',
    }
  ];

  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim()) return;
    setCertificateGenerated(true);
  };

  return (
    <div className="py-10 space-y-8">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded"
        >
          <ArrowLeft className="w-4 h-4 text-brand-orange" />
          返回首頁
        </Link>
      </div>

      {/* Hero Banner Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-brand-dark bg-gradient-to-br from-brand-orange/10 via-white to-brand-yellow/10 p-6 sm:p-12 shadow-[6px_6px_0px_0px_#0E2356] text-center sm:text-left">
          {/* Decorative floating shapes */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-yellow/30 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange text-white border-2 border-brand-dark text-xs font-black uppercase font-rounded shadow-[2px_2px_0px_0px_#0E2356]">
              <Heart className="w-4 h-4 fill-white animate-pulse" />
              <span>大手牽小手・愛心齊步走</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark leading-tight font-rounded">
              用體驗點亮世界，<br className="sm:hidden" />
              讓愛在做中學裡發芽 🤝❤️
            </h1>
            <p className="text-sm sm:text-base text-brand-muted font-bold leading-relaxed max-w-2xl">
              啟夢教育相信：<strong>「善良與同理心是需要練習的技能」</strong>。除了探索職業與旅遊，我們定期舉辦親子公益活動，帶領孩子走入偏鄉、海灘與社區，親手付出愛心、關懷他人。在孩子心中播下一顆溫暖的種子，讓他們從小學會感恩與分享。
            </p>
            <div className="pt-2">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange/95 text-white font-black border-2 border-brand-dark rounded-full shadow-[3px_3px_0px_0px_#0E2356] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0E2356] transition-all font-rounded"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>立即 LINE 報名 / 洽詢公益合作</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Educational Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0E2356]">
          <h2 className="text-xl sm:text-2xl font-black text-brand-dark font-rounded flex items-center gap-2 border-b-2 border-brand-border pb-4 mb-6">
            <Sparkles className="w-6 h-6 text-brand-yellow-text" />
            為什麼要帶孩子參加公益活動？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border-2 border-dashed border-brand-border rounded-xl space-y-2">
              <div className="w-10 h-10 bg-brand-yellow/20 rounded-full border-2 border-brand-dark flex items-center justify-center font-black text-brand-dark">1</div>
              <h3 className="font-black text-base text-brand-dark font-rounded">學會知足與感恩</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                在衣食無缺的環境長大，孩子往往容易覺得一切都是理所當然。親自參與幫助他人的過程，能幫助孩子深刻看見自己的幸福。
              </p>
            </div>
            <div className="p-5 border-2 border-dashed border-brand-border rounded-xl space-y-2">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-full border-2 border-brand-dark flex items-center justify-center font-black text-brand-dark">2</div>
              <h3 className="font-black text-base text-brand-dark font-rounded">培養主動解決問題的勇氣</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                從撿拾一袋垃圾到送出一個溫暖的便當，孩子能真實看見自己微小的雙手也能為世界帶來美好的改變，極大提升自我效能感。
              </p>
            </div>
            <div className="p-5 border-2 border-dashed border-brand-border rounded-xl space-y-2">
              <div className="w-10 h-10 bg-baby-blue/20 rounded-full border-2 border-brand-dark flex items-center justify-center font-black text-brand-dark">3</div>
              <h3 className="font-black text-base text-brand-dark font-rounded">建立最深刻的親子回憶</h3>
              <p className="text-xs text-brand-muted font-bold leading-relaxed">
                家長在公益活動中「身教大於言教」，用溫柔善良的舉止做最好的示範，這會是孩子一輩子深刻仿效、溫暖一生的珍貴回憶。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charity Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center md:text-left space-y-1">
          <span className="text-brand-orange font-black text-xs uppercase tracking-wider font-rounded block">
            🍀 CURRENT PROGRAMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded">
            愛心起步走：我們正在舉辦的公益項目 🌸
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-bold">
            所有公益活動均為「無償、非營利」舉辦，並會與在地合法立案之社福團體攜手合作，確保安全無虞。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {charityProjects.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_#0E2356] p-5 sm:p-6 flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0E2356] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <div className={`p-3 rounded-xl border-2 border-brand-dark ${p.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 text-[10px] font-black border-2 border-brand-dark rounded-full ${p.badgeBg}`}>
                      {p.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-brand-dark font-rounded">{p.title}</h3>
                    <p className="text-xs text-brand-muted font-bold leading-relaxed">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t-2 border-dashed border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="text-xs text-brand-dark font-black">
                    🎯 階段愛心目標：
                    <span className="text-brand-orange">{p.target}</span>
                  </div>
                  <a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-brand-orange hover:underline font-rounded"
                  >
                    <span>瞭解活動報名詳情</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Mock Certificate Generator for Kids */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-10 shadow-[4px_4px_0px_0px_#0E2356] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1 text-xs font-black text-brand-orange font-rounded uppercase">
              <Award className="w-4 h-4" />
              <span>Interactive Certificate Generator</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark font-rounded">
              小英雄的榮譽！愛心證書模擬生成器 🎓🏅
            </h2>
            <p className="text-xs text-brand-muted font-bold leading-relaxed">
              每次帶寶貝參加完公益活動後，我們都會頒發一份<strong>紙本「啟夢公益活動參與證書」</strong>，讓孩子累積愛心點數，並在班會、升旗或備審資料上展示！
            </p>
            <p className="text-xs text-brand-muted font-bold leading-relaxed">
              您可以在這裡輸入寶貝的名字，預覽愛心證書的超萌模樣，激發孩子的公益熱情！
            </p>

            <form onSubmit={handleGenerateCertificate} className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-black text-brand-dark font-rounded block">寶貝的中文姓名</label>
                <input
                  type="text"
                  placeholder="例如：王小明"
                  value={childName}
                  onChange={(e) => {
                    setChildName(e.target.value);
                    setCertificateGenerated(false);
                  }}
                  className="w-full px-4 py-2.5 border-2 border-brand-dark rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  maxLength={10}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-brand-dark font-rounded block">選擇已參與的公益項目</label>
                <select
                  value={selectedProject}
                  onChange={(e) => {
                    setSelectedProject(e.target.value);
                    setCertificateGenerated(false);
                  }}
                  className="w-full px-4 py-2.5 border-2 border-brand-dark rounded-xl text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="「為愛閱讀」偏鄉圖書募捐計畫">「為愛閱讀」偏鄉圖書募捐計畫 📚</option>
                  <option value="「小小守護者」海洋保護淨灘小英雄">「小小守護者」海洋保護淨灘小英雄 🏖️</option>
                  <option value="「溫慢微光」陪伴育幼院童烘焙同樂會">「溫暖微光」陪伴育幼院童烘焙同樂會 🧁</option>
                  <option value="「愛心便當守護者」獨居長者溫馨送餐">「愛心便當守護者」獨居長者溫馨送餐 🍱</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={!childName.trim()}
                className={`w-full py-3 border-2 border-brand-dark rounded-xl text-xs font-black font-rounded shadow-[2px_2px_0px_0px_#0E2356] transition-all flex items-center justify-center gap-1.5 ${
                  childName.trim()
                    ? 'bg-brand-orange text-white hover:bg-brand-orange/95 cursor-pointer'
                    : 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed shadow-none'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>立即生成專屬愛心證書</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 flex justify-center w-full">
            <AnimatePresence mode="wait">
              {!certificateGenerated ? (
                <motion.div
                  key="preview-placeholder"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-lg aspect-[1.414/1] bg-brand-bg rounded-2xl border-2 border-dashed border-brand-muted flex flex-col justify-center items-center p-6 text-center text-brand-muted space-y-2 min-h-[300px]"
                >
                  <Award className="w-10 h-10 stroke-1 text-brand-muted animate-pulse" />
                  <p className="text-xs font-black font-rounded">證書預覽生成區</p>
                  <p className="text-[11px] max-w-xs font-bold">
                    請於左側輸入寶貝姓名，點擊「立即生成」即可預覽專屬的愛心小英雄榮譽證書！
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="generated-certificate"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full max-w-lg aspect-[1.414/1] bg-orange-50/50 rounded-2xl border-4 border-double border-brand-orange shadow-[6px_6px_0px_0px_#0E2356] p-6 sm:p-10 flex flex-col justify-between items-center relative overflow-hidden min-h-[300px]"
                >
                  {/* Decorative background vectors */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 border-4 border-brand-yellow/30 rounded-full" />
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-brand-orange/20 rounded-full" />
                  <div className="absolute top-4 left-4 text-brand-orange opacity-15 text-2xl font-black">★</div>
                  <div className="absolute top-4 right-4 text-brand-orange opacity-15 text-2xl font-black">★</div>
                  <div className="absolute bottom-4 left-4 text-brand-orange opacity-15 text-2xl font-black">★</div>
                  <div className="absolute bottom-4 right-4 text-brand-orange opacity-15 text-2xl font-black">★</div>

                  <div className="text-center space-y-1.5 w-full">
                    <div className="text-[10px] font-black tracking-widest text-brand-orange uppercase font-rounded">
                      Certificate of Kindness
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-wide text-brand-dark font-rounded flex items-center justify-center gap-1.5">
                      🏆 啟夢教育公益小英雄證書 🏆
                    </h3>
                    <div className="w-24 h-0.5 bg-brand-orange mx-auto my-1" />
                  </div>

                  <div className="text-center space-y-3.5 my-4">
                    <p className="text-xs text-brand-dark leading-relaxed font-bold">
                      親愛的 <span className="text-sm font-black border-b-2 border-brand-dark px-3 text-brand-orange font-rounded">{childName}</span> 寶貝：
                    </p>
                    <p className="text-xs text-brand-muted leading-relaxed max-w-md font-bold px-4">
                      感謝您熱情參與啟夢教育舉辦之 <span className="font-black text-brand-dark font-rounded">{selectedProject}</span> 公益體驗活動。在活動中，您發揮無比的同理心與熱情，用微小的雙手為需要幫助的人們遞上無限溫暖，特頒此證，以茲鼓勵。
                    </p>
                  </div>

                  <div className="w-full flex justify-between items-end text-[10px] text-brand-muted font-bold pt-2 border-t border-brand-border">
                    <div className="space-y-0.5">
                      <div>發證單位：啟夢教育兒童公益發展處</div>
                      <div>發證日期：中華民國 {new Date().getFullYear() - 1911} 年 {new Date().getMonth() + 1} 月 {new Date().getDate()} 日</div>
                    </div>
                    <div className="relative">
                      {/* Interactive mock stamp */}
                      <div className="w-12 h-12 rounded-full border-2 border-red-500/80 text-red-500/80 font-black text-[9px] flex items-center justify-center rotate-12 bg-white/40 p-1 text-center font-rounded select-none leading-none">
                        啟夢教育<br />公益章
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Trust & Footnote FAQ Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark text-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(45,52,70,1)] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-black font-rounded">🤝 誠摯邀請企業與特約組織公益合作</h3>
            <p className="text-xs text-gray-400 font-bold max-w-xl">
              啟夢教育將 1% 的體驗活動盈餘提撥為公益發展基金。若您是有理念的社福組織、非營利小學、海洋保育協會，歡迎聯繫我們共同開發有教育意義的親子公益項目。
            </p>
          </div>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-brand-yellow hover:bg-brand-yellow/95 text-brand-dark text-xs sm:text-sm font-black border-2 border-brand-dark whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(45,52,70,1)]"
          >
            點我加入 LINE 聯絡客服
          </a>
        </div>
      </div>
    </div>
  );
}
