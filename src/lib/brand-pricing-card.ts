import { BRAND_PRICING } from "@/lib/grill-brands";
import { repairPricing } from "@/lib/site";

/**
 * Cleaning amounts come from BRAND_PRICING, the same $299 freestanding and
 * $349 built-in figures shown on /pricing. Repair amounts come from repairPricing.
 *
 * The $50 same-visit add-on is Weber-only: it applies when a Weber cleaning
 * is booked for that visit. Traeger and Green Mountain can opt in later by
 * adding an entry to CARD_BRANDS.
 */
const WEBER_SAME_VISIT_REPAIR_ADDON = 50;

export type BrandPricingCardModel = {
  brandName: string;
  cleaning: readonly {
    name: string;
    amount: number;
  }[];
  diagnosticAmount: number;
  includedMinutes: number;
  intervalMinutes: number;
  intervalPrice: number;
  coveredRepairs: readonly string[];
  sameVisitAddOn: {
    amount: number;
    summary: string;
  } | null;
};

const CARD_BRANDS: Record<string, Omit<BrandPricingCardModel, "brandName" | "cleaning" | "diagnosticAmount" | "includedMinutes" | "intervalMinutes" | "intervalPrice">> = {
  Weber: {
    coveredRepairs: [
      "regulator replacement",
      "Weber igniter module replacement",
    ],
    sameVisitAddOn: {
      amount: WEBER_SAME_VISIT_REPAIR_ADDON,
      summary:
        "when a Weber cleaning is booked for the same visit. This rate applies only to Weber.",
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
    cleaning: [
      {
        name: "Freestanding deep clean",
        amount: BRAND_PRICING.freestandingDeep,
      },
      {
        name: "Built-in deep clean",
        amount: BRAND_PRICING.builtInDeep,
      },
    ],
    diagnosticAmount: repairPricing.diagnosticAndTrip,
    includedMinutes: repairPricing.includedMinutes,
    intervalMinutes: repairPricing.intervalMinutes,
    intervalPrice: repairPricing.intervalPrice,
    coveredRepairs: extra.coveredRepairs,
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
    description: `${item.name} for a ${model.brandName}. Price excludes tax.`,
    priceSpecification: unitPrice(item.amount, item.name, {
      valueAddedTaxIncluded: false,
    }),
  }));

  const diagnostic = {
    "@type": "Offer",
    name: `${model.brandName} repair diagnostic and trip`,
    price: String(model.diagnosticAmount),
    priceCurrency: "USD",
    url: pageUrl,
    description: `$${model.diagnosticAmount} diagnostic and trip charge. Includes up to ${model.includedMinutes} minutes of work if the part is on hand. ${sentenceList(model.coveredRepairs)} are included in the $${model.diagnosticAmount} plus the part cost.`,
    priceSpecification: unitPrice(
      model.diagnosticAmount,
      "diagnostic and trip charge",
    ),
  };

  const interval = {
    "@type": "Offer",
    name: `${model.brandName} additional repair labor`,
    price: String(model.intervalPrice),
    priceCurrency: "USD",
    url: pageUrl,
    description: `After the ${model.includedMinutes} minutes included in the diagnostic and trip charge, $${model.intervalPrice} per ${model.intervalMinutes} minutes when the part is on hand.`,
    priceSpecification: unitPrice(
      model.intervalPrice,
      `${model.intervalMinutes} minutes`,
      {
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: model.intervalMinutes,
          unitCode: "MIN",
        },
      },
    ),
  };

  const addOn = model.sameVisitAddOn
    ? [
        {
          "@type": "Offer",
          name: `${model.brandName} repair add-on with same-visit cleaning`,
          price: String(model.sameVisitAddOn.amount),
          priceCurrency: "USD",
          url: pageUrl,
          description: `$${model.sameVisitAddOn.amount} plus parts ${model.sameVisitAddOn.summary}`,
          priceSpecification: unitPrice(
            model.sameVisitAddOn.amount,
            "repair labor with same-visit cleaning, plus parts",
          ),
        },
      ]
    : [];

  return [...cleaning, diagnostic, interval, ...addOn];
}

function sentenceList(items: readonly string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return capitalize(items[0]);
  const head = items.slice(0, -1).join(", ");
  return `${capitalize(head)} and ${items[items.length - 1]}`;
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
