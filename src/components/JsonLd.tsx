import { servedCities } from "@/lib/service-areas";
import {
  businessId,
  faqs,
  repairPricing,
  repairPricingDescription,
  site,
} from "@/lib/site";

/** Sitewide LocalBusiness + WebSite — safe on every page. */
export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.domain}/images/hero.webp`,
    priceRange: "$$",
    openingHours: site.hours.openingHours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.dayOfWeek],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: servedCities().map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.regionName },
    })),
    sameAs: [
      site.google.profileUrl,
      site.social.facebook,
      site.social.instagram,
      site.social.nicejob,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleReviews.ratingValue,
      bestRating: site.googleReviews.bestRating,
      reviewCount: site.googleReviews.reviewCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grill Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "One-Time Deep Clean",
            description:
              "Freestanding and pedestal grills $299+tax; built-in grills $349+tax",
          },
          price: "299",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Semi-Annual Care" },
          price: "599",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Maintenance Cleaning" },
          price: "199",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grill repair diagnostic and trip",
            description: repairPricingDescription(),
          },
          price: String(repairPricing.diagnosticAndTrip),
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Additional grill repair labor",
            description: `Charged after the ${repairPricing.includedMinutes} minutes included in the diagnostic and trip charge, when the part is on hand.`,
          },
          price: String(repairPricing.intervalPrice),
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(repairPricing.intervalPrice),
            priceCurrency: "USD",
            unitText: `${repairPricing.intervalMinutes} minutes`,
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    potentialAction: {
      "@type": "ReserveAction",
      target: `${site.domain}${site.bookingPath}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

/**
 * Homepage-only FAQ schema (avoids duplicate FAQPage graphs on
 * schedule / repairs / brand / city pages that already emit their own).
 */
export function HomeFaqJsonLd() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  );
}
