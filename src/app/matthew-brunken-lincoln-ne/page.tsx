import type { Metadata } from "next";
import {
  MATTHEW_FAQS,
  MATTHEW_SAME_AS,
  MatthewBrunkenPage,
  matthewPhotoUrl,
} from "@/components/MatthewBrunkenPage";
import { site } from "@/lib/site";

const path = "/matthew-brunken-lincoln-ne";
const title = "Matthew Brunken | Lincoln NE Entrepreneur, Runner & AGSI Grill Technician";
const description =
  "Matthew Brunken of Lincoln, Nebraska — founder of Husker Grill Cleaning, AGSI founding cohort (CGCT & CAGST), competitive distance runner (3× BRIN champion), and cross country coach. Bio, credentials, and how to connect.";
const ogImage = matthewPhotoUrl(1200);

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "Matthew Brunken",
    "Matthew Brunken Lincoln",
    "Matthew Brunken Nebraska",
    "Matthew Brunken runner",
    "Matthew Brunken Husker Grill Cleaning",
    "Matthew Brunken AGSI",
    "Matthew Brunken MBA",
    "Matthew Brunken Malcolm NE",
    "Brunken Lincoln NE",
  ],
  authors: [{ name: "Matthew Brunken", url: `${site.domain}${path}` }],
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: path,
    siteName: site.name,
    title: "Matthew Brunken — Lincoln, Nebraska",
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1500,
        alt: "Matthew Brunken, Lincoln Nebraska",
      },
    ],
    firstName: "Matthew",
    lastName: "Brunken",
    username: "matthew_brunken",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Brunken | Lincoln, NE",
    description,
    images: [ogImage],
    creator: "@matthew_brunken",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function MatthewJsonLd() {
  const personId = `${site.domain}${path}#person`;
  const pageId = `${site.domain}${path}#webpage`;

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": pageId,
    url: `${site.domain}${path}`,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.domain,
    },
    mainEntity: { "@id": personId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
    inLanguage: "en-US",
    about: { "@id": personId },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Matthew Brunken",
    givenName: "Matthew",
    familyName: "Brunken",
    alternateName: ["Matt Brunken"],
    description:
      "Lincoln, Nebraska entrepreneur, competitive distance runner, private cross country coach, and AGSI-certified grill technician. Founder of Husker Grill Cleaning.",
    url: `${site.domain}${path}`,
    image: ogImage,
    jobTitle: [
      "Founder",
      "AGSI-Certified Grill Technician",
      "Cross Country Coach",
      "Competitive Distance Runner",
    ],
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${site.domain}/#business`,
      name: site.name,
      url: site.domain,
    },
    founder: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Nebraska Omaha",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Liberty University",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Master of Business Administration",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "University of Nebraska Omaha",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Grill Cleaning Technician (CGCT)",
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: "American Grill Service Institute",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Advanced Grill Service Technician (CAGST)",
        credentialCategory: "certification",
        recognizedBy: {
          "@type": "Organization",
          name: "American Grill Service Institute",
        },
      },
    ],
    knowsAbout: [
      "Grill cleaning",
      "Grill repair",
      "Gas safety inspection",
      "Outdoor kitchen maintenance",
      "Distance running",
      "Cross country coaching",
      "Small business operations",
    ],
    award: "Three-time BRIN series champion",
    nationality: {
      "@type": "Country",
      name: "United States",
    },
    homeLocation: {
      "@type": "Place",
      name: "Lincoln, Nebraska",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lincoln",
        addressRegion: "NE",
        addressCountry: "US",
      },
    },
    birthPlace: {
      "@type": "Place",
      name: "Malcolm, Nebraska",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malcolm",
        addressRegion: "NE",
        addressCountry: "US",
      },
    },
    sameAs: [...MATTHEW_SAME_AS],
    mainEntityOfPage: { "@id": pageId },
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
        name: "Matthew Brunken",
        item: `${site.domain}${path}`,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.domain}${path}#faq`,
    mainEntity: MATTHEW_FAQS.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
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

export default function MatthewBrunkenRoute() {
  return (
    <>
      <MatthewJsonLd />
      <MatthewBrunkenPage />
    </>
  );
}
