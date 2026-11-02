import type { Metadata } from "next";
import Link from "next/link";
import { documentTitle } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  description: string;
  path: string;
  heading: string;
  body: string;
};

/**
 * Shared metadata for simpler marketing pages.
 * Always sets page-specific OG + Twitter so they do not inherit the homepage card.
 */
export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = documentTitle(title);
  const ogImage = {
    url: "/images/hero.webp",
    width: 1200,
    height: 630,
    alt: `${title} — ${site.name}`,
  } as const;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function SimplePage({ description, path, heading, body }: Props) {
  return (
    <section className="simple-page">
      <div className="simple-page-inner">
        <p className="eyebrow gold">Husker Grill Cleaning</p>
        <h1>{heading}</h1>
        <p className="lede">{body}</p>
        <p className="lede muted-copy">{description}</p>
        <div className="simple-page-actions">
          <Link href={site.bookingPath} className="btn-prestige">
            Schedule Now
          </Link>
          <Link href="/#pricing" className="btn-outline-light">
            View Pricing
          </Link>
        </div>
        <p className="path-note">
          Canonical path preserved: <code>{path}</code>
        </p>
      </div>
    </section>
  );
}
