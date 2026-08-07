import type { Metadata } from "next";
import { OMAHA_FAQS, OmahaServicesPage } from "@/components/OmahaServicesPage";
import { omahaNeighborhoods, site } from "@/lib/site";

const path = "/professional-grill-cleaning-repair-services-in-omaha-nebraska";
const title =
  "Professional Grill Cleaning & Repair Services in Omaha, Nebraska | Husker Grill Cleaning";
const description =
  "Mobile professional grill cleaning and repair in Omaha, NE. 50-step deep cleans, maintenance, multi-tenant service, and grill repair for Weber, Traeger, built-ins, and more. Serving Elkhorn, Gretna, The Ridges, and the Omaha metro.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "grill cleaning Omaha",
    "professional grill cleaning Omaha Nebraska",
    "grill repair Omaha",
    "Weber grill cleaning Omaha",
    "Traeger cleaning Omaha",
    "built-in grill cleaning Omaha",
    "mobile grill cleaning Elkhorn",
    "grill cleaning Gretna NE",
    "outdoor kitchen cleaning Omaha",
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
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional grill cleaning in Omaha, Nebraska",
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

function OmahaJsonLd() {
  const pageUrl = `${site.domain}${path}`;

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
      name: "Omaha",
      containedInPlace: {
        "@type": "State",
        name: "Nebraska",
      },
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#omaha-business`,
    name: site.name,
    image: `${site.domain}/images/hero.webp`,
    url: pageUrl,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Omaha",
      addressRegion: "NE",
      postalCode: "68022",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Omaha",
      },
      ...omahaNeighborhoods.map((name) => ({
        "@type": "Place",
        name,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Omaha grill cleaning and repair",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Grill Deep Cleaning",
            areaServed: "Omaha, NE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grill Repair",
            areaServed: "Omaha, NE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Tenant Grill Cleaning",
            areaServed: "Omaha, NE",
          },
        },
      ],
    },
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
        name: "Omaha Grill Cleaning & Repair",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OMAHA_FAQS.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
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

export default function OmahaServicesRoute() {
  return (
    <>
      <OmahaJsonLd />
      <OmahaServicesPage />
    </>
  );
}
