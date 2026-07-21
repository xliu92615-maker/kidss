import { Activity, Testimonial, FAQItem } from './types';
// @ts-expect-error - Vite handles png asset resolution dynamically
import pawPatrolImage from './assets/images/regenerated_image_1784626339310.png';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import bungeeImage from './assets/images/regenerated_image_1784546159951.jpg';
// @ts-expect-error - Vite handles png asset resolution dynamically
import farmerImage from './assets/images/regenerated_image_1784470844781.png';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import travel6Image from './assets/images/regenerated_image_1782471206148.jpg';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import travel11Image from './assets/images/regenerated_image_1782471567611.jpg';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import bakingImage from './assets/images/regenerated_image_1784378399919.jpg';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import vetImage from './assets/images/regenerated_image_1784379342558.jpg';
// @ts-expect-error - Vite handles jpg asset resolution dynamically
import creativeArtImage from './assets/images/regenerated_image_1784451946363.jpg';

// @ts-expect-error - Vite handles jpg asset resolution dynamically
import blueyImage from './assets/images/regenerated_image_1784623237664.jpg';

// @ts-expect-error - Vite handles png asset resolution dynamically
import safetyHeroImage from './assets/images/regenerated_image_1784624171638.png';

// @ts-expect-error - Vite handles jpg asset resolution dynamically
import dreamMissionImage from './assets/images/dream_mission_agency_1784625118879.jpg';

// @ts-expect-error - Vite handles png asset resolution dynamically
import nightExplorationImage from './assets/images/regenerated_image_1784625672950.png';

// @ts-expect-error - Vite handles png asset resolution dynamically
import dreamMissionNewImage from './assets/images/regenerated_image_1784625675076.png';

