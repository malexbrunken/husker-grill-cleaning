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
  extraLaborHourly: { amount: 120, label: "Repair labor after diagnosis (per hour)" },
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

function keywordsFor(city: string, extras: string[] = []): string[] {
  return [
    `grill cleaning ${city} NE`,
    `how much is grill cleaning in ${city}`,
    `how much is grill cleaning in ${city} NE`,
    `${city} Nebraska grill cleaning cost`,
    `mobile grill cleaning ${city}`,
    `built-in grill cleaning ${city}`,
    `Weber grill cleaning ${city}`,
    `Traeger cleaning ${city} NE`,
    ...extras,
  ];
}

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
      "Gretna",
    ],
    localBlurb:
      "Elkhorn’s newer west-metro neighborhoods and estate lots mean more freestanding smokers, pellet grills, and full outdoor kitchens than a typical in-town patio. We route regularly through Elkhorn so deep cleans and same-visit repairs stay convenient—not a long wait for a shop drop-off.",
    keywordExtras: keywordsFor("Elkhorn", ["mobile grill cleaning near Elkhorn"]),
  },
  {
    slug: "valley-nebraska-grill-cleaning",
    city: "Valley",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68064",
    geo: { latitude: 41.3128, longitude: -96.3464 },
    nearby: [
      "Lake Allure",
      "Bluewater",
      "Sandpit Lake",
      "Elkhorn",
      "Waterloo",
      "Yutan",
      "Leshara",
      "Platte River corridor",
      "West Dodge / Hwy 275 corridor",
    ],
    localBlurb:
      "Valley sits on the west edge of the Omaha metro—acreage homes, lake communities, and river-corridor properties where freestanding smokers, pellet grills, and outdoor kitchens work hard all season. We bring the full 50-step deep clean and same-visit repair options on-site so you don’t haul a grill into town.",
    keywordExtras: keywordsFor("Valley", [
      "lake house grill cleaning Valley NE",
      "how much is grill cleaning in Valley Nebraska",
    ]),
  },
  {
    slug: "gretna-nebraska-grill-cleaning",
    city: "Gretna",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68028",
    geo: { latitude: 41.1406, longitude: -96.2397 },
    nearby: [
      "The Ridges",
      "Sanctuary Ridge",
      "The Sanctuary",
      "Elkhorn",
      "Papillion",
      "La Vista",
      "Ashland-Greenwood",
      "Hwy 370 corridor",
      "Lincoln edge communities",
    ],
    localBlurb:
      "Gretna’s growth along Highway 370 means new outdoor kitchens, freestanding gas grills, and pellet smokers across subdivisions and acreage lots. We schedule mobile deep cleans through Gretna so west-metro homeowners get the same 50-step process without a drive to a shop.",
    keywordExtras: keywordsFor("Gretna", ["grill cleaning near Gretna NE"]),
  },
  {
    slug: "lincoln-nebraska-grill-cleaning",
    city: "Lincoln",
    region: "NE",
    regionName: "Nebraska",
    metro: "Lincoln",
    postalCode: "68508",
    geo: { latitude: 40.8136, longitude: -96.7026 },
    nearby: [
      "Firethorn",
      "Wilderness Ridge",
      "Village Gardens",
      "Capitol Beach",
      "Waterford Estates",
      "Waverly",
      "Hickman",
      "Roca",
      "Raymond",
      "South Lincoln",
      "East Lincoln",
    ],
    localBlurb:
      "Lincoln is home base territory for Husker Grill Cleaning—estates at Firethorn and Wilderness Ridge, in-town patios, and multi-grill setups across the capital city. We deep-clean freestanding, built-in, pellet, and smoker units on-site with clear pricing and same-visit repair options for cleaning customers.",
    keywordExtras: keywordsFor("Lincoln", [
      "Lincoln NE professional grill cleaning",
      "outdoor kitchen cleaning Lincoln Nebraska",
    ]),
  },
  {
    slug: "papillion-nebraska-grill-cleaning",
    city: "Papillion",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68046",
    geo: { latitude: 41.1544, longitude: -96.0422 },
    nearby: [
      "La Vista",
      "Bellevue",
      "Gretna",
      "Chalco",
      "Midland",
      "Portal Road corridor",
      "Hwy 370 corridor",
      "Sarpy County",
    ],
    localBlurb:
      "Papillion and central Sarpy County are packed with patio kitchens, freestanding Webers, and weekend smokers. Our mobile crew deep-cleans on-site across Papillion so grease, carbon, and tired igniters get handled at your home—not after a trailer trip across town.",
    keywordExtras: keywordsFor("Papillion", ["Sarpy County grill cleaning"]),
  },
  {
    slug: "la-vista-nebraska-grill-cleaning",
    city: "La Vista",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68128",
    geo: { latitude: 41.1836, longitude: -96.0311 },
    nearby: [
      "Papillion",
      "Bellevue",
      "Ralston",
      "Gretna",
      "South Omaha",
      "Giles Road corridor",
      "Harrison Street corridor",
      "Sarpy County",
    ],
    localBlurb:
      "La Vista sits between Omaha and Papillion with townhomes, single-family patios, and outdoor living spaces that collect a full season of grease. We bring steam equipment and the 50-step deep clean to La Vista driveways and decks—ideal when you want results without hauling the grill.",
    keywordExtras: keywordsFor("La Vista", [
      "grill cleaning La Vista NE",
      "how much is grill cleaning in La Vista",
    ]),
  },
  {
    slug: "ashland-greenwood-nebraska-grill-cleaning",
    city: "Ashland-Greenwood",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68003",
    geo: { latitude: 41.0392, longitude: -96.3683 },
    nearby: [
      "Ashland",
      "Greenwood",
      "South Bend",
      "Louisville",
      "Memphis",
      "Gretna",
      "Waverly",
      "I-80 corridor",
      "Mahoney State Park area",
    ],
    localBlurb:
      "Between Omaha and Lincoln, Ashland and Greenwood homeowners lean on acreage grills, cabin smokers, and weekend outdoor kitchens along the Platte and I-80 corridor. We route mobile deep cleans through Ashland-Greenwood so you get metro-level service without a metro drive.",
    keywordExtras: keywordsFor("Ashland", [
      "grill cleaning Greenwood NE",
      "how much is grill cleaning in Ashland NE",
      "Ashland Nebraska grill cleaning",
      "Greenwood Nebraska grill cleaning",
      "grill cleaning Ashland-Greenwood",
    ]),
  },
  {
    slug: "bellevue-nebraska-grill-cleaning",
    city: "Bellevue",
    region: "NE",
    regionName: "Nebraska",
    metro: "Omaha",
    postalCode: "68005",
    geo: { latitude: 41.1544, longitude: -95.9146 },
    nearby: [
      "Papillion",
      "La Vista",
      "Offutt area",
      "Eastport",
      "Fontenelle Hills",
      "Bellevue Loop",
      "Missouri River corridor",
      "Council Bluffs edge",
    ],
    localBlurb:
      "Bellevue’s mix of established neighborhoods, newer builds, and Offutt-area homes means gas grills, pellet cookers, and built-ins that work year-round. Husker Grill Cleaning brings the 50-step deep clean and repair options on-site across Bellevue and eastern Sarpy County.",
    keywordExtras: keywordsFor("Bellevue", [
      "grill cleaning near Offutt",
      "Bellevue NE outdoor kitchen cleaning",
    ]),
  },
  {
    slug: "waverly-nebraska-grill-cleaning",
    city: "Waverly",
    region: "NE",
    regionName: "Nebraska",
    metro: "Lincoln",
    postalCode: "68462",
    geo: { latitude: 40.9167, longitude: -96.5281 },
    nearby: [
      "Lincoln",
      "Eagle",
      "Ashland-Greenwood",
      "Walton",
      "Hwy 6 corridor",
      "Northeast Lincoln",
      "Raymond",
    ],
    localBlurb:
      "Waverly’s small-town lots and acreage edges still run serious grills and smokers—especially through football season and summer weekends. We extend Lincoln-metro mobile service to Waverly with the same deep-clean pricing and process as the capital city.",
    keywordExtras: keywordsFor("Waverly", ["grill cleaning near Lincoln NE Waverly"]),
  },
  {
    slug: "hickman-nebraska-grill-cleaning",
    city: "Hickman",
    region: "NE",
    regionName: "Nebraska",
    metro: "Lincoln",
    postalCode: "68372",
    geo: { latitude: 40.62, longitude: -96.6311 },
    nearby: [
      "Roca",
      "Lincoln",
      "Firth",
      "Panama",
      "South Lincoln",
      "Hwy 77 corridor",
      "Lancaster County",
    ],
    localBlurb:
      "Hickman’s south-Lancaster growth brings new patios and freestanding grills that deserve more than a wire-brush wipe-down. We deep-clean on-site in Hickman with full disassembly, steam, and optional same-visit repair for cleaning customers.",
    keywordExtras: keywordsFor("Hickman", ["south Lincoln grill cleaning Hickman"]),
  },
  {
    slug: "roca-nebraska-grill-cleaning",
    city: "Roca",
    region: "NE",
    regionName: "Nebraska",
    metro: "Lincoln",
    postalCode: "68430",
    geo: { latitude: 40.6572, longitude: -96.6606 },
    nearby: [
      "Hickman",
      "Lincoln",
      "Hallam",
      "Cortland",
      "South Lincoln",
      "Lancaster County",
    ],
    localBlurb:
      "Roca sits just south of Lincoln with quiet streets and outdoor setups that still collect a full season of grease and carbon. Mobile grill cleaning comes to you in Roca—50-step deep cleans, transparent pricing, and repair options tied to cleaning visits.",
    keywordExtras: keywordsFor("Roca", ["grill cleaning near Hickman NE"]),
  },
  {
    slug: "raymond-nebraska-grill-cleaning",
    city: "Raymond",
    region: "NE",
    regionName: "Nebraska",
    metro: "Lincoln",
    postalCode: "68428",
    geo: { latitude: 40.9567, longitude: -96.7825 },
    nearby: [
      "Lincoln",
      "Malcolm",
      "Davey",
      "Ceresco",
      "Waverly",
      "Northwest Lincoln",
      "Hwy 79 corridor",
    ],
    localBlurb:
      "Raymond and northwest Lancaster acreage homes often run larger freestanding grills and smokers away from city noise. We bring professional mobile deep cleaning to Raymond so rural-edge and small-town setups get the same AGSI-minded process as Lincoln proper.",
    keywordExtras: keywordsFor("Raymond", ["northwest Lincoln grill cleaning"]),
  },
] as const;

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function serviceAreaPath(area: ServiceArea): string {
  return `/${area.slug}`;
}

