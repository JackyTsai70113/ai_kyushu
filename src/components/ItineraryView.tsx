import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ItineraryDay, ScheduleItem } from "../types";
import { ITINERARY_DATA } from "../data";
import { 
  Plane, 
  Car, 
  Trees, 
  Utensils, 
  Hotel, 
  ShoppingBag, 
  AlertTriangle, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Clock, 
  Calendar,
  Layers,
  ChevronDown,
  Compass,
  CloudSun,
  Umbrella,
  Fuel
} from "lucide-react";

export default function ItineraryView() {
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null);

  // Filter day or locate spots
  const selectedDay = ITINERARY_DATA.find((d) => d.dayNum === selectedDayNum) || ITINERARY_DATA[0];

  const categoryIcons: Record<string, any> = {
    flight: Plane,
    car: Car,
    nature: Trees,
    food: Utensils,
    hotel: Hotel,
    shop: ShoppingBag,
    rest: Compass,
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "flight":
        return { bg: "bg-blue-50 text-blue-700 border-blue-200", badge: "bg-blue-100 text-blue-800" };
      case "car":
        return { bg: "bg-orange-50 text-orange-700 border-orange-200", badge: "bg-orange-100 text-orange-800" };
      case "nature":
        return { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", badge: "bg-emerald-100 text-emerald-800" };
      case "food":
        return { bg: "bg-amber-50 text-amber-700 border-amber-200", badge: "bg-amber-100 text-amber-800" };
      case "hotel":
        return { bg: "bg-purple-50 text-purple-700 border-purple-200", badge: "bg-purple-100 text-purple-800" };
      case "shop":
        return { bg: "bg-rose-50 text-rose-700 border-rose-200", badge: "bg-rose-100 text-rose-800" };
      default:
        return { bg: "bg-slate-50 text-slate-700 border-slate-200", badge: "bg-slate-100 text-slate-800" };
    }
  };

  const handleCopyMemo = (item: ScheduleItem, idx: number) => {
    const textToCopy = `【${item.time}】${item.place}\n規劃：${item.plan}\n備註：${item.memo}`;
    navigator.clipboard.writeText(textToCopy);
    const uniqueId = `${selectedDayNum}-${idx}`;
    setCopiedItemId(uniqueId);
    setTimeout(() => setCopiedItemId(null), 2000);
  };

  // Find all matching spots across the entire itinerary for a global search
  const foundSpots: Array<{ dayNum: number; item: ScheduleItem; index: number }> = [];
  if (searchQuery.trim().length > 1) {
    ITINERARY_DATA.forEach((day) => {
      day.items.forEach((item, index) => {
        if (
          item.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.plan.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.memo.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          foundSpots.push({ dayNum: day.dayNum, item, index });
        }
      });
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar: Day Buttons & Search */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
            六天行程導覽
          </h3>
          <div className="space-y-2">
            {ITINERARY_DATA.map((day) => {
              const isSelected = day.dayNum === selectedDayNum;
              return (
                <button
                  id={`day-nav-btn-${day.dayNum}`}
                  key={day.dayNum}
                  onClick={() => {
                    setSelectedDayNum(day.dayNum);
                    setSearchQuery(""); // Clear search on tab switch
                  }}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/10"
                      : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? "bg-indigo-700 text-indigo-100" : "bg-slate-200 text-slate-600"
                    }`}>
                      D{day.dayNum}
                    </span>
                    <div className="text-sm">
                      <div className="font-semibold">{day.date} ({day.weekday})</div>
                      <div className={`text-xs truncate max-w-[120px] lg:max-w-[150px] ${
                        isSelected ? "text-indigo-250" : "text-slate-400"
                      }`}>
                        {day.items[day.items.length - 1].place.split("→")[0].split("店")[0]}...
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold opacity-80">
                    {day.items.length} 站
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Search box */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              全行程景點搜索
            </h3>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-[11px] text-indigo-600 hover:underline">
                重置
              </button>
            )}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              id="itinerary-search-input"
              type="text"
              placeholder="搜尋景點、餐館、備忘..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 transition-all text-slate-700"
            />
          </div>
          {searchQuery.trim().length > 0 && searchQuery.trim().length < 2 && (
            <p className="text-[10px] text-slate-400">請輸入至少 2 個字進行即時搜尋...</p>
          )}
        </div>
      </div>

      {/* Main Content Area: Itinerary Schedule Details */}
      <div className="lg:col-span-3 space-y-6">
        <AnimatePresence mode="wait">
          {searchQuery.trim().length >= 2 ? (
            // Search Results View
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Layers className="text-blue-600 w-5 h-5" />
                  搜尋結果：找到 {foundSpots.length} 個相符點
                </h2>
                <p className="text-xs text-slate-400 mt-1">搜尋全行程中含有「{searchQuery}」字彙的地點與計畫</p>
              </div>

              {foundSpots.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Compass className="mx-auto h-12 w-12 text-slate-200 mb-3" />
                  <p className="text-sm font-medium">沒有找到相符的行程安排</p>
                  <p className="text-xs mt-1">試試搜尋 ── 黑亭、划船、大觀峰、補給、星宇</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {foundSpots.map(({ dayNum, item, index }) => {
                    const styles = getCategoryStyles(item.category);
                    const CustomIcon = categoryIcons[item.category] || Compass;
                    return (
                      <div key={`${dayNum}-${index}`} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all flex flex-col md:flex-row gap-4 justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2 py-0.5 bg-emerald-700 text-white rounded">
                              第 {dayNum} 天
                            </span>
                            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {item.time}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${styles.badge}`}>
                              {item.category}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                            {item.place}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{item.plan}</p>
                          {item.memo && (
                            <div className="text-xs bg-amber-50 text-amber-800 p-2 rounded-lg border border-amber-100 flex items-start gap-1">
                              <span className="font-bold flex-shrink-0">提醒：</span>
                              <span>{item.memo}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex md:flex-col gap-2 w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
                          {item.mapUrl && (
                            <a
                              href={item.mapUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-blue-600 bg-blue-100/50 hover:bg-blue-100 transition-all px-3 py-1.5 rounded-lg font-medium flex items-center justify-center gap-1 w-full text-center"
                            >
                              <MapPin className="w-3 h-3" />
                              導航 Map
                            </a>
                          )}
                          <button
                            onClick={() => {
                              setSelectedDayNum(dayNum);
                              setSearchQuery("");
                            }}
                            className="text-xs text-indigo-805 bg-indigo-50 hover:bg-indigo-100 transition-all px-3 py-1.5 rounded-lg font-medium w-full text-center"
                          >
                            造訪此天 D{dayNum}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ) : (
            // Regular Day Detail View
            <motion.div
              key={selectedDay.dayNum}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Day Header Summary */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-md border border-slate-800">
                <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 opacity-5 pointer-events-none">
                  <Compass className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold tracking-widest uppercase bg-slate-800 text-indigo-300 px-3 py-1 rounded-full border border-slate-750 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Day 0{selectedDay.dayNum}
                    </span>
                    <span className="text-xs font-mono bg-white/10 text-white px-3 py-1 rounded-full">
                      {selectedDay.date} ({selectedDay.weekday})
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    {selectedDay.title}
                  </h2>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl font-light">
                    {selectedDay.subTitle}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                      <span className="text-indigo-400 font-semibold block mb-0.5">🏨 今日落腳下榻</span>
                      {selectedDay.hotelUrl ? (
                        <a 
                          href={selectedDay.hotelUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="font-bold text-white hover:underline hover:text-indigo-300 inline-flex items-center gap-1"
                        >
                          {selectedDay.hotel}
                          <ExternalLink className="w-3.5 h-3.5 inline" />
                        </a>
                      ) : (
                        <span className="font-bold text-white">{selectedDay.hotel}</span>
                      )}
                    </div>
                    <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                      <span className="text-indigo-400 font-semibold block mb-0.5">🌟 當日焦點主軸</span>
                      <span className="font-bold text-indigo-50">{selectedDay.mainTheme}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl text-amber-100/90 leading-relaxed">
                    💡 <span className="font-bold text-amber-300">本日小語：</span>{selectedDay.note}
                  </div>
                </div>
              </div>

              {/* 今日彙整快覽 (Meals, Weather, Rain Backup, Gas Station) */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedDay.meals && (
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
                      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <Utensils className="w-4 h-4 text-amber-600 animate-pulse" />
                        🍱 今日三餐飲食指南
                      </h3>
                      <div className="space-y-2.5 text-xs text-slate-600">
                        <div className="bg-amber-50/30 p-2.5 rounded-xl border border-amber-100/30">
                          <span className="font-bold text-amber-800 block mb-0.5">🥐 活力早餐</span>
                          {selectedDay.meals.breakfast}
                        </div>
                        <div className="bg-amber-50/30 p-2.5 rounded-xl border border-amber-100/30">
                          <span className="font-bold text-amber-800 block mb-0.5">🍱 特色午餐</span>
                          {selectedDay.meals.lunch}
                        </div>
                        <div className="bg-amber-50/30 p-2.5 rounded-xl border border-amber-100/30">
                          <span className="font-bold text-amber-800 block mb-0.5">🍛 豐盛晚餐</span>
                          {selectedDay.meals.dinner}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 flex flex-col justify-start">
                    {selectedDay.weatherForecast && (
                      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-2 flex-1">
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                          <CloudSun className="w-4 h-4 text-sky-600" />
                          ☀️ 預估天氣狀況
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed bg-sky-50/30 p-3 rounded-xl border border-sky-100/30">
                          {selectedDay.weatherForecast}
                        </p>
                      </div>
                    )}

                    {selectedDay.rainBackup && (
                      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-2 flex-1">
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                          <Umbrella className="w-4 h-4 text-purple-600" />
                          ☔ 雨天替代備案
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed bg-purple-50/30 p-3 rounded-xl border border-purple-100/30">
                          {selectedDay.rainBackup}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedDay.gasStationTip && (
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-2">
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Fuel className="w-4 h-4 text-rose-600" />
                      ⛽ 自駕加油攻略與叮嚀
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed bg-rose-50/30 p-3.5 border border-rose-100/30 rounded-xl font-medium">
                      {selectedDay.gasStationTip}
                    </p>
                  </div>
                )}
              </div>

              {/* Day Time Schedule Blocks */}
              <div className="relative border-l-2 border-slate-100 pl-4 md:pl-6 ml-2 space-y-8 py-2">
                {selectedDay.items.map((item, idx) => {
                  const CustomIcon = categoryIcons[item.category] || Compass;
                  const styles = getCategoryStyles(item.category);
                  const uniqueId = `${selectedDay.dayNum}-${idx}`;
                  const isCopied = copiedItemId === uniqueId;

                  return (
                    <div id={`schedule-item-${uniqueId}`} key={uniqueId} className="relative group">
                      {/* Left timeline circle dot */}
                      <span className={`absolute -left-[27px] md:-left-[35px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-xs flex items-center justify-center transition-all ${
                        styles.bg
                      }`}>
                        <CustomIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </span>

                      {/* Schedule item card */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-205 hover:shadow-xs transition-all duration-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-3 pb-3 border-b border-dashed border-slate-100">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-800 font-mono flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                              <Clock className="w-3.5 h-3.5 text-indigo-600" />
                              {item.time}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${styles.badge}`}>
                              {item.category === "flight" ? "搭機航程" :
                               item.category === "car" ? "自駕移動" :
                               item.category === "nature" ? "戶外景致" :
                               item.category === "food" ? "在地美食" :
                               item.category === "hotel" ? "旅宿憩息" :
                               item.category === "shop" ? "購物補給" : "定點休息"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
                            {item.mapUrl && (
                              <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100/80 px-2.5 py-1.5 rounded-lg font-medium inline-flex items-center gap-1 border border-blue-100 transition-all"
                              >
                                <MapPin className="w-3 h-3" />
                                導航地圖
                              </a>
                            )}
                            <button
                              onClick={() => handleCopyMemo(item, idx)}
                              className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all inline-flex items-center gap-1 ${
                                isCopied
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              {isCopied ? <Check className="w-3 h-3 text-indigo-700" /> : <Copy className="w-3 h-3" />}
                              {isCopied ? "已複製" : "複製簡錄"}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.place}
                          </h3>

                          {item.move && (
                            <div className="text-xs font-medium text-orange-700 bg-amber-50/70 py-1.5 px-3 rounded-lg border border-amber-100/50 inline-block">
                              🚗 交通指引：{item.move}
                            </div>
                          )}

                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {item.plan}
                          </p>

                          {item.memo && (
                            <div className="bg-slate-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-slate-700 text-xs">
                              <div className="flex items-center gap-1.5 text-amber-800 font-bold mb-1">
                                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                                重要叮嚀 / 資訊
                              </div>
                              <p className="leading-relaxed">{item.memo}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
