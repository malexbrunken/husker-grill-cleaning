import type { Metadata } from "next";
import { SCHEDULE_FAQS, SchedulePage } from "@/components/SchedulePage";
import { site } from "@/lib/site";

const path = "/schedule";
const title = "Schedule | Book Your Grill Service Today — Husker Grill Cleaning";
const description =
  "Reserve your Husker Grill Cleaning appointment online via Housecall Pro, call (402) 672-6272, or email photos. No payment due today. No one needs to be home. Omaha & Lincoln.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "schedule grill cleaning",
    "book grill cleaning Omaha",
    "book grill cleaning Lincoln",
    "Husker Grill Cleaning appointment",
    "Housecall Pro grill cleaning",
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
        alt: "Schedule Husker Grill Cleaning",
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

function ScheduleJsonLd() {
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
    potentialAction: {
      "@type": "ReserveAction",
      target: site.bookingUrl,
      name: "Reserve My Appointment",
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
        name: "Schedule",
        item: pageUrl,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SCHEDULE_FAQS.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export default function ScheduleRoute() {
  return (
    <>
      <ScheduleJsonLd />
      <SchedulePage />
    </>
  );
}
