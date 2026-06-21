import { useState } from "react";
import { COMMON_PHRASES } from "../data";
import { Volume2, Copy, Check, Info, Library, Sparkles, AlertCircle } from "lucide-react";

export default function JapanesePhrases() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isPlayingId, setIsPlayingId] = useState<string | null>(null);

  const categories = [
    { value: "all", label: "全部實用詞" },
    { value: "greeting", label: "💬 基本問候" },
    { value: "shopping", label: "🛍️ 購物退稅" },
    { value: "dining", label: "🍣 點餐美味" },
    { value: "transit", label: "🚗 交通自駕" },
    { value: "emergency", label: "🚨 急用求助" },
  ];

  const filteredPhrases = activeCategory === "all"
    ? COMMON_PHRASES
    : COMMON_PHRASES.filter((p) => p.category === activeCategory);

  const handleCopyPhrase = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const handleSpeakJapanese = (japaneseText: string, id: string) => {
    if (!window.speechSynthesis) {
      alert("抱歉，您的智慧瀏覽器不支援發音合成，可以直接參考羅馬拼音喔！");
      return;
    }

    // Cancel anything playing
    window.speechSynthesis.cancel();

    setIsPlayingId(id);
    const utterance = new SpeechSynthesisUtterance(japaneseText);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85; // slightly slower for clearer pronunciation

    utterance.onend = () => {
      setIsPlayingId(null);
    };

    utterance.onerror = () => {
      setIsPlayingId(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      {/* Phrase Header */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-xs">
        <span className="p-3 bg-indigo-50 rounded-xl text-indigo-805 flex-shrink-0">
          <Library className="w-5 h-5" />
        </span>
        <div className="space-y-1">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            <span>🗣️</span> 九州自駕隨身日語口袋書
            <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-mono font-bold">TTS 互動發音</span>
          </h4>
          <p className="text-slate-500 leading-relaxed font-light">
            本工具收錄了自駕旅程中最常面臨的加油、點餐、退稅與如廁情境。
            可以點擊發音按鈕「<strong>即時撥放真人日語朗讀</strong>」，遇到緊急關頭也可以直接拿給加油站員工或店員看喔！
          </p>
        </div>
      </div>

      {/* Categories scrollbar */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`py-2 px-3.5 rounded-xl font-bold text-xs transition-all duration-150 ${
              activeCategory === cat.value
                ? "bg-indigo-600 text-white shadow-xs border border-indigo-650"
                : "bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Phrases Grid rendering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPhrases.map((p, idx) => {
          const uniqueId = `phrase-${idx}-${p.romaji}`;
          const isCopied = copiedText === p.japanese;
          const isPlaying = isPlayingId === uniqueId;

          return (
            <div
              key={uniqueId}
              className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xs transition-all duration-200 flex justify-between items-start gap-3 group"
            >
              <div className="space-y-2 flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  {p.category === "greeting" ? "👋 問候常用" :
                   p.category === "shopping" ? "🛒 購物免稅" :
                   p.category === "dining" ? "🍱 點餐小酌" :
                   p.category === "transit" ? "🚗 交通自駕" : "🚨 應急救援"}
                </span>

                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight font-sans selection:bg-indigo-100">
                    {p.japanese}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono italic">
                    羅馬拼音: {p.romaji}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium pt-2 border-t border-slate-50 flex items-center gap-1.5">
                  <span className="text-indigo-600">👉</span> {p.meaning}
                </p>
              </div>

              {/* Action Pronounce and Copy Buttons */}
              <div className="flex flex-col gap-2 flex-shrink-0 pt-1">
                <button
                  onClick={() => handleSpeakJapanese(p.japanese, uniqueId)}
                  className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    isPlaying 
                      ? "bg-rose-50 text-rose-700 border-rose-200 animate-pulse" 
                      : "bg-indigo-50 text-indigo-800 border-indigo-100 hover:bg-indigo-100/80"
                  }`}
                  title="點擊撥放日語發音"
                >
                  <Volume2 className={`w-4 h-4 ${isPlaying ? "scale-110" : ""}`} />
                </button>
                <button
                  onClick={() => handleCopyPhrase(p.japanese)}
                  className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    isCopied
                      ? "bg-slate-100 text-slate-700 border-slate-300"
                      : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                  }`}
                  title="複製日文字"
                >
                  {isCopied ? <Check className="w-4 h-4 text-indigo-650" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Speak Hint Banner */}
      <div className="p-4 bg-amber-50/65 rounded-xl border border-amber-100 flex items-start gap-3.5 text-xs text-amber-900">
        <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold mb-0.5">💡 發言自學小竅門：</p>
          <p className="font-light leading-relaxed">
            日本當地的發音通常語調平直，沒有起伏明顯的聲調。在向當地員工（加油站、超商及藥妝店）出示此段翻譯時，若是對自己的發音沒有十足把握，可以直接點選 <Volume2 className="w-3.5 h-3.5 inline text-indigo-650" /> 喇叭，或將手機轉平展示給對方的螢幕，日本店員都是出名地親切熱心，絕對會完全理解您的意思！
          </p>
        </div>
      </div>
    </div>
  );
}
