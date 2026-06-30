import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  Copy,
  GraduationCap,
  Library,
  MessageSquareText,
  Search,
  Smartphone,
  Sparkles,
  Volume2,
} from "lucide-react";

import guide00 from "../../docs/japanese/kumamoto-trip-japanese/00_使用方式與熟練計畫.md?raw";
import guide01 from "../../docs/japanese/kumamoto-trip-japanese/01_熊本旅行生存句.md?raw";
import guide02 from "../../docs/japanese/kumamoto-trip-japanese/02_交通與問路.md?raw";
import guide03 from "../../docs/japanese/kumamoto-trip-japanese/03_餐廳咖啡與熊本美食.md?raw";
import guide04 from "../../docs/japanese/kumamoto-trip-japanese/04_旅館溫泉與寄放行李.md?raw";
import guide05 from "../../docs/japanese/kumamoto-trip-japanese/05_景點拍照購物與伴手禮.md?raw";
import guide06 from "../../docs/japanese/kumamoto-trip-japanese/06_突發狀況與求助.md?raw";
import guide07 from "../../docs/japanese/kumamoto-trip-japanese/07_測驗與角色扮演腳本.md?raw";
import guide08 from "../../docs/japanese/kumamoto-trip-japanese/08_每日口說打卡表.md?raw";
import guide09 from "../../docs/japanese/kumamoto-trip-japanese/09_手機急救小抄.md?raw";
import guide10 from "../../docs/japanese/kumamoto-trip-japanese/10_不熟單字本.md?raw";
import guide11 from "../../docs/japanese/kumamoto-trip-japanese/11_餐廳食材餐點與方便素幼兒.md?raw";
import ankiCore from "../../docs/japanese/kumamoto-trip-japanese/anki_kumamoto_core.tsv?raw";

type StudyDoc = {
  id: string;
  title: string;
  shortTitle: string;
  raw: string;
  group: "guide" | "field" | "practice" | "quick";
};

type ParsedBlock = {
  id: string;
  lead: string;
  details: string[];
  speakText?: string;
  searchText: string;
};

type ParsedSection = {
  id: string;
  title: string;
  blocks: ParsedBlock[];
  body: string[];
};

type ParsedDoc = StudyDoc & {
  sections: ParsedSection[];
  phraseCount: number;
};

type CorePhrase = {
  zh: string;
  ja: string;
  hint: string;
};

const STUDY_DOCS: StudyDoc[] = [
  { id: "plan", title: "熊本行日文學習包：使用方式與熟練計畫", shortTitle: "使用方式", raw: guide00, group: "guide" },
  { id: "survival", title: "熊本旅行生存句", shortTitle: "生存句", raw: guide01, group: "field" },
  { id: "transit", title: "交通與問路", shortTitle: "交通問路", raw: guide02, group: "field" },
  { id: "dining", title: "餐廳咖啡與熊本美食", shortTitle: "餐廳咖啡", raw: guide03, group: "field" },
  { id: "meals", title: "餐廳食材餐點與方便素・幼兒對照", shortTitle: "餐廳食材", raw: guide11, group: "field" },
  { id: "hotel", title: "旅館溫泉與寄放行李", shortTitle: "旅館溫泉", raw: guide04, group: "field" },
  { id: "shopping", title: "景點拍照購物與伴手禮", shortTitle: "景點購物", raw: guide05, group: "field" },
  { id: "emergency", title: "突發狀況與求助", shortTitle: "突發求助", raw: guide06, group: "field" },
  { id: "roleplay", title: "測驗與角色扮演腳本", shortTitle: "測驗腳本", raw: guide07, group: "practice" },
  { id: "daily", title: "每日口說打卡表", shortTitle: "每日打卡", raw: guide08, group: "practice" },
  { id: "phone", title: "熊本旅行手機急救小抄", shortTitle: "手機小抄", raw: guide09, group: "quick" },
  { id: "words", title: "不熟單字本", shortTitle: "單字本", raw: guide10, group: "practice" },
];

