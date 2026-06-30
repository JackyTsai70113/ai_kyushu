import { ItineraryDay, Phrase, ChecklistItem } from "./types";

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    dayNum: 1,
    date: "2026/07/04",
    weekday: "六",
    title: "抵達熊本、MERUKORO 買麵包、草千里午餐、入住 CAN LI ASSO",
    subTitle: "熊本機場下飛機開始，先買 MERUKORO，再到草千里 Green Park 午餐後回別墅（砂千里之濱 2026/7 封閉、不安排）",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "熊本機場 ｜ 手作烘焙 ｜ 草千里 Green Park 午餐 ｜ 包棟自炊",
    note: "住：南阿蘇 CAN LI ASSO。第一天從熊本機場下飛機開始，取車後先到 MERUKORO PAN-KOUBOU 買麵包，再上草千里 Green Park 吃中餐，最後高森補給與入住。砂千里之濱因 2026/7 火山警戒與緊急工事封閉，本趟不安排（詳見當天底部備註）。",
    advisory: "🌋 火山：2026/06/21 阿蘇噴火警戒升至 Lv.2（火口周辺規制）。砂千里ヶ浜因緊急工事 2026/06/15–07/31 立入禁止，本趟（7/4）無法進入，已從行程移除。草千里 Green Park 在管制圈外、照常開放，為本日午餐與展望主點。\n🌧️ 天候：7 月為梅雨末期、雨量大、山區易起霧；草千里濃霧或大雨時展望受限，改以室內午餐與休息為主。出發當天請再查 aso-volcano.jp（火山即時）與 tenki.jp／weathernews（兩週天氣）。",
    meals: {
      breakfast: "桃園機場簡單早餐或星宇航空機上早餐",
      lunch: "草千里 Green Park / CAFE & SHOP GRASS LAND：買完 MERUKORO PAN-KOUBOU 麵包後上山吃午餐與休息",
      dinner: "高森／南阿蘇採買：Frein 超市、丸福蔬果攤、南阿蘇迷你超市，或山麓キッチン燒肉外食後回 CAN LI ASSO"
    },
    weatherForecast: "熊本平地高溫約 28°C~31°C 稍感悶熱；往阿蘇山區前行後，氣溫會平緩降至舒服的 21°C~25°C。午後多雲偶晴，山頂周遭略有短暫偶雨機率，建議帶防曬帽與防風薄外衣。【景觀提醒】7 月為九州梅雨末期、月雨量約 400mm、山區易起霧；草千里展望在濃霧或大雨時景色會大打折扣，可彈性縮短改室內午餐與休息。",
    rainBackup: "草千里若大雨或濃霧，午餐仍可在草千里 Green Park / CAFE & SHOP GRASS LAND 室內解決。MERUKORO 只買重點麵包，改以 Frein 超市與南阿蘇迷你超市補給為主，提早回 CAN LI ASSO 休息。（砂千里之濱本趟封閉、已不安排。）",
    gasStationTip: "熊本機場取車時 Toyota 租車已提供滿油狀態；第一天新增草千里上山路段，總車程變長但仍通常不需加油。若遇緊急狀況，阿蘇地區周邊即有【ENEOS 南阿蘇店】加油站。",
    items: [
      {
        time: "07:30 - 10:45",
        place: "熊本機場下飛機（星宇 JX846 抵達）",
        move: "桃園一航廈至熊本機場",
        plan: "依航班資訊：07:30 星宇桃機一航廈，10:45 熊本機場。請提早填妥 Visit Japan Web 方便流暢通關。",
        memo: "航班代號: EFGJC9。享用精緻機上早餐、預備好入境查驗與兒童護照。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%86%8A%E6%9C%AC%E7%A9%BA%E6%B8%AF%20Kumamoto%20Airport",
        category: "flight",
      },
      {
        time: "10:45 - 12:45",
        place: "熊本機場 & TOYOTA 租車 (Toyota Rent-A-Car)",
        move: "入境、免費接駁、拿車",
        plan: "領行李、取 TOYOTA Rent a Car W3 等級車、裝行李、確認幼童安全座椅、ETC 卡與導航設定及右駕防呆說明。取車後先往 MERUKORO PAN-KOUBOU 買麵包，再上草千里 Green Park 吃中餐。",
        memo: "停車/導航：Toyota 熊本機場店。行李只放 1 台嬰兒車、3 個 29 寸大行李箱與 1 個大型手提旅行包；不要帶登機箱或其他行李箱，避免後車廂放不下。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Toyota%20Rent%20a%20Car%20Kumamoto%20Airport",
        category: "car",
      },
      {
        time: "12:45 - 13:30",
        place: "熊本機場 → MERUKORO PAN-KOUBOU",
        move: "自駕約 35-45 分鐘",
        plan: "取車後先往南阿蘇方向，到 MERUKORO PAN-KOUBOU 買麵包與車上點心，補隔天早餐也最順。",
        memo: "第一天剛右駕上路，先走相對好掌握的南阿蘇生活圈。若取車延誤超過 30 分鐘，MERUKORO 只買重點品項，避免草千里午餐太晚。",
        category: "car",
      },
      {
        time: "13:30 - 14:00",
        place: "MERUKORO PAN-KOUBOU 買麵包",
        move: "車停店前、進店採買",
        plan: "採買現烘麵包、熱美式、車上點心與隔天早餐。這站先買，後面就不用從草千里再下山折返。",
        memo: "停車：MERUKORO 店旁/店前專用停車場。高人氣優先點餐指引｜不限飲食：1. 可頌或奶油丹麥；2. 鮮乳夾心包；3. 無花果核桃歐包。無肉塊：原味、果乾、堅果或起司麵包；避開整片火腿、培根、明太子等明顯肉魚餡。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MERUKORO%20PAN-KOUBOU%20%E5%8D%97%E9%98%BF%E8%98%87",
        category: "food",
      },
      {
        time: "14:00 - 14:55",
        place: "MERUKORO PAN-KOUBOU → 草千里 Green Park",
        move: "自駕約 45-55 分鐘，含上山路段",
        plan: "買完麵包後上山到草千里 Green Park。這段開始進入阿蘇山上道路，慢開並注意長輩與小孩暈車狀況。",
        memo: "若草千里霧大或雨大，仍以 Green Park 室內午餐與上廁所為主，不硬安排戶外散步。",
        category: "car",
      },
      {
        time: "14:55 - 15:45",
        place: "草千里 Green Park / CAFE & SHOP GRASS LAND 午餐",
        move: "草千里停車場旁用餐與休息",
        plan: "第一天中餐改為買完 MERUKORO 麵包後，到草千里 Green Park / CAFE & SHOP GRASS LAND 吃午餐。用餐、上廁所、讓長輩與小孩下車放鬆，視天候簡短看草千里景色。",
        memo: "停車：草千里付費大停車場。高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛丼；2. 赤牛咖哩；3. 阿蘇牛奶霜淇淋。無肉塊：高菜飯、白飯、沙拉或麵包類；咖哩醬可接受肉湯，若有肉塊挑開。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%8D%89%E5%8D%83%E9%87%8C%20Green%20Park",
        category: "food",
      },
      {
        time: "16:45 - 17:20",
        place: "Frein 超市 / 丸福 高森店 / 南阿蘇迷你超市",
        move: "草千里下山後往高森周邊採買",
        plan: "改在住宿順路的高森與南阿蘇生活圈採買晚餐、隔天早餐、水、牛奶、水果與零食。Frein 超市營業至 22:00，南阿蘇迷你超市至 20:00，可作為備援。",
        memo: "停車：各店自有停車場。重點是買完直接回 CAN LI ASSO，不再繞去阿蘇車站方向。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%83%95%E3%83%AC%E3%82%A4%E3%83%B3%20%E9%AB%98%E6%A3%AE%E5%BA%97",
        category: "shop",
      },
      {
        time: "17:40 - 18:20",
        place: "入住 CAN LI ASSO",
        move: "高森周邊開車約 20-30 分鐘",
        plan: "辦理入住後，在寬敞舒適包棟別墅內自行烹飪或享用採購回來的晚餐。今天長度合適，大家早點入睡休息。",
        memo: "停車：住宿停車位，請依訂房指示停放。若改山麓キッチン燒肉外食，高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛燒肉拼盤，原因是最具在地代表性的招牌方向；2. 牛舌，原因是燒肉店常見高人氣品項，口感脆彈；3. 牛五花，原因是油脂香明顯，適合多人分食。無肉塊：白飯、沙拉與烤野菜；醬汁可接受肉湯或魚介萃取，若有大塊肉直接挑開。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
        category: "hotel",
      },
      {
        time: "18:30 - 20:00 可選",
        place: "南阿蘇久木野キャンプ場 無人機嘉年華",
        move: "CAN LI ASSO 附近短程移動",
        plan: "若小孩精神還可以、天氣也穩定，可短暫前往地圖標註的無人機嘉年華；若大家已累，直接留在別墅洗澡吃晚餐。",
        memo: "這是可選行程，不當作硬排。第一天以不累壞長輩與小孩為最高原則。",
        category: "rest",
      },
    ],
  },
  {
    dayNum: 2,
    date: "2026/07/05",
    weekday: "日",
    title: "7/5 阿蘇火山口、ASO MILK FACTORY、大觀峰",
    subTitle: "第二天阿蘇山上區域只保留阿蘇中岳火山口，管制就直接轉 ASO MILK FACTORY，午後大觀峰、瀬の本レストハウス、黑川短停",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "阿蘇中岳火山口 ｜ ASO MILK FACTORY 深度停留 ｜ 大觀峰 ｜ 瀬の本レストハウス ｜ 黑川短停",
    note: "住：CAN LI ASSO。2026/7 火山警戒 Lv.2、火口道路封閉，阿蘇中岳火山口本趟無法上去；第二天直接以 ASO MILK FACTORY 為午餐與主活動，再接大觀峰、瀬の本、黑川（詳見當天底部備註）。",
    advisory: "🌋 火山：阿蘇噴火警戒 Lv.2（自 2026/06/21）。中岳火口 1km 立入禁止、上山收費道路（阿蘇山公園道路）封閉、火口見學停止——本趟無法上火山口（火口內另有直升機事故，火口見學暫停）。第二天直接略過火山口，改以 ASO MILK FACTORY 為午餐與主活動，再接大觀峰 → 瀬の本 → 黑川。\n🌧️ 天候：梅雨末期山頂常濃霧，大觀峰展望可能整片白；濃霧或大雨時只停 10–15 分拍照、提早轉黑川或回別墅。ASO MILK FACTORY、瀬の本、黑川屬室內/街區，雨天影響較小。出發當天請再查 aso-volcano.jp 即時火口規制。",
    meals: {
      breakfast: "於別墅享用：前一日在 MERUKORO、Frein 超市或高森周邊採購的麵包、牛奶、水果與簡單早餐",
      lunch: "ASO MILK FACTORY（阿部牧場直營店）：午餐、ASO MILK 牛奶、優格、布丁、起司、霜淇淋、甜點工房與玫瑰園",
      dinner: "下午視時間在道の駅 阿蘇或高森／南阿蘇周邊補買熟食、蔬果與點心，回 CAN LI ASSO 別墅享用"
    },
    weatherForecast: "阿蘇火山口與草千里屬中高海拔（標高約 1,140m），7 月山頂氣溫僅約 18°C~23°C，風勢甚猛、常現濃霧。紫外線偏高強，全體請備妥輕巧抗風防寒外套、太陽帽與遮陽傘。【景觀提醒】大觀峰是本日最受霧氣影響的展望點，梅雨期常整片白霧；濃霧時只停 10–15 分拍照即轉黑川或回別墅。ASO MILK FACTORY、瀬の本、黑川溫泉街屬室內/街區，雨天影響較小。",
    rainBackup: "阿蘇中岳火山口極易受大雨、濃霧或火山管制影響封鎖。若火山口不開放，直接前往 ASO MILK FACTORY，把時間留給餐廳、咖啡、甜點工房、起司工房、商店與玫瑰園。午後若天氣與體力允許，大觀峰後先到瀬の本レストハウス休息、上洗手間、看九重連山與買阿蘇／大分由布院伴手禮；有預約且不繞路才加鍋ヶ滝，否則提早到黑川溫泉街散策。大雨時直接回 CAN LI ASSO。",
    gasStationTip: "山區路段加油站較少。建議在中午山下至阿蘇市區用餐完，可在市區 【ENEOS】加油站加滿常規 Regular 油（Mantan），以策安全。",
    items: [
      {
        time: "08:30 - 09:30",
        place: "CAN LI ASSO → 阿蘇中岳火山口",
        move: "自駕約 50-60 分鐘山路車程",
        plan: "起床吃完早餐後，直接向阿蘇中岳火山口出發。第二天山上區域只保留火山口，砂千里已移到第一天。",
        memo: "山路向上需要集中注意力，長輩小孩在車上注意有無暈車，可以適當撥通風口度。米塚註記：約 08:50 前後會經過米塚周邊道路，若天氣清楚可在車上短暫看圓錐形火山丘，不安排下車避免壓縮草千里與火山口時間。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
        category: "car",
      },
      {
        time: "09:30 - 10:30",
        place: "阿蘇中岳火山口（2026/7 封閉・不上山）",
        move: "本趟不上火山口，直接前往 ASO MILK FACTORY",
        plan: "【2026/7 火山警戒 Lv.2】火口道路（阿蘇山公園道路）封閉、火口見學停止，本趟無法上火山口。此站改為不上山，直接以 ASO MILK FACTORY 作為午餐與主活動。",
        memo: "重要：中岳火口 1km 立入禁止、阿蘇山公園道路封閉，無法開車上火口、也無法火口見學（火口內另有直升機事故影響，火口見學暫停）。出發當天仍以 aso-volcano.jp 即時頁確認；本趟直接跳過火山口、不上山等待。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%98%87%E4%B8%AD%E5%B2%B3%E7%81%AB%E5%8F%A3",
        category: "nature",
      },
      {
        time: "10:30 - 11:25",
        place: "阿蘇中岳火山口 → ASO MILK FACTORY",
        move: "自駕約 30-45 分鐘，下山往阿蘇市小里",
        plan: "火山口結束後下山到 ASO MILK FACTORY（阿部牧場直營店），第二天午餐正式安排在這裡；若火山口管制，這段直接提早開始。",
        memo: "若火山口管制，直接把時間留給 ASO MILK FACTORY。這樣長輩小孩可以更從容用餐、上廁所、買乳製品伴手禮與在園區散步。",
        category: "car",
      },
      {
        time: "11:25 - 12:35",
        place: "ASO MILK FACTORY（阿部牧場直營店）午餐",
        move: "抵達後用餐、採買乳製品、休息",
        plan: "第二天中餐正式改到 ASO MILK FACTORY。午餐、ASO MILK 牛奶、優格、布丁、起司、霜淇淋或伴手禮在這裡一次處理；若火山口管制，就把這站拉長成主活動。",
        memo: "地址：熊本県阿蘇市小里781。官方與熊本觀光資訊顯示，園區有商店、咖啡、甜點工房、起司工房、餐廳與玫瑰園，可吃披薩、義大利麵、起司料理與 ASO MILK 甜點。高人氣優先點餐指引｜不限飲食：1. ASO MILK 霜淇淋，原因是乳製品代表品項；2. 牛奶、優格、布丁或 ASOMILKUCHEN 年輪蛋糕，原因是好分食也可外帶；3. 起司料理、披薩或義大利麵，原因是午餐更完整。無肉塊：乳製品、甜點、飲品、起司料理與素向輕食優先。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=ASO%20MILK%20FACTORY%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%98%BF%E8%98%87%E5%B8%82%E5%B0%8F%E9%87%8C781",
        category: "food",
      },
      {
        time: "12:35 - 13:00 可選",
        place: "ASO MILK FACTORY 園區深度停留",
        move: "園區內步行",
        plan: "若火山口管制或大家想放慢，ASO MILK FACTORY 可多停留：看甜點工房、起司工房，逛商店買冷藏乳製品，天氣好再去玫瑰園散步拍照。",
        memo: "這段是管制時的主要緩衝，不影響後面大觀峰或黑川。冷藏品請放保冷袋，車上避免日曬。",
        category: "rest",
      },
      {
        time: "13:00 - 13:40",
        place: "大觀峰展望所 ＆ Aso Skyline 展望所",
        move: "ASO MILK FACTORY 至大觀峰約 25-35 分鐘",
        plan: "午餐完成後再上大觀峰。阿蘇外輪山最高展望點，環顧阿蘇五岳，其猶如靜躺的涅槃佛陀。晴朗首選、清風吹拂；霧氣若重，則保留 15 分鐘拍照後往黑川或回別墅。",
        memo: "停車：大觀峰大停車場。從停車點步行至碑文大約需要 10 分鐘上坡，建議長輩慢行。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E8%A6%B3%E5%B3%B0%20%E5%B1%95%E6%9C%9B%E6%89%80",
        category: "nature",
      },
      {
        time: "13:55 - 14:25",
        place: "瀬の本レストハウス (Senomoto Resthouse)",
        move: "大觀峰後往黑川方向順路短停",
        plan: "進黑川溫泉街前，在大型高原休息站稍微活動筋骨、上洗手間、買阿蘇與大分由布院一帶土產伴手禮，也可補輕食與飲品。天氣好時可遠眺九重連山，作為大觀峰後的舒緩停靠點。",
        memo: "導航請搜尋：瀬の本レストハウス / Senomoto Resthouse。若 ASO MILK FACTORY 或大觀峰停太久，這站可縮短成上廁所與買飲料；若天候差，保留室內休息與伴手禮採買。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%80%AC%E3%81%AE%E6%9C%AC%E3%83%AC%E3%82%B9%E3%83%88%E3%83%8F%E3%82%A6%E3%82%B9%20Senomoto%20Resthouse",
        category: "rest",
      },
      {
        time: "14:00 - 15:00 可選",
        place: "鍋ヶ滝公園（有預約且順路才去）",
        move: "大觀峰或 ASO MILK FACTORY 往小國町方向；未預約不硬排",
        plan: "若火山口管制讓時間變早、天氣穩、且已完成 web 事前預約，可改去鍋ヶ滝看寬約 20m 的水簾瀑布。未預約、下雨、長輩膝蓋不適或時間壓縮時，直接跳過。",
        memo: "官方資訊：鍋ヶ滝為 web 事前預約制，開園 9:00-17:00，最終入園 16:30，入園費成人 300 円、小中學生 150 円。需走階梯與濕滑步道，請穿止滑鞋；大雨或安全因素可能臨時休園。導航請搜尋：鍋ヶ滝公園。",
        category: "nature",
      },
      {
        time: "14:35 - 15:15",
        place: "黑川溫泉街短散策 / 風の舎 / 湯音 / Patisserie Roku",
        move: "瀬の本レストハウス後車程約 10-15 分鐘",
        plan: "保留黑川溫泉散策，改成短停不泡湯：走一小段溫泉街、買甜點或茶飲、拍照後準時上車。若火山口管制而提早下山，也可以把黑川提前並延長一點。",
        memo: "16:20 前離開黑川，回別墅時間較穩。若大觀峰、ASO MILK FACTORY、瀬の本レストハウス或鍋ヶ滝停留超過預期，黑川只短停拍照或直接回別墅。高人氣優先點餐指引｜不限飲食：1. 溫泉布丁，原因是溫泉街常見人氣甜點，份量小也好入口；2. 泡芙或蛋糕，原因是甜點店熱門外帶品項，不影響後續移動；3. 咖啡或茶飲，原因是搭配甜點最穩，山路前也能休息醒腦。無肉塊：無肉甜點或無酒精飲品；蛋奶與吉利丁可依個人接受度，重點避開明顯肉塊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%BB%92%E5%B7%9D%E6%B8%A9%E6%B3%89%20%E9%A2%A8%E3%81%AE%E8%88%8E",
        category: "rest",
      },
      {
        time: "14:40 - 16:00",
        place: "返回 CAN LI ASSO",
        move: "黑川溫泉街至別墅約 70-80 分鐘",
        plan: "回到南阿蘇舒適包棟別墅大客廳休息，全家晚餐可用下午補買的熟食、蔬果、麵包與甜點分食。",
        memo: "別墅住宿空間大。晚餐買回來後先把需冷藏的熟食、甜點與水果放進冰箱。整理明天退房行李，確認只保留 3 個 29 寸大行李箱、1 個大型手提旅行包與嬰兒車。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
        category: "hotel",
      },
    ],
  },
  {
    dayNum: 3,
    date: "2026/07/06",
    weekday: "一",
    title: "高千穗小火車、峽谷散步、白川水源、進熊本",
    subTitle: "小火車優先、高千穗峽散步、高森午餐建議、白川水源、傍晚進熊本",
    hotel: "REF Kumamoto by VESSEL HOTELS (熊本新市街)",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/stay/slide_moderate_01.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/stay/",
    hotelImageSourceName: "Vessel Hotels 官方客室頁",
    mainTheme: "高千穗小火車 ｜ 峽谷步道 ｜ 高森午餐 ｜ 白川水源 ｜ 熊本市區",
    note: "住：REF Kumamoto by VESSEL HOTELS。高千穗小火車優先，峽谷只散步拍照；中午約 12:00 自高千穗啟程，順路到高森或南阿蘇午餐，餐後接白川水源再進熊本市區。",
    meals: {
      breakfast: "在別墅內享用愜意晨食：簡單烘烤熱吐司、煎雞蛋與香濃咖啡/熱牛奶（準備行李退房）",
      lunch: "高森町 やま康赤牛丼；若想更清爽，改南阿蘇 久木野庵手工蕎麥麵，餐後接白川水源",
      dinner: "熊本新市街美食街自選：熊本香濃濃拉麵、精緻壽司、高階馬肉刺身或拱廊居酒屋大餐"
    },
    weatherForecast: "高千穗峽谷身處深邃林澗，氣溫落在 20°C~25°C，非常清新涼爽。水氣充裕，午後易有短暫山區小雨。傍晚返回熊本市中心，氣溫略上升至 26°C~31°C。【景觀提醒】高千穗峽小雨時反而有雲霧氛圍，但大雨會使步道濕滑、真名井瀑布變渾濁、遊船停划；小火車照常行駛但展望變差。雨大時以拍照、神社與室內午餐為主，白川水源小雨可短停。",
    rainBackup: "高千穗小火車若班次客滿，改拍高千穗駅與前往峽谷散步；峽谷遇大雨時不走濕滑步道，縮短拍照後提早往高森或南阿蘇午餐。白川水源小雨可短停，若雨勢變大則直接前往 REF。",
    gasStationTip: "CAN LI ASSO 出發經高千穗再返熊本市區為長途自駕，多山路。若油量不足，可在高千穗神社周邊的【ENEOS 高千穗SS】或【Apollo Station】把油箱補至 8 分滿，以提供後段巡航保障。",
    items: [
      {
        time: "08:00 - 09:30",
        place: "CAN LI ASSO 出發",
        move: "至高千穗約 80-100 分",
        plan: "南阿蘇住宿出發，先直達高千穗駅買小火車票。途中僅做必要洗手間短停，避免錯過 09:40 或 10:20 班次。",
        memo: "高千穗小火車官方常見班次有 09:40、10:20、11:00、11:40、12:20 等，實際以官網與現場為準。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=CAN%20LI%20ASSO%20%E5%8D%97%E9%98%BF%E8%98%87",
        category: "car",
      },
      {
        time: "09:30 - 09:40",
        place: "高千穂駅買小火車票",
        move: "抵達車站、確認班次",
        plan: "抵達高千穗駅後先買小火車票，優先看 09:40 班次；若已滿或時間太趕，改搭 10:20。",
        memo: "停車：高千穂駅免費停車場。六大一小先處理票券與廁所，再決定班次。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%8D%83%E7%A9%82%E9%A7%85",
        category: "shop",
      },
      {
        time: "09:40 或 10:20",
        place: "高千穗あまてらす鐵道小火車",
        move: "依現場買到班次搭乘",
        plan: "搭高千穗小火車，從鐵橋俯瞰峽谷與山景。若 09:40 來不及，就改搭 10:20；若小火車取消，直接改高千穗峽散步。",
        memo: "此段以現場班次為準，不做過度緊繃安排。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%8D%83%E7%A9%82%E9%A7%85",
        category: "car",
      },
      {
        time: "10:30 - 12:00",
        place: "高千穗峽散步、看真名井瀑布、拍照",
        move: "高千穗駅至峽谷約 10 分鐘",
        plan: "走峽谷步道，看真名井瀑布、拍照。停留到中午前後，12:00 左右自高千穗啟程往高森或南阿蘇午餐。",
        memo: "停車：高千穗峽專用付費停車場。步道濕滑時以安全為先，縮短停留；目標是不要晚於 12:00 太多離開高千穗。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%8D%83%E7%A9%82%E5%B3%A1%20%E7%9C%9F%E5%90%8D%E4%BA%95%E3%81%AE%E6%BB%9D",
        category: "nature",
      },
      {
        time: "12:00 - 12:55",
        place: "高千穗 → 高森町 やま康",
        move: "自駕約 30-40 分鐘，往高森町方向",
        plan: "中午 12 點左右自高千穗啟程，順路到高森町的 やま康 吃赤牛丼；若想吃清爽蕎麥麵，改直奔南阿蘇 久木野庵。",
        memo: "肉食與名物體驗：高千穗到 やま康 約 30 分鐘，飽餐後約 10-20 分鐘可接白川水源。清爽在地風味：久木野庵主打阿蘇純淨水源做出的手工蕎麥麵，動線也順。",
        category: "car",
      },
      {
        time: "12:55 - 13:55",
        place: "高森町 やま康 赤牛丼午餐（備案：久木野庵手工蕎麥麵）",
        move: "抵達後用餐與休息",
        plan: "第一順位用餐：やま康赤牛丼，適合想吃阿蘇名物。若想清爽或排隊太長，改南阿蘇久木野庵吃手工蕎麥麵，接白川水源更順。",
        memo: "高人氣優先點餐指引｜不限飲食：1. 赤牛丼，原因是阿蘇高森代表名物；2. 赤牛定食，原因是多人分食彈性較好；3. 蕎麥麵，原因是久木野庵清爽、接白川水源順路。無肉塊：久木野庵蕎麥麵、白飯、漬物或豆腐類；若高湯含魚介可依個人接受度。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%84%E3%81%BE%E5%BA%B7%20%E9%AB%98%E6%A3%AE%E7%94%BA",
        category: "food",
      },
      {
        time: "13:55 - 14:25",
        place: "午餐點 → 白川水源",
        move: "自駕約 10-25 分鐘，依午餐店而定",
        plan: "午餐後接白川水源散步，下午再進熊本市區。",
        memo: "若在 やま康 用餐，餐後約 10-20 分鐘可到白川水源；若在久木野庵，用餐點與白川水源距離更近。",
        category: "car",
      },
      {
        time: "14:25 - 15:05",
        place: "白川水源",
        move: "停車後步道緩步慢行",
        plan: "在名水百選的水源周圍散步、汲取甘甜泉水、合影。這站從第一天移到第三天，行程較不壓縮。",
        memo: "停車：白川水源專用免費/收費停車場。若高千穗或午餐延誤，這站縮短為 20 分鐘短停。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E5%B7%9D%E6%B0%B4%E6%BA%90",
        category: "nature",
      },
      {
        time: "15:05 - 16:45",
        place: "REF Kumamoto by VESSEL HOTELS",
        move: "白川水源至熊本市區約 80-100 分鐘",
        plan: "傍晚抵達位於熊本市中心新市街商圈的 REF Kumamoto 飯店安頓。晚餐於旁邊拱廊商店街簡單處理。",
        memo: "停車：飯店合作或自設大停車場。若晚餐在熊本新市街美食街自選，高人氣優先點餐指引｜不限飲食：1. 熊本拉麵，原因是黑蒜油豚骨最具熊本代表性；2. 壽司或海鮮丼，原因是商店街常見人氣選擇，食量彈性高；3. 居酒屋烤飯糰與炸物，原因是多人同行最容易補點分食。無肉塊：玉子、納豆、黃瓜卷、稻荷壽司、烤飯糰、炒飯或冷豆腐；炒飯若有肉末挑開即可，醬汁與高湯可接受魚介或肉湯。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
        category: "hotel",
      },
    ],
  },
  {
    dayNum: 4,
    date: "2026/07/07",
    weekday: "二",
    title: "熊本市區、水前寺、車站商場",
    subTitle: "市區漫步舒緩體力、引泉古風庭園與巨型商圈滿足採購",
    hotel: "REF Kumamoto by VESSEL HOTELS (新市街)",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/stay/slide_moderate_01.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/stay/",
    hotelImageSourceName: "Vessel Hotels 官方客室頁",
    mainTheme: "優雅成趣園 ｜ 車站清涼瀑布 ｜ 黑蒜拉麵始祖",
    note: "住：REF Kumamoto。7/7 早餐同時記得選回程班機 JX847 機位；這天放慢腳步，以市區與室內補給為主。",
    meals: {
      breakfast: "REF 熊本新市街飯店豐富日式自助朝食（提供多達數十種熊本在地特色餐點與現烤麵包）；早餐同時選 7/9 回程星宇 JX847 機位，優先讓六大一小座位集中，訂位代號 EFGJC9",
      lunch: "三大拉麵名店：黑亭拉麵 熊本車站本店，焦香濃郁黑蒜油豚骨拉麵，中粗麵身、香氣十足",
      dinner: "天ぷら たかお：現炸天婦羅定食，若排隊過長再改熊本市中心、下通商店街自選；資さんどん列為宵夜備案，適合晚間想補烏龍麵、丼飯或小份點心時使用"
    },
    weatherForecast: "熊本市區約 27°C~31°C，多雲偶晴。午後由於熱對流，可能會有短暫雷陣雨，雨後會轉為防暑避暑的清爽天氣。全天適合市區室內商場與景點參觀。【景觀提醒】本日多為室內（AMU PLAZA、SAKURA MACHI）與庭園，水前寺成趣園小雨反而清雅；雨天幾乎不影響行程，可安心安排。",
    rainBackup: "水前寺成趣園若下大雨，可縮短園內步道停留，改在名茶屋「古今傳授之間」內聽雨品抹茶；隨後移步前往「AMU PLAZA 熊本」，其為全方位室內大型商場，擁有 3 層樓高瀑布景致、兒童遊戲區與各種免稅店，下雨完全不受影響。",
    gasStationTip: "今日均在熊本市區移動，車程極短（5~20 分鐘為主）。市區有大量加油站，如【ENEOS 下通店】。因後續行程皆在市區，且第 6 天返台前才需滿油還車，今天可暫不用加油。",
    items: [
      {
        time: "09:45 - 10:15",
        place: "REF Kumamoto 出發",
        move: "飯店取車後前往水前寺成趣園",
        plan: "從 REF Kumamoto by VESSEL HOTELS 出發，先前往水前寺成趣園。若市區停車不便，可改搭路面電車或計程車。",
        memo: "這個點作為當日導航路線起點，避免路線圖直接從水前寺開始。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
        category: "car",
      },
      {
        time: "10:15 - 11:30",
        place: "水前寺成趣園 (桃山式泉水迴遊庭園)",
        move: "自駕約 15 分鐘 (或路面電車直達)",
        plan: "引阿蘇泉水成池。觀賞假山富士地貌、在古色古香的古今傳授之間茶屋品酌正宗抹茶，長輩漫步聽風，小孩快樂餵錦鯉，大約停留 1.5 小時多。",
        memo: "停車：水前寺正門外周邊幾家投幣付費停車格。早晨陽光和暖最合適。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B0%B4%E5%89%8D%E5%AF%BA%E6%88%90%E8%B6%A3%E5%9C%92",
        category: "nature",
      },
      {
        time: "11:20 - 14:30",
        place: "AMU PLAZA 熊本 ＆ 熊本拉麵黑亭 ＆ 觀光案內所",
        move: "自駕車程約 20 分鐘",
        plan: "避暑極選！逛熊本最新、最宏敞的熊本車站 AMU PLAZA 購物，看室內 3 層樓高大型清涼瀑布。午餐吃地圖推薦的『黑亭拉麵 熊本車站本店』，經典香烤黑蒜油濃郁老滋味、麵身勁道、美味老店！在案內所領取最新市區手冊。截圖上的熊本站周邊店家放在這段處理：UNIQLO、GU、BEAMS、BicCamera，適合需要補衣物、家電或順手看日牌時分組逛。",
        memo: "停車：AMU PLAZA 專用超大地下/立體停車場。熊本站周邊若只挑重點，優先 UNIQLO/GU 補衣物，BicCamera 看電器與藥妝，BEAMS 當日牌選逛。黑亭高人氣優先點餐指引｜不限飲食：1. 玉子入りラーメン，原因是黑亭代表款方向，黑蒜油豚骨加蛋最完整；2. 黑亭拉麵基本款，原因是最能吃出焦蒜油與中粗麵特色；3. 煎餃或炒飯，原因是拉麵店常見人氣配餐，適合多人分食。無肉塊：可點拉麵把叉燒分給其他人，湯底可接受豚骨；若想更清爽，改在 AMU PLAZA 買飯糰、麵包、甜點或炒飯，肉末挑開即可。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%BB%92%E4%BA%AD%20%E7%86%8A%E6%9C%AC%E9%A7%85%E5%BA%97",
        category: "shop",
      },
      {
        time: "15:00 - 17:00",
        place: "SAKURA MACHI 櫻町熊本 ＆ 空中大花園",
        move: "車程或電車約 15 分鐘",
        plan: "漫步屋頂森林花園、與巨型熊本熊合影留念及俯瞰熊本城。亦可在商場內給全家買名茶、冷飲。或隨時改由家人抱小孩回對面僅 5 分鐘步程 of REF 飯店睡午覺，分組逛商店街買精品，時間極其彈性。",
        memo: "停車：SAKURA MACHI 商城大型停車場，推嬰兒車或輪椅直達電梯零障礙。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SAKURA%20MACHI%20Kumamoto",
        category: "rest",
      },
      {
        time: "17:30 之後",
        place: "天ぷら たかお ＆ 新市街・下通拱廊商店街晚餐",
        move: "完全步行，不累不折返",
        plan: "夜幕降臨，晚餐安排天ぷら たかお，吃現炸天婦羅定食，對長輩小孩也容易分食。若現場排隊過長，直接改回新市街、下通周邊的地產鄉土燒肉、定食或拉麵居酒屋。資さんどん列為宵夜備案，不當正式晚餐硬排。",
        memo: "先以 Google Maps 搜尋「天ぷら たかお 熊本」確認當日營業時間與最近分店。資さんどん：若飯店回房後有人想吃熱食，可搜尋熊本市區最近分店，當作烏龍麵、丼飯、關東煮等宵夜備案。高人氣優先點餐指引｜不限飲食：1. たかお天定食，原因是店名招牌方向，一次吃到綜合天婦羅；2. 蝦天定食，原因是天婦羅店最穩定的人氣品項；3. 魚介天婦羅定食，原因是口味比單吃蔬菜更有層次。無肉塊：野菜天婦羅加白飯；炸油與沾醬可接受和海鮮共用，若套餐附蝦魚天婦羅就分給同行者。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E3%81%B7%E3%82%89%20%E3%81%9F%E3%81%8B%E3%81%8A%20%E7%86%8A%E6%9C%AC",
        category: "food",
      },
    ],
  },
  {
    dayNum: 5,
    date: "2026/07/08",
    weekday: "三",
    title: "熊本城、城彩苑、上通下通",
    subTitle: "壯麗江戶復興古城、星級手信買齊與勝烈亭大豬排盛宴",
    hotel: "REF Kumamoto by VESSEL HOTELS (新市街)",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/stay/slide_moderate_01.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/stay/",
    hotelImageSourceName: "Vessel Hotels 官方客室頁",
    mainTheme: "巍峨名城 ｜ 旬彩之寶 ｜ 勝烈亭極樂豬排",
    note: "住：REF Kumamoto。最後完整一天集中熊本市區，少開車、多步行，便於長輩小孩體力調節。",
    meals: {
      breakfast: "REF 熊本 VESSEL 飯店特供：主廚現搓招牌熊本芥末蓮藕球、佐賀明太子飯糰、西式蓬鬆炒蛋配新鮮美式咖啡",
      lunch: "櫻之馬場 城彩苑散策美食：爆汁海膽可樂餅、熱呼呼熊本熊大判燒、黑毛和牛串燒與極香高千穗牛奶霜淇淋",
      dinner: "全日本炸豬排名店冠軍之首：勝烈亭新市街本店；飯後外帶一心堂老舖三種泡芙與 SWISS 蛋糕回 REF 飯店當甜點，資さんどん保留為晚間熱食備案"
    },
    weatherForecast: "熊本市區約 27°C~31°C，多雲偏晴。盛夏氣流上升活躍，下午四點左右市區或有短暫雷對流，隨後涼爽宜人，非常適合傍晚徒步至勝烈亭吃晚餐。【景觀提醒】熊本城天守閣內部、城彩苑與上通下通皆有遮雨拱廊，雨天照常逛、影響極小。",
    rainBackup: "熊本城配有極其先進的「天守閣無障礙冷氣大電梯與玻璃扶手步道」，雨天可極致安逸地在室內吹冷氣、學熊本城築城與地震復興史；櫻之馬場與上通下通拱廊均設有密閉耐雨天棚（Arcade），可保持數百公尺乾爽。即使大雨磅礴，外婆與小孩在商店街散步逛藥妝店依然一滴雨都淋不到！",
    gasStationTip: "明天即將還車。租車規定還車前必須在機場周邊 3 公里內加油，所以今晚在市區不用特地加油。可以今晚把 Toyota 還車單、ETC 卡袋與護照放到便利隨行包，以便明早無驚無險滿油還車。",
    items: [
      {
        time: "08:45 - 09:00",
        place: "REF Kumamoto 出發",
        move: "飯店出發前往熊本城",
        plan: "從 REF Kumamoto by VESSEL HOTELS 出發，若市區停車不便，可把車留飯店，改步行、電車或短程計程車。",
        memo: "這個點作為當日導航路線起點，後續熊本城市區點位多可步行串接。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
        category: "car",
      },
      {
        time: "09:00 - 11:30",
        place: "熊本城 (天守閣與雄偉石垣武者返)",
        move: "步行、搭路面電車或短程計程車 (約 10 分鐘)",
        plan: "日本三大名城之一，天守閣在地震後完美復興。特別備有最便利的手扶梯與全新無障礙空調，長輩即便退化也毫無門檻！登高俯瞰，平原江山一覽無遺，體驗極其深刻。",
        memo: "停車：熊本城 二の丸收費大停車場。亦可將車留飯店，搭路面電車前行。若長輩需要，景區入口可提供優質免費輪椅推行。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%86%8A%E6%9C%AC%E5%9F%8E",
        category: "nature",
      },
      {
        time: "11:30 - 14:00",
        place: "櫻之馬場 城彩苑 ＆ 旬彩館特色伴手禮採購",
        move: "城天守閣出口向下即達",
        plan: "江戶古街再現。午餐在木造拱廊街品嚐：爆汁海膽可樂餅、熊本熊可頌大判燒、特香馬肉可樂餅、特厚阿蘇布丁。走進『旬彩館』，把最棒的手信如陣太鼓等一併買齊封底！",
        memo: "停車：櫻之馬場 城彩苑 大專用停車場。高人氣優先點餐指引｜不限飲食：1. 海膽可樂餅，原因是城彩苑代表性人氣小吃，外酥內餡香濃；2. 熊本熊大判燒，原因是造型有記憶點，小孩接受度高；3. 阿蘇布丁或牛奶霜淇淋，原因是阿蘇乳製品系熱門甜點，7 月中午清涼好分食。無肉塊：紅豆或卡士達大判燒、阿蘇布丁或霜淇淋；蛋奶可依個人接受度，重點避開明顯肉塊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%A1%9C%E3%81%AE%E9%A6%AC%E5%A0%B4%20%E5%9F%8E%E5%BD%A9%E8%8B%91",
        category: "shop",
      },
      {
        time: "14:20 - 17:30",
        place: "上通與下通商店街無障礙雙拱廊 ＆ 一心堂老舖 / SWISS 外帶",
        move: "完全步行穿梭，悠然自得",
        plan: "兩旁皆為免稅大藥妝鋪，寬大不淋雨！逛街中途把一心堂老舖列為必去，外帶三種泡芙；也可順手到熊本老字號洋菓子 SWISS 外帶蛋糕，晚上帶回 REF 飯店分食。截圖上的上通／下通店家放在這段處理：MUJI、NITORI、Seria、Can Do、DAISO、Standard Products、3COINS、Sports Alpen、Don Quijote，依體力分組逛。",
        memo: "建議車子依舊安留 REF 免費停放。一心堂老舖優先買三種泡芙，列為本段必去甜點點位；SWISS 則作為蛋糕外帶補充。截圖店家取捨：MUJI/NITORI 看生活用品，Seria/Can Do/DAISO/Standard Products/3COINS 看百元與雜貨，Sports Alpen 看運動用品，Don Quijote 放最後採買零食與藥妝。SWISS 高人氣優先點餐指引｜不限飲食：1. 鮮奶油草莓蛋糕，原因是洋菓子店經典人氣款，長輩小孩都容易接受；2. 季節水果蛋糕，原因是清爽、拍照與分食都合適；3. 巧克力蛋糕，原因是外帶較耐放，也是不敗熱門口味。無肉塊：布丁、泡芙或小份杯裝甜點；蛋奶與吉利丁可依個人接受度，重點避開明顯肉塊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SWISS%20%E8%9B%8B%E7%B3%95%20%E7%86%8A%E6%9C%AC%20%E4%B8%8B%E9%80%9A",
        category: "shop",
      },
      {
        time: "18:00 - 19:40",
        place: "勝烈亭 新市街本店 - 炸豬排大名盛宴",
        move: "步行自下通返回新市街僅 5 分鐘",
        plan: "極上黑豬炸肉排，外層黃金酥脆、肉質多汁柔嫩爆汁，對老少皆是毫不費力的嚼勁！這是一定得吃過一輪的日本百名神店第一位！",
        memo: "建議車留飯店，直接步行前往。勝烈亭高人氣優先點餐指引｜不限飲食：1. 鹿兒島六白黑豚里脊豬排定食，原因是高階招牌方向，肉味濃、脂香明顯；2. 菲力豬排定食，原因是炸豬排店經典人氣部位，口感較嫩；3. 炸蝦或綜合炸物定食，原因是熱門替代選項，不想全吃豬排時可換口味。無肉塊：白飯、高麗菜、漬物與味噌湯；主菜豬排或炸蝦分給同行者，味噌湯可接受魚介高湯。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8B%9D%E7%83%88%E4%BA%AD%20%E6%96%B0%E5%B8%82%E8%A1%97%E6%9C%AC%E5%BA%97",
        category: "food",
      },
      {
        time: "20:00 之後",
        place: "REF 飯店大廳打包行李 ＆ 甜點 / 資さんどん宵夜備案",
        move: "步行走回",
        plan: "在房間打包行囊，把彩妝與手信妥善折箱、封底膠。把外帶的一心堂老舖三種泡芙與 SWISS 蛋糕當最後一晚甜點分食；若有人還想吃熱食，資さんどん作為宵夜備案。再次核查護照無缺，明天準時起飛！",
        memo: "確認每箱大型行裝不超限。泡芙與蛋糕若吃不完先放房內冰箱；資さんどん只作備案，不特地繞遠。確認加油、Toyota 還車單、ETC文件已備齊放在手提袋內。",
        category: "rest",
      },
    ],
  },
  {
    dayNum: 6,
    date: "2026/07/09",
    weekday: "四",
    title: "還車與返台",
    subTitle: "滿油快速還車、安檢歸航溫馨家門",
    hotel: "溫暖的家",
    mainTheme: "滿油加油 ｜ Toyota專車接駁 ｜ 圓滿返台",
    note: "回程依航班資訊：11:55 熊本機場，13:20 星宇桃機一航廈。",
    meals: {
      breakfast: "REF 飯店早朝朝食或熊本機場便利超商 7-11 麵包、夾心熱狗、熱拿鐵與 ASO 米其林鮮奶",
      lunch: "星宇 JX847 機上由星級主廚團隊特製的「手作日式牛壽喜燒飯」或「胡麻鮮嫩雞排飯」配經典冷泡茶",
      dinner: "返台後溫暖的家，吃最熟悉的台灣家鄉味或排骨飯，洗淨塵埃"
    },
    weatherForecast: "熊本機場氣溫約 26°C~31°C。當天主要在機場航站、車內、飛機客艙以及桃園機場等全室內移動，行駛天氣良好、安全降落。",
    rainBackup: "完全無懼雨天氣！所有的移動包括 Toyota 免費大巴士接駁和機場登機廊橋均配有棚頂或連接大廳通道。即使外頭下起狂風雨，也能全家優雅乾燥地安上飛機。",
    gasStationTip: "⚠️【最重要的一站：滿油還車加油站】！必須在 Toyota 熊本空港店 3 公里半徑內將車加滿 Regular 常規無鉛油槍。推薦加油站：【ENEOS 熊本空港SS】（一分鐘抵達），結帳跟加油員說『レギュラー、満探 (Regular, Mantan!)』。加油後，務必向加油員索取實體紙本「滿油收據 (Ryoshusho)」，還車拿給租車櫃檯核對才算過關！",
    items: [
      {
        time: "07:45 - 08:25",
        place: "REF Kumamoto 飯店辦理 check-out ＆ 行李上車",
        move: "退房、行李堆入後備箱、準時出發",
        plan: "朝食簡單使用或機場用餐。確認證件、行動電源均未落入床底。設定機場 Toyota 為導航主站。",
        memo: "注意 08:00 可能恰逢熊本市區上班高峰期、可能會有微塞車，提早半小時上路更有保證！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=REF%20Kumamoto%20by%20VESSEL%20HOTELS",
        category: "car",
      },
      {
        time: "08:25 - 09:35",
        place: "熊本市區 → 熊本機場周邊（預留油資加油）",
        move: "自駕約 45 - 60 分鐘車程",
        plan: "上高速口或走平面。在臨近還車點 3 公里內的加油站把車子加滿 Regular 常規無鉛（記住喊 Mantan，Regular滿油）。",
        memo: "⚠️日本加油一般需滿油還車，請向加油員工所索取實體滿油收據，還車時需仔細核對明細發票。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=ENEOS%20%E7%86%8A%E6%9C%AC%E7%A9%BA%E6%B8%AFSS",
        category: "car",
      },
      {
        time: "09:35 - 10:15",
        place: "TOYOTA 租車還車還所 ＆ 免費大接駁航廈",
        move: "Toyota還車、專車接駁至航廈大門 (約 5 分鐘)",
        plan: "在還車口把車移交。工作人員秒查車體外觀、油表收據、ETC扣款。全家拎大件行李上豐田免費大型中巴接駁，抵達航廈。",
        memo: "停車/導航：Toyota 熊本機場店，滿油後直接還車。拿好所有的手機和重要證件，再三過關！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Toyota%20Rent%20a%20Car%20Kumamoto%20Airport",
        category: "car",
      },
      {
        time: "10:15 - 11:55",
        place: "熊本機場國際航廈登機 ＆ 星宇 JX847 起飛回台",
        move: "辦理登機、托運大件、查票安檢",
        plan: "辦理 JX847 入住。托運超大免稅藥妝箱、折疊嬰兒飛框。出境後，在熊本免稅機場店購買特產，起飛回台！",
        memo: "航班資訊: 星宇航空 JX847 (11:55 起飛 -> 13:20 抵達桃園 T1)。圓滿美滿、回憶一生的九州幸福之行！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%86%8A%E6%9C%AC%E7%A9%BA%E6%B8%AF%20Kumamoto%20Airport",
        category: "flight",
      },
    ],
  },
];

