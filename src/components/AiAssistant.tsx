import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, RefreshCw, Compass, AlertCircle, HelpCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

export default function AiAssistant() {
  const isAiChatConnected = false;
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "⚠️ AI 導遊目前未串接，無法使用。\n\n這個頁面部署在 GitHub Pages 靜態網站上，沒有後端服務可處理 `/api/gemini/chat`，所以聊天功能暫時關閉，避免誤以為是系統錯誤。\n\n其他行程、手冊、行李與開銷等前端功能仍可正常使用。",
      time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const presetSuggestions = [
    "日本加油站要加什麼汽油？日文加油怎麼講？",
    "草千里或阿蘇火山口如果下雨大霧，有什麼附近備案？",
    "高千穗划船預約注意事項？如果大雨停划有其他好玩的嗎？",
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
    if (!isAiChatConnected) {
      const offlineMsg: ChatMessage = {
        id: "offline-" + Date.now().toString(),
        role: "assistant",
        content: "AI 導遊目前未串接，無法使用。此靜態頁面沒有後端 API，請先使用行程、手冊、行李與開銷等功能。",
        time: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, offlineMsg]);
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
              <span className="text-[9px] bg-amber-950/80 text-amber-300 font-mono tracking-widest uppercase border border-amber-800/80 px-1.5 py-0.5 rounded">未串接</span>
            </h4>
            <p className="text-[10px] text-slate-400">GitHub Pages 靜態站無後端 API ｜ 聊天功能暫停</p>
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
        {!isAiChatConnected && (
          <div className="rounded-2xl border border-amber-800/60 bg-amber-950/30 text-amber-100 p-4 text-xs sm:text-sm leading-relaxed flex gap-3">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-300" />
            <div>
              <p className="font-bold">AI 導遊未串接，無法使用</p>
              <p className="text-amber-100/80 mt-1">目前是 GitHub Pages 靜態頁面，沒有後端可回應聊天 API。行程、手冊、行李與開銷功能仍可正常使用。</p>
            </div>
          </div>
        )}

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
            disabled={!isAiChatConnected}
            title="AI 導遊未串接，無法使用"
            className="inline-block text-slate-500 bg-slate-900 border border-slate-800 text-[11px] py-1.5 px-3 rounded-lg transition-all cursor-not-allowed select-none disabled:opacity-60"
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
          placeholder="AI 導遊未串接，無法使用；請使用上方行程、手冊、行李與開銷功能"
          disabled={isLoading || !isAiChatConnected}
          className="flex-1 text-xs px-4 py-3 bg-slate-900 border border-slate-850 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-100 disabled:opacity-55"
        />
        <button
          id="chat-send-message-btn"
          type="submit"
          disabled={!inputValue.trim() || isLoading || !isAiChatConnected}
          title="AI 導遊未串接，無法使用"
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white font-bold p-3 rounded-xl transition-all flex items-center justify-center shrink-0 disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
