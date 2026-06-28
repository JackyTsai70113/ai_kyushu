import { ItineraryDay, Phrase, ChecklistItem } from "./types";

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    dayNum: 1,
    date: "2026/07/04",
    weekday: "六",
    title: "抵達熊本、南阿蘇補給、高森湧水、入住 CAN LI ASSO",
    subTitle: "MERUKORO、白川水源、高森補給與湧水隧道，回別墅休息",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "手作烘焙 ｜ 白川水源 ｜ 高森補給 ｜ 包棟自炊",
    note: "住：南阿蘇 CAN LI ASSO。依最新地圖，第一天改走南阿蘇／高森生活圈，不硬繞道之驛阿蘇；保留取車、採買、入住與小孩休息緩衝。",
    meals: {
      breakfast: "桃園機場簡單早餐或星宇航空機上早餐",
      lunch: "熊本機場抵達大廳簡餐（日式飯糰、超商熟食或車上輕便點心進食，保持右駕專注）",
      dinner: "高森／南阿蘇採買：Frein 超市、丸福蔬果攤、南阿蘇迷你超市，或山麓キッチン燒肉外食後回 CAN LI ASSO"
    },
    weatherForecast: "熊本平地高溫約 28°C~31°C 稍感悶熱；往阿蘇山區前行後，氣溫會平緩降至舒服的 21°C~25°C。午後多雲偶晴，山頂周遭略有短暫偶雨機率，建議帶防曬帽與防風薄外衣。",
    rainBackup: "白川水源小雨可短停；若雨勢變大，縮短戶外散步，改以高森湧水隧道公園、Frein 超市與南阿蘇迷你超市補給為主，提早回 CAN LI ASSO 休息。",
    gasStationTip: "熊本機場取車時 Toyota 租車已提供滿油狀態，當天僅行駛約 1.5 小時，不需加油。若遇緊急狀況，阿蘇地區周邊即有【ENEOS 南阿蘇店】加油站。",
    items: [
      {
        time: "07:30 - 10:45",
        place: "星宇 JX846",
        move: "桃園一航廈至熊本機場",
        plan: "依航班資訊：07:30 星宇桃機一航廈，10:45 熊本機場。請提早填妥 Visit Japan Web 方便流暢通關。",
        memo: "航班代號: EFGJC9。享用精緻機上早餐、預備好入境查驗與兒童護照。",
        category: "flight",
      },
      {
        time: "10:45 - 13:00",
        place: "熊本機場 & TOYOTA 租車 (Toyota Rent-A-Car)",
        move: "入境、免費接駁、拿車",
        plan: "領行李、取 TOYOTA Rent a Car W3 等級車、裝行李、確認幼童安全座椅、ETC 卡與導航設定及右駕防呆說明。午餐以機場或車上簡餐處理。",
        memo: "停車/導航：Toyota 熊本機場店。行李只放 1 台嬰兒車、3 個 29 寸大行李箱與 1 個大型手提旅行包；不要帶登機箱或其他行李箱，避免後車廂放不下。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8313063,130.8627347",
        category: "car",
      },
      {
        time: "13:00 - 13:40",
        place: "熊本機場 → MERUKORO",
        move: "自駕車程約 35-40 分鐘",
        plan: "開出機場朝阿蘇山區前行。第一站先補給著名的手作窯烤麵包與現做熱飲，避免後段採買前大家肚子太餓。",
        memo: "山路會有一些，注意長輩與小孩在車上的狀況。第一天改以南阿蘇住宿周邊補給為主，不硬繞阿蘇站。",
        category: "car",
      },
      {
        time: "13:40 - 14:10",
        place: "MERUKORO 麵包店",
        move: "車停店前、進店採買",
        plan: "採買現烘麵包、熱美式、車上點心與牛奶補給。若熱門手工品項售罄，後面改到 Frein 超市或南阿蘇迷你超市補足。",
        memo: "停車：MERUKORO 店旁/店前專用停車場。高人氣優先點餐指引｜不限飲食：1. 可頌或奶油丹麥，原因是烘焙店最能看出酥皮與奶油香的熱門基本款；2. 鮮乳夾心包，原因是柔軟香甜，長輩小孩接受度高；3. 無花果核桃歐包，原因是歐包系常見人氣款，耐放也適合帶回別墅當早餐。無肉塊：原味、果乾、堅果或起司麵包；避開整片火腿、培根、明太子等明顯肉魚餡。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.858335,131.0065045",
        category: "food",
      },
      {
        time: "14:10 - 14:30",
        place: "MERUKORO → 白川水源",
        move: "自駕約 15-20 分鐘",
        plan: "順路移動到不遠的白川水源，讓全體成員特別是老小下車，踏青沐浴在清涼森林與泉水霧氣中。",
        memo: "好走的路段，適合做為長途自駕後的中繼散步站。",
        category: "car",
      },
      {
        time: "14:30 - 15:10",
        place: "白川水源",
        move: "停車後步道緩步慢行",
        plan: "在名水百選的水源周圍散步、汲取甘甜泉水、合影。請注意控管時間，時間一到就上車，避免壓縮後面特產店的採購時間。",
        memo: "停車：白川水源 專用免費/收費停車場。可為全家祈福及品嚐生名乳。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8253719,131.0953099",
        category: "nature",
      },
      {
        time: "15:25 - 16:10",
        place: "高森湧水隧道公園（9:00-18:00 祭典）",
        move: "白川水源約 10-15 分鐘",
        plan: "依最新地圖加入高森湧水隧道公園。水源系景點和白川水源順路，夏天涼爽，適合長輩與小孩短暫放鬆。",
        memo: "停車：高森湧水隧道公園停車場。若取車延誤或大家累，這站可縮短或跳過。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8140702,131.1209681",
        category: "nature",
      },
      {
        time: "16:20 - 17:00",
        place: "Frein 超市 / 丸福 高森店 / 南阿蘇迷你超市",
        move: "高森周邊採買後回住宿",
        plan: "改在住宿順路的高森與南阿蘇生活圈採買晚餐、隔天早餐、水、牛奶、水果與零食。Frein 超市營業至 22:00，南阿蘇迷你超市至 20:00，可作為備援。",
        memo: "停車：各店自有停車場。重點是買完直接回 CAN LI ASSO，不再繞去阿蘇車站方向。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8259055,131.125199",
        category: "shop",
      },
      {
        time: "17:20 - 18:00",
        place: "入住 CAN LI ASSO",
        move: "高森周邊開車約 20-30 分鐘",
        plan: "辦理入住後，在寬敞舒適包棟別墅內自行烹飪或享用採購回來的晚餐。今天長度合適，大家早點入睡休息。",
        memo: "停車：住宿停車位，請依訂房指示停放。若改山麓キッチン燒肉外食，高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛燒肉拼盤，原因是最具在地代表性的招牌方向；2. 牛舌，原因是燒肉店常見高人氣品項，口感脆彈；3. 牛五花，原因是油脂香明顯，適合多人分食。無肉塊：白飯、沙拉與烤野菜；醬汁可接受肉湯或魚介萃取，若有大塊肉直接挑開。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
        category: "hotel",
      },
      {
        time: "18:30 - 20:00 可選",
        place: "南阿蘇久木野キャンプ場 無人機嘉年華",
        move: "CAN LI ASSO 附近短程移動",
        plan: "若小孩精神還可以、天氣也穩定，可短暫前往地圖標註的無人機嘉年華；若大家已累，直接留在別墅洗澡吃晚餐。",
        memo: "這是可選行程，不當作硬排。第一天以不累壞長輩與小孩為最高原則。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8144733,131.0305408",
        category: "rest",
      },
    ],
  },
  {
    dayNum: 2,
    date: "2026/07/05",
    weekday: "日",
    title: "7/5 阿蘇日建議行程",
    subTitle: "草千里、火山口、砂千里之濱、GRASS LAND 午餐、ASO MILK FACTORY、大觀峰，午後依體力取捨",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "草千里放電 ｜ 火山口與砂千里 ｜ 大觀峰與午後彈性",
    note: "住：CAN LI ASSO。依 7/5 阿蘇日建議時程：上午草千里、火山口與砂千里之濱，中午 CAFE & SHOP GRASS LAND；午餐後先到阿蘇車站農產品店買晚餐，再順路停 ASO MILK FACTORY，之後上大觀峰與黑川溫泉短散策。",
    meals: {
      breakfast: "於別墅享用：前一日在 MERUKORO、Frein 超市或高森周邊採購的麵包、牛奶、水果與簡單早餐",
      lunch: "CAFE & SHOP GRASS LAND：草千里旁午餐，避免下山找餐廳",
      dinner: "17:00 前在阿蘇車站農產品店／道之驛阿蘇採買：阿蘇高菜飯糰、在地蔬果、熟食便當；ASO MILK FACTORY 補牛奶、優格、布丁或甜點，回 CAN LI ASSO 別墅享用"
    },
    weatherForecast: "阿蘇火山口與草千里屬中高海拔（標高約 1,140m），7 月山頂氣溫僅約 18°C~23°C，風勢甚猛、常現濃霧。紫外線偏高強，全體請備妥輕巧抗風防寒外套、太陽帽與遮陽傘。",
    rainBackup: "阿蘇火山和中岳火山口極易受大雨、濃霧或火山管制影響封鎖。若火山口不開放，火山口段改為阿蘇火山博物館，或改草千里越野車：一人一小時 6,000 日圓，從草千里之濱咖啡廳那邊買票搭車；午餐仍保留 CAFE & SHOP GRASS LAND。晚餐採買固定放在大觀峰之前；下午若黑川散策遇雨，改為短停拍照或直接回 CAN LI ASSO。",
    gasStationTip: "山區路段加油站較少。建議在中午山下至阿蘇市區用餐完，可在市區 【ENEOS】加油站加滿常規 Regular 油（Mantan），以策安全。",
    items: [
      {
        time: "08:30 - 09:10",
        place: "CAN LI ASSO → 草千里",
        move: "自駕約 30-40 分鐘山路車程",
        plan: "起床吃完早餐後，直接向阿蘇中岳山區出發，搶在上午天氣最為穩定、無濃霧干擾的黃金段參訪好景點。",
        memo: "山路向上需要集中注意力，長輩小孩在車上注意有無暈車，可以適當撥通風口度。米塚註記：約 08:50 前後會經過米塚周邊道路，若天氣清楚可在車上短暫看圓錐形火山丘，不安排下車避免壓縮草千里與火山口時間。",
        category: "car",
      },
      {
        time: "09:10 - 10:20",
        place: "草千里散步、拍照、讓小孩放電",
        move: "停車後步道踏青拍照",
        plan: "在火山遺跡巨大草原散步、拍照，讓小孩安全放電。這段先走戶外，午餐後再安排草千里商店與廁所休息。",
        memo: "停車：草千里付費大停車場。對手推嬰兒車 or 長輩都非常平坦好走、視野開闊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8818249,131.0533279",
        category: "nature",
      },
      {
        time: "10:30 - 11:10",
        place: "阿蘇中岳火山口 / 阿蘇火山博物館（雨天備案）",
        move: "車程自草千里約 10 分鐘",
        plan: "阿蘇火山口是重點景點，天候與管制允許就上火山口；若管制，立刻改阿蘇火山博物館，或回草千里安排越野車，不在山路上浪費時間。",
        memo: "停車：阿蘇中岳火山口收費停車場 / 草千里停車場。火山口實時狀況需隨時在車上刷網頁確認。火山口不開放時，草千里越野車可作為備案：一人一小時 6,000 日圓，從草千里之濱咖啡廳那邊買票搭車。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.884907,131.0849344",
        category: "nature",
      },
      {
        time: "11:10 - 11:30",
        place: "砂千里之濱短停",
        move: "火山口周邊短程移動",
        plan: "新增砂千里之濱作為阿蘇火山口周邊景點。若天候與管制允許，安排短停看黑色火山砂地形、拍照後回草千里午餐。",
        memo: "風大、地面較裸露，長輩與小孩以短停為主；若火山口封鎖、濃霧或路況不佳，直接跳過，改草千里越野車或阿蘇火山博物館。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%A0%82%E5%8D%83%E9%87%8C%E4%B9%8B%E6%BF%B1",
        category: "nature",
      },
      {
        time: "11:35 - 12:25",
        place: "CAFE & SHOP GRASS LAND 午餐",
        move: "火山口回草千里約 10 分鐘",
        plan: "中餐安排在 CAFE & SHOP GRASS LAND，吃完再買飲料與點心，不下山折返找餐廳。",
        memo: "停車：草千里付費大停車場。高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛丼，原因是阿蘇代表食材優先，最符合到草千里用餐的在地感；2. 赤牛咖哩，原因是觀光餐廳常見熱門主餐，份量穩定；3. 阿蘇牛奶霜淇淋，原因是阿蘇乳製品系人氣甜點，餐後降溫也好分食。無肉塊：高菜飯、白飯、沙拉或麵包類；咖哩醬可接受肉湯，若有肉塊挑開，避開整片火腿、培根品項。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8808848,131.0521499",
        category: "food",
      },
      {
        time: "12:30 - 12:55",
        place: "草千里商店 / 霜淇淋 / 廁所休息",
        move: "餐後原地補給",
        plan: "餐後在草千里商店補水、買霜淇淋與上廁所，整理好嬰兒車與車上點心後再往大觀峰。若火山口不開放且體力足夠，可在這段改買草千里越野車票。",
        memo: "這段是為長輩與小孩留的緩衝，不急著移動比較舒服。越野車備案：一人一小時 6,000 日圓，從草千里之濱咖啡廳那邊買票搭車。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8818249,131.0533279",
        category: "shop",
      },
      {
        time: "13:05 - 13:35",
        place: "阿蘇車站農產品店（道の駅 阿蘇）採買晚餐",
        move: "草千里至阿蘇車站約 25-35 分鐘",
        plan: "先在阿蘇車站旁農產品店把晚餐主食買齊，再往 ASO MILK FACTORY 與大觀峰。優先買阿蘇高菜飯糰、熟食便當、在地蔬果，回 CAN LI ASSO 直接分食，不再找晚餐餐廳。",
        memo: "採買移到大觀峰之前，避免黑川散策後趕 17:00。草千里下山往阿蘇車站途中約 12:55-13:05 會再經過米塚附近，可看右側草原與火山丘線條。買到需冷藏的水果與熟食，放保冷袋或車上陰涼處。高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛便當，原因是在地代表性高、回別墅可直接吃；2. 阿蘇高菜飯糰，原因是阿蘇名物，適合長輩與小孩；3. ASO MILK 牛奶或布丁可留到下一站 ASO MILK FACTORY 補。無肉塊：高菜飯糰、蔬果、麵包或甜點；熟食高湯可接受肉湯或魚介，便當配菜若有肉塊挑開。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%81%93%E3%81%AE%E9%A7%85%20%E9%98%BF%E8%98%87",
        category: "shop",
      },
      {
        time: "13:45 - 14:20",
        place: "ASO MILK FACTORY（阿部牧場直營店）",
        move: "阿蘇車站至 ASO MILK FACTORY 約 10-15 分鐘",
        plan: "順路停 ASO MILK FACTORY，買 ASO MILK 牛奶、優格、布丁、起司、霜淇淋或伴手禮。這站比從大觀峰或黑川折返更順，作為午後甜點與冷藏乳製品補給。",
        memo: "地址：熊本県阿蘇市小里781。官方資訊：Shop / Cafe 9:30-18:00，年中無休；仍建議出發前以 Google Maps 或官方頁確認當日營業。買冷藏品務必放保冷袋，避免接下來大觀峰與黑川停留時升溫。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=ASO%20MILK%20FACTORY%20%E7%86%8A%E6%9C%AC%E7%9C%8C%E9%98%BF%E8%98%87%E5%B8%82%E5%B0%8F%E9%87%8C781",
        category: "shop",
      },
      {
        time: "14:45 - 15:20",
        place: "大觀峰展望所 ＆ Aso Skyline 展望所",
        move: "ASO MILK FACTORY 至大觀峰約 20-30 分鐘",
        plan: "晚餐與乳製品補給買好後再上大觀峰。阿蘇外輪山最高展望點，環顧阿蘇五岳，其猶如靜躺的涅槃佛陀。晴朗首選、清風吹拂；霧氣若重，則保留 15 分鐘拍照後往黑川或回別墅。",
        memo: "停車：大觀峰大停車場。從停車點步行至碑文大約需要 10 分鐘上坡，建議長輩慢行。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.9982499,131.0709722",
        category: "nature",
      },
      {
        time: "15:45 - 16:20",
        place: "黑川溫泉街短散策 / 風の舎 / 湯音 / Patisserie Roku",
        move: "大觀峰後車程約 25-35 分鐘",
        plan: "保留黑川溫泉散策，改成短停不泡湯：走一小段溫泉街、買甜點或茶飲、拍照後準時上車。晚餐已在阿蘇車站買好，所以這段可以專心短散步，不再折返採買。",
        memo: "16:20 前離開黑川，回別墅時間較穩。若 ASO MILK FACTORY 停留超過 35 分鐘，黑川只短停拍照或直接回別墅。高人氣優先點餐指引｜不限飲食：1. 溫泉布丁，原因是溫泉街常見人氣甜點，份量小也好入口；2. 泡芙或蛋糕，原因是甜點店熱門外帶品項，不影響後續移動；3. 咖啡或茶飲，原因是搭配甜點最穩，山路前也能休息醒腦。無肉塊：無肉甜點或無酒精飲品；蛋奶與吉利丁可依個人接受度，重點避開明顯肉塊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%BB%92%E5%B7%9D%E6%B8%A9%E6%B3%89%20%E9%A2%A8%E3%81%AE%E8%88%8E",
        category: "rest",
      },
      {
        time: "16:20 - 17:40",
        place: "返回 CAN LI ASSO",
        move: "黑川溫泉街至別墅約 70-80 分鐘",
        plan: "帶著阿蘇車站農產品店與 ASO MILK FACTORY 買好的晚餐、乳製品與甜點回到南阿蘇舒適包棟別墅大客廳，全家圍坐分食。",
        memo: "別墅住宿空間大。晚餐買回來後先把需冷藏的牛奶、布丁、優格、起司與水果放進冰箱。整理明天退房行李，確認只保留 3 個 29 寸大行李箱、1 個大型手提旅行包與嬰兒車。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
        category: "hotel",
      },
    ],
  },
  {
    dayNum: 3,
    date: "2026/07/06",
    weekday: "一",
    title: "高千穗小火車、峽谷散步、八千代座",
    subTitle: "小火車優先、高千穗峽散步、阿蘇午餐、山鹿八千代座",
    hotel: "REF Kumamoto by VESSEL HOTELS (熊本新市街)",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.7989409,130.7055538",
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/stay/slide_moderate_01.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/stay/",
    hotelImageSourceName: "Vessel Hotels 官方客室頁",
    mainTheme: "高千穗小火車 ｜ 峽谷步道 ｜ 八千代座",
    note: "住：REF Kumamoto by VESSEL HOTELS。依截圖改成高千穗小火車優先，峽谷只散步拍照；午餐回阿蘇吃ごとう屋，下午接山鹿八千代座，傍晚進熊本市區。",
    meals: {
      breakfast: "在別墅內享用愜意晨食：簡單烘烤熱吐司、煎雞蛋與香濃咖啡/熱牛奶（準備行李退房）",
      lunch: "ごとう屋阿蘇店：高千穗峽後回阿蘇吃赤牛午餐",
      dinner: "熊本新市街美食街自選：熊本香濃濃拉麵、精緻壽司、高階馬肉刺身或拱廊居酒屋大餐"
    },
    weatherForecast: "高千穗峽谷身處深邃林澗，氣溫落在 20°C~25°C，非常清新涼爽。水氣充裕，午後易有短暫山區小雨。傍晚返回熊本市中心，氣溫略上升至 26°C~31°C。",
    rainBackup: "高千穗小火車若班次客滿，改拍高千穗駅與前往峽谷散步；峽谷遇大雨時不走濕滑步道，縮短拍照後提早往阿蘇午餐。若山鹿八千代座時間趕不上，改為外觀拍照後直接前往 REF。",
    gasStationTip: "高千穗出發返熊本市區為長途自駕（約 2.5 - 3 小時），多山路。出發前，可在高千穗神社周邊的【ENEOS 高千穗SS】（加油站）或【Apollo Station】把油箱補至 8 分滿，以提供高速大段巡航保障。",
    items: [
      {
        time: "08:00 - 09:30",
        place: "CAN LI ASSO 出發",
        move: "至高千穗約 80-100 分",
        plan: "南阿蘇住宿出發，先直達高千穗駅買小火車票。途中僅做必要洗手間短停，避免錯過 09:40 或 10:20 班次。",
        memo: "高千穗小火車官方常見班次有 09:40、10:20、11:00、11:40、12:20 等，實際以官網與現場為準。",
        category: "car",
      },
      {
        time: "09:30 - 09:40",
        place: "高千穂駅買小火車票",
        move: "抵達車站、確認班次",
        plan: "抵達高千穗駅後先買小火車票，優先看 09:40 班次；若已滿或時間太趕，改搭 10:20。",
        memo: "停車：高千穂駅免費停車場。六大一小先處理票券與廁所，再決定班次。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.714675,131.306904",
        category: "shop",
      },
      {
        time: "09:40 或 10:20",
        place: "高千穗あまてらす鐵道小火車",
        move: "依現場買到班次搭乘",
        plan: "搭高千穗小火車，從鐵橋俯瞰峽谷與山景。若 09:40 來不及，就改搭 10:20；若小火車取消，直接改高千穗峽散步。",
        memo: "此段以現場班次為準，不做過度緊繃安排。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.714675,131.306904",
        category: "car",
      },
      {
        time: "10:30 - 11:40",
        place: "高千穗峽散步、看真名井瀑布、拍照",
        move: "高千穗駅至峽谷約 10 分鐘",
        plan: "走峽谷步道，看真名井瀑布、拍照。停留抓 70 分鐘，避免後面阿蘇午餐與八千代座太趕。",
        memo: "停車：高千穗峽專用付費停車場。步道濕滑時以安全為先，縮短停留。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7012777,131.3007272",
        category: "nature",
      },
      {
        time: "11:45 - 13:10",
        place: "高千穗 → ごとう屋阿蘇店",
        move: "山路自駕約 80-90 分鐘",
        plan: "峽谷散步後離開高千穗，回阿蘇吃午餐。這段山路較長，讓孩子在車上休息。",
        memo: "若高千穗段延誤，午餐需改成沿途便利商店或直接跳到山鹿八千代座。",
        category: "car",
      },
      {
        time: "13:10 - 14:10",
        place: "ごとう屋阿蘇店吃赤牛",
        move: "抵達後用餐",
        plan: "午餐吃阿蘇赤牛，補足上午移動與散步消耗的體力。",
        memo: "若現場排隊太長，改外帶或附近簡餐，不影響 15:30 八千代座。高人氣優先點餐指引｜不限飲食：1. 阿蘇赤牛丼，原因是赤牛店最直覺、最熱門的招牌方向；2. 赤牛燒肉定食，原因是能吃到肉片香氣與口感，滿足度高；3. 赤牛牛排定食，原因是想認真吃阿蘇牛時最有代表性。無肉塊：高菜飯、漬物與白飯組合；味噌湯可接受魚介高湯，若套餐有肉塊就挑開或分給同行者。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.9340658,131.0664043",
        category: "food",
      },
      {
        time: "14:10 - 15:30",
        place: "ごとう屋 → 山鹿八千代座",
        move: "自駕約 75-85 分鐘",
        plan: "午餐後往山鹿移動，抵達後安排八千代座參觀。",
        memo: "若長輩或小孩已累，可改為山鹿短停拍照後直接進熊本市區。",
        category: "car",
      },
      {
        time: "15:30 - 16:40",
        place: "八千代座參觀",
        move: "山鹿市區停車後步行",
        plan: "參觀明治時代芝居小屋八千代座，欣賞舞台機關、花道與木造劇場空間。",
        memo: "停車依現場指引。若參觀時間異動，以官方開放時間為準。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=33.0169514,130.6897847",
        category: "nature",
      },
      {
        time: "16:40 - 17:40/18:00",
        place: "REF Kumamoto by VESSEL HOTELS",
        move: "山鹿至熊本市區約 60-80 分鐘",
        plan: "傍晚抵達位於熊本市中心新市街商圈的 REF Kumamoto 飯店安頓。晚餐於旁邊拱廊商店街簡單處理。",
        memo: "停車：飯店合作或自設大停車場。若晚餐在熊本新市街美食街自選，高人氣優先點餐指引｜不限飲食：1. 熊本拉麵，原因是黑蒜油豚骨最具熊本代表性；2. 壽司或海鮮丼，原因是商店街常見人氣選擇，食量彈性高；3. 居酒屋烤飯糰與炸物，原因是多人同行最容易補點分食。無肉塊：玉子、納豆、黃瓜卷、稻荷壽司、烤飯糰、炒飯或冷豆腐；炒飯若有肉末挑開即可，醬汁與高湯可接受魚介或肉湯。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7989409,130.7055538",
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
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.7989409,130.7055538",
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
    weatherForecast: "熊本市區約 27°C~31°C，多雲偶晴。午後由於熱對流，可能會有短暫雷陣雨，雨後會轉為防暑避暑的清爽天氣。全天適合市區室內商場與景點參觀。",
    rainBackup: "水前寺成趣園若下大雨，可縮短園內步道停留，改在名茶屋「古今傳授之間」內聽雨品抹茶；隨後移步前往「AMU PLAZA 熊本」，其為全方位室內大型商場，擁有 3 層樓高瀑布景致、兒童遊戲區與各種免稅店，下雨完全不受影響。",
    gasStationTip: "今日均在熊本市區移動，車程極短（5~20 分鐘為主）。市區有大量加油站，如【ENEOS 下通店】。因後續行程皆在市區，且第 6 天返台前才需滿油還車，今天可暫不用加油。",
    items: [
      {
        time: "10:15 - 11:30",
        place: "水前寺成趣園 (桃山式泉水迴遊庭園)",
        move: "自駕約 15 分鐘 (或路面電車直達)",
        plan: "引阿蘇泉水成池。觀賞假山富士地貌、在古色古香的古今傳授之間茶屋品酌正宗抹茶，長輩漫步聽風，小孩快樂餵錦鯉，大約停留 1.5 小時多。",
        memo: "停車：水前寺正門外周邊幾家投幣付費停車格。早晨陽光和暖最合適。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7911584,130.7333645",
        category: "nature",
      },
      {
        time: "11:20 - 14:30",
        place: "AMU PLAZA 熊本 ＆ 熊本拉麵黑亭 ＆ 觀光案內所",
        move: "自駕車程約 20 分鐘",
        plan: "避暑極選！逛熊本最新、最宏敞的熊本車站 AMU PLAZA 購物，看室內 3 層樓高大型清涼瀑布。午餐吃地圖推薦的『黑亭拉麵 熊本車站本店』，經典香烤黑蒜油濃郁老滋味、麵身勁道、美味老店！在案內所領取最新市區手冊。截圖上的熊本站周邊店家放在這段處理：UNIQLO、GU、BEAMS、BicCamera，適合需要補衣物、家電或順手看日牌時分組逛。",
        memo: "停車：AMU PLAZA 專用超大地下/立體停車場。熊本站周邊若只挑重點，優先 UNIQLO/GU 補衣物，BicCamera 看電器與藥妝，BEAMS 當日牌選逛。黑亭高人氣優先點餐指引｜不限飲食：1. 玉子入りラーメン，原因是黑亭代表款方向，黑蒜油豚骨加蛋最完整；2. 黑亭拉麵基本款，原因是最能吃出焦蒜油與中粗麵特色；3. 煎餃或炒飯，原因是拉麵店常見人氣配餐，適合多人分食。無肉塊：可點拉麵把叉燒分給其他人，湯底可接受豚骨；若想更清爽，改在 AMU PLAZA 買飯糰、麵包、甜點或炒飯，肉末挑開即可。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7890049,130.6886689",
        category: "shop",
      },
      {
        time: "15:00 - 17:00",
        place: "SAKURA MACHI 櫻町熊本 ＆ 空中大花園",
        move: "車程或電車約 15 分鐘",
        plan: "漫步屋頂森林花園、與巨型熊本熊合影留念及俯瞰熊本城。亦可在商場內給全家買名茶、冷飲。或隨時改由家人抱小孩回對面僅 5 分鐘步程 of REF 飯店睡午覺，分組逛商店街買精品，時間極其彈性。",
        memo: "停車：SAKURA MACHI 商城大型停車場，推嬰兒車或輪椅直達電梯零障礙。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8001831,130.7038171",
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
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.7989409,130.7055538",
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
    weatherForecast: "熊本市區約 27°C~31°C，多雲偏晴。盛夏氣流上升活躍，下午四點左右市區或有短暫雷對流，隨後涼爽宜人，非常適合傍晚徒步至勝烈亭吃晚餐。",
    rainBackup: "熊本城配有極其先進的「天守閣無障礙冷氣大電梯與玻璃扶手步道」，雨天可極致安逸地在室內吹冷氣、學熊本城築城與地震復興史；櫻之馬場與上通下通拱廊均設有密閉耐雨天棚（Arcade），可保持數百公尺乾爽。即使大雨磅礴，外婆與小孩在商店街散步逛藥妝店依然一滴雨都淋不到！",
    gasStationTip: "明天即將還車。租車規定還車前必須在機場周邊 3 公里內加油，所以今晚在市區不用特地加油。可以今晚把 Toyota 還車單、ETC 卡袋與護照放到便利隨行包，以便明早無驚無險滿油還車。",
    items: [
      {
        time: "09:00 - 11:30",
        place: "熊本城 (天守閣與雄偉石垣武者返)",
        move: "步行、搭路面電車或短程計程車 (約 10 分鐘)",
        plan: "日本三大名城之一，天守閣在地震後完美復興。特別備有最便利的手扶梯與全新無障礙空調，長輩即便退化也毫無門檻！登高俯瞰，平原江山一覽無遺，體驗極其深刻。",
        memo: "停車：熊本城 二の丸收費大停車場。亦可將車留飯店，搭路面電車前行。若長輩需要，景區入口可提供優質免費輪椅推行。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8061859,130.7058335",
        category: "nature",
      },
      {
        time: "11:30 - 14:00",
        place: "櫻之馬場 城彩苑 ＆ 旬彩館特色伴手禮採購",
        move: "城天守閣出口向下即達",
        plan: "江戶古街再現。午餐在木造拱廊街品嚐：爆汁海膽可樂餅、熊本熊可頌大判燒、特香馬肉可樂餅、特厚阿蘇布丁。走進『旬彩館』，把最棒的手信如陣太鼓等一併買齊封底！",
        memo: "停車：櫻之馬場 城彩苑 大專用停車場。高人氣優先點餐指引｜不限飲食：1. 海膽可樂餅，原因是城彩苑代表性人氣小吃，外酥內餡香濃；2. 熊本熊大判燒，原因是造型有記憶點，小孩接受度高；3. 阿蘇布丁或牛奶霜淇淋，原因是阿蘇乳製品系熱門甜點，7 月中午清涼好分食。無肉塊：紅豆或卡士達大判燒、阿蘇布丁或霜淇淋；蛋奶可依個人接受度，重點避開明顯肉塊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8036711,130.7037558",
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
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.798616,130.705876",
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
        category: "car",
      },
      {
        time: "08:25 - 09:35",
        place: "熊本市區 → 熊本機場周邊（預留油資加油）",
        move: "自駕約 45 - 60 分鐘車程",
        plan: "上高速口或走平面。在臨近還車點 3 公里內的加油站把車子加滿 Regular 常規無鉛（記住喊 Mantan，Regular滿油）。",
        memo: "⚠️日本加油一般需滿油還車，請向加油員工所索取實體滿油收據，還車時需仔細核對明細發票。",
        category: "car",
      },
      {
        time: "09:35 - 10:15",
        place: "TOYOTA 租車還車還所 ＆ 免費大接駁航廈",
        move: "Toyota還車、專車接駁至航廈大門 (約 5 分鐘)",
        plan: "在還車口把車移交。工作人員秒查車體外觀、油表收據、ETC扣款。全家拎大件行李上豐田免費大型中巴接駁，抵達航廈。",
        memo: "停車/導航：Toyota 熊本機場店，滿油後直接還車。拿好所有的手機和重要證件，再三過關！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8313063,130.8627347",
        category: "car",
      },
      {
        time: "10:15 - 11:55",
        place: "熊本機場國際航廈登機 ＆ 星宇 JX847 起飛回台",
        move: "辦理登機、托運大件、查票安檢",
        plan: "辦理 JX847 入住。托運超大免稅藥妝箱、折疊嬰兒飛框。出境後，在熊本免稅機場店購買特產，起飛回台！",
        memo: "航班資訊: 星宇航空 JX847 (11:55 起飛 -> 13:20 抵達桃園 T1)。圓滿美滿、回憶一生的九州幸福之行！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8349978,130.8589779",
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
      description: "這是自駕必停的日本國道服務特產站，全站販售的皆為阿蘇當地農家新鮮現送的極高品質蔬果與熟食便當。Day 2 先在這裡買晚餐主食，再順路去 ASO MILK FACTORY 補乳製品甜點。",
      tips: [
        "ASO MILK (阿部牧場)：獲得過食品界諾貝爾獎認證的米其林三星鮮乳，極度醇厚生甜，必買原味鮮乳與香濃布丁！",
        "阿蘇赤牛便當：嚴選阿蘇山特有赤牛肉，肉質帶有天然草草香！熟食區下午五點後會打折，買來當晚餐CP值極高。",
        "阿蘇高菜 (Takana)：日本三大醬菜之一，高菜香氣滿溢，阿蘇高菜飯糰長輩最愛。"
      ]
    },
    {
      title: "【阿蘇乳製品甜點】ASO MILK FACTORY",
      description: "阿部牧場直營的乳製品與甜點補給點，排在 Day 2 阿蘇車站採買後、大觀峰前最順路，不需要從大觀峰或黑川折返。",
      tips: [
        "優先買 ASO MILK 牛奶、優格、布丁、起司與霜淇淋，適合回 CAN LI ASSO 當晚餐後甜點。",
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
      title: "🔥 阿蘇火山中岳火口實時管制確認",
      content: "阿蘇火山是極其活躍的活火山，會排放大量具有毒性的二氧化硫與硫化氫氣體。管制分為【青(可上山)、黃(老人氣喘呼吸道敏感者停)、紅(全面封閉關閉)】。出發上車前，一定要打開網頁『阿蘇火山火口規制情報』實時查看。若遇到大霧或高氣體濃度關閉，請果斷改去草千里，千萬不要強行上山。"
    },
    {
      title: "草千里越野車與砂千里之濱備案",
      content: "砂千里之濱新增為阿蘇火山口周邊短停景點；若火山口不開放，行程改草千里越野車或阿蘇火山博物館。草千里越野車作為火山口管制備案，一人一小時 6,000 日圓，從草千里之濱咖啡廳那邊買票搭車。"
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
  { id: "c2", text: "好走不易滑的運動鞋 (大觀峰、鍋瀑布、高千穗峽岩石濕滑)", category: "clothing", checked: false },
  { id: "c3", text: "替換乾衣物多件、雨傘/雨衣 (高千穗峽步道與阿蘇山區晴雨兩用)", category: "clothing", checked: false },
  { id: "c4", text: "行李上限：1 台嬰兒車、3 個 29 寸大行李箱、1 個大型手提旅行包；不要帶登機箱或其他行李箱", category: "clothing", checked: false },
  
  // Pharmacy
  { id: "p1", text: "常用感冒藥、腸胃藥、創可貼 ＆ 暈車藥 (山路連綿轉彎極多)", category: "pharmacy", checked: false },
  { id: "p2", text: "防蚊液、防蚊貼、兒童退燒貼", category: "pharmacy", checked: false },
  
  // Child / Longterm
  { id: "ch1", text: "保溫水壺、防曬乳、濕紙巾/乾洗手", category: "child", checked: false },
  { id: "ch2", text: "長輩關節保健品 ＆ 小孩備用衣服多帶一套", category: "child", checked: false }
];
