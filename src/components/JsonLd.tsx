import { faqs, site } from "@/lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#business`,
    name: site.name,
    description: site.description,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.domain}/images/hero.webp`,
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Omaha",
      addressRegion: "NE",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Omaha" },
      { "@type": "City", name: "Lincoln" },
    ],
    sameAs: [site.social.facebook, site.social.instagram, site.social.nicejob],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
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
            name: "Weber and Traeger Repair Add-On",
          },
          price: "69",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stand-Alone Weber and Traeger Repair Visit",
          },
          price: "149",
          priceCurrency: "USD",
        },
      ],
    },
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
