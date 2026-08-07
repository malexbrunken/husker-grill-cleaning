import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { site } from "@/lib/site";

const FREESTANDING_IMG =
  "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-21_jrw9fs.jpg";
const BUILT_IN_IMG =
  "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-1_mm1iki.jpg";

const REPAIR_BRANDS = [
  "Weber",
  "Traeger",
  "Green Mountain",
  "Yoder",
  "Memphis",
  "Bull",
  "Napoleon",
] as const;

const DEEP_CLEAN_FEATURES = [
  {
    title: "50-Step Deep Clean",
    body: "Complete disassembly, hot bath soak, and pro-grade steam sanitization.",
  },
  {
    title: "Full Grate & Burner Service",
    body: "Every component removed, scrubbed, and restored.",
  },
  {
    title: "Firebox Deep Clean",
    body: "Caustic decarbonization, high-temp steam flush, and neutralization.",
  },
  {
    title: "Valve & Gas Safety",
    body: "Orifice clearing, venturi calibration, and soapy-water leak detection.",
  },
  {
    title: "Lid & Exterior Restoration",
    body: "Interior scouring, thermometer cleaning, and stainless polish.",
  },
  {
    title: "Performance Tuning",
    body: "Blue-flame verification, even heat check, and careful reassembly.",
  },
] as const;

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

      {/* PRIMARY: One-Time Deep Clean */}
      <section
        className="pricing-primary"
        aria-labelledby="deep-clean-heading"
        id="deep-clean"
      >
        <div className="pricing-page-inner">
          <article className="price-feature-card">
            <div className="price-feature-top">
              <div>
                <span className="seasonal-label gold">Main Service</span>
                <h2 id="deep-clean-heading">One-Time Deep Clean</h2>
                <p className="price-feature-intro">
                  Our flagship service. Full disassembly, hot bath, steam, firebox
                  restoration, gas safety check, and exterior polish—typically ~3 hours
                  on site.
                </p>
              </div>
              <Link href={site.bookingPath} className="btn-prestige price-feature-cta-top">
                Reserve Deep Clean
              </Link>
            </div>

            <div className="grill-type-pricing" role="list">
              <div className="grill-type-card" role="listitem">
                <div className="grill-type-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cloudinaryUrl(FREESTANDING_IMG, 900, "thumb")}
                    srcSet={`${cloudinaryUrl(FREESTANDING_IMG, 600, "thumb")} 600w, ${cloudinaryUrl(FREESTANDING_IMG, 900, "thumb")} 900w`}
                    sizes="(max-width: 700px) 100vw, 420px"
                    alt="Freestanding cart-style gas grill after professional deep cleaning"
                    width={900}
                    height={675}
                    loading="eager"
                  />
                </div>
                <div className="grill-type-body">
                  <p className="grill-type-kicker">Looks like this</p>
                  <h3>Pedestal / Cart / Freestanding</h3>
                  <p className="grill-type-help">
                    A complete grill that stands on its own cart, legs, or pedestal—not
                    built into a counter. Side shelves and a rolling or fixed base are
                    common.
                  </p>
                  <p className="price-main">
                    $299 <small>+ tax</small>
                  </p>
                </div>
              </div>

              <div className="grill-type-card" role="listitem">
                <div className="grill-type-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cloudinaryUrl(BUILT_IN_IMG, 900, "thumb")}
                    srcSet={`${cloudinaryUrl(BUILT_IN_IMG, 600, "thumb")} 600w, ${cloudinaryUrl(BUILT_IN_IMG, 900, "thumb")} 900w`}
                    sizes="(max-width: 700px) 100vw, 420px"
                    alt="Built-in outdoor kitchen grill after professional deep cleaning"
                    width={900}
                    height={675}
                    loading="eager"
                  />
                </div>
                <div className="grill-type-body">
                  <p className="grill-type-kicker">Looks like this</p>
                  <h3>Built-In Grill</h3>
                  <p className="grill-type-help">
                    Dropped into an outdoor kitchen island or counter with surrounding
                    stone, granite, or cabinetry. Often part of a larger outdoor kitchen.
                  </p>
                  <p className="price-main">
                    $349 <small>+ tax</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="repair-note-dark">
              <strong>Need repairs during your deep clean?</strong>
              <br />
              Pedestal / cart / freestanding: add <strong>$50 + parts</strong>
              <br />
              Built-in repair packages start at <strong>$399 + parts</strong> (quoted on
              site after diagnosis).
              <span className="repair-note-fine">
                We only repair grills for current cleaning customers, or these brands:{" "}
                {REPAIR_BRANDS.join(", ")}.
              </span>
            </div>

            <ul className="price-feature-list">
              {DEEP_CLEAN_FEATURES.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.body}
                </li>
              ))}
            </ul>

            <div className="price-feature-footer">
              <Link href={site.bookingPath} className="btn-prestige">
                Reserve Now
              </Link>
              <p className="muted-copy">
                Not sure which type you have? Send a photo when you book—we&apos;ll
                confirm before we arrive.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SEMI-ANNUAL — supporting plan, not equal card */}
      <section
        className="pricing-plan-strip"
        aria-labelledby="semi-annual-heading"
        id="semi-annual"
      >
        <div className="pricing-page-inner">
          <div className="plan-strip">
            <div className="plan-strip-main">
              <span className="seasonal-label">Care Plan</span>
              <h2 id="semi-annual-heading">Semi-Annual Care</h2>
              <p>
                Priced as <strong>two deep cleans</strong> at standard rates—no separate
                membership discount. You get two full 50-step restorations per year
                (typically spring kickoff and fall wind-down).
              </p>
              <p className="plan-strip-price">
                <span className="price-main inline">
                  $599 <small>/ year + tax</small>
                </span>
                <span className="plan-strip-equiv">
                  = two deep cleans (freestanding path); built-in pairs quoted at booking
                </span>
              </p>
            </div>
            <div className="plan-strip-perks">
              <h3>Plan perks</h3>
              <ul>
                <li>
                  <strong>Free grate cleaning</strong> anytime during your plan year—just
                  give us <strong>48 hours notice</strong> to schedule it.
                </li>
                <li>
                  <strong>Priority scheduling</strong> when peak season fills up.
                </li>
                <li>Same thorough deep clean process on both visits.</li>
              </ul>
              <Link href={site.bookingPath} className="btn-outline-light">
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary services — compact */}
      <section
        className="pricing-secondary"
        aria-labelledby="more-services-heading"
      >
        <div className="pricing-page-inner">
          <div className="pricing-secondary-header">
            <p className="eyebrow gold">Add-on &amp; specialty</p>
            <h2 id="more-services-heading">More Ways We Help</h2>
            <p>
              These support the deep clean—they&apos;re not a substitute for a full
              restoration.
            </p>
          </div>

          <div className="secondary-price-grid">
            <article className="secondary-price-card">
              <span className="seasonal-label">By Appointment</span>
              <h3>Maintenance Cleaning</h3>
              <p className="price-main compact">
                $199 <small>+ tax</small>
              </p>
              <p className="price-note">
                Same price for all grill types. Available only if we&apos;ve deep-cleaned
                your grill in the past 12 months.
              </p>
              <ul>
                <li>Light grate &amp; flavorizer bar cleaning</li>
                <li>Firebox vacuuming</li>
                <li>Drip tray &amp; grease tray cleaning</li>
                <li>Exterior degreasing &amp; quick polish</li>
                <li>~90 minutes on site</li>
              </ul>
              <Link href={site.bookingPath} className="btn-outline-light">
                Book Maintenance
              </Link>
            </article>

            <article className="secondary-price-card">
              <span className="seasonal-label">Multi-Grill</span>
              <h3>Multi-Grill Discount</h3>
              <p className="price-main compact">
                Custom <small>/ at scheduling</small>
              </p>
              <p className="price-note">
                Bundle multiple units on the same visit for competitive combined pricing.
              </p>
              <ul>
                <li>Multiple units, one appointment</li>
                <li>Quote based on count and size</li>
                <li>Ideal for estates &amp; outdoor kitchens</li>
                <li>Also available for multi-tenant properties</li>
              </ul>
              <div className="secondary-card-actions">
                <Link href={site.bookingPath} className="btn-outline-light">
                  Get Custom Quote
                </Link>
                <Link
                  href="/multi-tenant-apartment-townhome-grill-cleaning"
                  className="text-link-gold"
                >
                  Multi-tenant programs →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Repairs */}
      <section className="pricing-repairs" aria-labelledby="repairs-heading" id="repairs">
        <div className="pricing-page-inner">
          <div className="repairs-card pricing-repairs-card">
            <div className="repairs-header">
              <span className="repairs-badge">Certified Repair</span>
              <h2 id="repairs-heading">Grill Repair Services</h2>
              <p>
                Diagnostics and repair by certified technicians. No prepayment for
                parts—we handle ordering and installation after your approval.
              </p>
            </div>

            <div className="repairs-features">
              <div className="repair-feature">
                <div className="repair-icon" aria-hidden="true">
                  ✓
                </div>
                <div>
                  <h3>Who we repair</h3>
                  <p>
                    Current cleaning customers, <strong>or</strong> these brands:{" "}
                    {REPAIR_BRANDS.join(", ")}.
                  </p>
                  <span className="fine-print">
                    Other brands: limited to cleaning-related performance issues, or
                    quoted case by case.
                  </span>
                </div>
              </div>

              <div className="repair-feature">
                <div className="repair-icon" aria-hidden="true">
                  $
                </div>
                <div>
                  <h3>Best value: clean + repair</h3>
                  <span className="prominent-price">
                    <span>$50+</span> freestanding add-on
                  </span>
                  <p>
                    Add repair labor to a scheduled deep clean on pedestal, cart, or
                    freestanding grills. Parts extra. Built-in repair packages from $399 +
                    parts.
                  </p>
                </div>
              </div>

              <div className="repair-feature">
                <div className="repair-icon" aria-hidden="true">
                  🔧
                </div>
                <div>
                  <h3>Stand-alone service visit</h3>
                  <span className="prominent-price">
                    <span>$149</span> trip charge
                  </span>
                  <p>
                    Includes travel, diagnosis, and initial on-site labor window. Additional
                    labor billed hourly as needed. Parts extra. No second trip charge when
                    we return to install ordered parts—just parts and labor.
                  </p>
                  <span className="fine-print">Labor after diagnosis: $120/hour.</span>
                </div>
              </div>

              <div className="repair-feature">
                <div className="repair-icon" aria-hidden="true">
                  ?
                </div>
                <div>
                  <h3>Not sure if you need repairs?</h3>
                  <p>
                    Schedule a <strong>deep clean</strong>. We diagnose while we clean,
                    give you a firm quote, and get approval before ordering parts. No
                    surprises, no pressure.
                  </p>
                </div>
              </div>
            </div>

            <div className="pricing-repairs-cta">
              <Link href={site.bookingPath} className="btn-prestige">
                Schedule Repair or Clean
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value / CTA */}
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
              View 77 Real After Photos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
