import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { site } from "@/lib/site";

const title = "About Husker Grill Cleaning | AGSI-Certified Service in Omaha & Lincoln";
const description =
  "Meet Matthew Brunken and Husker Grill Cleaning — AGSI founding cohort, CGCT & CAGST certified mobile grill cleaning and repair for Omaha and Lincoln, Nebraska. Full disassembly, gas safety, and clean + repair in one visit.";
const path = "/about";
const ogImage =
  "https://res.cloudinary.com/f69kw8ao/image/upload/f_auto,q_auto:good,w_1200,c_fill,g_face/v1786133821/matthew_brunken_omaha_grill_cleaning_f6rhnt.jpg";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "Husker Grill Cleaning",
    "Matthew Brunken",
    "AGSI certified grill cleaning",
    "CAGST",
    "CGCT",
    "Omaha grill cleaning",
    "Lincoln grill cleaning",
    "Nebraska grill repair",
    "mobile grill cleaning Omaha",
    "built-in grill cleaning Nebraska",
    "American Grill Service Institute",
  ],
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: path,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1500,
        alt: "Matthew Brunken, founder of Husker Grill Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function AboutJsonLd() {
  const aboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.domain}${path}#webpage`,
    url: `${site.domain}${path}`,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.domain,
    },
    about: {
      "@id": `${site.domain}/#business`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
    inLanguage: "en-US",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.domain}${path}#matthew-brunken`,
    name: "Matthew Brunken",
    jobTitle: "Founder",
    description:
      "Founder of Husker Grill Cleaning. AGSI founding cohort member holding CGCT and CAGST credentials. MBA, University of Nebraska Omaha.",
    image: ogImage,
    url: `${site.domain}${path}`,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${site.domain}/#business`,
      name: site.name,
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
    knowsAbout: [
      "Grill cleaning",
      "Grill repair",
      "Gas safety inspection",
      "Outdoor kitchen maintenance",
      "AGSI professional grill service",
    ],
    sameAs: [site.social.facebook, site.social.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lincoln",
      addressRegion: "NE",
      addressCountry: "US",
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
        name: "About",
        item: `${site.domain}${path}`,
      },
    ],
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.domain}${path}#service`,
    name: "Husker Grill Cleaning — AGSI-Certified Grill Service",
    description:
      "AGSI-certified mobile grill cleaning and repair serving Omaha and Lincoln, Nebraska.",
    url: `${site.domain}${path}`,
    telephone: site.phoneTel,
    email: site.email,
    image: ogImage,
    areaServed: [
      { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
      { "@type": "City", name: "Lincoln", containedInPlace: { "@type": "State", name: "Nebraska" } },
    ],
    founder: { "@id": `${site.domain}${path}#matthew-brunken` },
    parentOrganization: { "@id": `${site.domain}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}

export default function AboutRoute() {
  return (
    <>
      <AboutJsonLd />
      <AboutPage />
    </>
  );
}