export const TRAVEL_GUIDE_INFO = {
  shopping: [
    {
      title: "【熊本最強兩大拱廊商圈】上通 ＆ 下通商店街",
      description: "這條長約 1 公里上無雨巨型遮雨棚商店街，好買、好逛且不怕日曬雨淋。這裡有各大藥妝松本清、Daikoku大國、杉藥局，以及大型百貨、百元店、各種熊本熊文創周邊。截圖標註的 MUJI、NITORI、Seria、Can Do、DAISO、Standard Products、3COINS、Sports Alpen、Don Quijote 都歸在這段熊本逛街行程。",
      tips: [
        "大國藥妝 (Daikoku)：一般藥品通常這家最便宜，常有中文店員服務，滿額可直接免稅退稅加打折。",
        "鶴屋百貨 (Tsuruya)：位於下通旁，這是有百年歷史的經典百貨，也是『熊本熊廣場 KUMAmon Square』的所在地，定時可以看熊本熊部長現場熱舞！",
        "Sugi 杉藥局：美妝保養與面膜款式最齊全，走精質感陳設，逛起來較舒服。",
        "截圖店家分工：MUJI/NITORI 生活用品，Seria/Can Do/DAISO/Standard Products/3COINS 雜貨，Sports Alpen 運動用品，Don Quijote 晚間採買。"
      ]
    },
    {
      title: "【熊本站順路購物】AMU PLAZA 熊本周邊",
      description: "熊本站商圈安排在 7/7 午餐與 AMU PLAZA 熊本段，不和 7/8 上通下通硬擠在一起。截圖標註的 UNIQLO、GU、BEAMS、BicCamera 歸在這段處理。",
      tips: [
        "UNIQLO / GU：需要補夏季衣物、童裝或行李箱內替換衣物時優先。",
        "BicCamera：看小家電、藥妝、相機與充電配件，適合和 AMU PLAZA 同段分組逛。",
        "BEAMS：日牌服飾選逛，不列為必買，避免拖長午餐後移動。"
      ]
    },
    {
      title: "【文青伴手禮天堂】櫻之馬場 城彩苑",
      description: "位於熊本城山腳下的城彩苑，集結了熊本縣內 23 家最具代表性的老字號名店，一條街能吃遍全熊本特色點心，包裝精美，為饋贈親友的首選。",
      tips: [
        "旬彩館：特產伴手禮總匯！必買『譽之陣太鼓』（紅豆年糕裹著Q彈麻糬）、『武者返』小酥餅、熊本限定版拉麵與熊本熊吊飾。",
        "海膽可樂餅 (うにコロッケ)：皮酥內軟，爆漿的海膽香氣在舌尖散開，超級美味！",
        "馬肉可樂餅：想嘗試日本馬肉（櫻肉）又心存疑慮的人，這是最容易入口的安全神級小吃。"
      ]
    },
    {
      title: "【阿蘇限定補給站】道の駅 阿蘇 (道之驛阿蘇)",
      description: "這是自駕必停的日本國道服務特產站，全站販售的皆為阿蘇當地農家新鮮現送的極高品質蔬果與熟食便當。Day 2 午餐已正式改到 ASO MILK FACTORY，道の駅 阿蘇改作下午或返程補給、晚餐熟食與伴手禮採買。",
      tips: [
        "ASO MILK (阿部牧場)：獲得過食品界諾貝爾獎認證的米其林三星鮮乳，極度醇厚生甜，必買原味鮮乳與香濃布丁！",
        "阿蘇赤牛便當：嚴選阿蘇山特有赤牛肉，肉質帶有天然草草香！熟食區下午五點後會打折，買來當晚餐CP值極高。",
        "阿蘇高菜 (Takana)：日本三大醬菜之一，高菜香氣滿溢，阿蘇高菜飯糰長輩最愛。"
      ]
    },
    {
      title: "【阿蘇乳製品甜點】ASO MILK FACTORY",
      description: "阿部牧場直營的乳製品與甜點補給點，正式排在 Day 2 阿蘇火山口後作為午餐與乳製品甜點站，餐後再上大觀峰與黑川短停。",
      tips: [
        "如果阿蘇火山口管制，這裡直接升級為 Day 2 主活動。園區可用餐、喝咖啡、看甜點工房與起司工房、逛商店、買冷藏乳製品，天氣好再到玫瑰園散步。",
        "優先買 ASO MILK 牛奶、優格、布丁、起司、霜淇淋與 ASOMILKUCHEN 年輪蛋糕，第二天午餐與下午甜點一次處理。",
        "官方資訊：Shop / Cafe 9:30-18:00，地址為熊本県阿蘇市小里781；出發前仍以 Google Maps 或官方頁確認當日營業。",
        "冷藏品買完要放保冷袋，接著還會去大觀峰與黑川短停，車上溫度要注意。"
      ]
    }
  ],
  dining: [
    {
      title: "【拉麵傳奇】熊本拉麵黑亭 熊本車站本店",
      description: "創立於昭和32年的黑亭拉麵，是熊本豚骨拉麵的開山鼻祖之一。與一般博多拉麵不同，熊本拉麵的核心在於『黑蒜油與炸蒜酥』的完美調和。",
      details: "豚骨湯頭使用豬骨小火慢燉，濃郁卻不顯油膩。上桌前淋上特製慢火提煉的焦黑熟蒜頭油，表面撒上一層金黃焦香細碎蒜頭酥。焦蒜香氣直衝腦袋，搭配帶有天然麥香的中粗麵條，每一口都充滿層次感！建議搭配一碗糖心蛋，長輩也讚不絕口！"
    },
    {
      title: "【全日本炸豬排天花板】勝烈亭 新市街本店",
      description: "連續入選多屆 Tabelog 豬排百名店，是九州乃至全日本排名最頂尖的炸豬排專門店。其嚴選的豬肉肉質細緻、含汁量超高。",
      details: "最頂級推薦『鹿兒島六白黑豬肉』。裹上勝烈亭自家特製的大顆粒生麵包粉，放入精選植物油慢溫酥炸，保證麵衣金黃酥脆立體不乾澀，裡頭的里脊或菲力豬肉則保持完美的粉嫩半熟與驚人肉汁。客人可以自己手搗碗中研磨金黃芝麻、淋上特製黑豬排醬，這對小孩而言也是一項有趣又極度美味的互動用餐體驗。"
    },
    {
      title: "【必去甜點】一心堂老舖 三種泡芙",
      description: "排在 7/8 上通與下通逛街段，當作必去甜點點位，不另外開車繞路。",
      details: "到店優先外帶三種泡芙，和 SWISS 蛋糕一起作為最後一晚回 REF 飯店分食的甜點。若現場排隊或品項售完，保留 SWISS 蛋糕作替代甜點。"
    },
    {
      title: "【宵夜備案】資さんどん",
      description: "熊本市區晚間熱食備案，不排成正式晚餐，避免影響原本天ぷら たかお與勝烈亭安排。",
      details: "適合回飯店後仍想吃烏龍麵、丼飯、關東煮或小份熱食時使用。出發前用 Google Maps 搜尋熊本市區最近分店與當日營業時間，只選步行或短程移動可達的店。"
    },
    {
      title: "【南阿蘇窯烤極致】 Bakery MERUKORO 手作麵包店",
      description: "深藏於南阿蘇綠意山林下的高人氣窯烤麵包店。選用最純淨的阿蘇山火山湧水、在地自產高級小麥揉捏發酵，深受家庭喜愛。",
      details: "店內充滿麵包剛出爐的極致奶油焦香。必點招牌可頌麵包，酥皮層次高達 20 層以上，輕咬一口碎屑掉滿地。每日限量的鮮乳夾心包、手作生乳塔與無花果天然酵母大歐包，更是長途駕駛時車內最棒的小零食補給。"
    }
  ],
  driving: [
    {
      title: "「左駕改右駕、行車靠左」黃金防呆守則",
      content: "日本行車方向與台灣相反，為『靠左行駛、右駕』。自駕上路三大防呆字訣：1.『轉彎慢行，小轉左、大轉右』。2.『雨刷與方向燈相反』，若天晴時突然刷雨刷，別害羞，提醒自己路口要轉彎了。3. 始終讓駕駛副駕駛側（靠車身中間線）與對向車輛相鄰，偏右側看路。"
    },
    {
      title: "重要的日本道路標誌與禮儀",
      content: "路口遇到紅底倒三角形、寫著白色『止まれ (Tomare)』的停止線，車輪『必須完全靜止停止三秒』，探頭看無左右來車方可前行，警察抓得很嚴。在路口轉彎時，務必『行人第一優先路權』。看到救護車或黃色工程車，請往左靠慢行禮讓。"
    },
    {
      title: "加油步驟與油資結算指南",
      content: "租車合約規定『滿油還車』。在還車前 3 公里內找加油站。一般家庭車加『Regular (紅色油槍，日語：レギュラー)』。加滿油請向店員索取實體加油發票發票，Toyota 還車人員會現場仔細核對發票上的時間 and 地點以作查驗。"
    },
    {
      title: "ETC 與 收費高速公路 (高速道路) 使用",
      content: "取車時 Toyota 租車已隨附 ETC 卡，走高速公路時請走標註紫色的『ETC專用通道』。車速降至 20km/h 以下依欄杆抬起通過。還車時工作人員會讀取 ETC 卡上儲存的所有行車路段，並在豐田櫃檯一併刷卡結算通行費。"
    }
  ],
  safety: [
    {
      title: "🔥 阿蘇火山中岳火口實時管制確認（2026/7 現況：Lv.2 封閉）",
      content: "【2026/7 確認現況】自 2026/06/21 噴火警戒升至 Lv.2（火口周辺規制）：中岳火口 1km 立入禁止、上山的阿蘇山公園道路（收費）封閉、火口見學停止，本趟確定無法上火山口；火口內另有直升機事故，火口見學暫停。Day 2 直接以 ASO MILK FACTORY 為主，再接大觀峰、瀬の本、黑川。阿蘇火山仍會排放二氧化硫等氣體，管制分為【青(可上山)、黃(老人氣喘呼吸道敏感者停)、紅(全面封閉)】。出發當天仍務必開『阿蘇火山火口規制情報』(aso-volcano.jp) 實時查看，切勿強行上山。"
    },
    {
      title: "砂千里之濱與阿蘇火山口管制備案（2026/7 更新）",
      content: "【2026/7 更新】砂千里ヶ浜因緊急工事 6/15–7/31 立入禁止，本趟已從 Day 1 移除，改以草千里 Green Park 午餐＋展望為主。Day 2 阿蘇中岳火山口因 Lv.2 管制與道路封閉無法上去，直接以 ASO MILK FACTORY 為午餐與主活動，再接大觀峰、瀬の本、黑川。若時間、體力、天氣與預約條件都符合，午後可加選鍋ヶ滝；大雨或濃霧則提早到黑川溫泉街或直接回 CAN LI ASSO。"
    },
    {
      title: "高千穗峽步道與長輩兒童防護",
      content: "高千穗峽改以步道散策與真名井瀑布拍照為主。峽谷步道部分路面濕滑、階梯較多，長輩請慢行，小孩建議由大人牽扶；若遇大雨或水位上升，立即縮短停留並改往高千穗神社或室內午餐。"
    },
    {
      title: "🎒 垃圾分類與車內整潔 (環保自學)",
      content: "日本公共場所、街道幾乎沒有一般的公共垃圾桶。一路上自駕產生的寶特瓶、點心包裝紙、衛生紙，請在車內備好塑膠袋收納。在每天抵達便利商店、道の駅特產店或飯店退房時，在分類回收設施中將寶特瓶、鐵罐、一般垃圾分類丟棄。愛護日本好山好水！"
    }
  ]
};

