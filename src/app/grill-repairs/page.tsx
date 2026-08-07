import type { Metadata } from "next";
import { GrillRepairsPage, REPAIR_FAQS } from "@/components/GrillRepairsPage";
import { site } from "@/lib/site";

const path = "/grill-repairs";
const title =
  "Weber & Traeger Grill Repair in Omaha & Lincoln | Husker Grill Cleaning";
const description =
  "Weber grill repair and Traeger pellet grill repair in Omaha and Lincoln. Fix grills that will not light, low flame, igniters, regulators, burners, hot rods, and control boards. Best value: $50 + parts repair with a deep clean.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "Weber grill repair Omaha",
    "Traeger repair Lincoln",
    "grill will not light",
    "grill repair Omaha",
    "grill repair Lincoln",
    "Weber Genesis repair",
    "Traeger hot rod replacement",
    "grill igniter repair",
    "low flame grill repair",
    "regulator replacement grill",
    "Council Bluffs grill repair",
  ],
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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function RepairJsonLd() {
  const faqEntities = REPAIR_FAQS.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  );

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.domain}${path}#webpage`,
    url: `${site.domain}${path}`,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.domain,
    },
    about: { "@id": `${site.domain}/#business` },
    inLanguage: "en-US",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.domain}${path}#service`,
    name: "Weber and Traeger Grill Repair",
    serviceType: "Grill repair",
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.domain}/#business`,
      name: site.name,
      telephone: site.phoneTel,
      email: site.email,
    },
    areaServed: [
      { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Lincoln", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Council Bluffs", containedInPlace: { "@type": "State", name: "Iowa" } },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Repair with deep clean",
        price: "50",
        priceCurrency: "USD",
        description: "Repair labor added to a scheduled deep clean, plus parts.",
      },
      {
        "@type": "Offer",
        name: "Stand-alone repair visit",
        price: "149",
        priceCurrency: "USD",
        description:
          "Stand-alone service visit including travel, diagnosis, and initial on-site labor. Parts additional.",
      },
    ],
    brand: [{ "@type": "Brand", name: "Weber" }, { "@type": "Brand", name: "Traeger" }],
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
        name: "Grill Repairs",
        item: `${site.domain}${path}`,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.domain}${path}#faq`,
    mainEntity: faqEntities,
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

export default function GrillRepairsRoute() {
  return (
    <>
      <RepairJsonLd />
      <GrillRepairsPage />
    </>
  );
}
