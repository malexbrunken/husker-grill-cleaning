import type { Metadata } from "next";
import { WhatGrillCleaningIncludesPage } from "@/components/WhatGrillCleaningIncludesPage";
import { site } from "@/lib/site";

const path = "/what-does-grill-cleaning-include";
const title =
  "What Does Grill Cleaning Include? | 50-Step Process — Husker Grill Cleaning";
const description =
  "Exactly what a professional grill deep clean includes: 50 AGSI-style steps from safety setup and full disassembly to firebox decarbonization, gas system service, leak testing, and polish. Omaha & Lincoln.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "what does grill cleaning include",
    "50 step grill cleaning",
    "grill deep clean process",
    "professional grill cleaning steps",
    "AGSI grill cleaning",
    "grill cleaning Omaha",
    "grill cleaning Lincoln",
    "full disassembly grill clean",
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
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional 50-step grill deep cleaning",
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

function ProcessJsonLd() {
  const pageUrl = `${site.domain}${path}`;

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "50-Step Professional Grill Deep Cleaning Process",
    description,
    totalTime: "PT3H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "299",
    },
    tool: [
      { "@type": "HowToTool", name: "Industrial degreaser bath" },
      { "@type": "HowToTool", name: "Dry vapor steam cleaner" },
      { "@type": "HowToTool", name: "NaOH decarbonizer" },
      { "@type": "HowToTool", name: "PPE (goggles, gloves, respirator)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Setup & safety",
        text: "Protect the work area and don required PPE before service.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Pre-service diagnostic",
        text: "Test-fire the grill, record flame quality, and disconnect gas safely.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Full disassembly and soak",
        text: "Remove internal components, degrease bath, scrub, rinse, and steam-clear burners.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Lid service",
        text: "Remove lid, scour interior lacquer, clean thermometer probe, rinse.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Firebox deep clean",
        text: "Scrape, vacuum, chemical scour, steam flush, caustic decarbonize, neutralize.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Valve and gas system service",
        text: "Clean orifices, calibrate igniter, detail valves and hardware.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Pedestal and cart",
        text: "Detail underside and cart grease reservoirs.",
      },
      {
        "@type": "HowToStep",
        position: 8,
        name: "Reassembly and calibration",
        text: "Reinstall lid, calibrate venturis, reinstall burners and dials safely.",
      },
      {
        "@type": "HowToStep",
        position: 9,
        name: "Testing and inspection",
        text: "Test-fire, soapy-water leak check, reinstall internals.",
      },
      {
        "@type": "HowToStep",
        position: 10,
        name: "Finishing and polishing",
        text: "Site cleanup, stainless polish, battery, heat-cycle test, final securement.",
      },
    ],
    url: pageUrl,
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
      "@type": "Service",
      name: "50-Step Grill Deep Cleaning",
      provider: {
        "@type": "LocalBusiness",
        name: site.name,
        url: site.domain,
      },
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
        name: "What Grill Cleaning Includes",
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does professional grill cleaning include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professional deep clean includes safety setup, pre-service diagnostics, full disassembly, hot degreaser soak, mechanical scrubbing, lid service, firebox deep clean with steam and selective decarbonization, gas system service, cart detailing, calibrated reassembly, leak testing, stainless polish, and documented photos—about 50 steps over roughly three hours.",
        },
      },
      {
        "@type": "Question",
        name: "Is organic grill cleaning better than a deep clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not automatically. “Organic” is not a measurement of cleaning performance. Baked-on polymerized grease and carbon typically require disassembly, mechanical work, steam, and sometimes selective professional chemistry that is fully removed afterward.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a 50-step grill deep clean take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A proper deep clean typically takes about three hours, depending on grill type, condition, and access.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function WhatDoesGrillCleaningIncludeRoute() {
  return (
    <>
      <ProcessJsonLd />
      <WhatGrillCleaningIncludesPage />
    </>
  );
}
