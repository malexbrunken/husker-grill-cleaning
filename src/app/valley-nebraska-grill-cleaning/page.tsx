import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  buildAreaFaqs,
  ServiceAreaPage,
} from "@/components/ServiceAreaPage";
import {
  getServiceArea,
  serviceAreaDescription,
  serviceAreaPath,
  serviceAreaTitle,
} from "@/lib/service-areas";
import { site } from "@/lib/site";

const SLUG = "valley-nebraska-grill-cleaning";

export function generateMetadata(): Metadata {
  const area = getServiceArea(SLUG);
  if (!area) return {};

  const title = serviceAreaTitle(area);
  const description = serviceAreaDescription(area);
  const path = serviceAreaPath(area);
  const keywords = [
    `grill cleaning ${area.city}`,
    `grill cleaning ${area.city} ${area.region}`,
    `how much is grill cleaning in ${area.city}`,
    `how much is grill cleaning in ${area.city} NE`,
    `how much is grill cleaning in ${area.city} Nebraska`,
    `${area.city} Nebraska grill cleaning`,
    `mobile grill cleaning ${area.city}`,
    `built-in grill cleaning ${area.city}`,
    `Weber grill cleaning ${area.city}`,
    `Traeger cleaning ${area.city}`,
    ...(area.keywordExtras ?? []),
  ];

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: "/images/hero.webp",
          width: 1200,
          height: 630,
          alt: `Grill cleaning in ${area.city}, ${area.region}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function AreaJsonLd() {
  const area = getServiceArea(SLUG);
  if (!area) return null;

  const path = serviceAreaPath(area);
  const pageUrl = `${site.domain}${path}`;
  const title = serviceAreaTitle(area);
  const description = serviceAreaDescription(area);
  const faqs = buildAreaFaqs(area);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.domain,
    },
    about: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "State",
        name: area.regionName,
      },
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Grill Cleaning in ${area.city}, ${area.region}`,
    serviceType: "Mobile grill cleaning and repair",
    description,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneTel,
      email: site.email,
      url: site.domain,
    },
    areaServed: [
      {
        "@type": "City",
        name: area.city,
        containedInPlace: {
          "@type": "State",
          name: area.regionName,
        },
      },
      {
        "@type": "City",
        name: area.metro,
      },
      ...area.nearby.map((name) => ({
        "@type": "Place",
        name,
      })),
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Freestanding grill deep clean",
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: "Built-in grill deep clean",
        price: "349",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: "Maintenance grill cleaning",
        price: "199",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${area.metro} Metro`,
        item: `${site.domain}/professional-grill-cleaning-repair-services-in-omaha-nebraska`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${area.city} Grill Cleaning`,
        item: pageUrl,
      },
    ],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function ValleyGrillCleaningPage() {
  const area = getServiceArea(SLUG);
  if (!area) notFound();

  return (
    <>
      <AreaJsonLd />
      <ServiceAreaPage area={area} />
    </>
  );
}
