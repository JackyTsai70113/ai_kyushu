import { useState } from "react";
import { motion } from "motion/react";
import { TRAVEL_GUIDE_INFO } from "../data";
import { 
  ShoppingBag, 
  Utensils, 
  Compass, 
  ShieldAlert, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle, 
  Car, 
  Heart,
  HelpCircle,
  Flame,
  Volume2,
  Bookmark
} from "lucide-react";

export default function TravelHandbook() {
  const [activeTab, setActiveTab] = useState<"shopping" | "dining" | "driving" | "safety">("shopping");

  return (
    <div className="space-y-6">
      {/* Handbook Tab Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
        <button
          id="handbook-tab-btn-shopping"
          onClick={() => setActiveTab("shopping")}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === "shopping"
              ? "bg-indigo-600 text-white shadow-sm font-semibold"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          好買好逛特搜
        </button>
        <button
          id="handbook-tab-btn-dining"
          onClick={() => setActiveTab("dining")}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === "dining"
              ? "bg-indigo-600 text-white shadow-sm font-semibold"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Utensils className="w-4 h-4" />
          特色美食推薦
        </button>
        <button
          id="handbook-tab-btn-driving"
          onClick={() => setActiveTab("driving")}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === "driving"
              ? "bg-indigo-600 text-white shadow-sm font-semibold"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <Car className="w-4 h-4" />
          日本自駕守則
        </button>
        <button
          id="handbook-tab-btn-safety"
          onClick={() => setActiveTab("safety")}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === "safety"
              ? "bg-indigo-600 text-white shadow-sm font-semibold"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          景點應變指南
        </button>
      </div>

      {/* Guide Content Render */}
      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-6">
        {activeTab === "shopping" && (
          <>
            {TRAVEL_GUIDE_INFO.shopping.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xs hover:border-indigo-200 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-rose-50 text-rose-700 rounded-xl group-hover:scale-105 transition-transform">
                      <ShoppingBag className="w-5 h-5" />
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">導遊秘密攻略 ──</span>
                    {item.tips.map((tip, tipIdx) => (
                      <div key={tipIdx} className="flex gap-2 items-start text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-indigo-650 flex-shrink-0 mt-0.5" />
                        <p>{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}

        {activeTab === "dining" && (
          <>
            {TRAVEL_GUIDE_INFO.dining.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xs hover:border-indigo-200 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-amber-50 text-amber-700 rounded-xl group-hover:scale-105 transition-transform">
                      <Utensils className="w-5 h-5" />
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-amber-800 bg-amber-50/50 py-1.5 px-3 rounded-lg border border-amber-100/30 inline-block font-medium">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-slate-50">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">美饌口感解析 ──</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}

        {activeTab === "driving" && (
          <>
            {TRAVEL_GUIDE_INFO.driving.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col hover:shadow-xs hover:border-indigo-200 transition-all group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg">
                      自駕指南 0{idx + 1}
                    </span>
                    <span className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
                      <Car className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-dashed border-slate-100">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </>
        )}

        {activeTab === "safety" && (
          <>
            {TRAVEL_GUIDE_INFO.safety.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col hover:shadow-xs hover:border-indigo-200 transition-all group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-lg">
                      安全備忘
                    </span>
                    <span className="p-2 bg-rose-50 text-rose-700 rounded-lg">
                      <ShieldAlert className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-rose-950 bg-rose-50/30 p-3.5 rounded-xl border border-red-100/50 leading-relaxed font-light">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Tax Refund / Shopping tips widget card */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1.5 max-w-xl">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Bookmark className="w-4 h-4 text-indigo-400" />
            導遊溫馨備忘：免稅 Tax-Free 注意事項
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            日本實體免稅店（商店街、大型電器城等）購買金額「未稅達 5,000 日圓以上」（美妝、藥品、食品、衣服皆可合併計算），結帳時主動出示「本人的個人護照正本」，店家會直接予以 10% 現折免稅！退稅封箱後的防拆袋在出日本前請勿拆開。
          </p>
        </div>
        <div className="text-xs font-mono font-bold bg-indigo-600 text-white py-2 px-3 rounded-lg border border-indigo-500 whitespace-nowrap">
          護照正本不離身 ｜ 結帳前先看店門免稅認證
        </div>
      </div>
    </div>
  );
}