export const ACTIVITIES: Activity[] = [
  // Category: subject (主題活動)
  {
    id: 'career-1',
    title: '汪汪隊立大功 救援任務出動',
    category: 'subject',
    shortDesc: '汪汪隊快閃遊樂園：市區直達＋百元票價＋正版體驗',
    description: '專為小朋友設計的汪汪隊立大功快閃遊樂園！市區直達、百元票價即可享受正版授權的精彩體驗！設有氣墊滑梯、任務球池、攀爬闖關等全方位感官探索設施，讓孩子們化身汪汪隊成員，跟著阿奇、毛毛與萊德隊長一起出動救援！',
    image: pawPatrolImage,
    age: '3 - 16 歲',
    duration: '時間無限制',
    price: 'NT$299 一大一小',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 20,
    spotsLeft: 8,
    learningGoals: [
      '體驗汪汪隊正版授權趣味遊樂與闖關關卡',
      '透過模擬救援任務培養勇氣與自信心',
      '鍛鍊手眼協調、平衡感與大肌肉運動',
      '增進親子互動，在歡樂遊戲中建立親密連結'
    ],
    included: [
      '汪汪隊快閃遊樂園一大一小入場券',
      '救援任務主題限定貼紙與蓋章卡',
      '現場正版汪汪隊玩具與週邊參觀拍照機會'
    ],
    isPopular: true,
    tags: ['汪汪隊', '正版體驗', '快閃遊樂園', '一大一小']
  },
  {
    id: 'career-2',
    title: '兒童界高空彈跳＋體操體驗',
    category: 'subject',
    shortDesc: '飛起來了！孩子的夢想不是說說而已！【兒童界高空彈跳＋體操體驗】震撼登場',
    description: '全台首創專為兒童設計的高空彈跳與體操結合體驗！在安全防護裝備與專業教練的一對一指導下，讓孩子在空中盡情彈跳、翻轉，鍛鍊前庭覺、核心肌群與身體協調度。伴隨繽紛彩虹與快樂泡泡，勇敢突破自我，挑戰飛翔的樂趣！',
    image: bungeeImage,
    age: '3 - 12 歲',
    duration: '1.5 小時',
    price: 'NT$350 一大一小',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 15,
    spotsLeft: 5,
    learningGoals: [
      '促進兒童前庭覺與本體覺整合發展',
      '在空中自由彈跳與翻滾中鍛鍊核心肌群與肢體平衡',
      '培養面對高度與新奇運動的勇氣與自我突破精神',
      '一對一教練專業安全指導，讓孩子在最安全的環境下快樂飛翔'
    ],
    included: [
      '高空彈跳與體操全套頂級進口安全吊帶與彈力繩裝備使用',
      '國家級體操教練或專業引導師一對一貼身保護與引導指導',
      '特製高空飛翔勇士勳章與精美結業證書'
    ],
    isNew: true,
    tags: ['高空彈跳', '體操體驗', '前庭覺訓練', '勇氣挑戰']
  },
  {
    id: 'career-3',
    title: '巧虎見面會',
    category: 'subject',
    shortDesc: '最受小朋友歡迎的巧虎來囉！現場互動、唱歌跳舞，還有合照紀念！',
    description: '讓巧虎帶領寶貝們唱歌跳舞、學習生活禮貌與常規！現場還有精采的互動遊戲，以及難得的親密一對一合照環節，給孩子留下最溫暖、難忘的童年回憶！',
    image: bakingImage,
    age: '2 - 8 歲',
    duration: '1.5 小時',
    price: 'NT$299',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 20,
    spotsLeft: 3,
    learningGoals: [
      '透過歡樂的歌舞律動，訓練大肌肉與肢體協調能力',
      '在互動劇場中學習生活自理、禮貌、與人分享等優良常規',
      '與巧虎近距離接觸、擁抱，增進孩子的安全感與正向情緒發展',
      '培養公開場合團體活動的專注力與秩序感'
    ],
    included: [
      '巧虎限定版見面禮一份 (巧虎貼紙與小畫本)',
      '巧虎親密見面擁抱與單獨一對一合照拍立得一張',
      '全場熱情互動歌舞律動劇場入場資格'
    ],
    isPopular: true,
    tags: ['巧虎見面會', '明星互動', '歌舞律動', '親子共學']
  },
  {
    id: 'career-4',
    title: '救援小英雄波力見面會',
    category: 'subject',
    shortDesc: '勇敢的救援小隊波力大集合！一起跳舞、學習交通安全知識，還有合照留念！',
    description: '深受寶貝們喜愛的救援小英雄波力（Poli）來囉！跟著勇敢的波力隊長一起唱歌跳舞，學習最重要的交通安全常規。現場設有互動遊戲、有獎徵答，更有難得的親密擁抱與拍立得一對一合照環節，給孩子最威風、最有安全感的快樂回憶！',
    image: vetImage,
    age: '2 - 8 歲',
    duration: '1.5 小時',
    price: 'NT$299',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 20,
    spotsLeft: 4,
    learningGoals: [
      '透過生動活潑的交通安全短劇，加深寶貝的日常安全觀念',
      '歡樂的歌舞律動，促進大肌肉發展與身體平衡協調',
      '在互動遊戲中學習遵守秩序與團隊互助的合作精神',
      '近距離接觸卡通偶像，增進自信與正向社交互動經驗'
    ],
    included: [
      '波力限定版交通安全徽章與貼紙包一份',
      '波力親密見面擁抱與單獨一對一合照拍立得一張',
      '全場熱情互動交通安全劇場與律動體驗資格'
    ],
    isPopular: true,
    tags: ['波力見面會', '交通安全', '明星互動', '歌舞律動']
  },
  {
    id: 'career-5',
    title: '妙妙犬布麗見面會',
    category: 'subject',
    shortDesc: '最受歡迎的布麗來囉！親子互動、合影打卡、歡樂遊戲，陪伴寶貝快樂過暑假！',
    description: '深受小朋友喜愛的妙妙犬布麗（Bluey）見面會來囉！現場準備了精彩有趣的親子互動遊戲，讓家長與孩子一同參與，增進家庭親密情感。還有專屬的合影打卡時間，與布麗近距離接觸拍照留念，以及豐富歡樂的團體遊戲，給孩子最快樂、最溫馨的童年回憶！',
    image: blueyImage,
    age: '3 - 12 歲',
    duration: '1.5 小時',
    price: 'NT$399 一大一小',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 20,
    spotsLeft: 6,
    learningGoals: [
      '在親子互動遊戲中，增進家長與寶貝間的親密默契',
      '透過經典唱跳律動，鍛鍊寶貝的肢體協調與音樂節奏感',
      '與超人氣明星布麗擁抱合照，豐富孩子的童年想像力',
      '引導孩子融入團體情境，培養樂觀與積極的社交能力'
    ],
    included: [
      '布麗親密見面擁抱與單獨一對一合照拍立得一張',
      '見面會特製限定貼紙與蓋章卡一組',
      '全場熱情互動與親子遊戲體驗資格'
    ],
    isNew: true,
    tags: ['布麗見面會', '親子互動', '合影打卡', '歡樂遊戲']
  },

  // Category: travel (親子旅遊資訊)
  {
    id: 'travel-1',
    title: '【夢幻公主日】公主夢成真！專業兒童彩妝體驗、夢幻造型',
    category: 'colearning',
    shortDesc: '前20位報名贈 Shushu & Sassy冰雪奇緣聯名款彩妝乙組！',
    description: '孩子的童年只有一次，讓我們一起陪伴她，完成一次屬於自己的公主夢✨ 前20位報名即贈送 Shushu & Sassy 冰雪奇緣聯名款彩妝乙組！名額有限，額滿為止。專業兒童彩妝體驗與夢幻公主造型，讓寶貝實現心中的美麗童話。',
    image: creativeArtImage,
    age: '3 - 12 歲',
    duration: '2 小時',
    price: 'NT$450 (含限定奢華彩妝組、公主禮服租借、一對一美甲美髮造型、沙龍攝影與大相框)',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市精選星級飯店、美學特約空間 (請加LINE確認最新預訂名額)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 20,
    spotsLeft: 6,
    learningGoals: [
      '圓滿公主夢想，提升個人美感素養與自我認同',
      '體驗無毒安全的兒童專用彩妝與專業美甲設計',
      '自信展現自我，在舞台或合影中大方展露笑容',
      '增進親子情感，共同記錄童年最夢幻耀眼的瞬間'
    ],
    included: [
      'Shushu & Sassy 冰雪奇緣聯名款彩妝組乙份 (限定前20位)',
      '專業無毒彩妝、夢幻造型與精緻公主禮服現場體驗',
      '一對一造型師量身打造公主妝容與精緻美甲服務',
      '專屬夢幻場景精緻拍照留念與數位電子照片提供'
    ],
    isPopular: true,
    tags: ['公主夢成真', '彩妝體驗', '無毒彩妝', '夢幻造型']
  },
  {
    id: 'travel-2',
    title: '【小農生存】小農夫生存挑戰，限時半價優惠中！',
    category: 'colearning',
    shortDesc: '一場突如其來的大雨打亂了農場！現在需要勇敢的小農夫們出動，完成任務！',
    description: '一場突如其來的大雨，讓農場裡的動物四處逃跑、蔬果散落各地，現在需要勇敢的小農夫們出動，完成今天的重要任務！\n\n✨訂製小農夫服裝，可帶回家！\n🌽 收成採集任務\n🥚 尋找神秘雞蛋\n🐑 餵食可愛小動物\n🚜 農夫搬運挑戰',
    image: farmerImage,
    age: '3 - 12 歲及家長',
    duration: '2 小時',
    price: 'NT$399 (限時半價優惠中！原價 NT$799)',
    location: '各縣市特約有機教育農場 (請加LINE預訂時段)',
    fullAddress: '各縣市特約有機教育農場 (請加LINE確認最新預訂名額)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 15,
    spotsLeft: 6,
    learningGoals: [
      '穿上專屬訂製的小農夫服裝，體驗一日真實農夫生存挑戰',
      '完成🌽收成採集任務，認識當季有機作物與採摘技巧',
      '展開🥚尋找神秘雞蛋大冒險，訓練極佳眼力與敏銳觀察力',
      '溫柔親近並🐑餵食可愛小動物，建立對生命的愛心與尊重感',
      '挑戰🚜農夫搬運障礙關卡，訓練大肌肉、肢體平衡與意志力'
    ],
    included: [
      '✨客製訂製專屬防髒小農夫服裝一套 (可直接穿回家留念！)',
      '🌽個人專屬小農夫採集提籃、小鏟子與採收有機作物一袋',
      '🥚神秘彩蛋驚喜好禮與安全無毒新鮮動物飼料一份',
      '🚜小農夫生存挑戰榮譽結業證書與專屬紀念大勳章一枚'
    ],
    isPopular: true,
    tags: ['小農夫挑戰', '動物餵食', '限時半價', '五感探索']
  },
  {
    id: 'travel-3',
    title: '職安小英雄【最接地氣的感恩教育】',
    category: 'colearning',
    shortDesc: '今年最觸動人心的親子職業體驗！戴上工程帽，體會辛苦，理解責任。',
    description: '體會辛苦：戴上工程帽、手拿工具，明白上班需要付出汗水。\n理解責任：知道安全是為了「平安回家陪你」，理解父母的叮嚀。\n建立崇拜：發現爸爸媽媽在社會上，是默默守護大家安全的無名英雄。\n今年最觸動人心的親子職業體驗。',
    image: safetyHeroImage,
    age: '4 - 12 歲及家長',
    duration: '2 小時',
    price: 'NT$299 一大一小',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 15,
    spotsLeft: 5,
    learningGoals: [
      '體會辛苦：明白上班需要付出汗水',
      '理解責任：理解父母的叮嚀與安全的意義',
      '建立崇拜：認識社會上的無名英雄',
      '培養對各行各業的感恩與尊重'
    ],
    included: [
      '小職人專屬工程帽及安全背心體驗',
      '職安小英雄結業證書',
      '親子職業探索闖關手冊'
    ],
    isPopular: true,
    tags: ['職業體驗', '感恩教育', '親子共學']
  },
  {
    id: 'travel-4',
    title: '【森林探索】夜間甲蟲探索隊：陽明山昆蟲觀察與微型生態箱手作',
    category: 'colearning',
    shortDesc: '戴上安全頭燈，夜巡神祕森林！尋找獨角仙、手作微型循環生態箱！',
    description: '戴上安全頭燈，跟著專業生態講師走入夜間神祕的森林！尋找樹幹上的獨角仙、鍬形蟲與閃爍的螢火蟲。孩子將學會如何溫和、安全地親近大自然與昆蟲，不破壞生態。最後親子將利用苔蘚、蕨類與微型公仔，在密閉玻璃罐中親手組裝一個可以永續循環的「綠意微型生態苔蘚箱」帶回家！',
    image: nightExplorationImage,
    age: '4 - 12 歲及家長',
    duration: '2.5 小時',
    price: 'NT$450 (含微型玻璃生態箱材料、生態頭燈租借、昆蟲放大鏡與專業導覽)',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市精選生態森林步道、森林美學教室 (請加LINE報名確認)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 10,
    spotsLeft: 3,
    learningGoals: [
      '親自深入夜間森林，認識甲蟲、節肢動物與夜間動植物生態',
      '學習永續微氣候原理，理解水循環、植物光合作用與生態自循環',
      '培養溫和、尊重自然的觀察觀念，建立環境保護意識',
      '動手捏製微型景觀，提升空間層次美感與多維觸覺發展'
    ],
    included: [
      '手作自循環綠意微型苔蘚生態玻璃箱一組 (含植物、苔蘚、裝飾砂、微型甲蟲公仔)',
      '專業夜間生態觀察頭燈、高倍數發光昆蟲放大鏡現場租借',
      '國家級特約雙生態講師全程安全戒護與深度導覽解說',
      '森林昆蟲大冒險榮譽小隊員專屬胸章與導覽圖鑑護照'
    ],
    isPopular: true,
    tags: ['夜間探索', '甲蟲昆蟲', '自循環生態', '植物手作']
  },
  {
    id: 'travel-5',
    title: '夢境任務局 Dream Mission Agency',
    category: 'colearning',
    shortDesc: '全台首創沉浸式兒童冒險體驗！別再讓他們的週末只剩下平板和電視！',
    description: '全台首創沉浸式兒童冒險體驗\n別再讓他們的週末只剩下平板和電視！\n✔️沉浸式劇情體驗\n✔️專屬夢境守護者勳章與證書\n🌙 名額有限，採預約報名制，額滿即停止受理：\n\n讓孩子在遊戲中學習合作、勇敢挑戰、解決問題，也讓爸爸媽媽一起成為故事中的英雄！',
    image: dreamMissionNewImage,
    age: '4 - 14 歲及家長',
    duration: '2.5 小時',
    price: 'NT$550 一大一小',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市皆有舉辦 請加Line詢問預約',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 8,
    spotsLeft: 2,
    learningGoals: [
      '讓孩子在遊戲中學習合作與團隊精神',
      '鼓勵勇敢挑戰未知與突破自我設限',
      '培養解決問題的能力與邏輯思考',
      '讓爸爸媽媽一起成為故事中的英雄'
    ],
    included: [
      '沉浸式劇情體驗',
      '專屬夢境守護者勳章與證書'
    ],
    isPopular: true,
    tags: ['沉浸式體驗', '兒童冒險', '夢境任務', '親子合作']
  },
  {
    id: 'travel-6',
    title: '【木育手作】小小魯班特訓營：親子手作木製彈珠台與發光音樂盒',
    category: 'colearning',
    shortDesc: '親手組裝、打磨溫潤實木！敲敲打打打造復古彈珠台與發光音樂盒！',
    description: '親手觸摸溫潤的原木，聞一聞淡淡的木質香！由專業木工美學講師帶領，認識多種木材種類。親子一同使用符合安全規格的小木槌、磨砂紙、螺絲起子，從打磨、組裝到裝飾，親手打造一台屬於自己的「復古彈珠台」或「星空發光音樂盒」。在敲敲打打中鍛鍊手腦協調、立體空間思維與專注力！',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    age: '5 - 12 歲及家長',
    duration: '2 小時',
    price: 'NT$450 (含實木彈珠台DIY材料包、安全工具現場租借、專屬客製雷雕刻字、精美提袋)',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市合格木工美學創客基地 (請加LINE查詢最新場次)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 10,
    spotsLeft: 4,
    learningGoals: [
      '認識多種溫潤的原木木材，了解樹木年輪與森林保育概念',
      '學習正確使用基礎木工工具（小木槌、起子、砂紙），訓練大肌肉與精細動作協調',
      '親手解構並重新組裝機械齒輪與彈珠迴路，理解結構力學與彈力加速度',
      '在親自動手做中建立工作條理，享受從無到有的巨大創造快感'
    ],
    included: [
      '頂級進口松木安全實木彈珠台材料包一組 (含鋼珠、擋片、彩繪裝飾紙貼)',
      '專業兒童安全防護手套、微型木槌、不同目數砂紙、水性無毒木漆現場租借',
      '專屬雷射雕刻服務 (可在作品側面刻上寶貝的英文名字或專屬祈福心願)',
      '「魯班工坊特訓結業」雷雕木質榮譽大勳章一枚'
    ],
    isPopular: true,
    tags: ['木工手作', '復古彈珠台', '工具學習', '空間解構']
  },
  {
    id: 'travel-7',
    title: '【感官美學】瘋狂色彩水球畫布派對：親子自由塗鴉創作',
    category: 'colearning',
    shortDesc: '打破規矩！用雙手、雙腳與彩色水球，潑灑出一幅繽紛無敵的壁畫！',
    description: '這裡絕對沒有「不可以」！在全防護、無毒可水洗的巨幅畫布空間裡，寶貝可以盡情用雙手、雙腳甚至水球沾滿七彩繽紛的藝術顏料，潑灑出最真摯的創意。一場徹底解放壓力的五感派對，刺激大腦視覺與觸覺神經，親子一起拿起水球丟向畫布，創作出世上獨一無二的「家庭繽紛壁畫」！',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
    age: '2 - 10 歲及家長',
    duration: '1.5 小時',
    price: 'NT$350 (含全身防水防髒畫衣、歐盟無毒水洗顏料、客製厚磅畫布一面、暖心沐浴區使用)',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市無障礙無拘無束美學大教室 (請加LINE預訂)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 12,
    spotsLeft: 5,
    learningGoals: [
      '突破框架限制，徹底解放日常壓力與焦慮，建立大膽自信與想像力',
      '透過全身性大動作潑墨與水球投擲，開發兒童本體覺與大肌肉群發展',
      '接觸不同濃稠度與冷暖色調之顏料，極致鍛鍊多重感官感知統合',
      '親子共同在無常規畫布上揮灑，創造毫無束縛的家庭溫馨歡笑記憶'
    ],
    included: [
      '全身全密封透氣式防髒雨衣畫衣現場提供、拋棄式止滑腳套與護目鏡租借',
      '符合歐盟最高環保標準之防過敏、極好清洗、無味純天然無毒藝術顏料無限量供應',
      '親子共創專屬客製厚磅大畫布一面 (附大師級實木裝飾框與提袋，可裱框帶回家)',
      '溫水洗沐清理區（提供頂級溫和洗沐乳、蓬鬆大浴巾與強效吹風機，吹乾不怕著涼）'
    ],
    isPopular: true,
    tags: ['色彩塗鴉', '五感派對', '水球創作', '釋放壓力']
  },
  {
    id: 'travel-8',
    title: '【黏土手作】繽紛微縮甜點派對：親子輕黏土美學設計課',
    category: 'colearning',
    shortDesc: '揉、捏、塑形極致療癒！使用日本無毒輕黏土，捏出超精緻迷你甜點盆景！',
    description: '揉、捏、戳、滾，玩出無限驚奇！本課程引進日本高質感無毒環保輕黏土，由專業黏土造型大師帶領。孩子將學習黏土混色調色、塑形與肌理刻畫技巧，與爸媽一起捏出一個個極具擬真、精緻美味的迷你草莓蛋糕、彩色馬卡龍與糖霜冰淇淋，最後搭配精美裝飾玻璃罩，製成精緻的永恆甜點盆景！',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    age: '3 - 12 歲及家長',
    duration: '1.5 小時',
    price: 'NT$299 (含日本無毒輕黏土材料、實木裝飾玻璃罐一個、專用塑形工具、結業證書)',
    location: '各縣市皆有舉辦 請加Line詢問預約',
    fullAddress: '各縣市精選文創手作空間 (請加LINE預訂)',
    date: '場次眾多 請加LINE詢問預約報名',
    spots: 15,
    spotsLeft: 7,
    learningGoals: [
      '提升兒童精細動作協調度，在混色揉合中訓練色彩敏銳感知',
      '學習立體微縮空間結構搭配，理解幾何造型重疊與比例分配',
      '培養孩子對日常甜點美食與花卉植物的擬真觀察力與想像力',
      '在高度專注的作品雕琢中建立自我專注力、耐心與完美細節掌控'
    ],
    included: [
      '日本進口無毒親膚安全彩色輕黏土材料包一組 (包含亮油、仿真草莓與珍珠裝飾)',
      '極致精美手工高透防塵玻璃罐一組 (含質感北歐實木底座)',
      '黏土造型大師專用全套不鏽鋼/塑料精細塑形壓紋工具現場借用',
      '小小微縮美學工藝大師精緻彩色結業證書'
    ],
    isPopular: true,
    tags: ['輕黏土', '微縮模型', '美感設計', '肌肉精細動作']
  },

  {
    id: 'study-1',
    title: '【美國波士頓】小小常春藤學術菁英體驗夏令營',
    category: 'study',
    shortDesc: '前進哈佛與MIT！與名校教授互動、體驗常春藤課堂，開啟全球視野！',
    description: '專為國小高年級與國中、高中生量身規劃的頂級名校學術啟蒙營！孩子將漫步於世界頂尖學府哈佛大學 (Harvard) 與麻省理工學院 (MIT)，由名校在校生與教授帶領，進行啟發式的跨學科專題討論；入住安全寧靜的波士頓校區，在純英語的浸潤式環境中練習學術口語發表、科學實驗動手做，並體驗原汁原味的美國校園文化，為未來的國際升學之路播下夢想種子！',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    age: '9 - 18 歲 (依年齡分組組隊)',
    duration: '14 天 13 夜 (含往返機票與全包行程)',
    price: '代訂尊榮VIP保留位：預約請加LINE專案詢問與客製估價',
    location: '美國波士頓 / 哈佛大學、MIT校區',
    fullAddress: '美國麻薩諸塞州波士頓 (Harvard Square, Cambridge, MA)',
    date: '暑期限定：A梯 7/05 - 7/18、B梯 8/02 - 8/15',
    spots: 20,
    spotsLeft: 4,
    learningGoals: [
      '沉浸於哈佛、MIT名校學術氛圍，激發高遠的人生志向與求知動機',
      '在24H全美語浸潤式環境中，建立學術發表與跨文化社交的表達自信',
      '學習頂尖名校的簡報技巧與團隊專案研究方法 (PBL)',
      '培養獨立自主的生活能力，體驗北美頂級城市的多元人文美學'
    ],
    included: [
      '美西/美東來回國際機票、全行程豪華巴士交通接駁',
      '名校校區星級安全學生公寓住宿及全餐營養膳食',
      '哈佛/MIT學術探索講堂、官方結業證書與專屬推薦信',
      '專業中英雙語隨隊領隊教官、全額百萬海外遊學與突發醫療保險'
    ],
    isPopular: true,
    tags: ['常春藤名校', '波士頓遊學', '英文簡報', '國際視野']
  },
  {
    id: 'study-2',
    title: '【日本東京】STEAM科技、航太與動漫美學探索冬令營',
    category: 'study',
    shortDesc: '前進筑波航太基地、森美術館與三鷹之森！結合科技與美學的奇幻旅程！',
    description: '結合日本頂尖科學技術與世界級動漫美學的跨領域探險！我們將帶領寶貝前往「筑波宇宙中心 (JAXA)」親眼觀摩真實火箭發射控制台，學習航太重力知識；隨後前往東京台場未來科學館親手體驗人形機器人互動。在美學探索中，拜訪宮崎駿的三鷹之森吉卜力美術館、森美術館，解析分鏡與手繪的藝術工藝，在傳統與現代交融中培養孩子未來的 STEAM 跨界創造力。',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    age: '7 - 15 歲 (歡迎親子同行，亦可獨立參團)',
    duration: '6 天 5 夜',
    price: '代訂尊榮VIP保留位：預約請加LINE專案詢問與客製估價',
    location: '日本東京 / 筑波航太基地、六本木、台場',
    fullAddress: '日本東京都及茨城縣筑波市太空中心',
    date: '寒假限定：A梯 1/25 - 1/30、B梯 2/05 - 2/10',
    spots: 18,
    spotsLeft: 6,
    learningGoals: [
      '了解世界前沿機器人、人工智能與日本宇宙航空 (JAXA) 基礎科學',
      '培養美學感知：深度解析宮崎駿動畫手稿與當代藝術展覽',
      '體驗精緻的日本生活教育與垃圾分類等公共空間秩序禮儀',
      '鍛鍊團隊合作解謎與旅行自主規劃的獨立思考能力'
    ],
    included: [
      '台北/東京豪華往返機票與日本當地環保綠能巴士接送',
      '特約極致整潔親子星級酒店 (附設溫泉與全日自助營養和餐)',
      '筑波太空中心、吉卜力美術館與未來科學館全區門票與專人日語翻譯導覽',
      '特製「STEAM星際科技探索家」中日雙語精裝結業證書'
    ],
    isNew: true,
    tags: ['筑波太空', '吉卜力美術館', '機器人科技', '日本美學']
  },
  {
    id: 'study-3',
    title: '【新加坡】頂尖雙語領袖、綠色生態與多元科技啟蒙營',
    category: 'study',
    shortDesc: '參訪新加坡國立大學！探索新生水廠與濱海灣花園，培養世界小領袖！',
    description: '前進亞洲最安全的雙語花園城市！學童將深入「新加坡國立大學 (NUS)」與名校學長姐面對面，體驗專題思辨；接著走訪獨創的濱海灣花園超級樹 (Supertrees) 與新生水展覽館 (NEWater)，實地解密世界級的綠色循環與海水淡化科技。透過小組雙語任務，讓孩子在多元文化（牛車水、小印度）的交織中勇敢用英語溝通，開啟解決全球議題的世界領袖眼界。',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    age: '6 - 14 歲 (適合親子共學或學童獨立參團)',
    duration: '7 天 6 夜',
    price: '代訂尊榮VIP保留位：預約請加LINE專案詢問與客製估價',
    location: '新加坡 / 新加坡國立大學、濱海灣、聖淘沙',
    fullAddress: '新加坡共和國 (21 Lower Kent Ridge Rd, National University of Singapore)',
    date: '寒暑假皆有出團：詳情請加LINE客服索取簡章',
    spots: 22,
    spotsLeft: 5,
    learningGoals: [
      '建立宏大的全球環境永續發展觀點 (SDGs)：海水淡化、雨水回收技術',
      '在百分百友善的英語環境中實戰口語社交，克服發言恐懼',
      '體驗多元族群融合文化，擴大同理心與國際包容力',
      '參訪頂尖亞洲第一學府 (NUS)，激發名校留學抱負'
    ],
    included: [
      '豪華航空公司國際往返客機、高規格冷氣大巴士全天候接送',
      '聖淘沙及新加坡市區特約星級親子安全連鎖酒店',
      '環球影城主題樂園、濱海灣雙溫室花園、新生水科技館VIP門票與導覽',
      '新加坡「跨文化卓越小領袖」中英雙語結業證書與專案紀錄照片集'
    ],
    isPopular: true,
    tags: ['新加坡留遊學', '亞洲第一學府', 'SDGs綠色科技', '雙語思辨']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    parentName: '陳媽媽',
    childName: '樂樂',
    childAge: '5 歲',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    activityTitle: '幸福超商小小店長體驗',
    content: '以前樂樂去超商只會吵著買玩具，自從參加了小小店長，知道店員哥哥姐姐很辛苦。回家還會學著把自己的玩具排整齊，說「歡迎光臨、謝謝你」，真的是太棒的禮儀養成課了！收銀體驗時嗶嗶聲讓他興奮了好幾天！',
    rating: 5,
    date: '2026-05-12'
  },
  {
    id: 't-2',
    parentName: '張爸爸',
    childName: '小宇',
    childAge: '7 歲',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    activityTitle: '汪汪隊立大功 救援任務出動',
    content: '小宇是汪汪隊的狂熱粉絲！這次快閃遊樂園雖然票價便宜，但正版授權的遊樂設施質感極佳！關卡設計得非常好玩，小宇跑跑跳跳、攀爬闖關完全停不下來，放電放得非常徹底。一大一小的票價只要299元真的很佛心，市區直達又方便，極力推薦給所有汪汪隊小粉絲！',
    rating: 5,
    date: '2026-06-03'
  },
  {
    id: 't-3',
    parentName: '林美美',
    childName: '彤彤',
    childAge: '4 歲',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    activityTitle: '小小藍帶西點烘焙師體驗營',
    content: '彤彤平時手部力道掌控不好，沒想到在烘焙大師的溫柔引導下，竟然能自己搓揉出一個個漂亮的杯子蛋糕胚！擠花的時候雖然沾得滿臉都是，但她專注的表情真的好迷人。帶回家的成品全家人一起吃，彤彤自信心爆棚！極力推薦！',
    rating: 5,
    date: '2026-06-18'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '請問報名流程是怎樣的？點選「立即報名」後該如何操作？',
    answer: '報名流程非常簡單：\n1. 瀏覽網站，挑選您與寶貝心儀的活動。\n2. 點選活動卡片下方的「立即報名」按鈕，網頁會引導您跳轉至我們的官方 LINE 客服。\n3. 加入好友後，系統會自動發送活動報名表單連結，或您可以直接在 LINE 中留下您的「家長姓名、手機、寶貝姓名、年齡、想報名的活動名稱與場次」。\n4. 客服人員將在 10 分鐘內為您確認保留名額，所有活動付款方式皆為活動當天現場繳費即可！'
  },
  {
    id: 'faq-2',
    question: '活動進行中，家長可以全程在旁陪同或一起參與嗎？',
    answer: '是的！「啟夢教育」的核心理念就是增進親子親密互動。除了少數場地空間有限的特定活動（如特定超商內部收銀台，家長會在櫃檯外側線後拍照觀看），95% 的活動皆「非常歡迎且鼓勵家長全程陪同與共創」！每位報名兒童的費用皆已包含至少 1 位家長免費陪同。'
  },
  {
    id: 'faq-3',
    question: '如果報名後臨時有事無法參加，可以取消報名或改期嗎？',
    answer: '本站所有活動付款方式皆為活動當天現場繳費即可，無需事前匯款。若報名後臨時有事無法參加：\n- 活動前 3 天以上：可隨時透過官方 LINE 申請免費更改至其他場次或取消保留名額。\n- 活動前 2 天內：為避免造成名額與食材浪費，請提前通知官方 LINE 客服取消，或轉讓給親朋好友的孩子參加。'
  },
  {
    id: 'faq-4',
    question: '孩子年齡稍微小於或大於活動建議年齡，可以報名嗎？',
    answer: '活動所列建議年齡（例如 4-8 歲）是根據器材尺寸、制服大小及課程理解難易度所規劃的最佳體驗區間。如果寶貝年齡相差在 6 個月以內，且平時專注力與動手能力較佳，一般也是可以報名的！您可以點擊「立即報名」透過 LINE 私訊客服，我們會根據特定活動的特性給您最貼心的評估與建議。'
  },
  {
    id: 'faq-5',
    question: '請問活動費用包含保險嗎？安全防護如何？',
    answer: '是的！凡是「啟夢教育」主辦或推薦的收費營隊與戶外活動，費用中皆已包含「兒童特定活動意外傷害保險（含傷害醫療）」及「公共意外責任險」。活動現場均配備急救箱、所有耗材皆採用食品級 or 無毒認證材料，且每場活動的師生比均嚴格控制在 1:5 至 1:8 以內，安全防護滴水不漏。'
  }
];
