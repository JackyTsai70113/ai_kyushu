export interface ScheduleItem {
  time: string;
  place: string;
  move: string;
  plan: string;
  memo: string;
  mapUrl?: string;
  category: "flight" | "car" | "nature" | "food" | "hotel" | "shop" | "rest";
}

export interface ItineraryDay {
  dayNum: number;
  date: string;
  weekday: string;
  title: string;
  subTitle: string;
  hotel: string;
  hotelUrl?: string;
  hotelImageUrl?: string;
  hotelImageSourceUrl?: string;
  hotelImageSourceName?: string;
  mainTheme: string;
  note: string;
  items: ScheduleItem[];
  tips?: string[];
  meals?: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  weatherForecast?: string;
  rainBackup?: string;
  gasStationTip?: string;
  advisory?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: "essential" | "electronics" | "clothing" | "pharmacy" | "child";
  checked: boolean;
}

export interface TravelNote {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface Phrase {
  japanese: string;
  romaji: string;
  meaning: string;
  category: "greeting" | "shopping" | "dining" | "emergency" | "transit";
}

export interface BudgetItem {
  id: string;
  title: string;
  amountYen: number;
  category: "food" | "rental" | "hotel" | "ticket" | "shopping" | "other";
  payer: string;
}
