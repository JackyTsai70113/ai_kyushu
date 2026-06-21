import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Lazy initialize Gemini client to ensure it doesn't crash on startup if GEMINI_API_KEY is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

app.use(express.json());

// API route first
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "訊息不能為空喔！" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({ 
        text: "【AI 隨身導遊未啟用】\n親愛的旅客，偵測到您尚未設定 `GEMINI_API_KEY`（金鑰環境變數）。\n請在右上方設定的 Secrets 面板中，新增名稱為 `GEMINI_API_KEY` 且值為您的 API Key，即可啟用 AI 隨行導遊喔！\n\n不過別擔心！您仍可以直接查看由精美 UI 呈現的所有詳細行程、日本自駕交通規則、補給血拼攻略、實用日語與行李清單，並完全離線使用自帶的備忘錄與計算器功能。" 
      });
    }

    const ai = getGeminiClient();

    // Guidance prompt
    const systemInstruction = 
      "你是一位非常有經驗、溫暖、幽默且細心的「日本九州自駕旅遊導遊與在地專家」。\n" +
      "這次你正在帶領一組包含了「六大一小（有長輩、有幼童）」的家庭自駕旅行團，期間為 2026/07/04 至 2026/07/09（共 6 天 5 夜）。\n" +
      "回答規範：\n" +
      "1. 請始終使用「繁體中文（台灣習慣用語）」回覆。\n" +
      "2. 語氣要溫暖、貼心、有耐心，多替長輩和小孩的體力與舒適度設想。\n" +
      "3. 回答要有結構，可運用 Bullet points (列點式)，內容要精準實用，拒絕空泛的敷衍。\n" +
      "4. 對於自駕守則、日本加油、垃圾分類、餐飲預約（勝烈亭豬排、拉麵黑亭、高千穗划船），給出非常專業在地的攻略與提醒。\n" +
      "5. 在適當的時候，融入他們原定的景點（白川水源、阿蘇草千里、大觀峰、鍋瀑布、瀨之本高原、高千穗峽划船/小火車、水前寺成趣園、熊本城、櫻之馬場城彩苑、上下通商圈）以提升真實感及融入感。";

    let promptContext = "";
    if (history && Array.isArray(history) && history.length > 0) {
      promptContext += "=== 稍早對話歷史 ===\n";
      history.slice(-6).forEach((h: any) => {
        const roleLabel = h.role === "user" ? "旅客" : "導遊";
        promptContext += `【${roleLabel}】：${h.content}\n`;
      });
      promptContext += "==================\n\n";
    }

    promptContext += `【最新提問】：${message}\n\n`;
    promptContext += "請根據最新提問給予回答。記得體現你熱心卓越的導遊風範！";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptContext,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text || "導遊好像在看阿蘇火山發呆，請再發送一次訊息！" });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "導遊通訊系統發生異常，請確認設定或網路。" });
  }
});

// Mount Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}...`);
    console.log(`Live preview routes available.`);
  });
}

startServer();