const GROUP_LABELS = {
  all: "全部",
  core: "核心句",
  field: "旅行現場",
  quick: "手機急救",
  practice: "練習複習",
  guide: "使用方式",
};

const hasJapaneseKana = (value: string) => /[\u3040-\u30ff]/.test(value);

const normalizeLine = (line: string) => line.trim().replace(/\s+/g, " ");

const pickSpeakText = (lead: string, details: string[]) => {
  const candidates = [...details, lead];
  return candidates.find((candidate) => hasJapaneseKana(candidate));
};

const parseNumberedMarkdown = (raw: string, docId: string): ParsedSection[] => {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const sections: ParsedSection[] = [];
  let current: ParsedSection | null = null;
  let currentBlock: ParsedBlock | null = null;

  const closeBlock = () => {
    if (!current || !currentBlock) return;
    currentBlock.searchText = [currentBlock.lead, ...currentBlock.details].join(" ");
    current.blocks.push(currentBlock);
    currentBlock = null;
  };

  const ensureSection = (title = "內容") => {
    if (!current) {
      current = { id: `${docId}-intro`, title, blocks: [], body: [] };
      sections.push(current);
    }
    return current;
  };

  lines.forEach((rawLine, lineIndex) => {
    const line = rawLine.trimEnd();
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      closeBlock();
      current = {
        id: `${docId}-${sections.length}-${lineIndex}`,
        title: h2[1].trim(),
        blocks: [],
        body: [],
      };
      sections.push(current);
      return;
    }

    if (/^#\s+/.test(line) || line.trim() === "") {
      closeBlock();
      return;
    }

    const numbered = line.match(/^\s*(\d+)\.\s+(.+)$/);
    if (numbered) {
      closeBlock();
      const lead = normalizeLine(numbered[2]);
      currentBlock = {
        id: `${docId}-${lineIndex}`,
        lead,
        details: [],
        speakText: undefined,
        searchText: lead,
      };
      ensureSection();
      return;
    }

    const tableLine = line.trim().startsWith("|") ? line.trim() : null;
    if (tableLine) {
      closeBlock();
      ensureSection().body.push(tableLine);
      return;
    }

    if (currentBlock) {
      const detail = normalizeLine(line);
      if (detail) currentBlock.details.push(detail);
      currentBlock.speakText = pickSpeakText(currentBlock.lead, currentBlock.details);
      return;
    }

    ensureSection().body.push(normalizeLine(line));
  });

  closeBlock();
  return sections.map((section) => ({
    ...section,
    blocks: section.blocks.map((block) => ({
      ...block,
      speakText: block.speakText || pickSpeakText(block.lead, block.details),
    })),
  }));
};

const parseDocs = (): ParsedDoc[] =>
  STUDY_DOCS.map((doc) => {
    const title = doc.raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || doc.title;
    const sections = parseNumberedMarkdown(doc.raw, doc.id);
    return {
      ...doc,
      title,
      sections,
      phraseCount: sections.reduce((sum, section) => sum + section.blocks.length, 0),
    };
  });

const parseCorePhrases = (raw: string): CorePhrase[] =>
  raw
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => {
      const [zh, ja, hint] = line.split("\t");
      return { zh, ja, hint };
    })
    .filter((item) => item.zh && item.ja);

type JapanesePhrasesProps = {
  initialSearchQuery?: string;
};

