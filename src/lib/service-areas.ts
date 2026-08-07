import { site } from "@/lib/site";

/**
 * Shared pricing used on every local service-area lander.
 * Keep in sync with /pricing.
 */
export const AREA_PRICING = {
  freestandingDeep: { amount: 299, label: "Freestanding / pedestal deep clean" },
  builtInDeep: { amount: 349, label: "Built-in outdoor kitchen deep clean" },
  maintenance: { amount: 199, label: "Maintenance cleaning (after a prior deep clean)" },
  semiAnnual: { amount: 599, label: "Semi-annual care (two cleans / year)" },
  multiGrillDiscount: {
    amount: 50,
    label: "Off each additional grill on the same visit",
  },
  repairWithClean: { amount: 50, label: "Repair labor with deep clean (+ parts)" },
  repairStandalone: { amount: 149, label: "Stand-alone repair visit (+ parts)" },
  extraLabor: { amount: 35, label: "Extra repair labor per 15 minutes" },
} as const;

export type ServiceArea = {
  /** URL slug, e.g. elkhorn-nebraska-grill-cleaning */
  slug: string;
  /** Short place name for H1/copy: "Elkhorn" */
  city: string;
  /** State abbreviation */
  region: "NE" | "IA";
  /** Full state name */
  regionName: string;
  /** Metro umbrella for internal links */
  metro: "Omaha" | "Lincoln" | "Council Bluffs";
  /** Postal code representative of the area (schema) */
  postalCode: string;
  /** lat/lng for LocalBusiness area */
  geo: { latitude: number; longitude: number };
  /** Optional communities / HOAs called out on the page */
  nearby: readonly string[];
  /** Local flavor blurb (1–2 sentences unique to the city) */
  localBlurb: string;
  /** Extra long-tail keyword phrases unique to this page */
  keywordExtras?: readonly string[];
};

export const serviceAreas: readonly ServiceArea[] = [
  {
    slug: "elkhorn-nebraska-grill-cleaning",
    city: "Elkhorn",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68022",
    geo: { latitude: 41.2864, longitude: -96.2342 },
    nearby: [
      "Skyline Ranches",
      "Standing Bear",
      "Pacific Springs",
      "Elkhorn River corridor",
      "West Maple corridor",
      "Valley",
      "Waterloo",
      "Bennington",
      "Gretna edge communities",
    ],
    localBlurb:
      "Elkhorn’s newer west-metro neighborhoods and estate lots mean more freestanding smokers, pellet grills, and full outdoor kitchens than a typical in-town patio. We route regularly through Elkhorn so deep cleans and same-visit repairs stay convenient—not a long wait for a shop drop-off.",
    keywordExtras: [
      "grill cleaning Elkhorn NE",
      "how much is grill cleaning in Elkhorn",
      "Elkhorn Nebraska grill cleaning cost",
      "built-in grill cleaning Elkhorn",
      "Weber grill cleaning Elkhorn",
      "Traeger cleaning Elkhorn NE",
      "mobile grill cleaning near Elkhorn",
    ],
  },
] as const;

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function serviceAreaPath(area: ServiceArea): string {
  return `/${area.slug}`;
}

export function serviceAreaTitle(area: ServiceArea): string {
  return `Grill Cleaning in ${area.city}, ${area.region} | Pricing & Mobile Service | ${site.name}`;
}

export function serviceAreaDescription(area: ServiceArea): string {
  const { freestandingDeep, builtInDeep } = AREA_PRICING;
  return `Professional mobile grill cleaning in ${area.city}, ${area.region}. Freestanding deep cleans from $${freestandingDeep.amount}, built-ins from $${builtInDeep.amount}. 50-step process, maintenance, and grill repair across the ${area.metro} metro. Book online or call ${site.phoneDisplay}.`;
}

/** Map neighborhood display names → service-area slugs for internal links. */
export const neighborhoodServiceAreaLinks: Record<string, string> = {
  Elkhorn: "/elkhorn-nebraska-grill-cleaning",
};