export function serviceAreaSlugs(): string[] {
  return serviceAreas.map((a) => a.slug);
}

export function serviceAreaTitle(area: ServiceArea): string {
  return `Grill Cleaning in ${area.city}, ${area.region} | Pricing & Mobile Service | ${site.name}`;
}

export function serviceAreaDescription(area: ServiceArea): string {
  const { freestandingDeep, builtInDeep } = AREA_PRICING;
  return `Professional mobile grill cleaning in ${area.city}, ${area.region}. Freestanding deep cleans from $${freestandingDeep.amount}, built-ins from $${builtInDeep.amount}. 50-step process, maintenance, and grill repair across the ${area.metro} metro. Book online or call ${site.phoneDisplay}.`;
}

/** Metro hub path for breadcrumbs / cross-links. */
export function metroHubPath(metro: ServiceArea["metro"]): string | undefined {
  if (metro === "Omaha") {
    return "/professional-grill-cleaning-repair-services-in-omaha-nebraska";
  }
  if (metro === "Lincoln") {
    return "/lincoln-nebraska-grill-cleaning";
  }
  return undefined;
}

/** Map neighborhood display names → service-area slugs for internal links. */
export const neighborhoodServiceAreaLinks: Record<string, string> = {
  Elkhorn: "/elkhorn-nebraska-grill-cleaning",
  Valley: "/valley-nebraska-grill-cleaning",
  "Valley, NE": "/valley-nebraska-grill-cleaning",
  Gretna: "/gretna-nebraska-grill-cleaning",
  Lincoln: "/lincoln-nebraska-grill-cleaning",
  Papillion: "/papillion-nebraska-grill-cleaning",
  "La Vista": "/la-vista-nebraska-grill-cleaning",
  "Ashland-Greenwood": "/ashland-greenwood-nebraska-grill-cleaning",
  Ashland: "/ashland-greenwood-nebraska-grill-cleaning",
  Greenwood: "/ashland-greenwood-nebraska-grill-cleaning",
  Bellevue: "/bellevue-nebraska-grill-cleaning",
  Waverly: "/waverly-nebraska-grill-cleaning",
  Hickman: "/hickman-nebraska-grill-cleaning",
  Roca: "/roca-nebraska-grill-cleaning",
  Raymond: "/raymond-nebraska-grill-cleaning",
};

/** Resolve a nearby/tag label to a service-area path when one exists. */
export function serviceAreaHrefForLabel(label: string): string | undefined {
  const direct = neighborhoodServiceAreaLinks[label];
  if (direct) return direct;

  const normalized = label.trim().toLowerCase();
  const match = serviceAreas.find((a) => {
    const city = a.city.toLowerCase();
    return (
      normalized === city ||
      normalized === `${city}, ne` ||
      normalized === `${city}, ${a.region.toLowerCase()}` ||
      normalized === `${city} nebraska` ||
      normalized === city.replace(/-/g, " ")
    );
  });
  return match ? serviceAreaPath(match) : undefined;
}
