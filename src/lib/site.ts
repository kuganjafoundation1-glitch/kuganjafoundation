export const CONTACT = {
  org: "Kuganja Foundation",
  phone: "+256 781 500 800",
  phoneHref: "tel:+256781500800",
  whatsapp: "+256 703 264 035",
  whatsappHref: "https://wa.me/256703264035",
  email: "Kuganjafoundation1@gmail.com",
  emailHref: "mailto:Kuganjafoundation1@gmail.com",
  location: "Namuwongo, Kampala, Uganda",
  social: "Kuganja Foundation",
};

export const DONATION = {
  mtn: "+256 781 500 800",
  airtel: "+256 703 264 035",
  bank: "Centenary Bank",
  accountName: "Kuganja Foundation",
  accountNumber: "3100128472",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/impact", label: "Our Impact" },
  { to: "/future-plans", label: "Future Plans" },
  { to: "/contact", label: "Contact" },
] as const;

export const PROGRAMS = [
  {
    id: "mental-health",
    title: "Mental Health, Counseling & Faith-Based Wellbeing",
    short: "Restoring hope, healing trauma, and nurturing spiritual and emotional resilience.",
    description:
      "We believe true transformation begins from within. Our programs restore hope, heal trauma, and nurture spiritual and emotional resilience.",
    items: [
      { t: "Mental Health Awareness & Wellbeing", d: "Community workshops to combat stigma, teach mindfulness, and promote emotional wellbeing." },
      { t: "Faith-Based Spiritual Guidance", d: "Nurturing inner strength and hope by anchoring psychosocial care in a compassionate spiritual foundation." },
      { t: "Inspirational Cinema Ministry", d: "Curated faith-centered and motivational movie screenings used as tools for community reflection, hope, and moral inspiration." },
    ],
  },
  {
    id: "family-support",
    title: "Family Support and Community Outreach",
    short: "Immediate relief and long-term stability for vulnerable households.",
    description:
      "We walk hand in hand with marginalized individuals to provide immediate relief and long-term stability for vulnerable households.",
    items: [
      { t: "Vulnerable Family Outreach", d: "Distribution of food, medical essentials, and basic necessities to households facing extreme poverty, illness, or displacement." },
      { t: "Community Empowerment Initiatives", d: "Supporting local networks to identify needs and implement grassroots solutions." },
      { t: "Crisis Intervention", d: "Emergency relief for families experiencing sudden hardships." },
    ],
  },
  {
    id: "arts-culture",
    title: "Art, Culture & Heritage Advancement",
    short: "Creative expression as a medium of healing, connection, and economic empowerment.",
    description:
      "We celebrate identity and leverage creative expression as a powerful medium of healing, connection, and economic empowerment.",
    items: [
      { t: "Heritage & Youth Engagement", d: "Connecting young people with their cultural identity and heritage." },
      { t: "Creative Arts for Healing", d: "Painting, crafts, music, and storytelling as avenues for expression and healing." },
      { t: "Artisanal Showcase", d: "Showcasing arts, crafts, and fashion to help turn heritage into livelihoods." },
    ],
  },
  {
    id: "micro-empowerment",
    title: "Non-Profit Finance & Micro-Empowerment",
    short: "Equipping individuals and groups with the financial literacy to sustain them.",
    description:
      "We build pathways by equipping individuals and small community groups with the financial literacy needed to sustain them.",
    items: [
      { t: "Financial Literacy Training", d: "Building practical knowledge for managing household and small-enterprise finances." },
      { t: "Micro-Grant Allocation", d: "Small grants intended to help individuals and groups take steps toward self-reliance." },
      { t: "Community Savings & Investment Groups", d: "Encouraging community groups to save and invest together." },
    ],
  },
  {
    id: "skills",
    title: "Knowledge, Skills Development & Capacity Building",
    short: "Practical tools to break free from generational poverty.",
    description:
      "We equip youth, women, and vulnerable individuals with practical tools to break free from generational poverty and build independent futures.",
    items: [],
  },
] as const;
