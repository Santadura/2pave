export type Tour = {
  id: number;
  title: string;
  destination: string;
  country: string;
  region: "domestic" | "international";
  departure: string;
  duration: string;
  days: number;
  price: number;
  category: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  description: string;
  tagline?: string;
  groupSize?: string;
  transport?: string;
  accommodation?: string;
  tags: string[];
  itinerary: string[];
  included: string[];
  excluded: string[];
  highlights?: string[];
  departureSchedule?: {
    label: string;
    dates: string[];
    price: number;
  }[];
  offers?: string[];
  highlightCards?: {
    icon: string;
    title: string;
    description: string;
  }[];
  policies?: {
    title: string;
    description: string;
  }[];
  travellerReviews?: {
    name: string;
    initials: string;
    travelStyle: string;
    rating: number;
    comment: string;
  }[];
  schedule?: {
    day: number;
    title: string;
    summary?: string;
    story?: string;
    image: string;
    imageLayout?: "panoramic";
    timeline: {
      time: string;
      title: string;
      description: string;
    }[];
    tags: string[];
  }[];
  featured?: boolean;
};

const commonsFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1600`;

const localTourImage = (fileName: string) =>
  `/tours/quy-nhon-da-nang-hoi-an/${encodeURIComponent(fileName)}`;

const quyNhonDaNangHoiAnImages = {
  daNangOverview: localTourImage("Tổng quan về Đà Nẵng (01) .jpg"),
  myKhe: localTourImage("Bãi tắm 1-2-3 (03) .jpg"),
  tienSa: localTourImage("Tổng quan Phố cổ Hội An (02) .jpg"),
  hanRiver: localTourImage("Cầu Sông Hàn (04) .jpg"),
  haiVan: localTourImage("Vườn hoa tình yêu Le Jardin d_Amour (03) .jpg"),
  hoiAnOverview: localTourImage("Tổng quan về Hội An .jpg"),
  hoiAnAncientTown: localTourImage("Phố Cổ Hội An (03) .jpg"),
  hoaiRiver: localTourImage("Sông Hoài (01) .jpg"),
  lanterns: localTourImage("Đèn hoa đăng (02) .jpg"),
};

const haLongImage = commonsFile("Lake Kawaguchiko Sakura Mount Fuji 4.JPG");
const hoiAnImage = commonsFile("Aks The Reflection Taj Mahal.jpg");
const sapaImage = commonsFile("Chichen Itza 3.jpg");
const phuQuocImage = commonsFile("Hoa Đà Lạt.jpg");
const ninhBinhImage = commonsFile("Trang An, Ninh Binh.jpg");
const haGiangImage = commonsFile("Hà Giang province landscape.jpg");
const caoBangImage = commonsFile("Ban Gioc Waterfall.jpg");
const mocChauImage = commonsFile("Mộc Châu District, Vietnam (Unsplash).jpg");
const maiChauImage = commonsFile("Mai Chau.jpg");
const muCangChaiImage = commonsFile("Mu Cang Chai.jpg");
const hueImage = commonsFile("Vietnam, Hue, Imperial City of Hue.jpg");
const phongNhaImage = commonsFile("Phong Nha cave entrance.jpg");
const quyNhonImage = commonsFile(
  "Quy Nhơn, tp. Quy Nhơn, Vietnam (Unsplash).jpg",
);
const nhaTrangImage = commonsFile("Beach Nha Trang.jpg");
const daLatImage = commonsFile("Da Lat - Viet Nam.jpg");
const canThoImage = commonsFile("Can Tho, Vietnam, Floating Market.jpg");
const conDaoImage = commonsFile("Condao Photo 1.jpg");
const daNangImage = commonsFile("Image of Da Nang beach.jpg");
const hoChiMinhSkylineImage = commonsFile("Ho Chi Minh City Skyline.jpg");
const hoChiMinhNightImage = commonsFile("Ho Chi Minh City Skyline at Night.jpg");
const maPiLengImage =
  commonsFile("Ma Pi Leng Pass winding road Ha Giang Vietnam.jpg");
const saigonLandmarksImage =
  "https://upload.wikimedia.org/wikipedia/commons/7/7d/20190923_Independence_Palace-10.jpg";
const saigonLandmark81Image = commonsFile("Ho Chi Minh City - Saigon1324.jpg");
const saigonMarketImage =
  "https://images.unsplash.com/photo-1680783307371-749c26e0f5c3?auto=format&fit=crop&w=1800&q=88";
const saigonSuoiTienImage = commonsFile(
  "Suoi Tien, den tho Vua Hung - panoramio.jpg",
);
const saigonBinhQuoiImage = commonsFile("Binh Quoi people rowing.JPG");
const hanoiOperaImage =
  commonsFile("Hanoi Opera House, 24 December 2016.jpg");
const hanoiTempleImage =
  commonsFile("Tran Quoc Pagoda, Hanoi, Vietnam, 20240123 1211c 3302.jpg");
const hanoiBridgeCoverImage = commonsFile(
  "Sunbeam Bridge, Hoan Kiem Lake, Hanoi (1) (38496848051).jpg",
);
const hanoiBatTrangImage = commonsFile("Bat-Trang-Ceramic-Village1.jpg");
const hanoiDuongLamGalleryImage = commonsFile("Cổng vào làng cổ Đường Lâm.jpg");
const haGiangCitySquareImage = commonsFile("Ha Giang City Square.jpg");
const haGiangCityImage =
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/H%C3%A0_Giang_City.jpg";
const haGiangTerracesImage = commonsFile("Ha Giang rizieres bis.jpg");
const quanBaImage = commonsFile("Quản Bạ, Vietnam - 2.jpg");
const lungCuImage = commonsFile("Cột cờ Lũng Cú.JPG");
const lungCuLandscapeImage = commonsFile(
  "Lũng Cú Hà Giang - panoramio.jpg",
);
const hanoiLiteratureImage = commonsFile(
  "Constellation of Literature pavilion, Temple of Literature, Hanoi, Vietnam, 20240123 0939 3103.jpg",
);
const hanoiTourGalleryImages = [
  hanoiOperaImage,
  hanoiTempleImage,
  hanoiLiteratureImage,
  hanoiBatTrangImage,
  hanoiDuongLamGalleryImage,
];
const haGiangTourGalleryImages = [
  haGiangCitySquareImage,
  haGiangTerracesImage,
  quanBaImage,
  lungCuImage,
  maPiLengImage,
  haGiangCityImage,
];

const japanImage =
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=88";
const koreaImage = commonsFile("Seoul Skyline from Namsan (6907572103).jpg");
const thailandImage =
  "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=88";

const mountFujiImage = commonsFile("MountFuji.jpg");
const jejuImage = commonsFile("Jeju Island 제주도.jpg");
const shanghaiImage = commonsFile("Shanghai skyline.jpg");
const zhangjiajieImage = commonsFile("Zhangjiajie National Forest Park.jpg");
const xianImage = commonsFile("Terracotta army xian.jpg");
const chongqingImage = commonsFile("SkylineOfChongqing.jpg");
const lijiangImage = commonsFile("Old Town of Lijiang.jpg");
const greatWallImage = commonsFile(
  "The Great Wall of China at Jinshanling-edit.jpg",
);
const jiuzhaigouImage = commonsFile("Jiuzhaigou Valley.jpg");

export const heroSlides = [
  { image: haLongImage, alt: "Ha Long Bay limestone islands" },
  { image: hoiAnImage, alt: "Hoi An Ancient Town" },
  { image: sapaImage, alt: "Sapa rice terraces" },
  { image: phuQuocImage, alt: "Phu Quoc beach" },
];

const baseItinerary = [
  "Arrival and a relaxed first taste of the destination",
  "A full day of local culture, food, and considered experiences",
  "A final morning at your own pace before departure",
];

const included = [
  "Accommodation in carefully selected stays",
  "Private or shared transportation as noted",
  "English-speaking local guide and planned experiences",
];

const coreTours: Tour[] = [
  {
    id: 1,
    title: "Quy Nhon - Da Nang - Hoi An 3 Days 2 Nights",
    destination: "Da Nang - Hoi An",
    country: "Vietnam",
    region: "domestic",
    departure: "Quy Nhon",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 3350000,
    category: "Central Vietnam",
    image: quyNhonDaNangHoiAnImages.daNangOverview,
    gallery: [
      quyNhonDaNangHoiAnImages.daNangOverview,
      quyNhonDaNangHoiAnImages.myKhe,
      quyNhonDaNangHoiAnImages.tienSa,
      quyNhonDaNangHoiAnImages.hanRiver,
      quyNhonDaNangHoiAnImages.haiVan,
      quyNhonDaNangHoiAnImages.hoiAnOverview,
    ],
    rating: 4.9,
    reviews: 128,

    description:
      "Explore the beauty of Central Vietnam with a 3-day journey from Quy Nhon to Da Nang and Hoi An. Discover Son Tra Peninsula, Linh Ung Pagoda, Ba Na Hills, Hoi An Ancient Town and local cultural experiences.",
    tagline:
      "Three unhurried days of sea views, mountain air, and lantern-lit evenings in Central Vietnam.",
    groupSize: "10–12 travellers",
    transport: "16-seater A/C coach",
    accommodation: "Pavilion Hotel",

    tags: [
      "Da Nang",
      "Hoi An",
      "Ba Na Hills",
      "Son Tra Peninsula",
      "Central Vietnam",
    ],

    itinerary: [
      "Day 1: Quy Nhon - Da Nang arrival & city discovery",
      "Day 2: Ba Na Hills & Hoi An Ancient Town",
      "Day 3: Da Nang highlights & departure",
    ],

    included: [
      "16-seater A/C coach",
      "Pavilion Hotel check-in",
      "Meals stated in the itinerary",
      "All attraction entrance fees",
    ],

    excluded: ["Personal expenses", "Optional services"],

    highlights: [
      "Son Tra Peninsula",
      "Linh Ung Pagoda",
      "Ban Co Peak",
      "My Khe Beach sunset",
      "Ba Na Hills cable car",
      "French Village",
      "Hoi An Ancient Town",
      "Marble Mountains",
    ],

    highlightCards: [
      {
        icon: "🌅",
        title: "My Khe at sunset",
        description: "Swim, stroll, and watch Da Nang soften into evening.",
      },
      {
        icon: "🌉",
        title: "Han River cruise",
        description:
          "See the city lights from the water after a seafood dinner.",
      },
      {
        icon: "⛰️",
        title: "Hai Van Pass",
        description:
          "Travel one of Vietnam’s most beautiful coastal mountain roads.",
      },
      {
        icon: "🏰",
        title: "Ba Na Hills",
        description:
          "Ride the cable car into French Village and cool mountain air.",
      },
      {
        icon: "🏮",
        title: "Hoi An after dark",
        description:
          "Wander lantern-lit lanes and take a quiet boat ride on the river.",
      },
    ],

    policies: [
      {
        title: "Cancellation policy",
        description:
          "Free changes are supported when available. Cancellation terms are confirmed with your booking before payment.",
      },
      {
        title: "Payment policy",
        description:
          "Reserve with a deposit, then settle the remaining balance before departure. Your consultant will share the exact schedule.",
      },
      {
        title: "Important notes",
        description:
          "The itinerary may be adjusted for weather or local operating conditions while preserving the included experiences.",
      },
    ],

    travellerReviews: [
      {
        initials: "MA",
        name: "Mai Anh",
        travelStyle: "Travelled with friends",
        rating: 5,
        comment:
          "A beautifully paced trip—the mountain views, Hoi An at night, and thoughtful care from the guide made every day feel special.",
      },
      {
        initials: "TP",
        name: "Thanh Phuong",
        travelStyle: "Travelled as a couple",
        rating: 5,
        comment:
          "The itinerary was well organised, with just the right balance of iconic sights, local food, and time to enjoy the coast.",
      },
      {
        initials: "HN",
        name: "Hoang Nam",
        travelStyle: "Travelled with family",
        rating: 4,
        comment:
          "Comfortable transport, great hotel choices, and enough flexibility for everyone in the family to enjoy the journey.",
      },
    ],

    schedule: [
      {
        day: 1,
        title: "Quy Nhon - Da Nang arrival & city discovery",
        summary: "Coastal arrival, Son Tra views, and Da Nang after dark.",
        story:
          "Ease into Central Vietnam with a scenic coastal arrival, a quiet moment above the peninsula, and Da Nang sparkling along the Han River after sunset.",
        image: quyNhonDaNangHoiAnImages.myKhe,
        timeline: [
          {
            time: "06:00 - 12:00",
            title: "Departure for Da Nang",
            description:
              "Gather at Quy Nhon Bus Station and depart for Da Nang.",
          },
          {
            time: "12:00 - 13:30",
            title: "Specialty lunch",
            description: "Enjoy a local lunch in Da Nang city center.",
          },
          {
            time: "13:30 - 14:30",
            title: "Hotel check-in",
            description:
              "Settle in and take an essential rest before the afternoon discoveries.",
          },
          {
            time: "14:30 - 16:30",
            title: "Son Tra Peninsula",
            description:
              "Visit Linh Ung Pagoda and Ban Co Peak for sweeping coastal views.",
          },
          {
            time: "16:30 - 18:00",
            title: "My Khe Beach",
            description: "Swim or stroll along the shore as the sun sets.",
          },
          {
            time: "18:00 - 19:30",
            title: "Refresh at the hotel",
            description:
              "Return to the hotel to shower and change for the evening.",
          },
          {
            time: "19:30 - 21:30",
            title: "Da Nang by night",
            description:
              "Seafood dinner followed by a gentle Han River cruise.",
          },
        ],
        tags: [
          "16-seater A/C coach",
          "Mi Quang / Rice paper",
          "Check in Pavilion hotel",
        ],
      },

      {
        day: 2,
        title: "Ba Na Hills & Hoi An Ancient Town",
        summary:
          "Mountain cable cars followed by a lantern-lit Hoi An evening.",
        story:
          "Today moves from cool mountain air to Hoi An’s warm lantern glow—two of Central Vietnam’s most memorable atmospheres in one day.",
        image: quyNhonDaNangHoiAnImages.haiVan,
        timeline: [
          {
            time: "06:30 - 07:15",
            title: "Breakfast at the hotel",
            description: "Start the day with breakfast before heading west.",
          },
          {
            time: "07:15 - 08:30",
            title: "Hai Van Pass transfer",
            description:
              "Travel through the pass with a view over Lang Co Bay.",
          },
          {
            time: "08:30 - 09:30",
            title: "Continue to Ba Na Hills",
            description:
              "Arrive at the foothills and prepare for the cable car.",
          },
          {
            time: "09:30 - 15:00",
            title: "Ba Na Hills exploration",
            description:
              "Ride the cable car, explore French Village, and enjoy lunch on the mountain.",
          },
          {
            time: "15:00 - 17:15",
            title: "Return and refresh",
            description: "Return to the hotel for rest and a quick refresh.",
          },
          {
            time: "17:15 - 21:30",
            title: "Hoi An at lantern time",
            description:
              "Discover ancient houses, Hoi An Old Town, and a lantern boat experience.",
          },
          {
            time: "21:30",
            title: "Return to Da Nang",
            description: "Return to the Da Nang hotel for the night.",
          },
        ],
        tags: [
          "Check in Lang Co Bay view",
          "Buffet lunch on mountain",
          "Check in Le Jardin D'amour",
          "Linh Chua Linh Tu Temple",
          "Check in Chua Cau, lantern boat",
        ],
      },

      {
        day: 3,
        title: "Da Nang highlights & departure",
        summary: "Beach moments, Marble Mountains, and the journey home.",
        story:
          "Take a final slow look at the coast and craft villages before carrying the best parts of Central Vietnam home with you.",
        image: quyNhonDaNangHoiAnImages.daNangOverview,
        timeline: [
          {
            time: "07:00 - 08:00",
            title: "Breakfast at the hotel",
            description: "Enjoy a final breakfast in Da Nang.",
          },
          {
            time: "08:00 - 08:30",
            title: "Check-out",
            description: "Check out and place luggage safely on the coach.",
          },
          {
            time: "08:30 - 09:30",
            title: "Cua Dai Beach",
            description:
              "Take a quiet beach stroll and capture a few final photos.",
          },
          {
            time: "09:30 - 11:30",
            title: "Marble Mountains",
            description:
              "Explore Marble Mountains and the craft village of Non Nuoc.",
          },
          {
            time: "11:30 - 13:00",
            title: "Lunch and Han Market",
            description: "Have chicken rice for lunch and browse Han Market.",
          },
          {
            time: "13:00",
            title: "Return to Quy Nhon",
            description:
              "Depart via Highway 1A and drop off at Quy Nhon Bus Station.",
          },
        ],
        tags: ["Elevator up the mountain", "Shopping", "End of trip"],
      },
    ],

    featured: true,
  },
  {
    id: 2,
    title: "Ha Long Bay Signature Cruise",
    destination: "Ha Long Bay",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 6290000,
    category: "Luxury",
    image: haLongImage,
    rating: 4.8,
    reviews: 96,
    description:
      "An overnight cruise among limestone karsts, quiet coves, and clear northern light.",
    tags: ["cruise", "bay"],
    itinerary: baseItinerary,
    included,
    excluded: ["Beverages and personal expenses"],
    featured: true,
  },
  {
    id: 3,
    title: "Sapa Mountain Experience",
    destination: "Sapa",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "4 Days / 3 Nights",
    days: 4,
    price: 5590000,
    category: "Adventure",
    image: sapaImage,
    rating: 4.9,
    reviews: 84,
    description:
      "Rice terraces, local makers, and mountain mornings in the northern highlands.",
    tags: ["trekking", "mountains"],
    itinerary: baseItinerary,
    included,
    excluded: ["Travel insurance"],
    featured: true,
  },
  {
    id: 4,
    title: "Ninh Binh Heritage Journey",
    destination: "Ninh Binh",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "2 Days / 1 Night",
    days: 2,
    price: 2890000,
    category: "Nature",
    image: ninhBinhImage,
    rating: 4.7,
    reviews: 72,
    description:
      "River caves, ancient temples, and the soft green drama of the north.",
    tags: ["river", "temples"],
    itinerary: baseItinerary,
    included,
    excluded: ["Personal expenses"],
    featured: true,
  },
  {
    id: 5,
    title: "Phu Quoc Island Getaway",
    destination: "Phu Quoc",
    country: "Vietnam",
    region: "domestic",
    departure: "Ho Chi Minh City",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 8490000,
    category: "Beach",
    image: phuQuocImage,
    rating: 4.8,
    reviews: 110,
    description:
      "Slow island days, coral gardens, and a stay built around the sea.",
    tags: ["island", "beach"],
    itinerary: baseItinerary,
    included,
    excluded: ["Optional water sports"],
    featured: true,
  },
  {
    id: 6,
    title: "Japan in Four Seasons",
    destination: "Japan",
    country: "Japan",
    region: "international",
    departure: "Hanoi",
    duration: "6 Days / 5 Nights",
    days: 6,
    price: 22900000,
    category: "Culture",
    image: japanImage,
    rating: 4.9,
    reviews: 46,
    description:
      "A graceful first journey through Tokyo, Kyoto, and the rituals between.",
    tags: ["Tokyo", "Kyoto", "food"],
    itinerary: baseItinerary,
    included,
    excluded: ["Visa fees and personal expenses"],
  },
  {
    id: 7,
    title: "South Korea: Seoul to Busan",
    destination: "South Korea",
    country: "South Korea",
    region: "international",
    departure: "Ho Chi Minh City",
    duration: "7 Days / 6 Nights",
    days: 7,
    price: 19900000,
    category: "Family",
    image: koreaImage,
    rating: 4.8,
    reviews: 38,
    description:
      "Contemporary city life, coastal rail journeys, and warm Korean hospitality.",
    tags: ["Seoul", "Busan", "family"],
    itinerary: baseItinerary,
    included,
    excluded: ["Shopping and personal expenses"],
  },
  {
    id: 8,
    title: "Thailand: Bangkok and Beyond",
    destination: "Thailand",
    country: "Thailand",
    region: "international",
    departure: "Da Nang",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 13900000,
    category: "Beach",
    image: thailandImage,
    rating: 4.7,
    reviews: 29,
    description:
      "A bright, easy-going route from Bangkok energy to island calm.",
    tags: ["Bangkok", "island"],
    itinerary: baseItinerary,
    included,
    excluded: ["Optional excursions"],
  },
];

const posterTours: Tour[] = [
  {
    id: 9,
    title: "Quy Nhon - Ho Chi Minh City 3 Days 2 Nights",
    destination: "Ho Chi Minh City",
    country: "Vietnam",
    region: "domestic",
    departure: "Quy Nhon",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 3630000,
    category: "City discovery",
    image: hoChiMinhSkylineImage,
    gallery: [
      hoChiMinhSkylineImage,
      hoChiMinhNightImage,
      saigonLandmarksImage,
      saigonLandmark81Image,
      saigonMarketImage,
      saigonBinhQuoiImage,
    ],
    rating: 4.8,
    reviews: 0,
    description:
      "A three-day city break from Quy Nhon to Ho Chi Minh City, pairing Saigon landmarks, themed attractions, and riverside southern culture.",
    tagline:
      "From landmark walks to city lights and the easy rhythm of the southern delta.",
    groupSize: "10–12 travellers",
    transport: "Overnight sleeper bus & 16-seater shuttle",
    accommodation: "Cashew Inn Hotel",
    tags: ["Ho Chi Minh City", "District 1", "Suoi Tien", "Binh Quoi"],
    itinerary: [
      "Day 1: Saigon landmarks & Bui Vien at night",
      "Day 2: Suoi Tien, District 1 & Nguyen Hue",
      "Day 3: Dam Sen, Thanh Da & Binh Quoi",
    ],
    included: [
      "All costs included in the tour package",
      "Overnight sleeper bus and listed 16-seater shuttle transfers",
      "Cashew Inn Hotel stay",
      "Meals stated in the itinerary",
    ],
    excluded: ["Personal expenses", "Optional shopping"],
    highlights: [
      "Independence Palace",
      "Notre-Dame Cathedral Basilica & Central Post Office",
      "Ben Thanh Market",
      "Suoi Tien Theme Park",
      "Nguyen Hue Walking Street",
      "Binh Quoi Tourist Village",
    ],
    schedule: [
      {
        day: 1,
        title: "Quy Nhon to Saigon landmarks",
        summary: "An overnight arrival followed by the classic heart of District 1.",
        story:
          "Settle into the pace of Saigon through its civic landmarks, architectural streets, market energy, regional food, and Bui Vien after dark.",
        image: saigonLandmarksImage,
        timeline: [
          { time: "19:00 - 05:30", title: "Travel to Ho Chi Minh City", description: "Depart Quy Nhon Bus Station by overnight sleeper bus." },
          { time: "05:30 - 06:30", title: "Mien Dong Bus Station", description: "Meet at Mien Dong Bus Station and take the 16-seater shuttle." },
          { time: "06:30 - 07:30", title: "Breakfast in the centre", description: "Breakfast at the centre: Hu Tieu Nam Vang." },
          { time: "07:30 - 08:30", title: "Cashew Inn Hotel", description: "Drop off luggage at Cashew Inn Hotel." },
          { time: "08:30 - 09:30", title: "Independence Palace", description: "Visit this landmark." },
          { time: "09:30 - 10:45", title: "Notre-Dame Cathedral Basilica & Central Post Office", description: "Follow the walking path between two Saigon icons." },
          { time: "10:45 - 12:00", title: "Dong Khoi Street & Saigon Opera House", description: "An architectural walk through central Saigon." },
          { time: "12:00 - 13:30", title: "Lunch at Com Nieu Saigon", description: "Group set menu." },
          { time: "13:30 - 15:00", title: "Hotel rest", description: "Rest and freshen up at Cashew Inn Hotel." },
          { time: "15:15 - 17:30", title: "Ben Thanh Market", description: "Explore the iconic market." },
          { time: "18:00 - 19:30", title: "Dinner at Com Que Muoi Kho", description: "Regional cuisine." },
          { time: "19:30 - 21:30", title: "Bui Vien Walking Street", description: "Enjoy Saigon's vibrant nightlife." },
        ],
        tags: ["Overnight sleeper bus", "Hu Tieu Nam Vang", "Cashew Inn Hotel", "Walking path"],
      },
      {
        day: 2,
        title: "Suoi Tien & District 1 after dark",
        summary: "Folklore, city photography, and Nguyen Hue at night.",
        story:
          "Move from Suoi Tien's tourist train and folklore into an afternoon at leisure, then return to District 1 for sunset views and an evening city walk.",
        image: saigonSuoiTienImage,
        imageLayout: "panoramic",
        timeline: [
          { time: "07:00 - 08:00", title: "Breakfast at the hotel", description: "Buffet breakfast at Cashew Inn." },
          { time: "08:00 - 08:40", title: "Transfer to Thu Duc City", description: "Travel from the centre to Thu Duc City." },
          { time: "08:40 - 11:45", title: "Suoi Tien Theme Park", description: "Tourist train and folklore experiences." },
          { time: "11:45 - 13:00", title: "Lunch at Suoi Tien Restaurant", description: "Full set menu." },
          { time: "13:00 - 13:45", title: "Return to the centre", description: "Transfer back to central Ho Chi Minh City." },
          { time: "13:45 - 15:15", title: "Midday hotel rest", description: "Rest at the hotel." },
          { time: "16:45 - 18:00", title: "District 1 photo tour by car", description: "Sunset views." },
          { time: "18:00 - 19:30", title: "Dinner at SH Garden", description: "Multi-cuisine menu." },
          { time: "19:30 - 21:30", title: "City Hall & Nguyen Hue Walking Street", description: "Exterior photography and an evening walk." },
        ],
        tags: ["Suoi Tien", "Full set menu", "Sunset views", "Nguyen Hue"],
      },
      {
        day: 3,
        title: "Dam Sen, Thanh Da & Binh Quoi",
        summary: "A final day of park scenery and southern riverside culture.",
        story:
          "After checking out, finish with Dam Sen's scenic lake, the river route to Thanh Da, and a rustic buffet dinner at Binh Quoi before the sleeper bus home.",
        image: saigonBinhQuoiImage,
        timeline: [
          { time: "07:00 - 08:00", title: "Breakfast at the hotel", description: "Breakfast before departure." },
          { time: "08:00 - 08:30", title: "Check-out", description: "Pack personal belongings and load luggage." },
          { time: "08:30 - 12:00", title: "Dam Sen Cultural Park", description: "Park rides and scenic lake." },
          { time: "12:00 - 13:30", title: "Lunch at Dam Sen Restaurant", description: "Group set menu." },
          { time: "13:30 - 14:00", title: "Transfer to Thanh Da Peninsula", description: "Follow the scenic river route." },
          { time: "14:00 - 17:00", title: "Binh Quoi Tourist Village", description: "Experience a southern delta setting." },
          { time: "17:00 - 18:30", title: "Dinner buffet at Binh Quoi", description: "Rustic buffet feast." },
          { time: "18:30 - 20:00", title: "Transfer to bus station", description: "Prepare for the return journey." },
          { time: "20:00", title: "Departure back to Quy Nhon", description: "Overnight sleeper bus." },
        ],
        tags: ["Dam Sen", "Scenic river route", "Binh Quoi buffet", "Overnight sleeper bus"],
      },
    ],
    featured: true,
  },
  {
    id: 10,
    title: "Quy Nhon - Hanoi 4 Days 3 Nights",
    destination: "Hanoi",
    country: "Vietnam",
    region: "domestic",
    departure: "Quy Nhon",
    duration: "4 Days / 3 Nights",
    days: 4,
    price: 4800000,
    category: "Culture",
    image: hanoiBridgeCoverImage,
    gallery: hanoiTourGalleryImages,
    rating: 4.8,
    reviews: 0,
    description:
      "A four-day flight journey from Quy Nhon to Hanoi, taking in the Old Quarter, Bat Trang, Ba Dinh, West Lake, and Duong Lam Ancient Village.",
    tagline:
      "Old Quarter stories, craft traditions, lakeside temples, and an unhurried northern finish.",
    groupSize: "4–6 travellers",
    transport: "Flights & listed group transfers",
    accommodation: "Hanoi Central Park Hotel",
    tags: ["Hanoi", "Old Quarter", "Bat Trang", "Duong Lam"],
    itinerary: [
      "Day 1: Old Quarter, Hoan Kiem & French Quarter",
      "Day 2: Bat Trang Ceramic Village",
      "Day 3: Ba Dinh, Temple of Literature & West Lake",
      "Day 4: Duong Lam Ancient Village & flight home",
    ],
    included: [
      "All costs included in the tour package",
      "Flights and group transfers listed in the itinerary",
      "Hanoi Central Park Hotel stay",
      "Meals stated in the itinerary",
    ],
    excluded: ["Personal expenses", "Optional shopping"],
    highlights: [
      "Hoan Kiem Lake & Ngoc Son Temple",
      "Hanoi Opera House & French Quarter",
      "Bat Trang Ceramic Village workshop",
      "Ba Dinh Square & Imperial Citadel",
      "Temple of Literature & Khue Van Cac",
      "Duong Lam Ancient Village",
    ],
    schedule: [
      {
        day: 1,
        title: "Arrival in Hanoi's Old Quarter",
        summary: "Flight from Quy Nhon into an afternoon of Hanoi landmarks.",
        story:
          "Begin with Hoan Kiem and the Old Quarter, then move through market lanes and the French Quarter before returning to the hotel at night.",
        image: hanoiBridgeCoverImage,
        timeline: [
          { time: "05:00 - 09:50", title: "Transfer to Phu Cat & fly to Noi Bai", description: "Company pick-up, Phu Cat Airport transfer, morning flight, and group transfer." },
          { time: "10:00 - 11:00", title: "Noi Bai to Hanoi Central Park Hotel", description: "Transfer to the hotel and check in." },
          { time: "11:30 - 13:00", title: "Lunch in the Old Quarter", description: "Lunch in the Old Quarter." },
          { time: "13:00 - 15:30", title: "Hoan Kiem Lake, Ngoc Son Temple & Old Quarter", description: "Walking tour." },
          { time: "15:30 - 17:00", title: "Dong Xuan Market & O Quan Chuong Gate", description: "Market visit and historic gate." },
          { time: "17:00 - 18:00", title: "Return to hotel", description: "Rest at the hotel." },
          { time: "18:00 - 19:30", title: "Dinner", description: "Local cuisine." },
          { time: "19:30 - 21:30", title: "Hanoi Opera House & French Quarter", description: "Night activities and architecture walks." },
          { time: "21:30", title: "Return to the hotel", description: "Rest for the evening." },
        ],
        tags: ["Morning flight", "Walking tour", "Old Quarter", "French Quarter"],
      },
      {
        day: 2,
        title: "Bat Trang craft village",
        summary: "A hands-on pottery morning followed by a relaxed Hanoi afternoon.",
        story:
          "Travel to Bat Trang for its ceramic workshop and pottery experience, then return to the centre with time to rest, shop, or walk by the lake.",
        image: hanoiBatTrangImage,
        timeline: [
          { time: "08:00 - 08:30", title: "Breakfast at hotel", description: "Breakfast before the village visit." },
          { time: "08:30 - 12:00", title: "Bat Trang Ceramic Village", description: "Workshop and hands-on pottery experience." },
          { time: "12:00 - 13:00", title: "Lunch in Bat Trang", description: "Local dishes." },
          { time: "13:00 - 15:00", title: "Return to central hotel", description: "Midday rest." },
          { time: "15:00 - 18:00", title: "Free time & souvenir shopping", description: "Optional shopping." },
          { time: "18:00 - 19:30", title: "Free time & souvenir shopping", description: "Time around a famous dinner spot." },
          { time: "19:30 - 21:30", title: "Free time & souvenir shopping", description: "Stroll and lake photos." },
        ],
        tags: ["Bat Trang", "Pottery workshop", "Local dishes", "Lake photos"],
      },
      {
        day: 3,
        title: "Hanoi heritage & West Lake",
        summary: "Historic sights from Ba Dinh to the lakeside temples.",
        story:
          "Discover Hanoi's political and scholarly heritage before ending the day around West Lake, where Tran Quoc Pagoda and Quan Thanh Temple meet the sunset.",
        image: hanoiTempleImage,
        timeline: [
          { time: "07:30 - 08:30", title: "Breakfast", description: "Co May sticky rice breakfast." },
          { time: "08:30 - 11:30", title: "Ba Dinh & Imperial Citadel", description: "Visit Ba Dinh Square, Ho Chi Minh Mausoleum, One Pillar Pagoda, and the Imperial Citadel." },
          { time: "12:00 - 13:30", title: "Lunch & hotel rest", description: "Lunch followed by a midday rest." },
          { time: "14:00 - 16:30", title: "Temple of Literature – Imperial Academy", description: "Check in at Khue Van Cac." },
          { time: "16:30 - 18:30", title: "Tran Quoc Pagoda & Quan Thanh Temple", description: "West Lake pagoda visit and sunset watching." },
          { time: "18:30 - 20:00", title: "Dinner around West Lake", description: "Local specialty." },
          { time: "20:00 - 21:30", title: "Free time", description: "Evening walk." },
        ],
        tags: ["Ba Dinh", "Khue Van Cac", "West Lake", "Sunset watching"],
      },
      {
        day: 4,
        title: "Duong Lam & return to Quy Nhon",
        summary: "Ancient village lanes before the evening flight home.",
        story:
          "Check out for a cultural final day in Duong Lam, wandering Mong Phu Gate and ancient laterite houses before the direct airport transfer.",
        image: hanoiDuongLamGalleryImage,
        timeline: [
          { time: "07:00 - 08:00", title: "Breakfast & check-out", description: "Pack luggage on the vehicle." },
          { time: "08:00 - 09:30", title: "Depart for Son Tay – Duong Lam", description: "Direct transfer." },
          { time: "09:30 - 12:30", title: "Duong Lam Ancient Village", description: "See Mong Phu Gate, the communal house, ancient houses, and laterite walls." },
          { time: "12:30 - 13:30", title: "Lunch in Duong Lam", description: "Local country lunch." },
          { time: "13:30 - 14:30", title: "Free time", description: "Buy local specialties." },
          { time: "14:30 - 16:00", title: "Transfer to Noi Bai Airport", description: "Direct airport transfer." },
          { time: "16:00 - 21:00", title: "Flight back to Quy Nhon", description: "Check in for the evening flight and transfer back to the company." },
        ],
        tags: ["Duong Lam", "Ancient houses", "Country lunch", "Evening flight"],
      },
    ],
    featured: true,
  },
  {
    id: 11,
    title: "Quy Nhon - Ha Giang 6 Days 5 Nights",
    destination: "Ha Giang",
    country: "Vietnam",
    region: "domestic",
    departure: "Quy Nhon",
    duration: "6 Days / 5 Nights",
    days: 6,
    price: 11500000,
    category: "Adventure",
    image: haGiangImage,
    gallery: haGiangTourGalleryImages,
    rating: 4.9,
    reviews: 0,
    description:
      "A six-day northern highland journey from Quy Nhon through Hoang Su Phi, Quan Ba, Dong Van, Ma Pi Leng Pass, and Ha Giang City.",
    tagline:
      "Six days of highland roads, rice terraces, ethnic villages, and the dramatic Dong Van plateau.",
    groupSize: "4–6 travellers",
    transport: "Flights, private limousine & listed transfers",
    accommodation: "Phoenix Hotel, Hoang Su Phi Homestay, Thao Nguyen Hotel & May Boutique Dong Van",
    tags: ["Ha Giang", "Hoang Su Phi", "Dong Van", "Ma Pi Leng"],
    itinerary: [
      "Day 1: Quy Nhon to Ha Giang City",
      "Day 2: Hoang Su Phi rice terraces",
      "Day 3: Quan Ba, Yen Minh & pine forest",
      "Day 4: Sung La, Lung Cu & Dong Van",
      "Day 5: Ma Pi Leng Pass & Dong Van",
      "Day 6: Ha Giang City to Quy Nhon",
    ],
    included: [
      "All costs included in the tour package",
      "Flights, private limousine, and listed transfers",
      "Hotels and homestay stated in the itinerary",
      "Meals stated in the itinerary",
    ],
    excluded: ["Personal expenses", "Optional purchases"],
    highlights: [
      "Hoang Su Phi terraced rice fields",
      "Quan Ba Twin Mountains",
      "Sung La Valley & Pao's House",
      "Hmong King Palace",
      "Lung Cu Flag Tower & Lo Lo Village",
      "Ma Pi Leng Pass",
    ],
    schedule: [
      {
        day: 1,
        title: "Quy Nhon to Ha Giang City",
        summary: "Fly north, then continue by private limousine into Ha Giang.",
        story:
          "A long but well-paced arrival day: private airport transfer, flight to Hanoi, limousine to Ha Giang City, and a first evening by the river.",
        image: haGiangCitySquareImage,
        timeline: [
          { time: "04:30 - 07:00", title: "Pick-up to Phu Cat Airport", description: "Private transfer from the company to Phu Cat Airport." },
          { time: "07:00 - 09:00", title: "Flight Quy Nhon to Hanoi", description: "Morning flight." },
          { time: "10:00 - 16:00", title: "Private limousine to Ha Giang City", description: "Lunch at a local restaurant en route." },
          { time: "16:00 - 18:00", title: "Hotel check-in & rest", description: "Check in at Phoenix Hotel." },
          { time: "18:00 - 21:00", title: "Dinner & night walk", description: "Local river fish hotpot for dinner." },
        ],
        tags: ["Private transfer", "Private limousine", "Phoenix Hotel", "River fish hotpot"],
      },
      {
        day: 2,
        title: "Hoang Su Phi rice terraces",
        summary: "A full day among Hoang Su Phi's layered highland fields.",
        story:
          "Drive west to Hoang Su Phi, take time in the terraced rice fields, then slow down at a local homestay for dinner and rest.",
        image: haGiangTerracesImage,
        timeline: [
          { time: "07:30 - 11:30", title: "Drive to Hoang Su Phi", description: "Breakfast at the hotel." },
          { time: "11:30 - 12:30", title: "Lunch break", description: "Lunch." },
          { time: "12:30 - 16:30", title: "Terraced rice fields", description: "Explore the terraced rice fields." },
          { time: "16:30 - 18:00", title: "Check-in & relaxation", description: "Check in at Hoang Su Phi Homestay." },
          { time: "18:00 - 21:00", title: "Dinner", description: "Dinner with local delicacies, followed by free time and rest." },
        ],
        tags: ["Hoang Su Phi", "Rice terraces", "Homestay", "Local delicacies"],
      },
      {
        day: 3,
        title: "Quan Ba, Yen Minh & pine forest",
        summary: "Mountain passes, twin mountains, grassland, and a pine forest.",
        story:
          "Travel via Bac Sum Pass into Quan Ba, then continue through the twin mountains, rice fields, grassland, and Yen Minh pine forest.",
        image: quanBaImage,
        timeline: [
          { time: "07:30 - 11:30", title: "Drive to Quan Ba via Bac Sum Pass", description: "Breakfast at the hotel." },
          { time: "11:30 - 12:30", title: "Lunch in Tam Son Town", description: "Local restaurant." },
          { time: "12:30 - 14:30", title: "Quan Ba Twin Mountains & rice fields", description: "Visit the twin mountains and surrounding rice fields." },
          { time: "14:30 - 16:30", title: "Lao Va Chai & Yen Minh", description: "Visit the grassland and Yen Minh Pine Forest." },
          { time: "16:30 - 18:00", title: "Hotel check-in", description: "Check in at Thao Nguyen Hotel." },
          { time: "18:00 - 21:00", title: "Dinner & free time", description: "Dinner and free time." },
        ],
        tags: ["Bac Sum Pass", "Quan Ba", "Yen Minh", "Thao Nguyen Hotel"],
      },
      {
        day: 4,
        title: "Sung La, Lung Cu & Dong Van",
        summary: "Ethnic villages and landmark highland sights before Dong Van.",
        story:
          "Explore Sung La Valley and Pao's House, visit the Hmong King Palace and Lung Cu Flag Tower, then arrive in Dong Van for an old-quarter evening.",
        image: lungCuLandscapeImage,
        timeline: [
          { time: "07:30 - 09:30", title: "Sung La Valley & Lung Cam Village", description: "Visit Pao's House." },
          { time: "09:30 - 11:00", title: "Hmong King Palace", description: "Visit the historic palace." },
          { time: "11:00 - 12:00", title: "Lunch near Sa Phin", description: "Local dishes." },
          { time: "12:30 - 15:00", title: "Lung Cu Flag Tower & Lo Lo Village", description: "Visit the flag tower and village." },
          { time: "15:00 - 16:30", title: "Transfer to Dong Van", description: "Check in and rest at May Boutique Dong Van." },
          { time: "18:00 - 21:00", title: "Dinner & Dong Van Old Quarter", description: "Dinner followed by an Old Quarter exploration." },
        ],
        tags: ["Sung La", "Pao's House", "Lung Cu", "Dong Van Old Quarter"],
      },
      {
        day: 5,
        title: "Ma Pi Leng Pass & Dong Van",
        summary: "The scenic pass, local village life, and a farewell evening.",
        story:
          "Start in the Old Quarter, make a photo stop on Ma Pi Leng Pass, then return to Dong Van for coffee, souvenirs, a local village, and farewell dinner.",
        image: maPiLengImage,
        timeline: [
          { time: "07:30 - 08:30", title: "Breakfast in Old Quarter", description: "Steamed rice rolls." },
          { time: "08:30 - 11:30", title: "Drive Ma Pi Leng Pass", description: "Photo stop." },
          { time: "11:30 - 13:00", title: "Lunch break", description: "Local cuisine." },
          { time: "13:00 - 15:30", title: "Dong Van Old Quarter", description: "Coffee and souvenirs." },
          { time: "15:30 - 18:00", title: "Local ancient village", description: "Visit a local ancient village." },
          { time: "18:00 - 21:00", title: "Farewell dinner", description: "Dinner." },
        ],
        tags: ["Steamed rice rolls", "Ma Pi Leng", "Photo stop", "Farewell dinner"],
      },
      {
        day: 6,
        title: "Dong Van to Quy Nhon",
        summary: "Return through the mountains, fly south, and transfer home.",
        story:
          "Leave Dong Van for Ha Giang City and Noi Bai, fly from Hanoi to Quy Nhon, then finish with the final company transfer.",
        image: haGiangCityImage,
        timeline: [
          { time: "07:30 - 12:00", title: "Dong Van to Ha Giang City", description: "Drive via Yen Minh; breakfast at the hotel." },
          { time: "12:00 - 13:00", title: "Lunch in Ha Giang City", description: "Lunch." },
          { time: "13:00 - 17:30", title: "Transfer to Noi Bai Airport", description: "Highway rest stops." },
          { time: "19:00 - 20:45", title: "Flight Hanoi to Quy Nhon", description: "Light dinner at the airport." },
          { time: "20:45 - 21:45", title: "Transfer back to the company", description: "Return to the company in Quy Nhon. End of tour." },
        ],
        tags: ["Yen Minh", "Noi Bai Airport", "Light dinner", "End of tour"],
      },
    ],
    featured: true,
  },
];

const extraRoutes = [
  [
    "Ha Giang Loop Discovery",
    "Ha Giang",
    "Hanoi",
    4,
    6790000,
    "Adventure",
    "Vietnam",
  ],
  [
    "Cao Bang Waterfall Country",
    "Cao Bang",
    "Hanoi",
    4,
    6390000,
    "Nature",
    "Vietnam",
  ],
  ["Moc Chau Tea Hills", "Moc Chau", "Hanoi", 3, 4290000, "Nature", "Vietnam"],
  [
    "Mai Chau Weekend Table",
    "Mai Chau",
    "Hanoi",
    2,
    2590000,
    "Culture",
    "Vietnam",
  ],
  [
    "Mu Cang Chai Photo Trail",
    "Mu Cang Chai",
    "Hanoi",
    5,
    7490000,
    "Adventure",
    "Vietnam",
  ],
  ["Hue Imperial Weekend", "Hue", "Da Nang", 3, 3890000, "Culture", "Vietnam"],
  [
    "Phong Nha Cave Explorer",
    "Phong Nha",
    "Da Nang",
    4,
    5690000,
    "Adventure",
    "Vietnam",
  ],
  [
    "Quy Nhon Coast Retreat",
    "Quy Nhon",
    "Ho Chi Minh City",
    4,
    6290000,
    "Beach",
    "Vietnam",
  ],
  [
    "Nha Trang Blue Water Escape",
    "Nha Trang",
    "Ho Chi Minh City",
    4,
    6990000,
    "Beach",
    "Vietnam",
  ],
  [
    "Da Lat Slow Hills",
    "Da Lat",
    "Ho Chi Minh City",
    3,
    4490000,
    "Relaxation",
    "Vietnam",
  ],
  [
    "Can Tho Floating Market",
    "Can Tho",
    "Ho Chi Minh City",
    2,
    2390000,
    "Food",
    "Vietnam",
  ],
  [
    "Phu Quoc Family Days",
    "Phu Quoc",
    "Hanoi",
    5,
    8990000,
    "Family",
    "Vietnam",
  ],
  [
    "Con Dao Quiet Island",
    "Con Dao",
    "Ho Chi Minh City",
    4,
    9890000,
    "Relaxation",
    "Vietnam",
  ],
  [
    "Tokyo & Mount Fuji",
    "Tokyo - Mount Fuji",
    "Hanoi",
    6,
    24900000,
    "Culture",
    "Japan",
  ],
  [
    "Osaka Kyoto Nara Highlights",
    "Osaka - Kyoto - Nara",
    "Ho Chi Minh City",
    5,
    21900000,
    "Culture",
    "Japan",
  ],
  [
    "Japan Cherry Blossom Route",
    "Tokyo - Kyoto",
    "Hanoi",
    7,
    32900000,
    "Nature",
    "Japan",
  ],
  [
    "Seoul Nami Island Escape",
    "Seoul - Nami Island",
    "Hanoi",
    5,
    16900000,
    "Family",
    "South Korea",
  ],
  [
    "Korea Food & Neighbourhoods",
    "Seoul",
    "Da Nang",
    6,
    18900000,
    "Food",
    "South Korea",
  ],
  [
    "Jeju Island Discovery",
    "Seoul - Jeju",
    "Ho Chi Minh City",
    7,
    22900000,
    "Nature",
    "South Korea",
  ],
  ["Beijing & Great Wall", "Beijing", "Hanoi", 5, 17900000, "Culture", "China"],
  [
    "Shanghai Suzhou Hangzhou",
    "Shanghai - Suzhou - Hangzhou",
    "Ho Chi Minh City",
    6,
    20900000,
    "Culture",
    "China",
  ],
  [
    "Zhangjiajie Nature Experience",
    "Zhangjiajie",
    "Hanoi",
    6,
    23900000,
    "Adventure",
    "China",
  ],
  ["Xi An Ancient Capital", "Xi an", "Hanoi", 5, 15900000, "Culture", "China"],
  [
    "Chengdu & Jiuzhaigou",
    "Chengdu - Jiuzhaigou",
    "Ho Chi Minh City",
    7,
    25900000,
    "Nature",
    "China",
  ],
  [
    "Chongqing Wulong Landscapes",
    "Chongqing - Wulong",
    "Hanoi",
    6,
    21900000,
    "Adventure",
    "China",
  ],
  [
    "Shanghai Disneyland Family",
    "Shanghai",
    "Ho Chi Minh City",
    5,
    19900000,
    "Family",
    "China",
  ],
  [
    "Lijiang & Shangri-La",
    "Lijiang - Shangri-La",
    "Hanoi",
    7,
    24900000,
    "Nature",
    "China",
  ],
  [
    "Hoi An Culinary Weekend",
    "Hoi An",
    "Da Nang",
    3,
    4790000,
    "Food",
    "Vietnam",
  ],
  [
    "Da Nang Family Coast",
    "Da Nang",
    "Ho Chi Minh City",
    4,
    6390000,
    "Family",
    "Vietnam",
  ],
  [
    "Korea Autumn Colours",
    "Seoul - Nami Island",
    "Hanoi",
    6,
    20900000,
    "Nature",
    "South Korea",
  ],
  [
    "China Silk Road Highlights",
    "Beijing - Xi an - Shanghai",
    "Hanoi",
    8,
    28900000,
    "Culture",
    "China",
  ],
] as const;

const extraTours: Tour[] = extraRoutes.map(
  ([title, destination, departure, days, price, category, country], index) => ({
    id: index + 12,
    title,
    destination,
    country,
    region: country === "Vietnam" ? "domestic" : "international",
    departure,
    duration: `${days} Days / ${days - 1} Nights`,
    days,
    price,
    category,
    image:
      destination === "Ha Giang"
        ? haGiangImage
        : destination === "Cao Bang"
          ? caoBangImage
          : destination === "Moc Chau"
            ? mocChauImage
            : destination === "Mai Chau"
              ? maiChauImage
              : destination === "Mu Cang Chai"
                ? muCangChaiImage
                : destination === "Hue"
                  ? hueImage
                  : destination === "Phong Nha"
                    ? phongNhaImage
                    : destination === "Quy Nhon"
                      ? quyNhonImage
                      : destination === "Nha Trang"
                        ? nhaTrangImage
                        : destination === "Da Lat"
                          ? daLatImage
                          : destination === "Can Tho"
                            ? canThoImage
                            : destination === "Phu Quoc"
                              ? phuQuocImage
                              : destination === "Con Dao"
                                ? conDaoImage
                                : destination.includes("Tokyo - Mount Fuji")
                                  ? mountFujiImage
                                  : destination.includes("Osaka - Kyoto - Nara")
                                    ? japanImage
                                    : destination.includes("Tokyo - Kyoto")
                                      ? japanImage
                                      : destination.includes("Jeju")
                                        ? jejuImage
                                        : destination.includes("Seoul")
                                          ? koreaImage
                                          : destination === "Beijing"
                                            ? greatWallImage
                                            : destination.includes(
                                                  "Shanghai - Suzhou - Hangzhou",
                                                )
                                              ? shanghaiImage
                                              : destination === "Zhangjiajie"
                                                ? zhangjiajieImage
                                                : destination === "Xi an"
                                                  ? xianImage
                                                  : destination.includes(
                                                        "Chengdu - Jiuzhaigou",
                                                      )
                                                    ? jiuzhaigouImage
                                                    : destination.includes(
                                                          "Chongqing - Wulong",
                                                        )
                                                      ? chongqingImage
                                                      : destination ===
                                                          "Shanghai"
                                                        ? shanghaiImage
                                                        : destination.includes(
                                                              "Lijiang - Shangri-La",
                                                            )
                                                          ? lijiangImage
                                                          : destination ===
                                                              "Hoi An"
                                                            ? hoiAnImage
                                                            : destination ===
                                                                "Da Nang"
                                                              ? daNangImage
                                                              : destination.includes(
                                                                    "Nami Island",
                                                                  )
                                                                ? koreaImage
                                                                : destination.includes(
                                                                      "Beijing - Xi an - Shanghai",
                                                                    )
                                                                  ? greatWallImage
                                                                  : country ===
                                                                      "Japan"
                                                                    ? japanImage
                                                                    : country ===
                                                                        "South Korea"
                                                                      ? koreaImage
                                                                      : country ===
                                                                          "China"
                                                                        ? greatWallImage
                                                                        : haLongImage,
    rating: 4.7 + (index % 3) / 10,
    reviews: 24 + index * 7,
    description: `A carefully paced ${category.toLowerCase()} journey through ${destination}.`,
    tags: [destination, country, category],
    itinerary: baseItinerary,
    included,
    excluded: ["Personal expenses and optional activities"],
    featured: index < 6,
  }),
);

export const tours: Tour[] = [
  coreTours[0],
  ...posterTours,
  ...coreTours.slice(1),
  ...extraTours,
];

export const destinations = [
  {
    name: "Ha Long Bay",
    region: "domestic",
    count: 12,
    image: haLongImage,
    note: "Limestone horizons",
  },
  {
    name: "Da Nang",
    region: "domestic",
    count: 18,
    image: daNangImage,
    note: "Coast & culture",
  },
  {
    name: "Sapa",
    region: "domestic",
    count: 9,
    image: sapaImage,
    note: "Mountain mornings",
  },
  {
    name: "Japan",
    region: "international",
    count: 8,
    image: japanImage,
    note: "Old rituals, new energy",
  },
  {
    name: "South Korea",
    region: "international",
    count: 7,
    image: koreaImage,
    note: "City to coast",
  },
  {
    name: "Thailand",
    region: "international",
    count: 11,
    image: thailandImage,
    note: "Warm horizons",
  },
];

export const stories = [
  {
    id: "hoi-an",
    title: "A slower way to see Hoi An",
    category: "Field Notes",
    date: "08 Sep 2026",
    image: hoiAnImage,
    excerpt:
      "The most memorable parts of a journey often happen between the landmarks.",
  },
  {
    id: "halong",
    title: "The quiet side of Ha Long Bay",
    category: "Places",
    date: "28 Aug 2026",
    image: haLongImage,
    excerpt:
      "A thoughtful guide to finding stillness among the limestone islands.",
  },
  {
    id: "packing",
    title: "What to pack for a northern summer",
    category: "Travel Guide",
    date: "14 Aug 2026",
    image: sapaImage,
    excerpt:
      "Useful, practical notes for a lighter and more comfortable journey.",
  },
  {
    id: "japan",
    title: "A first-timer’s guide to Japan",
    category: "Travel Guide",
    date: "02 Aug 2026",
    image: japanImage,
    excerpt: "How to leave room for both the famous places and the quiet ones.",
  },
  {
    id: "korea",
    title: "Five perfect mornings in Seoul",
    category: "Experience",
    date: "21 Jul 2026",
    image: koreaImage,
    excerpt:
      "Coffee, markets, and neighbourhood walks before the city fully wakes.",
  },
  {
    id: "table",
    title: "The joy of the shared table",
    category: "Food",
    date: "10 Jul 2026",
    image: hoiAnImage,
    excerpt: "Food is often the fastest way into the heart of a place.",
  },
];
