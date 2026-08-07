import Link from "next/link";
import { PricingOfferings } from "@/components/PricingOfferings";
import { site } from "@/lib/site";

export function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="pricing-page-hero" aria-labelledby="pricing-page-title">
        <div className="pricing-page-inner">
          <p className="eyebrow gold">Husker Grill Cleaning · Omaha &amp; Lincoln</p>
          <h1 id="pricing-page-title">Simple, Transparent Pricing</h1>
          <p className="pricing-page-lede">
            No hidden fees. No pressure tactics. Professional 50-step deep cleans and
            certified repair—backed by Nebraska&apos;s only AGSI-certified mobile team.
          </p>
          <p className="pricing-page-tax-note">
            All prices exclude applicable Nebraska sales tax (Tax ID {site.taxId}).
          </p>
          <div className="pricing-page-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Now
            </Link>
            <Link href="/see-our-work" className="btn-outline-light">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <PricingOfferings sectionHeading="h2" />

      <section className="pricing-closing" aria-labelledby="pricing-closing-heading">
        <div className="pricing-page-inner pricing-closing-inner">
          <h2 id="pricing-closing-heading">Ready for a grill that looks new again?</h2>
          <p>
            Book online or call. We serve Omaha and Lincoln metros—including estates,
            HOAs, and multi-tenant properties.
          </p>
          <div className="pricing-page-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Now
            </Link>
            <Link href="/see-our-work" className="btn-outline-light">
              View 100+ Real After Photos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
