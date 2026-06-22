import { ItineraryDay, Phrase, ChecklistItem } from "./types";

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    dayNum: 1,
    date: "2026/07/04",
    weekday: "六",
    title: "抵達熊本、南阿蘇補給、入住 CAN LI ASSO",
    subTitle: "先補給、再自然散步、採買回自炊別墅",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "手作烘焙 ｜ 純淨水源 ｜ 包棟自炊悠長假期",
    note: "住：南阿蘇 CAN LI ASSO。第一天不排黑川、不排阿蘇神社，保留取車與採買緩衝。住宿有廚房設備可簡單處理晚餐。",
    meals: {
      breakfast: "桃園機場貴賓室、星宇航空精緻機上早餐特饗餐點",
      lunch: "熊本機場抵達大廳簡餐（日式飯糰、超商熟食或車上輕便點心進食，保持右駕專注）",
      dinner: "道之驛阿蘇精選：極高人氣阿蘇限定赤牛漢堡便當、手工鮮奶布丁、高菜飯糰與 ASO MILK 鮮乳（買回別墅簡單溫熱享用）"
    },
    weatherForecast: "熊本平地高溫約 28°C~31°C 稍感悶熱；往阿蘇山區前行後，氣溫會平緩降至舒服的 21°C~25°C。午後多雲偶晴，山頂周遭略有短暫偶雨機率，建議帶防曬帽與防風薄外衣。",
    rainBackup: "白川水源步道兩旁樹木茂密，下小雨不影響漫步，反而格外清幽；若遇大雨，可縮短水源步行，直奔「道之驛阿蘇」室內特產販賣所採購，並提早回緊鄰的「CAN LI ASSO 別墅」辦理入住，在舒適寬敞的包棟空間中煮杯咖啡、悠閒避雨。",
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
        memo: "停車/導航：Toyota 熊本機場店。行李只放 1 台嬰兒車、3 個 29 寸大行李箱與大型手提旅行包；不要帶登機箱或其他行李箱，避免後車廂放不下。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8313063,130.8627347",
        category: "car",
      },
      {
        time: "13:00 - 13:40",
        place: "熊本機場 → MERUKORO",
        move: "自駕車程約 35-40 分鐘",
        plan: "開出機場朝阿蘇山區前行。第一站先補給著名的手作窯烤麵包與現做熱飲，避免後段採買前大家肚子太餓。",
        memo: "山路會有一些，注意長輩與小孩在車上的狀況，朝 16:30 抵達阿蘇車站的目標前進。",
        category: "car",
      },
      {
        time: "13:40 - 14:10",
        place: "MERUKORO 麵包店",
        move: "車停店前、進店採買",
        plan: "採買現烘麵包、熱美式、車上點心與牛奶補給。若熱門手工品項售罄，則改到道之驛阿蘇一併採買補足。",
        memo: "停車：MERUKORO 店旁/店前專用停車場。南阿蘇極受好評的地標麵包店。",
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
        time: "15:10 - 16:30",
        place: "白川水源 → 道之驛阿蘇",
        move: "自駕約 35-45 分鐘 (包含上山路況及塞車緩衝)",
        plan: "不加入阿蘇神社／門前町，也不提早跑黑川溫泉。安全、專注駕駛，直開至道之驛阿蘇進行晚餐與隔日補給採買。",
        memo: "直奔阿蘇車站，沿途森林風光迤邐，行車切勿超速。",
        category: "car",
      },
      {
        time: "16:30 - 17:15",
        place: "農産物・特産品販売所 (道の駅 阿蘇)",
        move: "抵達特產站採買",
        plan: "在道之驛阿蘇大量採購：當晚豐盛晚餐、隔天早上所需的麵包與牛奶早餐、優酪乳、水及零嘴。推薦品嚐阿蘇限定赤牛漢堡便當、手工布丁。",
        memo: "停車：道の駅 阿蘇 停車場。本店一般於 18:00 關店，排在 16:30 開始採購時間非常充實！",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.9369412,131.0808323",
        category: "shop",
      },
      {
        time: "17:15 - 17:45",
        place: "入住 CAN LI ASSO",
        move: "開車約 25-35 分鐘",
        plan: "辦理入住後，在寬敞舒適包棟別墅內自行烹飪或享用採購回來的晚餐。今天長度合適，大家早點入睡休息。",
        memo: "停車：住宿停車位，請依訂房指示停放。別墅設備齊全、採光好、隱私極佳。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
        category: "hotel",
      },
    ],
  },
  {
    dayNum: 2,
    date: "2026/07/05",
    weekday: "日",
    title: "阿蘇山核心日，鍋瀑布/黑川可選",
    subTitle: "草原、火山、大觀峰與彈性北阿蘇景點",
    hotel: "南阿蘇 CAN LI ASSO 自炊包棟別墅",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
    hotelImageUrl: "https://owners-inn.com/wp/wp-content/uploads/2025/08/20250730_106-1-scaled.jpg",
    hotelImageSourceUrl: "https://owners-inn.com/?p=18895",
    hotelImageSourceName: "Owners-Inn 官方住宿頁",
    mainTheme: "極地火山 ｜ 草千里午餐 ｜ 大觀峰黑川散策",
    note: "住：CAN LI ASSO。Day 2 改以草千里咖啡午餐為核心；下午排大觀峰，黑川散策為主，鍋瀑布與菊池溪谷視天候與體力取捨。",
    meals: {
      breakfast: "於別墅享用：前一日在 MERUKORO 與道之驛阿蘇採購之美味手作麵包、ASO MILK 牧場鮮奶與新鮮水果",
      lunch: "草千里珈琲焙煎所：在草原景觀旁吃簡餐、咖啡與甜點",
      dinner: "黑川溫泉街輕食點心後，回 CAN LI ASSO 別墅自炊或外帶晚餐"
    },
    weatherForecast: "阿蘇火山口與草千里屬中高海拔（標高約 1,140m），7 月山頂氣溫僅約 18°C~23°C，風勢甚猛、常現濃霧。紫外線偏高強，全體請備妥輕巧抗風防寒外套、太陽帽與遮陽傘。",
    rainBackup: "阿蘇火山和中岳火山口極易受大雨或濃霧影響封鎖。若遭遇封鎖：① 改去草千里旁的【阿蘇火山博物館】吹冷氣。② 午餐保留草千里珈琲焙煎所，看雨中大草原。③ 下午若鍋瀑布、菊池溪谷或黑川散策遇雨，直接縮短為大觀峰短停後回 CAN LI ASSO。",
    gasStationTip: "山區路段加油站較少。建議在中午山下至阿蘇市區用餐完，可在市區 【ENEOS】加油站加滿常規 Regular 油（Mantan），以策安全。",
    items: [
      {
        time: "08:30 - 09:10",
        place: "CAN LI ASSO → 草千里",
        move: "自駕約 30-40 分鐘山路車程",
        plan: "起床吃完早餐後，直接向阿蘇中岳山區出發，搶在上午天氣最為穩定、無濃霧干擾的黃金段參訪好景點。",
        memo: "山路向上需要集中注意力，長輩小孩在車上注意有無暈車，可以適當撥通風口度。",
        category: "car",
      },
      {
        time: "09:10 - 10:30",
        place: "草千里 ＆ 草千里珈琲焙煎所",
        move: "停車後步道踏青拍照",
        plan: "先在火山遺跡巨大草原散步、與馬兒互動、拍照留念。中午會回到草千里珈琲焙煎所吃飯，因此此段以散步與拍照為主。",
        memo: "停車：草千里付費大停車場。對手推嬰兒車 or 長輩都非常平坦好走、視野開闊。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8818249,131.0533279",
        category: "nature",
      },
      {
        time: "10:45 - 11:45",
        place: "阿蘇中岳火山口 / 阿蘇火山博物館（雨天備案）",
        move: "車程自草千里約 10 分鐘",
        plan: "中岳活火山口直擊，翡翠酸性碧湖煙霧裊裊，震撼視覺。若遇雨勢過大、濃霧吞噬或有害氣體超標而實施封鎖班次，改參觀草千里旁的『阿蘇火山博物館』吹冷氣、學習火山知識。",
        memo: "停車：阿蘇中岳火山口收費停車場 / 草千里停車場。火山口實時狀況需隨時在車上刷網頁確認。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.884907,131.0849344",
        category: "nature",
      },
      {
        time: "12:00 - 13:10",
        place: "草千里珈琲焙煎所午餐",
        move: "火山口回草千里約 10 分鐘",
        plan: "午餐改在草千里珈琲焙煎所吃簡餐、咖啡與甜點，讓長輩與小孩不用再下山找餐廳。",
        memo: "停車：草千里付費大停車場。若火山口管制或天候不佳，可直接提早進咖啡館用餐與休息。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8808848,131.0521499",
        category: "food",
      },
      {
        time: "13:45 - 14:50",
        place: "大觀峰展望所 ＆ Aso Skyline 展望所",
        move: "自駕車程約 25-35 分鐘",
        plan: "阿蘇外輪山最高展望點。環顧阿蘇五岳，其猶如靜躺的涅槃佛陀。晴朗首選、清風吹拂。霧氣若重，則保留 15 分鐘拍照後改前往飯店入住休息。",
        memo: "停車：大觀峰大停車場。從停車點步行至碑文大約需要 10 分鐘上坡，建議長輩慢行。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.9982499,131.0709722",
        category: "nature",
      },
      {
        time: "15:20 - 17:10",
        place: "黑川溫泉散策（可加入鍋瀑布或菊池溪谷）",
        move: "大觀峰至黑川約 30 分鐘；鍋瀑布需再加車程與預約",
        plan: "下午主軸改為大觀峰後前往黑川溫泉街散步，安排風の舎、湯音牛奶冰淇淋、Patisserie Roku 泡芙。若天氣很好且大家體力足，可先插入鍋瀑布；若想避暑親水，則以菊池溪谷替換鍋瀑布，不建議三者全硬跑。",
        memo: "停車：風の舎周邊停車場。鍋瀑布需線上預約；菊池溪谷路程較遠，加入時請刪減黑川停留時間。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=33.1375704,131.035374",
        category: "nature",
      },
      {
        time: "17:10 以後",
        place: "返回 CAN LI ASSO",
        move: "黑川回別墅約 70-90 分",
        plan: "回到南阿蘇舒適包棟別墅大客廳，晚餐以別墅自炊、外帶或超商買回美食拼盤，全家圍坐聊天，十分悠閒。",
        memo: "別墅住宿空間大。整理明天退房行李，確認只保留 3 個 29 寸大行李箱、大型手提旅行包與嬰兒車。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8234378,131.0261628",
        category: "hotel",
      },
    ],
  },
  {
    dayNum: 3,
    date: "2026/07/06",
    weekday: "一",
    title: "高千穗峽散步、回熊本市區",
    subTitle: "峽谷步道、神話深處散步與熊本REF大本營",
    hotel: "REF Kumamoto by VESSEL HOTELS (熊本新市街)",
    hotelUrl: "https://www.google.com/maps/search/?api=1&query=32.7989409,130.7055538",
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/common/ogp.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/",
    hotelImageSourceName: "Vessel Hotels 官方頁",
    mainTheme: "峽谷步道 ｜ 壯麗小火車 ｜ 熊本連住避風港",
    note: "住：REF Kumamoto by VESSEL HOTELS。高千穗峽改為峽谷步道、真名井瀑布拍照與神社散步，降低六大一小分組等待與天候風險。",
    meals: {
      breakfast: "在別墅內享用愜意晨食：簡單烘烤熱吐司、煎雞蛋與香濃咖啡/熱牛奶（準備行李退房）",
      lunch: "高千穗特色體驗：「千穗之家 元祖流水麵」或周邊鄉土料理，安排在峽谷散步後用餐",
      dinner: "熊本新市街美食街自選：熊本香濃濃拉麵、精緻壽司、高階馬肉刺身或拱廊居酒屋大餐"
    },
    weatherForecast: "高千穗峽谷身處深邃林澗，氣溫落在 20°C~25°C，非常清新涼爽。水氣充裕，午後易有短暫山區小雨。傍晚返回熊本市中心，氣溫略上升至 26°C~31°C。",
    rainBackup: "高千穗峽谷遇大雨時不走濕滑步道。小雨可撐傘短走自然散步道，仰望大懸崖與真名井瀑布；豪雨則改為高千穗神社短停、室內午餐後提早開往熊本，在 SAKURA MACHI 櫻町熊本避雨漫步。",
    gasStationTip: "高千穗出發返熊本市區為長途自駕（約 2.5 - 3 小時），多山路。出發前，可在高千穗神社周邊的【ENEOS 高千穗SS】（加油站）或【Apollo Station】把油箱補至 8 分滿，以提供高速大段巡航保障。",
    items: [
      {
        time: "08:00 - 09:40",
        place: "CAN LI ASSO 出發",
        move: "至高千穗約 80-100 分",
        plan: "退房、行李上車，朝高千穗前進，途中僅做公路超商或洗手間短停，保持老小舒適。以安全車程與峽谷散步品質為優先。",
        memo: "山道曲折蜿蜒，易暈車的家人需提前服用防暈車藥、多閉目養神。",
        category: "car",
      },
      {
        time: "10:00 - 12:40",
        place: "高千穗峽 / 真名井瀑布散步",
        move: "停車至步道登山慢行",
        plan: "以峽谷步道慢走、真名井瀑布拍照與午餐為主。這樣六大一小不用分組等待，也避免天候、水位與安全風險。",
        memo: "停車：高千穗峽專用付費大停車場，若停滿依引導前往臨時/第二停車場。步道濕滑時縮短停留。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7012777,131.3007272",
        category: "nature",
      },
      {
        time: "13:00 - 14:00",
        place: "高千穗神社",
        move: "開車約 5 分鐘",
        plan: "在具有 1900 年悠久歷史的神社古木森林中放空散步、攜手走過著名的夫婦杉杉木，停留 1 小時大口洗滌身心。",
        memo: "停車：高千穗神社專用免費停車場。綠蔭廣袤不燥熱，神聖清幽。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.7064465,131.3020093",
        category: "nature",
      },
      {
        time: "14:15 - 15:15",
        place: "高千穂駅 (可以取捨：觀光小火車 Grand Super Kart)",
        move: "車程僅 10 分鐘",
        plan: "彈性取捨點。體力充沛可前往坐卡丁露天小火車，在高達 105 米的全日本最高鐵路大橋頂眺望峽谷；若前段散步或午餐延遲，果斷取消不坐直奔熊本市區。",
        memo: "停車：高千穂駅免費停車場。火車為預票或排隊，不做硬性安排。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.714675,131.306904",
        category: "car",
      },
      {
        time: "15:20 - 18:00",
        place: "REF Kumamoto by VESSEL HOTELS",
        move: "高千穗至熊本市區約 2.5-3 小時重回城市",
        plan: "直抵位於熊本市中心新市街商圈的 REF Kumamoto 飯店安頓、享用大廳無限供應迎賓冷飲。晚餐於旁邊長約數百米、熱鬧無雨的拱廊商店街享用特色居酒屋或地產烏龍麵。",
        memo: "停車：飯店合作或自設大停車場。市區連住 3 晚、不需要每日裝箱，免去顛沛流離，極具休養價值。",
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
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/common/ogp.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/",
    hotelImageSourceName: "Vessel Hotels 官方頁",
    mainTheme: "優雅成趣園 ｜ 車站清涼瀑布 ｜ 黑蒜拉麵始祖",
    note: "住：REF Kumamoto。7/7 10:00 請記得選回程班機 JX847 機位；這天放慢腳步，以市區與室內補給為主。",
    meals: {
      breakfast: "REF 熊本新市街飯店豐富日式自助朝食（提供多達數十種熊本在地特色餐點與現烤麵包）",
      lunch: "三大拉麵名店：黑亭拉麵 熊本車站本店，焦香濃郁黑蒜油豚骨拉麵，中粗麵身、香氣十足",
      dinner: "熊本市中心、下通商店街自選：手作燒肉、日式定食、居酒屋或精緻壽司，步行可達，不累不折返"
    },
    weatherForecast: "熊本市區約 27°C~31°C，多雲偶晴。午後由於熱對流，可能會有短暫雷陣雨，雨後會轉為防暑避暑的清爽天氣。全天適合市區室內商場與景點參觀。",
    rainBackup: "水前寺成趣園若下大雨，可縮短園內步道停留，改在名茶屋「古今傳授之間」內聽雨品抹茶；隨後移步前往「AMU PLAZA 熊本」，其為全方位室內大型商場，擁有 3 層樓高瀑布景致、兒童遊戲區與各種免稅店，下雨完全不受影響。",
    gasStationTip: "今日均在熊本市區移動，車程極短（5~20 分鐘為主）。市區有大量加油站，如【ENEOS 下通店】。因後續行程皆在市區，且第 6 天返台前才需滿油還車，今天可暫不用加油。",
    items: [
      {
        time: "09:30 - 10:00",
        place: "選回程班機 JX847 機位",
        move: "手機或電腦線上辦理",
        plan: "7/7 10:00 準時選 7/9 回程星宇 JX847 機位，優先讓六大一小座位集中，並確認嬰兒相關需求。",
        memo: "訂位代號 EFGJC9。完成後截圖保存，避免出發日臨櫃座位分散。",
        category: "flight",
      },
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
        plan: "避暑極選！逛熊本最新、最宏敞的熊本車站 AMU PLAZA 購物，看室內 3 層樓高大型清涼瀑布。午餐吃地圖推薦的『黑亭拉麵 熊本車站本店』，經典香烤黑蒜油濃郁老滋味、麵身勁道、美味老店！在案內所領取最新市區手冊。",
        memo: "停車：AMU PLAZA 專用超大地下/立體停車場。商場 3 樓有專門為兒童設計的室內外露天滑梯樂園，吹冷氣也放心、安全好防護。",
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
        place: "新市街・下通拱廊商店街晚餐",
        move: "完全步行，不累不折返",
        plan: "夜幕降臨，飯店門口就是全熊本最寬敞的新市街商店街。晚餐在周邊任選極好吃的地產鄉土燒肉或拉麵居酒屋。隨後即可安穩散回飯店泡舒適的大浴場，安睡。",
        memo: "退房前夕，商店街旁有多家藥妝，伴手禮明信片均在此一網打盡。",
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
    hotelImageUrl: "https://www.vessel-hotel.jp/ref/kumamoto/_assets/img/common/ogp.jpg",
    hotelImageSourceUrl: "https://www.vessel-hotel.jp/ref/kumamoto/",
    hotelImageSourceName: "Vessel Hotels 官方頁",
    mainTheme: "巍峨名城 ｜ 旬彩之寶 ｜ 勝烈亭極樂豬排",
    note: "住：REF Kumamoto。最後完整一天集中熊本市區，少開車、多步行，便於長輩小孩體力調節。",
    meals: {
      breakfast: "REF 熊本 VESSEL 飯店特供：主廚現搓招牌熊本芥末蓮藕球、佐賀明太子飯糰、西式蓬鬆炒蛋配新鮮美式咖啡",
      lunch: "櫻之馬場 城彩苑散策美食：爆汁海膽可樂餅、熱呼呼熊本熊大判燒、黑毛和牛串燒與極香高千穗牛奶霜淇淋",
      dinner: "全日本炸豬排名店冠軍之首：勝烈亭新市街本店，招牌「鹿兒島六白里脊黑毛豬排大名套宴」（大人小孩均可樂趣式研磨金黃芝麻）"
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
        memo: "停車：櫻之馬場 城彩苑 大專用停車場。若買重物伴手禮過多，可塞嬰兒車，或讓父親先拎回一街之隔的 REF 飯店擺好，再度輕裝逛街。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8036711,130.7037558",
        category: "shop",
      },
      {
        time: "14:20 - 17:30",
        place: "上通與下通商店街無障礙雙拱廊",
        move: "完全步行穿梭，悠然自得",
        plan: "兩旁皆為免稅大藥妝鋪，寬大不淋雨！家人可在喫茶店吃生乳捲、咖啡。喜歡購置的家人則在杉藥局、松本清、大國狂歡，各取所需互不耽誤。",
        memo: "建議車子依舊安留 REF 免費停放。若需要臨時開過來，使用下通周邊投幣付費格。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.8018853,130.7089638",
        category: "shop",
      },
      {
        time: "18:00 - 19:40",
        place: "勝烈亭 新市街本店 - 炸豬排大名盛宴",
        move: "步行自下通返回新市街僅 5 分鐘",
        plan: "極上黑豬炸肉排，外層黃金酥脆、肉質多汁柔嫩爆汁，對老少皆是毫不費力的嚼勁！這是一定得吃過一輪的日本百名神店第一位！",
        memo: "建議車留飯店，直接步行前往。人多通常排很久，我們需要提前至官網進行網絡預約定位，或者提前於 17:40 現抽號碼牌。",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=32.798616,130.705876",
        category: "food",
      },
      {
        time: "20:00 之後",
        place: "REF 飯店大廳打包行李 ＆ 泡夜溫泉大退票",
        move: "步行走回",
        plan: "在房間打包行囊，把彩妝與手信妥善折箱、封底膠。再次核查護照無缺。睡好安穩，結束在熊本完美的最後大夜晚，明天準時起飛！",
        memo: "確認每箱大型行裝不超限。確認加油、Toyota 還車單、ETC文件已備齊放在手提袋內。",
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
      description: "這條長約 1 公里上無雨巨型遮雨棚商店街，好買、好逛且不怕日曬雨淋。這裡有各大藥妝松本清、Daikoku大國、杉藥局，以及大型百貨、百元店、各種熊本熊文創周邊。",
      tips: [
        "大國藥妝 (Daikoku)：一般藥品通常這家最便宜，常有中文店員服務，滿額可直接免稅退稅加打折。",
        "鶴屋百貨 (Tsuruya)：位於下通旁，這是有百年歷史的經典百貨，也是『熊本熊廣場 KUMAmon Square』的所在地，定時可以看熊本熊部長現場熱舞！",
        "Sugi 杉藥局：美妝保養與面膜款式最齊全，走精質感陳設，逛起來較舒服。"
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
      description: "這是自駕必停的日本國道服務特產站，全站販售的皆為阿蘇當地農家新鮮現送的極高品質蔬果、牛奶與熟食便當。",
      tips: [
        "ASO MILK (阿部牧場)：獲得過食品界諾貝爾獎認證的米其林三星鮮乳，極度醇厚生甜，必買原味鮮乳與香濃布丁！",
        "阿蘇赤牛便當：嚴選阿蘇山特有赤牛肉，肉質帶有天然草草香！熟食區下午五點後會打折，買來當晚餐CP值極高。",
        "阿蘇高菜 (Takana)：日本三大醬菜之一，高菜香氣滿溢，阿蘇高菜飯糰長輩最愛。"
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
  { id: "c4", text: "行李上限：1 台嬰兒車、3 個 29 寸大行李箱、大型手提旅行包；不要帶登機箱或其他行李箱", category: "clothing", checked: false },
  
  // Pharmacy
  { id: "p1", text: "常用感冒藥、腸胃藥、創可貼 ＆ 暈車藥 (山路連綿轉彎極多)", category: "pharmacy", checked: false },
  { id: "p2", text: "防蚊液、防蚊貼、兒童退燒貼", category: "pharmacy", checked: false },
  
  // Child / Longterm
  { id: "ch1", text: "保溫水壺、防曬乳、濕紙巾/乾洗手", category: "child", checked: false },
  { id: "ch2", text: "長輩關節保健品 ＆ 小孩備用衣服多帶一套", category: "child", checked: false }
];
