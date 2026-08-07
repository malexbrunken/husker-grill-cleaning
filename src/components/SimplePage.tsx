import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  title: string;
  description: string;
  path: string;
  heading: string;
  body: string;
};

export function buildPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
    },
  };
}

export function SimplePage({ title, description, path, heading, body }: Props) {
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
