/* ============================================================
   ВСІ ДАНІ САЙТУ. Верстку чіпати не треба.
   Нова робота = один новий рядок у works.
   img: "assets/works/назва.jpg"  (16:9, 1280x720). Порожній рядок = темна заглушка.
   Підключено як звичайний <script>, тому працює і без сервера.
   ============================================================ */
window.PORTFOLIO = {
  site: {
    // Куди веде кнопка "Замовити прев'ю"
    order: "#contact"
  },

  // Цифри для Bento-сітки (зараз приклади, постав свої реальні)
  stats: { ctr: "+13.4%", views: "30M+", speed: "24" },

  // Lottie для Bento-клітинки. Шлях до .lottie або .json з IconScout. "" = порожня рамка
  lottie: { bento: "" },

  // Софт у Bento. icon: шлях до .svg / .lottie з IconScout. "" = буквений значок
  tools: [
    { name: "Photoshop",     short: "Ps", icon: "" }
  ],

  // cat створює таб автоматично. views: приклади, заміни на реальні
  works: [
    { title: "Am I on a deserted island? Hand Simulator: Survival", cat: "IRL / Vlogs",     views: "1.2M", img: "assets/irl_1.jpg" },
    { title: "Am I on a deserted island? Hand Simulator: Survival", cat: "IRL / Vlogs",     views: "550K", img: "assets/after_1.jpg" },
    { title: "I Built a Time Machine and This Happened",            cat: "IRL / Vlogs",     views: "860K", img: "assets/irl_2.jpg" },
    { title: "The house robbery didn't go according to plan",       cat: "IRL / Vlogs",     views: "540K", img: "assets/irl_3.png" },
    { title: "We made burgers from random ingredients",             cat: "IRL / Vlogs",     views: "310K", img: "assets/irl_4.jpg" },
    { title: "I Cooked Food From Every Country",                    cat: "IRL / Vlogs",     views: "720K", img: "assets/irl_5.jpg" },
    { title: "I Tried Flipping Cars With No Experience",            cat: "IRL / Vlogs",     views: "450K", img: "assets/irl_6.jpg" },
    { title: "I Tried Flipping Cars With No Experience",            cat: "IRL / Vlogs",     views: "450K", img: "assets/irl_7.jpg" },
    { title: "I Tried Flipping Cars With No Experience",            cat: "IRL / Vlogs",     views: "450K", img: "assets/irl_8.jpg" },
    { title: "Як я заробив $10 000 на подарунках в Telegram",       cat: "Business & Crypto", views: "980K", img: "assets/fin_1.jpg" },
    { title: "100.000 ГРН на монтажі відео в 17 років",             cat: "Business & Crypto", views: "640K", img: "assets/fin_4.jpg" },
    { title: "100.000 ГРН на монтажі відео в 17 років",             cat: "Business & Crypto", views: "640K", img: "assets/fin_3.jpg" },
    { title: "100.000 ГРН на монтажі відео в 17 років",             cat: "Business & Crypto", views: "640K", img: "assets/fin_5.jpg" },
    { title: "How to make money editing videos",                    cat: "Business & Crypto", views: "270K", img: "assets/fin_2.jpg" }
  ],

  // Пари До / Після (показується 3). before = сирий вихідник, after = готове прев'ю
  compare: [
    { title: "IRL / Vlogs",            before: "assets/before_4.jpg", after: "assets/irl_8.jpg" },
    { title: "IRL / Vlogs",       before: "assets/before_2.jpg", after: "assets/after_2.jpg" },
    { title: "IRL / Vlogs", before: "assets/before_3.jpg", after: "assets/after_3.jpg" }
  ],

  // handle копіюється кнопкою. Заміни Discord на свій
  socials: [
    { name: "Telegram",  url: "https://t.me/obla0chko",                   handle: "@obla0chko" },
    { name: "Twitter",   url: "https://x.com/obla0chko",       handle: "@obla0chko" },
    { name: "Instagram", url: "https://www.instagram.com/obla0chko.dsgn/",    handle: "@obla0chko.dsgn" },
    { name: "Behance",   url: "https://www.behance.net/def70fbe",         handle: "def70fbe" }
  ]
};
