import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChecklistItem, TravelNote, BudgetItem } from "../types";
import { INITIAL_CHECKLIST } from "../data";
import { 
  CheckSquare, 
  Square, 
  Plus, 
  Trash2, 
  FileText, 
  DollarSign, 
  Calculator, 
  CheckCircle, 
  Sparkles, 
  Briefcase,
  ChevronRight,
  AlertCircle
} from "lucide-react";

export default function InteractivePlanner() {
  const [plannerTab, setPlannerTab] = useState<"luggage" | "budget" | "notes">("luggage");

  // --- LUGGAGE STATE ---
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [newCheckItem, setNewCheckItem] = useState("");
  const [checkCategory, setCheckCategory] = useState<ChecklistItem["category"]>("essential");

  // --- BUDGET STATE ---
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [budgetTitle, setBudgetTitle] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetCategory, setBudgetCategory] = useState<BudgetItem["category"]>("food");
  const [budgetFilter, setBudgetFilter] = useState<string>("all");

  // --- NOTES STATE ---
  const [notes, setNotes] = useState<TravelNote[]>([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  // --- LOCAL STORAGE SYNC ---
  useEffect(() => {
    const savedChecklist = localStorage.getItem("kyushu_checklist");
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    } else {
      setChecklist(INITIAL_CHECKLIST);
    }

    const savedBudget = localStorage.getItem("kyushu_budget");
    if (savedBudget) {
      setBudgetItems(JSON.parse(savedBudget));
    } else {
      setBudgetItems([
        { id: "b1", title: "TOYOTA Rent a Car W3 等級自駕 6 天租車資", amountYen: 95000, category: "rental", payer: "共同公費" },
        { id: "b2", title: "CAN LI ASSO 7/4-7/6 連住 2 晚住宿費", amountYen: 54000, category: "hotel", payer: "共同公費" },
        { id: "b3", title: "鍋瀑布或菊池溪谷門票預備金", amountYen: 8000, category: "ticket", payer: "共同公費" }
      ]);
    }

    const savedNotes = localStorage.getItem("kyushu_notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    } else {
      setNotes([
        {
          id: "n1",
          title: "買藥妝推薦清單及優惠券",
          content: "1. 幫阿嬤買 EVE A 錠、武田合利他命 EX Plus。\n2. 幫小孩買曼秀雷敦小傷口防水液、兒童感冒糖漿。\n3. 大國藥妝有額外免稅 10% + 7% 優惠折價券，別忘了結帳時出示條碼！",
          createdAt: "2026/06/21"
        }
      ]);
    }
  }, []);

  const saveChecklistToStorage = (updated: ChecklistItem[]) => {
    setChecklist(updated);
    localStorage.setItem("kyushu_checklist", JSON.stringify(updated));
  };

  const saveBudgetToStorage = (updated: BudgetItem[]) => {
    setBudgetItems(updated);
    localStorage.setItem("kyushu_budget", JSON.stringify(updated));
  };

  const saveNotesToStorage = (updated: TravelNote[]) => {
    setNotes(updated);
    localStorage.setItem("kyushu_notes", JSON.stringify(updated));
  };

  // --- LUGGAGE HANDLERS ---
  const toggleCheckItem = (id: string) => {
    const updated = checklist.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveChecklistToStorage(updated);
  };

  const addCheckItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCheckItem.trim()) return;
    const newItem: ChecklistItem = {
      id: "chk-" + Date.now().toString(),
      text: newCheckItem.trim(),
      category: checkCategory,
      checked: false
    };
    saveChecklistToStorage([newItem, ...checklist]);
    setNewCheckItem("");
  };

  const deleteCheckItem = (id: string) => {
    const updated = checklist.filter((item) => item.id !== id);
    saveChecklistToStorage(updated);
  };

  const resetChecklist = () => {
    if (window.confirm("確定要重設行李清單回預設狀態嗎？這會清除您自行新增的項目。")) {
      saveChecklistToStorage(INITIAL_CHECKLIST);
    }
  };

  // --- BUDGET HANDLERS ---
  const addBudgetItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!budgetTitle.trim() || !budgetAmount.trim() || isNaN(Number(budgetAmount))) return;
    const newItem: BudgetItem = {
      id: "bud-" + Date.now().toString(),
      title: budgetTitle.trim(),
      amountYen: Math.abs(Math.round(Number(budgetAmount))),
      category: budgetCategory,
      payer: "公費"
    };
    saveBudgetToStorage([newItem, ...budgetItems]);
    setBudgetTitle("");
    setBudgetAmount("");
  };

  const deleteBudgetItem = (id: string) => {
    const updated = budgetItems.filter((item) => item.id !== id);
    saveBudgetToStorage(updated);
  };

  const totalBudget = budgetItems.reduce((acc, curr) => acc + curr.amountYen, 0);

  // --- NOTES HANDLERS ---
  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim()) return;

    if (editingNoteId) {
      const updated = notes.map((n) =>
        n.id === editingNoteId
          ? { ...n, title: noteTitle.trim(), content: noteContent.trim() }
          : n
      );
      saveNotesToStorage(updated);
      setEditingNoteId(null);
    } else {
      const newNote: TravelNote = {
        id: "note-" + Date.now().toString(),
        title: noteTitle.trim(),
        content: noteContent.trim(),
        createdAt: new Date().toLocaleDateString("zh-TW")
      };
      saveNotesToStorage([newNote, ...notes]);
    }
    setNoteTitle("");
    setNoteContent("");
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotesToStorage(updated);
  };

  const startEditNote = (note: TravelNote) => {
    setEditingNoteId(note.id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden">
      {/* Planner Tab list */}
      <div className="flex border-b border-slate-100 bg-slate-50/50">
        <button
          onClick={() => setPlannerTab("luggage")}
          className={`flex-1 text-center py-4 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-2 ${
            plannerTab === "luggage"
              ? "border-indigo-600 text-indigo-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Briefcase className="w-4 h-4" />
          行李打包清單 ({checklist.filter((c) => c.checked).length}/{checklist.length})
        </button>
        <button
          onClick={() => setPlannerTab("budget")}
          className={`flex-1 text-center py-4 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-2 ${
            plannerTab === "budget"
              ? "border-indigo-600 text-indigo-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Calculator className="w-4 h-4" />
          日圓開銷計算器 ({totalBudget.toLocaleString()} ¥)
        </button>
        <button
          onClick={() => setPlannerTab("notes")}
          className={`flex-1 text-center py-4 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-2 ${
            plannerTab === "notes"
              ? "border-indigo-600 text-indigo-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <FileText className="w-4 h-4" />
          隨手記事備忘 ({notes.length})
        </button>
      </div>

      <div className="p-6">
        {/* --- LUGGAGE CONTENT --- */}
        {plannerTab === "luggage" && (
          <div className="space-y-6">
            <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
              <div className="flex items-center gap-2 text-indigo-800">
                <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>
                  <strong>自駕取車提醒：</strong> 取車時攜帶台灣護照、台灣駕照正本與日文譯本即可。
                </span>
              </div>
              <button 
                onClick={resetChecklist}
                className="text-[11px] text-slate-500 hover:text-indigo-600 underline font-medium cursor-pointer"
              >
                重設為預設
              </button>
            </div>

            {/* Add Checklist Form */}
            <form onSubmit={addCheckItem} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <input
                id="add-checklist-input"
                type="text"
                placeholder="新增個人攜帶物品... (如: 小孩泳裝、阿嬤高血壓藥)"
                value={newCheckItem}
                onChange={(e) => setNewCheckItem(e.target.value)}
                className="sm:col-span-6 text-xs px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-650 bg-slate-50"
              />
              <select
                id="add-checklist-category"
                value={checkCategory}
                onChange={(e) => setCheckCategory(e.target.value as ChecklistItem["category"])}
                className="sm:col-span-4 text-xs px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-650 bg-slate-50"
              >
                <option value="essential">🪪 證件錢包重要物</option>
                <option value="electronics">🔌 電子通訊設備</option>
                <option value="clothing">👕 長幼穿搭服飾</option>
                <option value="pharmacy">💊 應急防蚊醫藥</option>
                <option value="child">🧸 兒童/生活日用品</option>
              </select>
              <button
                id="add-checklist-btn"
                type="submit"
                className="sm:col-span-2 text-xs bg-indigo-650 hover:bg-indigo-750 text-white font-bold rounded-xl py-2.5 px-4 flex items-center justify-center gap-1 transition-all"
              >
                <Plus className="w-4 h-4" />
                新增
              </button>
            </form>

            {/* Checklist Categorized Render */}
            <div className="space-y-6">
              {(["essential", "electronics", "clothing", "pharmacy", "child"] as Array<ChecklistItem["category"]>).map((cat) => {
                const items = checklist.filter((c) => c.category === cat);
                if (items.length === 0) return null;

                const catTitles: Record<string, string> = {
                  essential: "重要證件與身家錢包",
                  electronics: "通訊充電與各類電子",
                  clothing: "戶外登山與防風穿搭",
                  pharmacy: "隨車常備非處方醫藥",
                  child: "嬰幼生活貼心小備忘"
                };

                return (
                  <div key={cat} className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1 border-l-2 border-indigo-600">
                      {catTitles[cat] || cat}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer ${
                            item.checked
                              ? "bg-slate-50/70 text-slate-400 border-slate-100"
                              : "bg-white text-slate-700 border-slate-100 hover:border-slate-200"
                          }`}
                          onClick={() => toggleCheckItem(item.id)}
                        >
                          <div className="flex items-center gap-3 mr-3 select-none">
                            {item.checked ? (
                              <CheckSquare className="w-4 h-4 text-indigo-650 flex-shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />
                            )}
                            <span className={item.checked ? "line-through text-slate-400" : "font-medium"}>
                              {item.text}
                            </span>
                          </div>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteCheckItem(item.id);
                            }}
                            className="text-slate-300 hover:text-rose-600 p-1 rounded-md transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- BUDGET CONTENT --- */}
        {plannerTab === "budget" && (
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">旅行預估總花費 (日圓)</span>
                <div className="text-2xl md:text-3xl font-extrabold text-indigo-400 font-mono flex items-baseline gap-2">
                  <span>{totalBudget.toLocaleString()}</span>
                  <span className="text-xs text-white/70">日圓 (¥)</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 bg-slate-800 py-3 px-4 rounded-xl border border-slate-700 text-left leading-relaxed">
                台幣概算：約 <span className="text-white font-mono font-bold">{(totalBudget * 0.21).toLocaleString(undefined, {maximumFractionDigits: 0})}</span> 元 (匯率折算按 0.21)
                <br />
                <span className="text-[11px] text-slate-500">（此為本次行程預估公費與支出總計）</span>
              </div>
            </div>

            {/* Add Budget Entry Form */}
            <form onSubmit={addBudgetItem} className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/50">
              <div className="sm:col-span-5 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 block">消費名目 / 項目</label>
                <input
                  id="add-budget-title"
                  type="text"
                  placeholder="例如: 勝烈亭豬排全家晚餐、ETC 高速費..."
                  value={budgetTitle}
                  onChange={(e) => setBudgetTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none"
                />
              </div>
              <div className="sm:col-span-3 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 block">日圓金額 (¥)</label>
                <input
                  id="add-budget-amount"
                  type="number"
                  placeholder="日圓數..."
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none font-mono"
                />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[11px] font-bold text-slate-500 block">類別</label>
                <select
                  id="add-budget-category"
                  value={budgetCategory}
                  onChange={(e) => setBudgetCategory(e.target.value as BudgetItem["category"])}
                  className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none"
                >
                  <option value="food">🍣 飲食品嚐</option>
                  <option value="rental">🚗 自駕租車</option>
                  <option value="hotel">🏨 溫泉飯店</option>
                  <option value="ticket">🎟️ 門票預約</option>
                  <option value="shopping">🛍️ 伴手藥妝</option>
                  <option value="other">📌 雜費其他</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex items-end">
                <button
                  id="add-budget-btn"
                  type="submit"
                  className="w-full text-xs bg-indigo-650 hover:bg-indigo-750 text-white font-bold rounded-xl py-2.5 px-4 flex items-center justify-center gap-1 transition-all shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  新增
                </button>
              </div>
            </form>

            {/* List Budget Items */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                開銷流水明細列表
              </h4>
              <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100 overflow-hidden">
                {budgetItems.length === 0 ? (
                  <div className="p-12 text-center text-slate-400 text-xs">
                    沒有任何消費記錄。請在上面新增一筆。
                  </div>
                ) : (
                  budgetItems.map((item) => {
                    const catIcons: Record<string, string> = {
                      food: "🍣",
                      rental: "🚗",
                      hotel: "🏨",
                      ticket: "🎟️",
                      shopping: "🛍️",
                      other: "📌"
                    };
                    return (
                      <div key={item.id} className="p-4 flex items-center justify-between text-xs hover:bg-slate-50/50 transition-all">
                        <div className="flex items-center gap-3">
                          <span className="text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            {catIcons[item.category] || "📌"}
                          </span>
                          <div>
                            <p className="font-bold text-slate-800">{item.title}</p>
                            <span className="text-[10px] text-slate-400 capitalize tracking-wider font-mono">
                              {item.category} • {item.payer}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-bold text-slate-900 font-mono text-right shrink-0">
                            {item.amountYen.toLocaleString()} ¥
                          </span>
                          <button
                            onClick={() => deleteBudgetItem(item.id)}
                            className="text-slate-300 hover:text-rose-600 p-1.5 rounded-lg transition-colors border border-transparent hover:border-slate-100"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- NOTES CONTENT --- */}
        {plannerTab === "notes" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Note Create/Edit Form */}
              <form onSubmit={handleSaveNote} className="lg:col-span-5 space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/50">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5 uppercase">
                  <span>✏️</span> {editingNoteId ? "編輯此篇備忘記事" : "撰寫全新隨行備忘"}
                </h4>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-450 block">標題</label>
                  <input
                    id="add-note-title"
                    type="text"
                    required
                    placeholder="例如: 日本插座/電壓備註"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-450 block">詳細記事內容</label>
                  <textarea
                    id="add-note-content"
                    rows={6}
                    placeholder="長幼出遊，將一些必備用品（例如特定牌子的奶粉）、藥妝折算筆記或是分房安排寫在此處，會自動為您離線儲存！"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    className="w-full text-xs p-3 border border-slate-200 rounded-xl bg-white focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    id="save-note-btn"
                    type="submit"
                    className="flex-1 text-xs bg-indigo-650 hover:bg-indigo-750 text-white font-bold rounded-xl py-2.5 transition-all text-center"
                  >
                    儲存記事
                  </button>
                  {editingNoteId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingNoteId(null);
                        setNoteTitle("");
                        setNoteContent("");
                      }}
                      className="text-xs bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold rounded-xl py-2.5 px-4 transition-all"
                    >
                      取消
                    </button>
                  )}
                </div>
              </form>

              {/* Note List */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">
                  已儲存備忘筆記 ({notes.length} 篇)
                </h4>

                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {notes.length === 0 ? (
                    <div className="p-12 text-center text-slate-400 text-xs bg-slate-50/55 border border-dashed rounded-2xl">
                      沒有任何記事筆記。請在左側表單中建立。
                    </div>
                  ) : (
                    notes.map((note) => (
                      <div key={note.id} className="p-4 bg-white rounded-xl border border-slate-100 hover:border-emerald-200 transition-all space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm">{note.title}</h5>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] text-slate-400 font-mono">{note.createdAt}</span>
                            <button
                              onClick={() => startEditNote(note)}
                              className="text-[11px] text-emerald-800 hover:underline ml-2"
                            >
                              編輯
                            </button>
                            <button
                              onClick={() => deleteNote(note.id)}
                              className="text-slate-300 hover:text-rose-600 p-1 rounded-lg"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed border-t border-slate-50 pt-2 font-light">
                          {note.content}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
