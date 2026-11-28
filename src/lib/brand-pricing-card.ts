import { BRAND_PRICING, WEBER_OVERSIZE_CLEAN } from "@/lib/grill-brands";
import { AREA_PRICING } from "@/lib/service-areas";
import { repairPricing, repairSchemaOffers } from "@/lib/site";

/**
 * Freestanding and maintenance amounts come from the shared price tables
 * (BRAND_PRICING and AREA_PRICING), which match the figures on /pricing.
 * Repair amounts come from repairPricing.
 *
 * Weber has no built-in line. The oversize amount is owner-confirmed for
 * Weber grills with 6 or more knobs or burners. The $50 same-visit add-on
 * applies to Weber and Traeger when a cleaning is booked for that visit.
 * Traeger and Green Mountain can opt in later by adding an entry to CARD_BRANDS.
 */
const WEBER_SAME_VISIT_REPAIR_ADDON = 50;

export type CleaningPriceLine = {
  name: string;
  amount: number;
  detail?: string;
};

export type BrandPricingCardModel = {
  brandName: string;
  cleaning: readonly CleaningPriceLine[];
  diagnosticAmount: number;
  diagnosticCredit: number;
  laborHourly: number;
  laborIncrementMinutes: number;
  laborIncrementPrice: number;
  returnTrip: number;
  commonRepairs: readonly string[];
  sameVisitAddOn: {
    amount: number;
    summary: string;
  } | null;
};

const CARD_BRANDS: Record<
  string,
  Omit<
    BrandPricingCardModel,
    | "brandName"
    | "diagnosticAmount"
    | "diagnosticCredit"
    | "laborHourly"
    | "laborIncrementMinutes"
    | "laborIncrementPrice"
    | "returnTrip"
  >
> = {
  Weber: {
    cleaning: [
      {
        name: "Freestanding deep clean",
        amount: BRAND_PRICING.freestandingDeep,
      },
      {
        name: "Maintenance cleaning",
        amount: AREA_PRICING.maintenance.amount,
        detail: "Second or later cleaning within the same year",
      },
      {
        name: "Oversize grill",
        amount: WEBER_OVERSIZE_CLEAN,
        detail: "6+ knobs/burners",
      },
    ],
    commonRepairs: [
      "regulator replacement",
      "igniter module replacement",
    ],
    sameVisitAddOn: {
      amount: WEBER_SAME_VISIT_REPAIR_ADDON,
      summary:
        "when a Weber or Traeger cleaning is booked for the same visit. Repairs on all other grills booked with a cleaning are a custom quote.",
    },
  },
};

export function getBrandPricingCard(brand: {
  name: string;
}): BrandPricingCardModel | null {
  const extra = CARD_BRANDS[brand.name];
  if (!extra) return null;

  return {
    brandName: brand.name,
    cleaning: extra.cleaning,
    diagnosticAmount: repairPricing.diagnostic,
    diagnosticCredit: repairPricing.diagnosticCredit,
    laborHourly: repairPricing.laborHourly,
    laborIncrementMinutes: repairPricing.laborIncrementMinutes,
    laborIncrementPrice: repairPricing.laborIncrementPrice,
    returnTrip: repairPricing.returnTrip,
    commonRepairs: extra.commonRepairs,
    sameVisitAddOn: extra.sameVisitAddOn,
  };
}

type JsonLd = Record<string, unknown>;

function unitPrice(
  amount: number,
  unitText: string,
  extras: JsonLd = {},
): JsonLd {
  return {
    "@type": "UnitPriceSpecification",
    price: String(amount),
    priceCurrency: "USD",
    unitText,
    ...extras,
  };
}

/** Offers that match the pricing card, including priceSpecification. */
export function brandPricingCardOffers(
  model: BrandPricingCardModel,
  pageUrl: string,
): JsonLd[] {
  const cleaning = model.cleaning.map((item) => ({
    "@type": "Offer",
    name: `${model.brandName} ${item.name.toLowerCase()}`,
    price: String(item.amount),
    priceCurrency: "USD",
    url: pageUrl,
    availability: "https://schema.org/InStock",
    description: item.detail
      ? `${item.name} for a ${model.brandName} (${item.detail}). Price excludes tax.`
      : `${item.name} for a ${model.brandName}. Price excludes tax.`,
    priceSpecification: unitPrice(item.amount, item.name, {
      valueAddedTaxIncluded: false,
    }),
  }));

  return [...cleaning, ...repairSchemaOffers(pageUrl, model.brandName)];
}