export const COMMON_PHRASES: Phrase[] = [
  { japanese: "こんにちは", romaji: "Konnichiwa", meaning: "你好 / 午安 (通用問候)", category: "greeting" },
  { japanese: "ありがとうございます", romaji: "Arigatou gozaimasu", meaning: "非常感謝 (得體禮貌)", category: "greeting" },
  { japanese: "すみません", romaji: "Sumimasen", meaning: "不好意思 / 請問 (叫店員、讓路必備)", category: "greeting" },
  { japanese: "これ、いくらですか？", romaji: "Kore, ikura desu ka?", meaning: "請問這個多少錢？", category: "shopping" },
  { japanese: "免税（めんぜい）はできますか？", romaji: "Menzei wa dekimasu ka?", meaning: "請問這裡可以辦免稅退稅嗎？", category: "shopping" },
  { japanese: "お会計（かいけい）をお願いします", romaji: "Okaikei o onegai shimasu", meaning: "請問，麻煩請幫我結帳。", category: "shopping" },
  { japanese: "おすすめはどれですか？", romaji: "Osume wa dore desu ka?", meaning: "請問店家推薦什麼招牌菜色呢？", category: "dining" },
  { japanese: "お水をいただけますか？", romaji: "Omizu o itadakemasu ka?", meaning: "不好意思，可以給我們一些開水嗎？", category: "dining" },
  { japanese: "レギュラーを満タンでお願いします", romaji: "Reguryā o mantan de onegai shimasu", meaning: "請幫我加滿常規（紅槍）無鉛汽油 (加油站員工用)", category: "transit" },
  { japanese: "トイレはどこですか？", romaji: "Toire wa doko desu ka?", meaning: "請問洗手間（廁所）在哪裡？ (超實用！)", category: "emergency" },
  { japanese: "大丈夫（だいじょうぶ）です", romaji: "Daijoubu desu", meaning: "沒關係 / 沒問題 / 不用了 (婉拒塑膠袋、收據時用)", category: "transit" }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // Essentials
  { id: "e1", text: "護照、旅遊行程手冊實體列印本及 Visit Japan Web QR Code 截圖", category: "essential", checked: false },
  { id: "e2", text: "台灣護照 ＋ 台灣駕照正本 ＋ 日文譯本 (Toyota 租車取車要查)", category: "essential", checked: false },
  { id: "e3", text: "信用卡與足量日圓現金 (部分山區或特產店、售票口僅收現金)", category: "essential", checked: false },
  { id: "e4", text: "日本上網 eSIM 或實體 SIM 卡、出境保險投保證明單", category: "essential", checked: false },
  
  // Electronics
  { id: "el1", text: "手機、相機、行動電源 ＆ 雙向充電器與多孔連接線", category: "electronics", checked: false },
  { id: "el2", text: "車用手機支架、車充轉接頭 (方便導覽看路線與播放音樂)", category: "electronics", checked: false },
  
  // Clothing
  { id: "c1", text: "薄外套與遮陽防曬帽 (阿蘇山及高千穗山區早晚防風透涼)", category: "clothing", checked: false },
  { id: "c2", text: "好走不易滑的運動鞋 (草千里、大觀峰、白川水源、高千穗峽步道路面可能濕滑)", category: "clothing", checked: false },
  { id: "c3", text: "替換乾衣物多件、雨傘/雨衣 (高千穗峽步道與阿蘇山區晴雨兩用)", category: "clothing", checked: false },
  { id: "c4", text: "行李上限：1 台嬰兒車、3 個 29 寸大行李箱、1 個大型手提旅行包；不要帶登機箱或其他行李箱", category: "clothing", checked: false },
  
  // Pharmacy
  { id: "p1", text: "常用感冒藥、腸胃藥、創可貼 ＆ 暈車藥 (山路連綿轉彎極多)", category: "pharmacy", checked: false },
  { id: "p2", text: "防蚊液、防蚊貼、兒童退燒貼", category: "pharmacy", checked: false },
  
  // Child / Longterm
  { id: "ch1", text: "保溫水壺、防曬乳、濕紙巾/乾洗手", category: "child", checked: false },
  { id: "ch2", text: "長輩關節保健品 ＆ 小孩備用衣服多帶一套", category: "child", checked: false }
];
