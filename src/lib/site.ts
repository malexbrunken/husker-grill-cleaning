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
  /** Service-area business: no public street address and no ZIP published. */
  hours: {
    display: "Mon-Fri 9am-6pm",
    callsAnswered: "Calls answered 7 days a week",
    /** schema.org openingHours */
    openingHours: "Mo-Fr 09:00-18:00",
    opens: "09:00",
    closes: "18:00",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as const,
  },
  /**
   * Google review totals for LocalBusiness.aggregateRating.
   * Update reviewCount as the Google total grows. Do not blend Facebook, Yelp, or other sites into this count.
   */
  googleReviews: {
    ratingValue: 5,
    bestRating: 5,
    reviewCount: 97,
  },
  google: {
    cid: "6804432358231856931",
    profileUrl: "https://www.google.com/maps?cid=6804432358231856931",
    /**
     * Opens this profile's Google reviews. Built from the CID because a Place ID
     * short link is not published. Swap for the GBP "ask for reviews" URL if one is issued.
     */
    reviewUrl:
      "https://www.google.com/maps?cid=6804432358231856931&hl=en#lrd=0x0:0x5e6e332daa955723,3",
    /** Service-area embed. No street query, so the map is not pinned to an address. */
    embedUrl:
      "https://maps.google.com/maps?cid=6804432358231856931&hl=en&z=9&output=embed",
  },
  social: {
    facebook: "https://www.facebook.com/huskergrillcleaning",
    instagram: "https://www.instagram.com/huskergrillcleaning",
    nicejob: "https://nicejob.com/husker-grill-cleaning",
  },
  /** Meta (Facebook) Pixel ID — base PageView via MetaPixel in root layout. */
  metaPixelId: "1536317344128995",

  bookingPath: "/schedule",
  /** Housecall Pro online booking (opens in new tab). */
  bookingUrl:
    "https://book.housecallpro.com/book/Husker-Grill-Cleaning/39dfd680a1014e25a85a1f719cf79526?v2=true",
  /** Omaha-metro center for service-area schema. Not a street address. */
  geo: { latitude: 41.2565, longitude: -95.9345 },
  taxId: "15883655",
} as const;

/** Single LocalBusiness node referenced across the site. */
export const businessId = `${site.domain}/#business`;

/**
 * Repair pricing — single source of truth.
 * Diagnostic and trip charge includes up to 30 minutes when the part is on hand.
 */
export const repairPricing = {
  diagnosticAndTrip: 149,
  includedMinutes: 30,
  intervalMinutes: 15,
  intervalPrice: 30,
  coveredByDiagnosticPlusPart: [
    "regulator replacement",
    "hot rod replacement on Traeger or Green Mountain Grills",
    "igniter module replacement on Weber",
  ],
} as const;

export function repairRateSummary(): string {
  const p = repairPricing;
  return `$${p.diagnosticAndTrip} diagnostic and trip charge, includes up to ${p.includedMinutes} minutes of work if the part is on hand; after that $${p.intervalPrice} per ${p.intervalMinutes}-minute interval.`;
}

export function repairCoverageSummary(): string {
  return `Regulator replacement, hot rod replacement on Traeger or Green Mountain Grills, and igniter module replacement on Weber are covered by the $${repairPricing.diagnosticAndTrip} plus only the part cost.`;
}

export function repairPricingDescription(): string {
  return `${repairRateSummary()} ${repairCoverageSummary()}`;
}

/** "Gretna, NE" — trims so a trailing space on the city cannot render as "Gretna , NE". */
export function formatPlace(city: string, region: string): string {
  return `${city.trim().replace(/\s+,/g, ",")}, ${region.trim()}`;
}

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
