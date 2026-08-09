import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPage } from "@/components/BrandPage";
import {
  buildAreaFaqs,
  ServiceAreaPage,
} from "@/components/ServiceAreaPage";
import {
  brandDescription,
  brandDirectAnswer,
  brandLongTails,
  brandPath,
  brandTitle,
  buildBrandFaqs,
  getGrillBrand,
  grillBrandSlugs,
} from "@/lib/grill-brands";
import {
  getServiceArea,
  metroHubPath,
  serviceAreaDescription,
  serviceAreaPath,
  serviceAreaSlugs,
  serviceAreaTitle,
} from "@/lib/service-areas";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...serviceAreaSlugs(), ...grillBrandSlugs()].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const area = getServiceArea(slug);
  if (area) {
    const title = serviceAreaTitle(area);
    const description = serviceAreaDescription(area);
    const path = serviceAreaPath(area);
    return {
      title: { absolute: title },
      description,
      keywords: [
        `grill cleaning ${area.city}`,
        `how much is grill cleaning in ${area.city}`,
        `how much is grill cleaning in ${area.city} NE`,
        ...(area.keywordExtras ?? []),
      ],
      alternates: { canonical: path },
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
      robots: { index: true, follow: true },
    };
  }

  const brand = getGrillBrand(slug);
  if (brand) {
    const title = brandTitle(brand);
    const description = brandDescription(brand);
    const path = brandPath(brand);
    return {
      title: { absolute: title },
      description,
      keywords: brandLongTails(brand),
      alternates: { canonical: path },
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
            alt: `${brand.name} grill cleaning and repair in Omaha and Lincoln`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/images/hero.webp"],
      },
      robots: { index: true, follow: true },
    };
  }

  return {};
}

function AreaJsonLd({ slug }: { slug: string }) {
  const area = getServiceArea(slug);
  if (!area) return null;

  const path = serviceAreaPath(area);
  const pageUrl = `${site.domain}${path}`;
  const title = serviceAreaTitle(area);
  const description = serviceAreaDescription(area);
  const faqs = buildAreaFaqs(area);
  const hub = metroHubPath(area.metro);
  const isMetroHub = hub === path;

  const crumbs: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
  ];
  if (hub && !isMetroHub) {
    crumbs.push({
      "@type": "ListItem",
      position: 2,
      name: `${area.metro} Metro`,
      item: `${site.domain}${hub}`,
    });
    crumbs.push({
      "@type": "ListItem",
      position: 3,
      name: `${area.city} Grill Cleaning`,
      item: pageUrl,
    });
  } else {
    crumbs.push({
      "@type": "ListItem",
      position: 2,
      name: `${area.city} Grill Cleaning`,
      item: pageUrl,
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
              url: site.domain,
            },
            areaServed: [
              { "@type": "City", name: area.city },
              { "@type": "City", name: area.metro },
            ],
            offers: [
              {
                "@type": "Offer",
                name: "Freestanding grill deep clean",
                price: "299",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                name: "Built-in grill deep clean",
                price: "349",
                priceCurrency: "USD",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: crumbs,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </>
  );
}

function BrandJsonLd({ slug }: { slug: string }) {
  const brand = getGrillBrand(slug);
  if (!brand) return null;

  const path = brandPath(brand);
  const pageUrl = `${site.domain}${path}`;
  const title = brandTitle(brand);
  const description = brandDescription(brand);
  const faqs = buildBrandFaqs(brand);
  const direct = brandDirectAnswer(brand);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".bp-answer-text", ".bp-entity", ".bp-takeaway-grid"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.domain,
    },
    about: {
      "@type": "Brand",
      name: brand.name,
    },
    mainEntity: {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${brand.name} Grill Cleaning and Repair`,
    serviceType: `${brand.name} mobile grill cleaning and repair`,
    description: direct,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneTel,
      email: site.email,
      url: site.domain,
      areaServed: [
        {
          "@type": "City",
          name: "Omaha",
          containedInPlace: { "@type": "State", name: "Nebraska" },
        },
        {
          "@type": "City",
          name: "Lincoln",
          containedInPlace: { "@type": "State", name: "Nebraska" },
        },
      ],
    },
    areaServed: [
      { "@type": "City", name: "Omaha" },
      { "@type": "City", name: "Lincoln" },
      { "@type": "State", name: "Nebraska" },
    ],
    brand: { "@type": "Brand", name: brand.name },
    offers: [
      {
        "@type": "Offer",
        name: `Freestanding ${brand.name} deep clean`,
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: `Built-in ${brand.name} deep clean`,
        price: "349",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: `${brand.name} repair with deep clean`,
        price: "50",
        priceCurrency: "USD",
        description: "Repair labor with deep clean; parts extra",
        url: pageUrl,
      },
      {
        "@type": "Offer",
        name: `${brand.name} stand-alone repair visit`,
        price: "149",
        priceCurrency: "USD",
        description: "Stand-alone repair visit; parts extra",
        url: pageUrl,
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${site.name} services a ${brand.name} grill in Omaha or Lincoln`,
    description: direct,
    totalTime: "PT2H",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book service",
        text: `Schedule online or call ${site.phoneDisplay} with your ${brand.name} model and symptoms.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Mobile visit",
        text: "A technician comes to your Omaha or Lincoln location.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Deep clean and diagnose",
        text: "Perform the 50-step clean when booked, then diagnose ignition, fuel, and heat systems.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Repair with quoted parts",
        text: "Complete agreed repairs; cleaning customers pay $50 labor plus parts for same-visit repair work when applicable.",
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
        name: "Grill Repairs",
        item: `${site.domain}/grill-repairs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${brand.name} Cleaning & Repair`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
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

export default async function LocalSeoSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const area = getServiceArea(slug);
  if (area) {
    return (
      <>
        <AreaJsonLd slug={slug} />
        <ServiceAreaPage area={area} />
      </>
    );
  }

  const brand = getGrillBrand(slug);
  if (brand) {
    return (
      <>
        <BrandJsonLd slug={slug} />
        <BrandPage brand={brand} />
      </>
    );
  }

  notFound();
}
