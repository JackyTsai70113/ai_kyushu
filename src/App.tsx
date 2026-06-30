import { useState, useEffect } from "react";
import ItineraryView from "./components/ItineraryView";
import TravelHandbook from "./components/TravelHandbook";
import InteractivePlanner from "./components/InteractivePlanner";
import JapanesePhrases from "./components/JapanesePhrases";
import AiAssistant from "./components/AiAssistant";
import { 
  Calendar, 
  Users, 
  PlaneTakeoff, 
  PlaneLanding, 
  Compass, 
  Heart, 
  Map, 
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Award,
  BookOpen,
  Volume2,
  Briefcase,
  MessageSquare,
  ClipboardList,
  PhoneCall,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [activeSegment, setActiveSegment] = useState<"itinerary" | "guide" | "phrases" | "planner" | "ai" | "overview">("itinerary");
  const [currentUtcTime, setCurrentUtcTime] = useState("");
  const [phraseSearchQuery, setPhraseSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const openDiningPhrase = (query: string) => {
    setPhraseSearchQuery(query);
    setActiveSegment("phrases");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Elegant dynamic clock indicating current action window
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentUtcTime(now.toLocaleString("zh-TW", { timeZone: "Asia/Taipei", hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const segments = [
    { id: "itinerary", label: "🗺️ 6日互動排程", desc: "每日定點導航與備忘" },
    { id: "guide", label: "🏔️ 玩樂血拼自駕寶典", desc: "自由行攻略、免稅與美食" },
    { id: "phrases", label: "🗣️ 隨行自駕日語聽診", desc: "自駕及緊急日語真人朗讀" },
    { id: "planner", label: "🧳 開銷記事行李追蹤", desc: "離線行李打包與開銷計算" },
    { id: "ai", label: "💬 AI 自駕導遊顧問", desc: "24/7 即時自駕疑難解答" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col md:flex-row">
      
      {/* LEFT SIDEBAR: Navigation & Overview (Desktop Only, md and up; collapsible via hamburger) */}
      <aside className={`${sidebarOpen ? "md:flex" : "md:hidden"} hidden w-80 bg-slate-900 text-white flex-col p-6 h-screen sticky top-0 shrink-0 border-r border-slate-800 justify-between`}>
        <div className="space-y-6">
          {/* Brand block */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 text-indigo-400 uppercase tracking-widest text-xs font-bold">
                <Compass className="h-4 w-4 animate-spin-slow" />
                Trip Planner • 2026
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-slate-400 hover:text-white rounded-lg p-1 hover:bg-slate-800 transition-colors"
                title="收合選單"
                aria-label="收合選單"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <h1 className="text-xl font-black tracking-tight text-white leading-tight">
              九州家庭自駕行
            </h1>
            <p className="text-slate-400 text-xs mt-1 font-medium">六天五夜 • 6大1小 • 星宇航空</p>
          </div>

          {/* Quick status bullet */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3.5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider">最新修正進度</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed font-light">
              ⚠️ 2026/7 阿蘇火山警戒 Lv.2：砂千里ヶ浜（6/15–7/31）與中岳火口道路封閉，砂千里已移除、火山口不上山，Day 2 改以 ASO MILK FACTORY 為主。詳見各日行程底部備註。
            </p>
          </div>

          {/* Menu items */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 pl-2">
              主控選單
            </div>
            {segments.map((seg) => {
              const isActive = activeSegment === seg.id;
              return (
                <button
                  id={`sidebar-segment-${seg.id}`}
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id as any)}
                  className={`w-full flex flex-col items-start rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 font-medium"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold flex items-center gap-2">
                    {seg.label}
                  </span>
                  <span className={`text-[10px] mt-0.5 ${isActive ? "text-indigo-200" : "text-slate-500"}`}>
                    {seg.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Emergency contact box at bottom of sidebar */}
        <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/40">
          <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-indigo-400" />
            緊急聯絡 / 訂位
          </div>
          <div className="text-xs space-y-1 text-slate-300">
            <div className="flex justify-between">
              <span>✈️ 星宇航空</span>
              <span className="font-mono font-bold text-indigo-300">EFGJC9</span>
            </div>
            <div className="flex justify-between">
              <span>🚗 自駕</span>
              <span className="font-mono text-slate-400 font-medium text-xs">TOYOTA W3</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER: (Shown on screens < md) */}
      <div className="md:hidden bg-slate-900 text-white w-full border-b border-slate-800">
        <div className="p-4 flex justify-between items-center bg-slate-950">
          <div>
            <span className="text-[9px] bg-indigo-500 text-white font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-full mr-2">
              2026 第二版
            </span>
            <h1 className="text-base font-extrabold tracking-tight text-white inline-block">
              九州家庭自駕行
            </h1>
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            🇹🇼 {currentUtcTime.split(" ")[1] || "精準導航"}
          </div>
        </div>
        
        {/* Mobile Horizontal scroll tab selectors */}
        <div className="flex gap-2 p-3 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-indigo-900 border-t border-slate-800 bg-slate-900">
          {segments.map((seg) => {
            const isActive = activeSegment === seg.id;
            return (
              <button
                id={`mobile-segment-${seg.id}`}
                key={seg.id}
                onClick={() => setActiveSegment(seg.id as any)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {seg.label.split(" ")[1]}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-clip">
        
        {/* Top Header Bar for Desktop Screen (md and up) */}
        <header className="hidden md:flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-xs relative z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
              title={sidebarOpen ? "收合選單" : "展開選單"}
              aria-label="切換側邊選單"
            >
              <Menu className="h-5 w-5" />
            </button>
            {!sidebarOpen && (
              <span className="text-sm font-black tracking-tight text-slate-900">
                九州家庭自駕行
              </span>
            )}
            <span className="text-sm font-semibold text-slate-800 underline underline-offset-8 decoration-2 decoration-indigo-500">
              {segments.find((seg) => seg.id === activeSegment)?.label || "九州幸福手冊"}
            </span>
            <span className="text-xs text-slate-300">|</span>
            <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              台北時間: <span className="font-extrabold text-indigo-700">{currentUtcTime || "加載中..."}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/50 rounded-xl px-3.5 py-1.5 flex items-center gap-1">
              👨‍👩‍👧‍👦 家族旅行成員: 六大一小 🙋
            </span>
            <a 
              href="https://www.vjw.digital.go.jp/" 
              target="_blank" 
              rel="noreferrer"
              className="rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700 shadow-sm transition-all"
            >
              🌐 Visit Japan Web 申報
            </a>
          </div>
        </header>

        {/* Page Content area */}
        <div className="flex-grow p-4 md:p-8 space-y-6">
          
          {/* Professional Status Bar Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 flex gap-3.5 items-start">
              <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </span>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                  2026 幸福自駕核心修正提醒
                </h3>
                <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-light">
                  本版手冊已改為 <strong>Day 1 熊本機場起點、MERUKORO、草千里 Green Park 午餐；Day 2 ASO MILK FACTORY 午餐、大觀峰、黑川；Day 3 CAN LI ASSO 起點、高千穗、白川水源</strong>。<strong className="text-rose-700">⚠️ 2026/7 阿蘇火山 Lv.2：砂千里ヶ浜 6/15–7/31 封閉（已移除）、中岳火口道路封閉不上山。</strong>7/7 10:00 記得選回程 JX847 機位。
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3 items-start shadow-xs">
              <span className="p-2 bg-slate-100 text-slate-700 rounded-lg shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </span>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  TOYOTA Rent a Car W3 自駕
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  租車等級為 TOYOTA Rent a Car W3。台灣駕照自駕取車請備妥<strong>台灣護照、台灣駕照正本與日文譯本</strong>即可。行李限制：1 台嬰兒車、3 個 29 寸大行李箱與 1 個大型手提旅行包，不帶登機箱。
                </p>
              </div>
            </div>
          </div>

          {/* Quick flight details ribbon on mobile */}
          <div className="md:hidden bg-indigo-50 border border-indigo-100 text-indigo-950 p-3 rounded-xl text-xs space-y-1.5">
            <div className="font-bold flex items-center gap-1 text-indigo-900">
              <Award className="w-3.5 h-3.5 text-indigo-600" /> 去回程航班速讀
            </div>
            <div className="font-light leading-relaxed">
              <strong>去程 07/04：</strong>星宇 JX846 (07:30 桃園 → 10:45 熊本)
              <br />
              <strong>回程 07/09：</strong>星宇 JX847 (11:55 熊本 → 13:20 桃園)
              <br />
              <span className="font-mono text-[10px] bg-indigo-100/70 inline-block px-1.5 py-0.5 mt-1 rounded text-indigo-800">
                代號: EFGJC9 • TOYOTA Rent-A-Car
              </span>
            </div>
          </div>

          {/* Dynamic Component Content Rendering */}
          <div className="space-y-6">
            {activeSegment === "itinerary" && <ItineraryView onOpenDiningPhrase={openDiningPhrase} />}
            {activeSegment === "guide" && <TravelHandbook />}
            {activeSegment === "phrases" && <JapanesePhrases initialSearchQuery={phraseSearchQuery} />}
            {activeSegment === "planner" && <InteractivePlanner />}
            {activeSegment === "ai" && <AiAssistant />}
          </div>
        </div>

        {/* Dynamic Footer with slate color matching design guidelines */}
        <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t border-slate-800 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
            <div className="flex justify-center items-center gap-2 text-white font-extrabold">
              <span>🗻</span>
              <span className="tracking-wide">2026 九州幸福家庭自駕行 ｜ 專業旅行手冊</span>
            </div>
            <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed font-light text-[11px] sm:text-xs">
              本手冊專為本次六大一小自駕行程定制，每日景點、餐廳、住宿與自駕路線皆依最新時序安排。天候變換請即時與口袋導遊進行互動查詢。
            </p>
            <div className="text-[10px] text-slate-600 font-mono">
              © 2026 九州自駕樂活旅遊手冊 ｜ Styled with Professional Polish Theme Theme
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
