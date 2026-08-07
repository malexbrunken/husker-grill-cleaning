import type { Metadata } from "next";
import { ORGANIC_FAQS, OrganicVsDeepPage } from "@/components/OrganicVsDeepPage";
import { site } from "@/lib/site";

const path = "/organic-grill-cleaning-vs-deep-grill-cleaning";
const title =
  "Organic Grill Cleaning Myth — Husker Grill Cleaning in Omaha & Lincoln";
const description =
  "Is “organic” grill cleaning better? Why baked-on grease and carbon need disassembly, mechanical work, steam, and selective chemistry—not just a label. Compare organic-only vs results-first deep cleaning in Omaha & Lincoln.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "organic grill cleaning",
    "organic vs deep grill cleaning",
    "deep grill cleaning",
    "polymerized grease grill",
    "grill cleaning chemicals",
    "lye grill cleaning",
    "steam grill cleaning",
    "grill cleaning Omaha",
    "grill cleaning Lincoln",
    "Husker Grill Cleaning",
  ],
  authors: [
    {
      name: "Matthew Brunken",
      url: `${site.domain}/matthew-brunken-lincoln-ne`,
    },
  ],
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: path,
    siteName: site.name,
    title,
    description,
    publishedTime: "2024-01-01",
    modifiedTime: "2026-08-07",
    authors: ["Matthew Brunken"],
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Husker Grill Cleaning — deep grill cleaning results",
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

function OrganicJsonLd() {
  const pageUrl = `${site.domain}${path}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: title,
    alternativeHeadline:
      "Is “Organic” Grill Cleaning Better? What Actually Removes Baked-On Grease & Carbon",
    description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en-US",
    datePublished: "2024-01-01",
    dateModified: "2026-08-07",
    author: {
      "@type": "Person",
      "@id": `${site.domain}/matthew-brunken-lincoln-ne#person`,
      name: "Matthew Brunken",
      url: `${site.domain}/matthew-brunken-lincoln-ne`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
      logo: {
        "@type": "ImageObject",
        url: `${site.domain}/images/hero.webp`,
      },
    },
    about: [
      "Organic grill cleaning",
      "Deep grill cleaning",
      "Polymerized grease",
      "Grill cleaning chemistry",
    ],
    keywords:
      "organic grill cleaning, deep grill cleaning, polymerized grease, steam cleaning, AGSI",
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
        name: "Organic vs Deep Grill Cleaning",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: ORGANIC_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
      "@type": "Thing",
      name: "Organic grill cleaning versus professional deep grill cleaning",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".ovd-answer-card", "h1"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
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

export default function OrganicVsDeepRoute() {
  return (
    <>
      <OrganicJsonLd />
      <OrganicVsDeepPage />
    </>
  );
}