export default function JapanesePhrases({ initialSearchQuery = "" }: JapanesePhrasesProps) {
  const [activeGroup, setActiveGroup] = useState<keyof typeof GROUP_LABELS>("core");
  const [activeDocId, setActiveDocId] = useState("phone");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isPlayingId, setIsPlayingId] = useState<string | null>(null);

  const parsedDocs = useMemo(parseDocs, []);
  const corePhrases = useMemo(() => parseCorePhrases(ankiCore), []);

  useEffect(() => {
    if (!initialSearchQuery) return;
    setActiveGroup("field");
    setActiveDocId("dining");
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  const activeDoc = parsedDocs.find((doc) => doc.id === activeDocId) || parsedDocs[0];
  const totalPhraseCount = parsedDocs.reduce((sum, doc) => sum + doc.phraseCount, 0) + corePhrases.length;

  const visibleDocs = parsedDocs.filter((doc) => {
    if (activeGroup === "all") return true;
    if (activeGroup === "core") return false;
    return doc.group === activeGroup;
  });

  const search = searchQuery.trim().toLowerCase();
  const filteredSections = activeDoc.sections
    .map((section) => ({
      ...section,
      blocks: search
        ? section.blocks.filter((block) => `${section.title} ${block.searchText}`.toLowerCase().includes(search))
        : section.blocks,
      body: search ? section.body.filter((line) => `${section.title} ${line}`.toLowerCase().includes(search)) : section.body,
    }))
    .filter((section) => !search || section.blocks.length > 0 || section.body.length > 0);

  const filteredCorePhrases = corePhrases.filter((phrase) => {
    if (!search) return true;
    return `${phrase.zh} ${phrase.ja} ${phrase.hint}`.toLowerCase().includes(search);
  });

  // Global search: when a query is typed, surface matches across EVERY document and
  // the core phrases at once, so any 中文 or 日文 word can be looked up and used on the
  // spot — no need to first guess which tab the phrase lives in.
  const globalDocMatches = useMemo(() => {
    if (!search) return [] as Array<{ doc: ParsedDoc; section: ParsedSection; block: ParsedBlock }>;
    const matches: Array<{ doc: ParsedDoc; section: ParsedSection; block: ParsedBlock }> = [];
    parsedDocs.forEach((doc) => {
      doc.sections.forEach((section) => {
        section.blocks.forEach((block) => {
          if (`${doc.title} ${section.title} ${block.searchText}`.toLowerCase().includes(search)) {
            matches.push({ doc, section, block });
          }
        });
      });
    });
    return matches;
  }, [search, parsedDocs]);

  const globalCoreMatches = search ? filteredCorePhrases : [];
  const globalMatchCount = globalDocMatches.length + globalCoreMatches.length;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const handleSpeakJapanese = (japaneseText: string, id: string) => {
    if (!window.speechSynthesis) {
      alert("此瀏覽器不支援發音合成，請直接參考日文與讀音。");
      return;
    }

    window.speechSynthesis.cancel();
    setIsPlayingId(id);

    const utterance = new SpeechSynthesisUtterance(japaneseText);
    utterance.lang = "ja-JP";
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlayingId(null);
    utterance.onerror = () => setIsPlayingId(null);
    window.speechSynthesis.speak(utterance);
  };

  const renderActionButtons = (text: string, speakText: string | undefined, id: string) => (
    <div className="flex shrink-0 gap-2">
      {speakText && (
        <button
          onClick={() => handleSpeakJapanese(speakText, id)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
            isPlayingId === id
              ? "border-rose-200 bg-rose-50 text-rose-700"
              : "border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
          }`}
          title="播放日文發音"
        >
          <Volume2 className="h-4 w-4" />
        </button>
      )}
      <button
        onClick={() => handleCopy(text)}
        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
          copiedText === text
            ? "border-slate-300 bg-slate-100 text-indigo-700"
            : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100"
        }`}
        title="複製文字"
      >
        {copiedText === text ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <span className="shrink-0 rounded-xl bg-white p-3 text-indigo-700 shadow-xs">
              <Library className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">隨行自駕日語聽診</h4>
              <p className="max-w-3xl text-xs leading-relaxed text-slate-600">
                已整合 docs/japanese/kumamoto-trip-japanese 的完整學習包，包含核心句、交通問路、租車還車、餐廳咖啡、餐廳食材與方便素／幼兒對照、旅館溫泉、景點購物、突發求助、角色扮演、每日打卡、手機急救小抄與不熟單字本。上方搜尋框可用中文或日文全文搜尋所有文件，當下立即查用。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl border border-indigo-100 bg-white px-3 py-2">
              <div className="font-mono text-base font-black text-indigo-700">{parsedDocs.length}</div>
              <div className="text-slate-500">文件</div>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white px-3 py-2">
              <div className="font-mono text-base font-black text-indigo-700">{totalPhraseCount}</div>
              <div className="text-slate-500">句卡</div>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-white px-3 py-2">
              <div className="font-mono text-base font-black text-indigo-700">TTS</div>
              <div className="text-slate-500">發音</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUP_LABELS).map(([value, label]) => (
            <button
              key={value}
              onClick={() => {
                const group = value as keyof typeof GROUP_LABELS;
                setActiveGroup(group);
                if (group === "core") return;
                const firstDoc = parsedDocs.find((doc) => group === "all" || doc.group === group);
                if (firstDoc) setActiveDocId(firstDoc.id);
              }}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                activeGroup === value
                  ? "border border-indigo-600 bg-indigo-600 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <label className="relative block w-full lg:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="搜尋中文或日文（赤牛丼／あか牛）"
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>

      {!search && activeGroup !== "core" && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {visibleDocs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveDocId(doc.id)}
              className={`shrink-0 rounded-xl px-3.5 py-2 text-left text-xs font-bold transition-all ${
                activeDocId === doc.id
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {doc.shortTitle}
              <span className={`ml-2 font-mono text-[10px] ${activeDocId === doc.id ? "text-indigo-200" : "text-slate-400"}`}>
                {doc.phraseCount}
              </span>
            </button>
          ))}
        </div>
      )}

      {search ? (
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">全文搜尋（所有文件＋核心句）</div>
              <h3 className="text-lg font-black text-slate-900">「{searchQuery.trim()}」</h3>
            </div>
            <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">{globalMatchCount} 句</div>
          </div>

          {globalMatchCount === 0 && (
            <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center text-sm text-slate-400">
              找不到「{searchQuery.trim()}」。可改用中文（赤牛丼、加油、退房、火山口）或日文（あか牛、満タン、チェックアウト）關鍵字。
            </div>
          )}

          {globalCoreMatches.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">核心句</div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {globalCoreMatches.map((phrase, index) => {
                  const copyText = `${phrase.zh}\n${phrase.ja}\n${phrase.hint}`;
                  const id = `search-core-${index}`;
                  return (
                    <div key={id} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 space-y-2">
                          <div className="text-xs font-bold text-slate-500">{phrase.zh}</div>
                          <div className="text-base font-bold leading-relaxed text-slate-950">{phrase.ja}</div>
                          <div className="font-mono text-xs text-slate-400">{phrase.hint}</div>
                        </div>
                        {renderActionButtons(copyText, phrase.ja, id)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {globalDocMatches.length > 0 && (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {globalDocMatches.map(({ doc, section, block }) => {
                const copyText = [block.lead, ...block.details].join("\n");
                return (
                  <div key={`search-${block.id}`} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="shrink-0 rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700">{doc.shortTitle}</span>
                      <span className="truncate text-[10px] text-slate-400">{section.title}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 space-y-2">
                        <div className="text-xs font-bold leading-relaxed text-slate-700">{block.lead}</div>
                        {block.details.map((detail, detailIndex) => (
                          <div
                            key={`search-${block.id}-${detailIndex}`}
                            className={
                              detailIndex === 0 && hasJapaneseKana(detail)
                                ? "text-base font-bold leading-relaxed text-slate-950"
                                : "text-xs leading-relaxed text-slate-500"
                            }
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                      {renderActionButtons(copyText, block.speakText, block.id)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : activeGroup === "core" ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filteredCorePhrases.map((phrase, index) => {
            const copyText = `${phrase.zh}\n${phrase.ja}\n${phrase.hint}`;
            const id = `core-${index}`;
            return (
              <div key={id} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 space-y-2">
                    <div className="text-xs font-bold text-slate-500">{phrase.zh}</div>
                    <div className="text-base font-bold leading-relaxed text-slate-950">{phrase.ja}</div>
                    <div className="font-mono text-xs text-slate-400">{phrase.hint}</div>
                  </div>
                  {renderActionButtons(copyText, phrase.ja, id)}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">完整章節</div>
                  <h3 className="text-lg font-black text-slate-900">{activeDoc.title}</h3>
                </div>
                <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-bold text-slate-500">
                  {activeDoc.phraseCount} 個條目
                </div>
              </div>
            </div>

            {filteredSections.map((section) => (
              <section key={section.id} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  <h4 className="text-sm font-black text-slate-800">{section.title}</h4>
                </div>

                {section.body.length > 0 && (
                  <div className="mb-4 space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4 text-xs leading-relaxed text-slate-600">
                    {section.body.map((line, index) => (
                      <p key={`${section.id}-body-${index}`} className={line.startsWith("|") ? "font-mono text-[11px]" : ""}>
                        {line.replaceAll("|", " | ")}
                      </p>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {section.blocks.map((block) => {
                    const copyText = [block.lead, ...block.details].join("\n");
                    return (
                      <div key={block.id} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 space-y-2">
                            <div className="text-xs font-bold leading-relaxed text-slate-700">{block.lead}</div>
                            {block.details.map((detail, detailIndex) => (
                              <div
                                key={`${block.id}-${detailIndex}`}
                                className={
                                  detailIndex === 0 && hasJapaneseKana(detail)
                                    ? "text-base font-bold leading-relaxed text-slate-950"
                                    : "text-xs leading-relaxed text-slate-500"
                                }
                              >
                                {detail}
                              </div>
                            ))}
                          </div>
                          {renderActionButtons(copyText, block.speakText, block.id)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4 text-xs text-amber-900">
              <div className="mb-2 flex items-center gap-2 font-black">
                <Smartphone className="h-4 w-4" />
                現場急用順序
              </div>
              <p className="leading-relaxed">
                旅行現場先用「手機小抄」，再依情境切到交通、餐廳、旅館或突發求助。卡住時先說 すみません、もう一度お願いします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xs">
              <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-800">
                <MessageSquareText className="h-4 w-4 text-indigo-600" />
                快速入口
              </div>
              <div className="space-y-2">
                {parsedDocs
                  .filter((doc) => ["phone", "survival", "transit", "dining", "meals", "hotel", "emergency"].includes(doc.id))
                  .map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setActiveGroup(doc.group);
                        setActiveDocId(doc.id);
                      }}
                      className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-left text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {doc.shortTitle}
                      <span className="font-mono text-[10px] text-slate-400">{doc.phraseCount}</span>
                    </button>
                  ))}
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-xs text-indigo-950">
              <div className="mb-2 flex items-center gap-2 font-black">
                <GraduationCap className="h-4 w-4" />
                練習檢核
              </div>
              <p className="leading-relaxed">
                每天 20 分鐘：唸 20 句、錄音 1 次、遮住答案測 10 句。出發前至少完成角色扮演 5 回合。
              </p>
            </div>
          </aside>
        </div>
      )}

      <div className="rounded-xl border border-slate-100 bg-white p-4 text-xs text-slate-600">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <p className="leading-relaxed">
            發音按鈕使用瀏覽器內建日語 TTS；複製按鈕會複製目前卡片的中文、日文與讀音。若現場聽不懂，優先使用「請再說一次」「請慢一點」「可以寫在這裡嗎」三句。
          </p>
        </div>
      </div>
    </div>
  );
}
