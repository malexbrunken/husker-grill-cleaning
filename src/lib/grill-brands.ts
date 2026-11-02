import { documentTitle } from "@/lib/seo";
import {
  repairPricing,
  repairPricingDescription,
  repairRateSummary,
  site,
} from "@/lib/site";

/**
 * Grill brand SEO series — problem + local long-tails for Omaha & Lincoln.
 * Optimized for classic SEO and generative/AI answer engines (clear facts,
 * FAQ schema phrasing, direct-answer blocks).
 *
 * Keep repair pricing aligned with /pricing and AREA_PRICING.
 */

export const BRAND_PRICING = {
  freestandingDeep: 299,
  builtInDeep: 349,
  diagnosticAndTrip: repairPricing.diagnosticAndTrip,
  includedMinutes: repairPricing.includedMinutes,
  intervalMinutes: repairPricing.intervalMinutes,
  intervalPrice: repairPricing.intervalPrice,
} as const;

export type BrandProblem = {
  /** User-facing symptom / search phrasing */
  symptom: string;
  /** Short causes AI can quote */
  causes: readonly string[];
  /** What we do on-site */
  resolution: string;
};

export type BrandFaq = { q: string; a: string };

export type GrillBrand = {
  /** URL slug without leading slash */
  slug: string;
  name: string;
  /** Alternate spellings / search names */
  aliases?: readonly string[];
  /** One-line entity definition for AI answers */
  entityLine: string;
  category: "gas" | "pellet" | "built-in" | "hybrid" | "charcoal-gas";
  fuelTypes: readonly string[];
  /** full = electronics OK when stocked; mechanical = clean + mechanical; clean-first = primarily cleaning path */
  serviceLevel: "full" | "advanced" | "mechanical" | "premium-builtin";
  models: readonly string[];
  problems: readonly BrandProblem[];
  localBlurb: string;
  /** Extra keyword phrases beyond generated long-tails */
  keywordExtras?: readonly string[];
  faqs?: readonly BrandFaq[];
};

