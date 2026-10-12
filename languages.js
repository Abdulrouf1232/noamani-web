const translations = {
  ps: {
    welcome: "NOAMANI WEB ته ښه راغلاست",
    tagline: "اعلانونه • پانګونه • عاید",
    premium: "NOAMANI ځانګړی حساب",
    demo: "ازمایښتي بیلانس • حقیقي پیسې نه دي",
    home: "کورپاڼه",
    dashboard: "ډشبورډ",
    services: "خدمات",
    about: "زموږ په اړه",
    contact: "اړیکه",
    back: "کورپاڼې ته بېرته",
    balance: "بیلانس",
    menu: [
      "نوم‌لیکنه", "حساب ته ننوتل", "والټ", "پانګونه",
      "کارکوونکي", "اعلانونه", "پیسې جمع کول",
      "پیسې ایستل", "انعامونه", "معرفي کول",
      "معاملې", "د ګټې محاسبه", "مرسته",
      "د مدیریت برخه", "شخصي پروفایل"
    ],
    descriptions: [
      "د نوم‌لیکنې برخه", "د حساب د ننوتلو برخه",
      "د شخصي حساب معلومات", "د مضاربت پانګونه",
      "د کارکوونکو سیستم", "د Google AdSense برخه",
      "د پیسو جمع کولو برخه", "د پیسو ایستلو برخه",
      "د حقیقي کار انعامونه", "د معرفي کولو معلومات",
      "د حساب تاریخچه", "د مضاربت محاسبه",
      "د مرستې برخه", "د مدیریت برخه", "شخصي معلومات"
    ],
    notice: "دا برخه د جوړېدو په حال کې ده. حقیقي مالي عملیات لا فعال نه دي.",
    profit: "حقیقي خالصه ګټه (AFN)",
    share: "د پانګوال د ګټې سلنه (%)",
    calculate: "محاسبه",
    invalid: "مهرباني وکړئ سم معلومات ولیکئ.",
    investor: "د پانګوال برخه",
    manager: "د مدیر برخه"
  },
  fa: {
    welcome: "به NOAMANI WEB خوش آمدید",
    tagline: "تبلیغات • سرمایه‌گذاری • درآمد",
    premium: "حساب ویژه NOAMANI",
    demo: "موجودی آزمایشی • پول واقعی نیست",
    home: "صفحه اصلی",
    dashboard: "داشبورد",
    services: "خدمات",
    about: "درباره ما",
    contact: "تماس",
    back: "بازگشت به صفحه اصلی",
    balance: "موجودی",
    menu: [
      "ثبت‌نام", "ورود به حساب", "کیف پول", "سرمایه‌گذاری",
      "کارمندان", "تبلیغات", "واریز پول", "برداشت پول",
      "پاداش‌ها", "معرفی دوستان", "تراکنش‌ها",
      "محاسبه سود", "پشتیبانی", "پنل مدیریت", "پروفایل"
    ],
    descriptions: [
      "بخش ثبت‌نام", "بخش ورود به حساب",
      "اطلاعات حساب شخصی", "سرمایه‌گذاری مضاربه",
      "سیستم کارمندان", "بخش Google AdSense",
      "بخش واریز پول", "بخش برداشت پول",
      "پاداش فعالیت واقعی", "اطلاعات معرفی دوستان",
      "تاریخچه حساب", "محاسبه مضاربه",
      "بخش پشتیبانی", "بخش مدیریت", "اطلاعات شخصی"
    ],
    notice: "این بخش در حال ساخت است. عملیات مالی واقعی هنوز فعال نیست.",
    profit: "سود خالص واقعی (AFN)",
    share: "درصد سهم سود سرمایه‌گذار (%)",
    calculate: "محاسبه",
    invalid: "لطفاً اطلاعات معتبر وارد کنید.",
    investor: "سهم سرمایه‌گذار",
    manager: "سهم مدیر"
  },
  en: {
    welcome: "Welcome to NOAMANI WEB",
    tagline: "Advertising • Investment • Earnings",
    premium: "NOAMANI PREMIUM ACCOUNT",
    demo: "Demo Balance • Not real money",
    home: "Home",
    dashboard: "Dashboard",
    services: "Services",
    about: "About Us",
    contact: "Contact",
    back: "Back to Home",
    balance: "Balance",
    menu: [
      "Register", "Login", "Wallet", "Investment",
      "Employee", "Advertising", "Deposit", "Withdraw",
      "Rewards", "Referrals", "Transactions",
      "Profit Calculator", "Support", "Admin Panel", "Profile"
    ],
    descriptions: [
      "Registration section", "Account login section",
      "Personal account information", "Mudarabah investment",
      "Employee system", "Google AdSense section",
      "Deposit funds", "Withdraw funds", "Real activity rewards",
      "Referral information", "Account history",
      "Mudarabah calculator", "Support section",
      "Administration section", "Personal information"
    ],
    notice: "This section is under development. Real financial operations are not active yet.",
    profit: "Actual net profit (AFN)",
    share: "Investor profit share (%)",
    calculate: "Calculate",
    invalid: "Please enter valid information.",
    investor: "Investor share",
    manager: "Manager share"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

  document.querySelector('[data-i18n="welcome"]').textContent = t.welcome;
  document.querySelector("header p").textContent = t.welcome;
  document.querySelector("header small").textContent = t.tagline;

  const goldCard = document.querySelector(".gold-card");
  goldCard.children[0].textContent = t.premium;
  goldCard.children[2].textContent = t.demo;

  const buttons = document.querySelectorAll("#menu .tile");
  buttons.forEach((button, i) => {
    const name = button.querySelector("b");
    if (name) name.textContent = t.menu[i];
  });

  const title = document.getElementById("pageTitle");
  const pageText = document.getElementById("pageText");
  const activePage = window.currentPage;

  if (Number.isInteger(activePage) && activePage >= 0) {
    title.textContent = t.menu[activePage];
    pageText.textContent = t.descriptions[activePage];
    if (activePage === 11) renderCalculator(t);
  }

  document.querySelector("#detail .btn").textContent = t.back;

  const bottomButtons = document.querySelectorAll(".bottom button");
  if (bottomButtons.length === 4) {
    bottomButtons[0].textContent = "⌂ " + t.dashboard;
    bottomButtons[1].textContent = "▣ " + t.menu[2];
    bottomButtons[2].textContent = "☎ " + t.menu[12];
    bottomButtons[3].textContent = "♙ " + t.menu[14];
  }

  localStorage.setItem("noamani-language", lang);
}

function renderCalculator(t) {
  const content = document.getElementById("pageContent");
  content.innerHTML = `
    <label>${t.profit}</label>
    <input id="profit" type="number" min="0" value="1000">
    <label>${t.share}</label>
    <input id="share" type="number" min="0" max="100" value="60">
    <button class="btn" onclick="calculate()">${t.calculate}</button>
    <p id="answer" aria-live="polite"></p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("noamani-language") || "ps");
});
