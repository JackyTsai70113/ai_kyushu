import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, RefreshCw, Compass, AlertCircle, HelpCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

export default function AiAssistant() {
  const isStaticPage = import.meta.env.VITE_STATIC_PAGE === "true";
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: isStaticPage
        ? "靜態網頁版未串接 AI 後端，無法使用即時對話。\n\n這不是故障：GitHub Pages 只能提供前端靜態檔案，沒有 `/api/gemini/chat` 後端服務。行程、手冊、日語、行李與開銷等離線功能仍可正常使用。"
        : "👋 您好！我是您的 2026 九州行專屬 AI 隨身導遊兼自駕顧問。\n\n不論您想了解：\n1. 🚗 **阿蘇自駕加油、左駕如何防呆、過 ETC 詳情**\n2. 🏔️ **如何確認阿蘇火山管制（青/黃/紅燈）與備案**\n3. 🍣 **熊本拉麵黑亭、勝烈亭豬排如何排隊與點菜**\n4. 🛍️ **上下通藥妝必買推薦、Visit Japan Web 入境申請**\n\n我都非常樂意為您與長輩小輩詳細解答喔！您也可以直接點選下方的常問問題快速提問：",
      time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presetSuggestions = [
    "日本加油站要加什麼汽油？日文加油怎麼講？",
    "草千里或阿蘇火山口如果下雨大霧，有什麼附近備案？",
    "高千穗峽如果大雨，步道和神社怎麼取捨？",
    "車上喝完牛奶和吃完便當，該怎麼做日本垃圾分類？",
    "勝烈亭炸豬排新市街跟黑亭拉麵，有需要提前預約嗎？"
  ];

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    if (isStaticPage) {
      const staticMsg: ChatMessage = {
        id: "static-" + Date.now().toString(),
        role: "assistant",
        content: "靜態網頁版未串接 AI 後端，無法使用即時對話。請改用頁面中的行程、手冊、日語與行李/開銷功能。",
        time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, staticMsg]);
      setInputValue("");
      return;
    }

    const userMsg: ChatMessage = {
      id: "usr-" + Date.now().toString(),
      role: "user",
      content: textToSend,
      time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const historyContext = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyContext
        })
      });

      if (!res.ok) {
        throw new Error("HTTP 伺服器回傳異常，可能尚未設定 API Key");
      }

      const data = await res.json();
      
      const assistantMsg: ChatMessage = {
        id: "ast-" + Date.now().toString(),
        role: "assistant",
        content: data.text || "導遊一時失聯，請等一會再發送看看！",
        time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("Chat error:", err);
      const errMsg: ChatMessage = {
        id: "err-" + Date.now().toString(),
        role: "assistant",
        content: "🚨 訊號中斷囉！請確認您是否已在「Settings -> Secrets」中指配您的 `GEMINI_API_KEY` 環境變數。一旦設定完成，AI 隨身導遊便能順暢地為您答疑解難！不過，別擔心，您在此刻仍然可以完全正常使用所有的離線手冊功能與本地打包、花費追蹤工具喔！",
        time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChatHistory = () => {
    if (window.confirm("確定要清除所有對話紀錄嗎？")) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "對話紀錄已清除！有任何想問的日本、九州旅遊疑惑，請隨時送出訊息，導遊一直在這裡守候！",
          time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl overflow-hidden border border-slate-800 shadow-md flex flex-col h-[600px]">
      {/* Chat header */}
      <div className="bg-slate-950 p-4 px-6 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="w-10 h-10 rounded-full bg-indigo-950 text-indigo-100 flex items-center justify-center font-bold relative">
              🗻
            </span>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-indigo-400 border-2 border-slate-900 rounded-full"></span>
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-50 flex items-center gap-1.5">
              九州自駕 AI 口袋導遊
              <span className={`text-[9px] font-mono tracking-widest uppercase border px-1.5 py-0.5 rounded ${
                isStaticPage
                  ? "bg-amber-950/50 text-amber-300 border-amber-800/80"
                  : "bg-indigo-900/50 text-indigo-300 border-indigo-800/80"
              }`}>
                {isStaticPage ? "STATIC" : "ONLINE"}
              </span>
            </h4>
            <p className="text-[10px] text-slate-400">
              {isStaticPage ? "未串接，無法使用 AI 對話" : "長輩與小孩友善 ｜ 回答皆為繁體中文"}
            </p>
          </div>
        </div>

        <button 
          onClick={clearChatHistory}
          className="text-slate-450 hover:text-rose-400 text-xs flex items-center gap-1 h-8 px-2.5 rounded-lg border border-slate-800 hover:border-rose-950/40 transition-colors"
          title="清除對話歷史"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden sm:inline">重置</span>
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-900/90 flex flex-col">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
              m.role === "user"
                ? "bg-indigo-600 text-white self-end rounded-tr-none shadow-sm"
                : "bg-slate-820 text-slate-100 self-start rounded-tl-none border border-slate-800"
            }`}
          >
            <div className="font-bold text-[10px] uppercase tracking-wider opacity-60 mb-1 flex justify-between items-center gap-4 border-b border-white/5 pb-1">
              <span>{m.role === "user" ? "🙋 旅客提問" : "🏔️ 導遊回覆"}</span>
              <span className="font-mono text-[9px]">{m.time}</span>
            </div>
            <p className="whitespace-pre-wrap font-light">
              {m.content}
            </p>
          </div>
        ))}

        {isLoading && (
          <div className="bg-slate-820 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-4 text-xs sm:text-sm self-start max-w-[80%] flex items-center gap-3">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></span>
            <span className="text-xs text-slate-400 font-light ml-1">口袋導遊正在調閱阿蘇與高千穗地圖...</span>
          </div>
        )}

        <div ref={scrollRef}></div>
      </div>

      {/* Suggested chips list */}
      <div className="bg-slate-950 px-4 py-3 border-t border-slate-800/60 overflow-x-auto whitespace-nowrap flex gap-2">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center mr-1">
          💡 快捷提問:
        </span>
        {presetSuggestions.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(s)}
            disabled={isStaticPage}
            className="inline-block text-slate-350 hover:text-indigo-300 hover:border-indigo-900/50 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[11px] py-1.5 px-3 rounded-lg transition-all cursor-pointer select-none"
          >
            {s.substring(0, 22)}...
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="p-4 bg-slate-950 border-t border-slate-800 flex gap-3"
      >
        <input
          id="chat-user-message-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isStaticPage ? "靜態網頁版未串接，無法使用 AI 對話" : "向口袋導遊諮詢：如「幼童安全座椅高度要求、高千穗去熊本開多久」..."}
          disabled={isLoading || isStaticPage}
          className="flex-1 text-xs px-4 py-3 bg-slate-900 border border-slate-850 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-100 disabled:opacity-55"
        />
        <button
          id="chat-send-message-btn"
          type="submit"
          disabled={!inputValue.trim() || isLoading || isStaticPage}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white font-bold p-3 rounded-xl transition-all flex items-center justify-center shrink-0 disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