function slugifyBrand(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Canonical slug pattern for brand series. */
export function brandSlug(name: string): string {
  return `${slugifyBrand(name)}-grill-cleaning-repair-omaha-lincoln`;
}

export function brandPath(brand: GrillBrand): string {
  return `/${brand.slug}`;
}

export function brandTitle(brand: GrillBrand): string {
  return documentTitle(`${brand.name} Grill Cleaning & Repair`);
}

export function brandDescription(brand: GrillBrand): string {
  const top = brand.problems[0]?.symptom ?? "won't start";
  return `${brand.name} grill cleaning and repair in Omaha and Lincoln, NE. ${top} and other common issues diagnosed on-site. Deep clean from $${BRAND_PRICING.freestandingDeep}. ${repairRateSummary()} Call ${site.phoneDisplay}.`;
}

export function brandDirectAnswer(brand: GrillBrand): string {
  const level =
    brand.serviceLevel === "full"
      ? `We provide full-service ${brand.name} cleaning and repair—including common electrical and control issues when parts are available`
      : brand.serviceLevel === "advanced"
        ? `We deep-clean and repair ${brand.name} systems on-site, including many mechanical and heat-system issues`
        : brand.serviceLevel === "premium-builtin"
          ? `We specialize in mobile deep cleaning and mechanical service for ${brand.name} built-in and freestanding grills`
          : `We deep-clean ${brand.name} grills and fix common mechanical issues during the same visit when possible`;

  return `If your ${brand.name} grill is not working in Omaha or Lincoln, Nebraska, ${site.name} comes to you. ${level}. ${repairPricingDescription()}`;
}

export function brandLongTails(brand: GrillBrand): string[] {
  const n = brand.name;
  const aliases = brand.aliases ?? [];
  const names = [n, ...aliases];
  const cities = ["Omaha", "Lincoln", "Omaha NE", "Lincoln NE", "Nebraska"];
  const tails: string[] = [];

  for (const name of names) {
    tails.push(
      `${name} grill cleaning Omaha`,
      `${name} grill cleaning Lincoln`,
      `${name} grill repair Omaha`,
      `${name} grill repair Lincoln`,
      `${name} grill not igniting`,
      `${name} grill won't light Omaha`,
      `${name} grill will not light Lincoln`,
      `${name} grill low flame`,
      `${name} grill not heating`,
      `mobile ${name} grill cleaning Nebraska`,
    );
    for (const city of cities) {
      tails.push(`${name} grill service ${city}`);
    }
  }

  for (const p of brand.problems.slice(0, 4)) {
    tails.push(`${n} ${p.symptom.toLowerCase()}`);
    tails.push(`${n} ${p.symptom.toLowerCase()} Omaha`);
    tails.push(`${n} ${p.symptom.toLowerCase()} Lincoln`);
  }

  for (const model of brand.models.slice(0, 5)) {
    tails.push(`${model} cleaning Omaha`);
    tails.push(`${model} repair Lincoln`);
  }

  return [...new Set([...tails, ...(brand.keywordExtras ?? [])])];
}

export function buildBrandFaqs(brand: GrillBrand): BrandFaq[] {
  if (brand.faqs?.length) return [...brand.faqs];

  const n = brand.name;
  const p0 = brand.problems[0];
  return [
    {
      q: `Why is my ${n} grill not igniting in Omaha or Lincoln?`,
      a: p0
        ? `Common causes include ${p0.causes.slice(0, 3).join(", ")}. ${site.name} diagnoses ${n} ignition problems on-site across the Omaha and Lincoln metros. ${repairRateSummary()}`
        : `Ignition failures on ${n} grills are usually dirty electrodes, weak spark modules, gas flow issues, or failed igniters. We diagnose on-site in Omaha and Lincoln.`,
    },
    {
      q: `Do you repair ${n} grills in Omaha and Lincoln, NE?`,
      a: `Yes. ${site.name} offers mobile ${n} grill cleaning and repair throughout Omaha and Lincoln. ${repairPricingDescription()}`,
    },
    {
      q: `How much does ${n} grill cleaning cost in Nebraska?`,
      a: `Freestanding ${n} deep cleans start at $${BRAND_PRICING.freestandingDeep}. Built-in ${n} outdoor kitchen cleans start at $${BRAND_PRICING.builtInDeep}. Multi-grill visits receive $50 off each additional grill. Pricing is the same in Omaha and Lincoln.`,
    },
    {
      q: `What ${n} models do you service?`,
      a: `We regularly service ${brand.models.slice(0, 6).join(", ")}${brand.models.length > 6 ? ", and related lines" : ""}. If your model is uncommon, call ${site.phoneDisplay}—if we clean it, we can usually repair common mechanical issues.`,
    },
    {
      q: `Can you fix a ${n} grill that will not light the same day as cleaning?`,
      a: `Often yes. Many no-light and low-flame issues are caused by grease, blocked ports, or failed igniter parts we can address during the same mobile visit in Omaha or Lincoln.`,
    },
  ];
}

const gasIgnitionProblems = (brand: string): BrandProblem[] => [
  {
    symptom: "not igniting / won't light",
    causes: [
      "fouled spark electrode or collector box",
      "failed igniter module or switch",
      "low gas pressure / regulator issues",
      "spider webs or grease blocking burner tubes",
    ],
    resolution: `We clean ignition paths, test spark and gas flow, and replace common ${brand} igniter parts when stocked—or quote OEM parts before ordering.`,
  },
  {
    symptom: "low flame or uneven heat",
    causes: [
      "clogged burner ports",
      "venturi blockage",
      "failing regulator",
      "grease-restricted airflow",
    ],
    resolution:
      "Deep clean clears ports and grease; we diagnose gas delivery and heat distribution and repair or replace worn burners/regulators as needed.",
  },
  {
    symptom: "clicking but no flame",
    causes: [
      "spark present but no gas",
      "closed tank / empty propane",
      "faulty valve or manifold",
      "safety thermocouple issues on some models",
    ],
    resolution:
      "We separate ignition vs fuel-delivery faults on-site so you are not guessing between a spark part and a gas part.",
  },
  {
    symptom: "flare-ups or greasy smoke",
    causes: [
      "saturated heat tents / flavorizer bars",
      "full grease tray",
      "carbonized grates",
    ],
    resolution:
      "Our 50-step deep clean removes the grease load that causes flare-ups and restores safer, cleaner cooking temperatures.",
  },
];

const pelletProblems = (brand: string): BrandProblem[] => [
  {
    symptom: "not igniting / no fire",
    causes: [
      "failed hot rod / igniter",
      "empty or bridged pellet hopper",
      "dirty fire pot",
      "fan or air-path restriction",
    ],
    resolution: `We inspect the ${brand} fire pot, hot rod, and pellet path, clean carbon buildup, and replace common ignition parts when available.`,
  },
  {
    symptom: "temperature swings or not heating",
    causes: [
      "faulty RTD / temp probe",
      "auger feed issues",
      "grease-fouled sensors",
      "control board errors",
    ],
    resolution:
      "We diagnose probe, auger, and control symptoms after a thorough clean so temperature problems are not mistaken for “just dirty.”",
  },
  {
    symptom: "auger jam or pellets not feeding",
    causes: [
      "moisture-swollen pellets",
      "debris in auger tube",
      "worn auger motor",
      "fire pot overfill from prior failed starts",
    ],
    resolution:
      "We clear jams, assess motor load, and advise on pellet storage—critical for Omaha and Lincoln humidity swings.",
  },
  {
    symptom: "error codes or shutdown mid-cook",
    causes: [
      "overheat protection",
      "ignition timeout",
      "probe faults",
      "power interruptions",
    ],
    resolution:
      "We read the symptom pattern, clean heat and air paths, and repair or quote the failing component rather than reset-and-hope.",
  },
];

const builtinProblems = (brand: string): BrandProblem[] => [
  {
    symptom: "not igniting / won't light",
    causes: [
      "built-in electrode gap fouled by grease",
      "hidden burner tube blockage",
      "cabinet-mounted igniter failure",
      "shared gas line pressure issues",
    ],
    resolution: `We service ${brand} built-ins in place—disassembling what the outdoor kitchen allows—and restore ignition without a shop haul-away when possible.`,
  },
  {
    symptom: "one burner dead or weak",
    causes: [
      "individual burner corrosion",
      "orifice clog",
      "valve wear",
      "grease in that firebox zone only",
    ],
    resolution:
      "Zone-by-zone cleaning and burner testing isolates whether you need a part or a thorough carbon removal.",
  },
  {
    symptom: "grease fires or heavy smoke",
    causes: [
      "years of cabinet-trapped grease",
      "full drip pans under grates",
      "rotisserie / IR burner residue",
    ],
    resolution:
      "Built-in deep cleans target grease traps you cannot reach with a brush—major risk reduction for outdoor kitchens.",
  },
  {
    symptom: "hard to access / never cleaned",
    causes: [
      "island construction limits DIY access",
      "professional-grade parts",
      "fear of damaging stainless",
    ],
    resolution:
      "Mobile techs who work premium islands daily handle careful disassembly, steam cleaning, and reassembly in Omaha and Lincoln.",
  },
];

export const grillBrands: readonly GrillBrand[] = [
  {
    slug: brandSlug("Napoleon"),
    name: "Napoleon",
    entityLine:
      "Napoleon is a premium gas and built-in grill brand; Husker Grill Cleaning provides mobile cleaning and mechanical repair for Napoleon grills in Omaha and Lincoln, Nebraska.",
    category: "hybrid",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Napoleon Prestige",
      "Napoleon Prestige PRO",
      "Napoleon Rogue",
      "Napoleon Rogue SE",
      "Napoleon BIPRO / built-in",
      "Napoleon TravelQ",
    ],
    problems: gasIgnitionProblems("Napoleon"),
    localBlurb:
      "Napoleon Prestige and Rogue series show up across Omaha and Lincoln patios and custom islands. Infrared rear burners and heavy stainless collect grease that kills igniters and worsens flare-ups—exactly what a 50-step mobile deep clean is built for.",
    keywordExtras: [
      "Napoleon Prestige repair Omaha",
      "Napoleon Rogue won't light Lincoln",
      "Napoleon built-in grill cleaning Nebraska",
    ],
  },
  {
    slug: brandSlug("Fire Magic"),
    name: "Fire Magic",
    entityLine:
      "Fire Magic is a luxury built-in outdoor kitchen brand; Husker Grill Cleaning deep-cleans and services Fire Magic grills on-site in Omaha and Lincoln.",
    category: "built-in",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Fire Magic Echelon",
      "Fire Magic Aurora",
      "Fire Magic Choice",
      "Fire Magic Legacy",
      "Fire Magic electric / hybrid accessories",
    ],
    problems: builtinProblems("Fire Magic"),
    localBlurb:
      "Fire Magic islands in west Omaha estates and Lincoln luxury homes need careful built-in service—not a big-box wipe-down. We clean Echelon and Aurora fireboxes in place and address ignition and burner issues when the kitchen layout allows.",
    keywordExtras: [
      "Fire Magic Echelon cleaning Omaha",
      "Fire Magic grill repair Lincoln NE",
      "Fire Magic outdoor kitchen cleaning",
    ],
  },
  {
    slug: brandSlug("Alfresco"),
    name: "Alfresco",
    entityLine:
      "Alfresco manufactures premium stainless built-in grills; Husker Grill Cleaning offers mobile Alfresco grill cleaning and mechanical service in Omaha and Lincoln, NE.",
    category: "built-in",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Alfresco ALX2",
      "Alfresco AXE",
      "Alfresco built-in series",
      "Alfresco side burners & accessories",
    ],
    problems: builtinProblems("Alfresco"),
    localBlurb:
      "Alfresco’s commercial-grade stainless rewards professional cleaning. Omaha and Lincoln outdoor kitchens with ALX2 and AXE units accumulate grease in places homeowners cannot reach—we bring steam equipment to the island.",
    keywordExtras: [
      "Alfresco ALX2 cleaning Omaha",
      "Alfresco grill not lighting Lincoln",
    ],
  },
  {
    slug: brandSlug("Hestan"),
    name: "Hestan",
    aliases: ["Heston"],
    entityLine:
      "Hestan (often searched as Heston) is a luxury outdoor grill brand; Husker Grill Cleaning provides Hestan grill cleaning and repair visits in Omaha and Lincoln, Nebraska.",
    category: "built-in",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Hestan Deluxe",
      "Hestan Embassy",
      "Hestan Gari",
      "Hestan built-in gas grills",
    ],
    problems: builtinProblems("Hestan"),
    localBlurb:
      "Hestan outdoor kitchens are investment pieces. Whether you searched “Heston” or Hestan, we treat the stainless, burners, and ignition system with estate-level care across the Omaha and Lincoln metros.",
    keywordExtras: [
      "Heston grill cleaning Omaha",
      "Heston grill repair Lincoln",
      "Hestan grill won't light",
      "Hestan outdoor kitchen cleaning Nebraska",
    ],
  },
  {
    slug: brandSlug("Lion"),
    name: "Lion",
    entityLine:
      "Lion Grills are premium built-in outdoor units; Husker Grill Cleaning deep-cleans and mechanically services Lion grills in Omaha and Lincoln.",
    category: "built-in",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Lion Premium Grills",
      "Lion L75000 series",
      "Lion built-in gas grills",
      "Lion side burners",
    ],
    problems: builtinProblems("Lion"),
    localBlurb:
      "Lion built-ins pair with high-end islands around Omaha and Lincoln. Grease migration into electrode paths is a top reason a Lion “suddenly” will not light—we clean and diagnose on-site.",
    keywordExtras: [
      "Lion grill repair Omaha",
      "Lion built-in grill cleaning Lincoln",
    ],
  },
  {
    slug: brandSlug("Blaze"),
    name: "Blaze",
    entityLine:
      "Blaze Outdoor Products makes popular built-in and freestanding grills; Husker Grill Cleaning cleans and repairs Blaze grills across Omaha and Lincoln, NE.",
    category: "hybrid",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "Blaze LTE",
      "Blaze Professional",
      "Blaze Prelude",
      "Blaze built-in series",
      "Blaze freestanding carts",
    ],
    problems: [...gasIgnitionProblems("Blaze"), ...builtinProblems("Blaze").slice(2)],
    localBlurb:
      "Blaze LTE and Professional lines are common in mid-to-upper outdoor kitchens. We service freestanding and built-in Blaze units in Omaha and Lincoln with the same deep-clean standard as luxury brands.",
    keywordExtras: [
      "Blaze LTE repair Omaha",
      "Blaze grill not igniting Lincoln",
    ],
  },
  {
    slug: brandSlug("DCS"),
    name: "DCS",
    entityLine:
      "DCS (Dynamic Cooking Systems) builds professional-style outdoor grills; Husker Grill Cleaning provides DCS grill cleaning and mechanical repair in Omaha and Lincoln.",
    category: "built-in",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "premium-builtin",
    models: [
      "DCS Series 7",
      "DCS Series 9",
      "DCS built-in grills",
      "DCS side burners & accessories",
    ],
    problems: builtinProblems("DCS"),
    localBlurb:
      "DCS Series 7 and 9 grills run hot and hard—great for searing, hard on grease management. Mobile deep cleans in Omaha and Lincoln restore performance and cut flare-up risk.",
    keywordExtras: [
      "DCS Series 9 cleaning Omaha",
      "DCS grill repair Lincoln NE",
      "DCS grill won't light",
    ],
  },
  {
    slug: brandSlug("GE"),
    name: "GE",
    aliases: ["GE Cafe", "GE Profile", "GE Monogram"],
    entityLine:
      "GE outdoor and patio grills (including Cafe, Profile, and Monogram lines where installed) can be deep-cleaned and mechanically serviced by Husker Grill Cleaning in Omaha and Lincoln.",
    category: "hybrid",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "mechanical",
    models: [
      "GE Cafe outdoor",
      "GE Profile grill",
      "GE Monogram outdoor",
      "GE freestanding gas grills",
    ],
    problems: gasIgnitionProblems("GE"),
    localBlurb:
      "GE-branded outdoor cooking gear shows up on patios and in some package outdoor kitchens. We focus on thorough cleaning plus mechanical ignition and burner repairs homeowners actually need.",
    keywordExtras: [
      "GE grill won't light Omaha",
      "GE Cafe grill cleaning Lincoln",
      "GE Profile outdoor grill repair Nebraska",
    ],
  },
  {
    slug: brandSlug("MHP"),
    name: "MHP",
    aliases: ["Modern Home Products"],
    entityLine:
      "MHP (Modern Home Products) cast-aluminum grills are cleaned and repaired on-site by Husker Grill Cleaning in the Omaha and Lincoln metros.",
    category: "gas",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "mechanical",
    models: [
      "MHP WNK",
      "MHP JNR",
      "MHP WNK4",
      "MHP freestanding gas grills",
    ],
    problems: gasIgnitionProblems("MHP"),
    localBlurb:
      "MHP’s cast construction lasts for decades in Nebraska weather—if it is cleaned. We restore neglected MHP grills across Omaha and Lincoln and fix the ignition/burner issues that show up after long idle seasons.",
    keywordExtras: [
      "MHP grill repair Omaha",
      "MHP WNK cleaning Lincoln",
      "Modern Home Products grill service Nebraska",
    ],
  },
  {
    slug: brandSlug("Weber"),
    name: "Weber",
    entityLine:
      "Weber is a leading gas and charcoal grill brand; Husker Grill Cleaning offers full-service Weber grill cleaning and repair—including many electronic ignition issues—in Omaha and Lincoln, Nebraska.",
    category: "hybrid",
    fuelTypes: ["propane", "natural gas", "charcoal"],
    serviceLevel: "full",
    models: [
      "Weber Genesis",
      "Weber Summit",
      "Weber Spirit",
      "Weber Q",
      "Weber Searwood",
      "Weber SmokeFire",
      "Weber Master-Touch",
      "Weber Performer",
    ],
    problems: [
      ...gasIgnitionProblems("Weber"),
      {
        symptom: "Crossover tube or burner tube failure",
        causes: [
          "rusted crossover",
          "collapsed burner",
          "uneven lighting between burners",
        ],
        resolution:
          "We replace common Weber burner and crossover parts during mobile visits when stocked, or quote OEM parts with no surprise second-trip fee structure beyond agreed labor.",
      },
    ],
    localBlurb:
      "Weber Genesis, Summit, and Spirit grills are everywhere in Omaha and Lincoln. Full-service Weber repair means igniters, burners, regulators, manifolds, and cleaning-related no-light failures—handled at your driveway, not a drop-off shop.",
    keywordExtras: [
      "Weber grill not igniting",
      "Weber grill not igniting Omaha",
      "Weber grill not igniting Lincoln",
      "Weber Genesis won't light",
      "Weber Summit repair Omaha",
      "Weber Spirit cleaning Lincoln",
      "Weber grill will not light Nebraska",
    ],
  },
  {
    slug: brandSlug("Traeger"),
    name: "Traeger",
    entityLine:
      "Traeger is a leading pellet grill brand; Husker Grill Cleaning provides full-service Traeger cleaning and repair in Omaha and Lincoln, including hot rods, augers, probes, and related components.",
    category: "pellet",
    fuelTypes: ["hardwood pellets"],
    serviceLevel: "full",
    models: [
      "Traeger Pro 575",
      "Traeger Pro 780",
      "Traeger Ironwood",
      "Traeger Timberline",
      "Traeger Woodridge",
      "Traeger Tailgater",
    ],
    problems: pelletProblems("Traeger"),
    localBlurb:
      "Traeger Pro, Ironwood, and Timberline owners in Omaha and Lincoln deal with Nebraska humidity, winter storage, and heavy weekend cooks. We deep-clean fire pots and grease paths and repair the parts that actually fail—hot rods, fans, probes, and auger components.",
    keywordExtras: [
      "Traeger not igniting Omaha",
      "Traeger won't start Lincoln",
      "Traeger hot rod replacement Nebraska",
      "Traeger temperature problems Omaha",
      "Traeger Ironwood repair Lincoln",
    ],
  },
  {
    slug: brandSlug("Green Mountain"),
    name: "Green Mountain",
    aliases: ["Green Mountain Grills", "GMG"],
    entityLine:
      "Green Mountain Grills (GMG)—including Daniel Boone and Jim Bowie models—are cleaned and repaired on-site by Husker Grill Cleaning in Omaha and Lincoln, NE.",
    category: "pellet",
    fuelTypes: ["hardwood pellets"],
    serviceLevel: "advanced",
    models: [
      "Green Mountain Daniel Boone",
      "Green Mountain Jim Bowie",
      "Green Mountain Davy Crockett",
      "Green Mountain Peak",
      "Green Mountain Ledge",
      "Green Mountain Trek",
    ],
    problems: pelletProblems("Green Mountain"),
    localBlurb:
      "Daniel Boone and Jim Bowie pellet grills are weekend workhorses across Nebraska. We clean GMG fire pots, diagnose no-ignite and temp-swing issues, and get your Green Mountain cooking again without a trailer ride to a shop.",
    keywordExtras: [
      "Daniel Boone grill repair Omaha",
      "Jim Bowie grill cleaning Lincoln",
      "Green Mountain Grills not igniting",
      "GMG grill repair Nebraska",
      "Daniel Boone won't light Omaha",
    ],
  },
  {
    slug: brandSlug("Memphis"),
    name: "Memphis",
    entityLine:
      "Memphis Wood Fire Grills are premium pellet/wood-fire cookers; Husker Grill Cleaning deep-cleans and services Memphis grills in Omaha and Lincoln.",
    category: "pellet",
    fuelTypes: ["hardwood pellets", "wood fire"],
    serviceLevel: "advanced",
    models: [
      "Memphis Elite",
      "Memphis Pro",
      "Memphis Advantage",
      "Memphis Beale Street",
      "Memphis built-in pellet",
    ],
    problems: pelletProblems("Memphis"),
    localBlurb:
      "Memphis Elite and Pro units are serious cookers—and they reward professional grease and ash management. We service freestanding and built-in Memphis grills for Omaha and Lincoln outdoor kitchens.",
    keywordExtras: [
      "Memphis Elite cleaning Omaha",
      "Memphis Pro grill repair Lincoln",
      "Memphis wood fire grill not igniting",
    ],
  },
  {
    slug: brandSlug("Yoder"),
    name: "Yoder",
    aliases: ["Yoder Smokers"],
    entityLine:
      "Yoder Smokers pellet grills and smokers are cleaned and repaired by Husker Grill Cleaning across the Omaha and Lincoln, Nebraska service area.",
    category: "pellet",
    fuelTypes: ["hardwood pellets"],
    serviceLevel: "advanced",
    models: [
      "Yoder YS640",
      "Yoder YS640s",
      "Yoder YS480",
      "Yoder YS1500",
      "Yoder Loaded series",
    ],
    problems: pelletProblems("Yoder"),
    localBlurb:
      "Yoder YS640 and YS480 owners cook a lot of brisket in this state. Heavy use means heavy grease—our mobile deep clean and pellet-system diagnosis keep Yoders reliable through competition season and tailgates alike.",
    keywordExtras: [
      "Yoder YS640 cleaning Omaha",
      "Yoder YS480 repair Lincoln",
      "Yoder smoker not lighting Nebraska",
      "Yoder Smokers service Omaha",
    ],
  },
  {
    slug: brandSlug("Bull"),
    name: "Bull",
    aliases: ["Bull Outdoor"],
    entityLine:
      "Bull Outdoor grills and outdoor kitchen components are deep-cleaned and mechanically repaired by Husker Grill Cleaning in Omaha and Lincoln, NE.",
    category: "hybrid",
    fuelTypes: ["propane", "natural gas"],
    serviceLevel: "mechanical",
    models: [
      "Bull Angus",
      "Bull Brahma",
      "Bull Lonestar",
      "Bull Outlaw",
      "Bull built-in grills",
      "Bull side burners",
    ],
    problems: gasIgnitionProblems("Bull"),
    localBlurb:
      "Bull Angus and Brahma grills—and full Bull outdoor kitchens—are common in Omaha and Lincoln backyards. We clean, diagnose no-light and low-flame issues, and restore performance on freestanding and built-in Bull equipment.",
    keywordExtras: [
      "Bull Angus grill repair Omaha",
      "Bull Brahma cleaning Lincoln",
      "Bull grill not igniting Nebraska",
      "Bull outdoor kitchen cleaning Omaha",
    ],
  },
] as const;

export function getGrillBrand(slug: string): GrillBrand | undefined {
  return grillBrands.find((b) => b.slug === slug);
}

export function grillBrandSlugs(): string[] {
  return grillBrands.map((b) => b.slug);
}

export function getGrillBrandByName(name: string): GrillBrand | undefined {
  const n = name.trim().toLowerCase();
  return grillBrands.find(
    (b) =>
      b.name.toLowerCase() === n ||
      b.aliases?.some((a) => a.toLowerCase() === n),
  );
}
