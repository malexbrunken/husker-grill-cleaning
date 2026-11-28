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
    /**
     * GBP Share > Embed a map. This is the iframe Google serves for
     * maps.google.com/maps?cid=6804432358231856931&output=embed.
     * The pb value is the CID (4s…), so the card is the business listing
     * and "View larger map" opens that listing. No street query.
     */
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m3!3m2!1m1!4s6804432358231856931",
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
 * A $159 diagnostic charge applies. If the customer proceeds, $99 is credited
 * toward the repair. Labor is $99/hour, billed in 20-minute increments of $33.
 */
export const repairPricing = {
  diagnostic: 159,
  diagnosticCredit: 99,
  laborHourly: 99,
  laborIncrementMinutes: 20,
  laborIncrementPrice: 33,
  returnTrip: 30,
  /** Same-visit add-on when a Weber or Traeger cleaning is booked together. */
  sameVisitAddon: 50,
  /** Charged for Council Bluffs and York. Not a served-city listing. */
  outOfTerritoryTrip: 30,
} as const;

export const SAME_VISIT_REPAIR_BRANDS = ["Weber", "Traeger"] as const;

export function repairRateSummary(): string {
  const p = repairPricing;
  return `$${p.diagnostic} diagnostic charge. If you proceed with the repair, $${p.diagnosticCredit} of it is credited toward the repair. Repair labor is $${p.laborHourly}/hour, billed in ${p.laborIncrementMinutes}-minute increments of $${p.laborIncrementPrice}.`;
}

export function partsPerkSummary(): string {
  return "We carry common Traeger and Weber parts on hand, and you may supply your own parts.";
}

export function returnTripSummary(): string {
  return `If we have to come back with parts, the return trip charge is $${repairPricing.returnTrip}.`;
}

export function sameVisitAddonSummary(): string {
  return `A $${repairPricing.sameVisitAddon} repair add-on when booked with a cleaning on the same visit applies to Weber and Traeger grills. Repairs on all other grills booked with a cleaning are a custom quote.`;
}

/** Neutral list. These repairs are not included in the diagnostic charge. */
export function commonRepairsNote(): string {
  return "Common repairs include regulator replacement, hot rod replacement on Traeger and Green Mountain Grills, and igniter module replacement on Weber.";
}

export function repairPricingDescription(): string {
  return `${repairRateSummary()} ${partsPerkSummary()} ${returnTripSummary()} ${sameVisitAddonSummary()}`;
}

export function sameVisitAddonApplies(brandName?: string): boolean {
  if (!brandName) return true;
  return (SAME_VISIT_REPAIR_BRANDS as readonly string[]).includes(brandName);
}

type RepairOffer = Record<string, unknown>;

/** JSON-LD offers that match the current repair terms. */
export function repairSchemaOffers(
  pageUrl?: string,
  brandName?: string,
): RepairOffer[] {
  const p = repairPricing;
  const prefix = brandName ? `${brandName} ` : "";
  const link = pageUrl ? { url: pageUrl } : {};
  const offers: RepairOffer[] = [
    {
      "@type": "Offer",
      name: `${prefix}repair diagnostic charge`,
      price: String(p.diagnostic),
      priceCurrency: "USD",
      ...link,
      description: `$${p.diagnostic} diagnostic charge. If the customer proceeds with the repair, $${p.diagnosticCredit} is credited toward the repair.`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(p.diagnostic),
        priceCurrency: "USD",
        unitText: "diagnostic charge",
      },
    },
    {
      "@type": "Offer",
      name: `${prefix}repair labor`,
      price: String(p.laborIncrementPrice),
      priceCurrency: "USD",
      ...link,
      description: `Repair labor is $${p.laborHourly}/hour, billed in ${p.laborIncrementMinutes}-minute increments of $${p.laborIncrementPrice}.`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(p.laborIncrementPrice),
        priceCurrency: "USD",
        unitText: `${p.laborIncrementMinutes} minutes`,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: p.laborIncrementMinutes,
          unitCode: "MIN",
        },
      },
    },
    {
      "@type": "Offer",
      name: `${prefix}return trip with parts`,
      price: String(p.returnTrip),
      priceCurrency: "USD",
      ...link,
      description: returnTripSummary(),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(p.returnTrip),
        priceCurrency: "USD",
        unitText: "return trip with parts",
      },
    },
  ];

  if (sameVisitAddonApplies(brandName)) {
    offers.push({
      "@type": "Offer",
      name: `${prefix}repair add-on with same-visit cleaning`,
      price: String(p.sameVisitAddon),
      priceCurrency: "USD",
      ...link,
      description: sameVisitAddonSummary(),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(p.sameVisitAddon),
        priceCurrency: "USD",
        unitText: "repair labor with same-visit Weber or Traeger cleaning, plus parts",
      },
    });
  }

  return offers;
}

export const grateSchedulingNote =
  "We always take your grates off site to decarbonize them in our proprietary cleaning tank, so please book on a day you won't need the grill that evening.";

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
    a: grateSchedulingNote,
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
