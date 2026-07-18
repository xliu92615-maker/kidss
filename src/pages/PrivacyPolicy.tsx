import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShieldAlert, 
  FileText, 
  Users, 
  Lock, 
  Share2, 
  Cookie, 
  UserCheck, 
  RefreshCw, 
  PhoneCall, 
  CheckCircle2 
} from 'lucide-react';

export default function PrivacyPolicy() {
  // Automatically scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sections = [
    {
      icon: <FileText className="w-5 h-5 text-baby-orange" />,
      title: "一、 隱私權保護政策的適用範圍",
      content: "本政策內容包括本網站如何處理您在使用網站服務時收集到的個人識別資料。本政策不適用於本網站以外的連結網站，也不適用於非本網站所委託或參與管理的人員。"
    },
    {
      icon: <Users className="w-5 h-5 text-baby-blue" />,
      title: "二、 個人資料的收集與使用方式",
      content: "為了提供您最完善的服務，本網站可能會在您註冊帳號、購買商品、報名活動或參與互動時，要求您提供必要的個人資料：",
      bullets: [
        {
          label: "一般會員資料",
          text: "姓名、聯絡電話、電子郵件地址、通訊地址等。"
        },
        {
          label: "親子互動相關資料",
          text: "為了提供更精準的育兒資訊或活動推薦，在您自願的情況下，本網站可能會收集您孩子的暱稱、性別、出生年月。（請注意：我們絕不會強制要求輸入兒童的真實全名或敏感個人身分證字號）。"
        },
        {
          label: "自動收集之資訊",
          text: "當您瀏覽本網站時，伺服器會自動記錄相關路徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，此記錄僅作為我們增進網站服務的數據參考，絕不對外公布。"
        }
      ]
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-baby-pink" />,
      title: "三、 兒童及青少年之隱私特別保護",
      content: "本網站主要服務對象包含家長與兒童，我們對於未成年人的個人資料保護極為重視：",
      bullets: [
        {
          label: "法定代理人同意",
          text: "若您是未滿 18 歲的未成年人，您在註冊會員或提供個人資料前，應先取得您的法定代理人（如家長或監護人）的同意。"
        },
        {
          label: "刪除申請機制",
          text: "如果家長發現您的孩子在未經您的同意下，向本網站提供了個人資料，請立即透過本政策下方的聯絡方式與我們聯繫，我們將會迅速刪除該筆資料。"
        }
      ]
    },
    {
      icon: <Lock className="w-5 h-5 text-baby-teal" />,
      title: "四、 資料的保護與安全",
      content: "本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料。我們採用嚴格的就業管理與加密技術，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。"
    },
    {
      icon: <Share2 className="w-5 h-5 text-baby-purple" />,
      title: "五、 資料對外提供與分享之政策",
      content: "本網站絕不會任意出售、交換、或出租任何您的個人資料給其他團體或個人。但有下列情形者除外：",
      bullets: [
        {
          label: "取得書面同意",
          text: "經由您的事前書面或電子同意。"
        },
        {
          label: "法規與司法要求",
          text: "法律明文規定或司法機關依法要求提供。"
        },
        {
          label: "活動與配送合作",
          text: "為了提供您報名的實體活動或購買的商品配送，必須將您的姓名、地址、電話提供給協力廠商（如物流公司、活動合作主辦方）。"
        }
      ]
    },
    {
      icon: <Cookie className="w-5 h-5 text-baby-yellow" />,
      title: "六、 Cookie 之使用",
      content: "為了便利您的瀏覽體驗，本網站會在您的電腦中放置並取用我們的 Cookie。若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導至網站某些功能無法正常執行。"
    },
    {
      icon: <UserCheck className="w-5 h-5 text-brand-orange" />,
      title: "七、 當事人的權利（查閱、修正與刪除）",
      content: "您（及您的法定代理人）隨時擁有以下權利，可透過電子郵件與我們聯繫提出申請：",
      list: [
        "查詢或請求閱覽您的個人資料。",
        "請求製給複製本。",
        "請求補充或更正。",
        "請求停止蒐集、處理或利用。",
        "請求刪除您或您孩子的個人資料。"
      ]
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-brand-muted" />,
      title: "八、 隱私權保護政策之修正",
      content: "本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上，不另行個別通知，您可以隨時在本網站上閱讀最新修訂的隱私權政策。"
    }
  ];

  return (
    <div className="py-10 space-y-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 border-2 border-brand-dark bg-white hover:bg-brand-bg text-brand-dark font-black text-sm rounded-full shadow-[2px_2px_0px_0px_#2D3436] transition-all cursor-pointer font-rounded mb-2"
        >
          <ArrowLeft className="w-4 h-4 text-brand-orange" />
          返回首頁
        </Link>
      </div>

      {/* Header Info Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-2xl border-2 border-brand-dark p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2D3436]">
          <div className="flex items-center gap-2 text-brand-orange font-black text-xs uppercase font-rounded mb-1">
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-dark font-rounded">
            「啟夢教育」官方網站隱私權政策
          </h1>
          <p className="text-xs sm:text-sm text-brand-gray mt-4 font-medium leading-relaxed">
            歡迎您光臨「啟夢教育」官方網站（以下簡稱「本網站」）。本網站非常重視您的隱私權，並承諾保護您及您孩子的個人資料。為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策（以下簡稱「本政策」），以保障您的權益，請您詳閱下列內容：
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-brand-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-yellow-light border border-brand-yellow-text/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
              保護您與孩子的資安
            </span>
            <span>更新日期：2025 年 6 月 13 日</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {sections.map((section, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] transition-all hover:shadow-[6px_6px_0px_0px_#2D3436]"
          >
            <div className="flex items-center gap-3 border-b-2 border-dashed border-brand-border pb-3 mb-4">
              <div className="p-2 rounded-lg bg-brand-bg border border-brand-dark/10">
                {section.icon}
              </div>
              <h2 className="text-lg font-black text-brand-dark font-rounded">
                {section.title}
              </h2>
            </div>
            
            <p className="text-sm text-brand-gray leading-relaxed font-medium">
              {section.content}
            </p>

            {/* Render sub-bullets if they exist */}
            {section.bullets && (
              <div className="mt-4 space-y-3 pl-2">
                {section.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="bg-brand-bg/50 rounded-xl p-3 border border-brand-border/60">
                    <span className="inline-block text-xs font-black text-brand-orange font-rounded mb-1.5">
                      ✦ {b.label}
                    </span>
                    <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-medium">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Render lists if they exist */}
            {section.list && (
              <ul className="mt-4 space-y-2 pl-4 list-disc text-sm text-brand-gray font-medium">
                {section.list.map((item, lIdx) => (
                  <li key={lIdx} className="marker:text-brand-orange">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Support Contact Footer Info */}
        <div className="bg-brand-yellow-light/30 rounded-2xl border-2 border-brand-dark p-6 shadow-[4px_4px_0px_0px_#2D3436] text-center space-y-3">
          <PhoneCall className="w-8 h-8 text-brand-orange mx-auto animate-pulse" />
          <h3 className="text-lg font-black text-brand-dark font-rounded">
            有任何關於個人資料的疑問或申請？
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray max-w-xl mx-auto font-bold leading-relaxed">
            若您需要查詢、更正或請求刪除您及您孩子的個人資料，歡迎隨時透過官方電子郵件或 LINE 與我們聯絡：
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 text-xs font-black">
            <span className="px-4 py-2 bg-white rounded-full border-2 border-brand-dark">
              ✉ 電子信箱：service@parentchildfun.com
            </span>
            <a 
              href="https://line.me/R/ti/p/@parentchildfun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-line-green hover:bg-line-green-hover text-white rounded-full border-2 border-brand-dark shadow-[2px_2px_0px_0px_#2D3436] inline-flex items-center gap-1 cursor-pointer transition-all"
            >
              💬 LINE 客服：@parentchildfun
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
