// Source of truth: bkcapital.rw (fetched 2026-08-06). Copy is rewritten for
// tone/concision; facts, figures, and structure are preserved as published.

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Values, Mission, Vision & Aim", href: "/about/mission-vision-values" },
      { label: "Licenses", href: "/about/licenses" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Investment & Wealth Management", href: "/services/investment-wealth-management" },
      { label: "Corporate Finance & Advisory", href: "/services/corporate-finance-advisory" },
      { label: "Securities Brokerage & Market Research", href: "/services/securities-brokerage-market-research" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    children: [
      { label: "Market Reports", href: "/publications/market-reports" },
      { label: "Quarterly Reports", href: "/publications/quarterly-reports" },
      { label: "BK Capital Total Return Index", href: "/publications/total-return-index" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/news/events" },
      { label: "Careers", href: "/news/careers" },
    ],
  },
  { label: "Contacts", href: "/contacts" },
] as const;

export const onlineServices = {
  label: "Online Services",
  signIn: "https://onboarding.bkcapital.rw/",
  register: "https://onboarding.bkcapital.rw/auth/signup",
};

export const contact = {
  address: "KN 30 St, Kigali - Rwanda",
  poBox: "PO Box 175, Kigali/Rwanda",
  supportLine: "+250 788 143 141",
  supportLineAlt: "+250 788 143 241",
  whatsapp: "+250 798 284 430",
  email: "bkcapital@bk.rw",
  social: {
    facebook: "https://facebook.com/bk-capital",
    twitter: "https://twitter.com/bk_capital",
    linkedin: "https://linkedin.com/company/bkcapitalrw",
    instagram: "https://instagram.com/bk_capital_official",
  },
};

export const coreValues = [
  "Innovation",
  "Integrity and Honesty",
  "Professionalism",
  "Teamwork",
  "Value Addition",
];

export const missionVisionAim = [
  {
    title: "Mission",
    body: "To serve as a trusted partner to our clients by responsibly providing financial services and advisory that grow their finances.",
  },
  {
    title: "Vision",
    body: "To be the most trusted financial partner, offering innovative financial solutions.",
  },
  {
    title: "Aim",
    body: "To be the partner of choice for local, regional, and global entities and individuals through our advisory and investment services.",
  },
];

export const services = [
  {
    slug: "investment-wealth-management",
    name: "Investment & Wealth Management",
    summary:
      "Bespoke portfolio, pension, and fund management for individuals, institutions, and savings groups — including our flagship Aguka Fund and Tekana Personal Pension Scheme.",
    icon: "LineChart",
  },
  {
    slug: "corporate-finance-advisory",
    name: "Corporate Finance & Advisory",
    summary:
      "Tailor-made advisory and consulting solutions, delivered with a track record of high performance and dedicated client service.",
    icon: "Handshake",
  },
  {
    slug: "securities-brokerage-market-research",
    name: "Securities Brokerage & Market Research",
    summary:
      "Licensed market intermediary and depository participant offering access to domestic, regional, and international markets, backed by dedicated research.",
    icon: "BarChart3",
  },
] as const;

export const products = [
  {
    slug: "aguka-fund",
    name: "Aguka Unit Trust Fund",
    tagline: "Our flagship fund",
    summary:
      "Built for individuals, organizations, NGOs, religious and savings groups alike — structured for low-risk returns with the flexibility to invest and withdraw as your needs change.",
  },
  {
    slug: "tekana-pension",
    name: "Tekana Personal Pension Scheme",
    tagline: "Retirement, on your terms",
    summary:
      "A comprehensive, accessible way to save for retirement, with flexible options tailored to diverse needs — so you can take control of your financial future.",
  },
] as const;

export const factsAndFigures = {
  aum: { label: "Assets Under Management", value: "FRw 130.8bn" },
  founded: { label: "Founded", value: "2012" },
  transformed: { label: "Full-Service Investment Firm Since", value: "2018" },
  parent: { label: "Parent Company", value: "BK Group PLC" },
};

export const licenses = [
  "Fund Management for Pension Schemes — National Bank of Rwanda",
  "Administration License for Pension Schemes — National Bank of Rwanda",
  "Security Broker License & Investment Management — Capital Markets Authority (CMA)",
  "Investment Banking License — Capital Markets Authority (CMA)",
  "Investment Registration Certificate — Rwanda Development Board (RDB)",
];

export const partners = [
  { name: "Bank of Kigali", logo: "/logos/partners/bank-of-kigali.png" },
  { name: "National Bank of Rwanda", logo: "/logos/partners/national-bank-of-rwanda.png" },
  { name: "Rwanda Stock Exchange", logo: "/logos/partners/rwanda-stock-exchange.png" },
  { name: "Capital Markets Authority", logo: "/logos/partners/capital-markets-authority.png" },
  { name: "IFSIC", logo: "/logos/partners/ifsic.png" },
];

export const whoWeAre = {
  heading: "Rwanda's largest specialist stockbroker",
  body: "Incorporated in 2012 as BK Securities Limited, BK Capital is the investment banking subsidiary of BK Group — the largest financial group in Rwanda. Beyond stockbroking, we offer investment management, administration and advisory, and corporate finance services as a member of the Rwanda Stock Exchange and a participant of the Central Securities Depository of the National Bank of Rwanda.",
  differentiators: [
    "Widely experienced personnel",
    "Robust systems and processes",
    "Innovative product offering",
    "Dedicated, long-lasting client relationships",
  ],
};
