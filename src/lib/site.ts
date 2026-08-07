export const site = {
  name: "Husker Grill Cleaning",
  legalName: "Husker Grill Cleaning LLC",
  domain: "https://huskergrillcleaning.com",
  phoneDisplay: "(402) 672-6272",
  phoneTel: "+14026726272",
  email: "info@huskergrillcleaning.com",
  emailDisplay: "Info@HuskerGrillCleaning.com",
  description:
    "Nebraska's premier mobile grill cleaning and repair service. Professional 50-step deep cleaning, maintenance cleaning, full-service Weber repair, full-service Traeger repair, and grill will not light service in Omaha and Lincoln metros.",
  tagline: "Professional Grill Cleaning in Omaha and Lincoln",
  locations: [
    { city: "Lincoln", region: "NE", postalCode: "68522" },
    { city: "Omaha", region: "NE", postalCode: "68022" },
  ],
  social: {
    facebook: "https://www.facebook.com/huskergrillcleaning",
    instagram: "https://www.instagram.com/huskergrillcleaning",
    nicejob: "https://nicejob.com/husker-grill-cleaning",
  },
  bookingPath: "/schedule-2",
  geo: { latitude: 41.2565, longitude: -95.9345 },
  taxId: "15883655",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/see-our-work", label: "See Our Work" },
  { href: "/pricing", label: "Pricing" },
  {
    href: "/multi-tenant-apartment-townhome-grill-cleaning",
    label: "Multi-Tenant",
  },
] as const;

export const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/join-our-team", label: "Join Our Team" },
  {
    href: "https://nicejob.com/husker-grill-cleaning",
    label: "Third-Party Review Manager",
    external: true,
  },
] as const;

export const partnerLogos = [
  { src: "/images/partners/sanctuary-ridge.webp", alt: "Sanctuary Ridge" },
  { src: "/images/partners/berkshire.webp", alt: "Berkshire Hathaway" },
  { src: "/images/partners/wilderness-ridge.webp", alt: "Wilderness Ridge" },
  { src: "/images/partners/linden-estates.webp", alt: "Linden Estates" },
  { src: "/images/partners/the-prairies.webp", alt: "The Prairies" },
  { src: "/images/partners/np-dodge.webp", alt: "NP Dodge Management" },
  { src: "/images/partners/the-sanctuary.webp", alt: "The Sanctuary" },
  { src: "/images/partners/the-ridges.webp", alt: "The Ridges" },
  { src: "/images/partners/firethorn.webp", alt: "Firethorn" },
  { src: "/images/partners/big-sandy-lake.webp", alt: "Big Sandy Lake" },
  { src: "/images/partners/waterford-estates.webp", alt: "Waterford Estates" },
  { src: "/images/partners/crown-management.webp", alt: "Crown Management" },
] as const;

export const omahaNeighborhoods = [
  "The Sanctuary",
  "Sanctuary Ridge",
  "The Ridges",
  "Regency",
  "Elkhorn",
  "Gretna",
  "Fair Acres",
  "Linden Estates",
  "Skyline Ranches",
  "Bluewater",
  "Bennington Lake",
  "The Prairies",
  "Valley, NE",
  "Lake Allure",
  "Iron Horse",
  "Lake Ashland",
  "Sandpit Lake",
  "Tiburon",
  "Deer Creek",
] as const;

export const lincolnNeighborhoods = [
  "Firethorn",
  "Wilderness Ridge",
  "Village Gardens",
  "Capitol Beach",
  "Waterford Estates",
] as const;

export const faqs = [
  {
    q: "What areas do you serve?",
    a: "Lincoln and Omaha metros. Email us at info@huskergrillcleaning.com for custom estates.",
  },
  {
    q: "What neighborhoods in Omaha do you service?",
    a: "We proudly serve The Sanctuary, Sanctuary Ridge, The Ridges, Regency, Elkhorn, Gretna, Fair Acres, Linden Estates, Skyline Ranches, Bluewater, Bennington Lake, The Prairies, Valley, Lake Allure, Iron Horse, Lake Ashland, Sandpit Lake, Tiburon, and Deer Creek.",
  },
  {
    q: "What neighborhoods in Lincoln do you service?",
    a: "We proudly serve Firethorn, Wilderness Ridge, Village Gardens, Capitol Beach, and Waterford Estates.",
  },
  {
    q: "What kinds of units can you clean?",
    a: "Gas, charcoal, pellet, smokers, and flat-top griddles—including Blackstone and Traeger.",
  },
  {
    q: "Do I need to be home?",
    a: "No. Our service is fully mobile. We text photos of progress and any mechanical findings.",
  },
  {
    q: "How long does a deep clean take?",
    a: "2–3 hours for pedestals; up to 5 hours for oversized estate rigs.",
  },
  {
    q: "Are methods food-safe?",
    a: "Yes. We use citrus degreasers and high-temp steam. We re-season the grates as the final step.",
  },
  {
    q: "How often should I clean?",
    a: "Twice a year—once during peak season and once before winter storage.",
  },
  {
    q: "Do you inspect for safety?",
    a: "Yes. We check burners, igniters, and gas lines; you'll get photos of anything needing attention.",
  },
  {
    q: "Built-in units or full kitchens?",
    a: "Absolutely. We service built-ins and surrounding stainless counters regularly.",
  },
  {
    q: "How soon can I cook?",
    a: "Immediately. The unit is re-seasoned and ready for a sear the moment we finish.",
  },
  {
    q: "Broken or worn parts?",
    a: "We can handle many common repairs (igniters, burners) on the spot with your approval.",
  },
  {
    q: "How should I prepare?",
    a: "Simply unlock the gate. We are fully self-sufficient with onboard power.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes. If you are not 100% satisfied, we will make it right—no hassle.",
  },
  {
    q: "Do you charge sales tax?",
    a: "As a Nebraska home service, we remit State (5.5%) and local tax based on your city. Tax ID: 15883655.",
  },
  {
    q: "Do repairs have a warranty?",
    a: "We pass on all supplier warranties, and our labor is always guaranteed.",
  },
] as const;
