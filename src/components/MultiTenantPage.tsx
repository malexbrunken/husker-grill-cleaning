import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { site } from "@/lib/site";

/** Real multi-tenant / amenity grill jobs (not residential). */
const MULTI_TENANT_IMAGES = [
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504601/HG-76_lsnocc.jpg",
    alt: "Multi-tenant amenity grill after professional deep cleaning",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504600/HG-68_k6hq9z.jpg",
    alt: "Community built-in grill cleaned for a multi-tenant property",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504600/HG-65_b38qzq.jpg",
    alt: "Apartment community grill after Husker Grill Cleaning service",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-60_aft7gh.jpg",
    alt: "HOA outdoor kitchen grill restored after deep clean",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504597/HG-53_qw7opx.jpg",
    alt: "Multi-family property built-in grill after cleaning",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504596/HG-47_zlj3nr.jpg",
    alt: "Townhome community grill after professional restoration",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504594/HG-41_ugrr7d.jpg",
    alt: "Multi-tenant amenity grill cleaned and polished",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504588/HG-10_xvcaxo.jpg",
    alt: "Property manager built-in grill after deep clean",
  },
] as const;

function MultiTenantMarquee({
  images,
  direction = "left",
}: {
  images: readonly { src: string; alt: string }[];
  direction?: "left" | "right";
}) {
  // Duplicate sequence for seamless CSS loop (translate -50%).
  const sequence = [...images, ...images];
  return (
    <div
      className={`mt-marquee ${direction === "right" ? "mt-marquee-right" : "mt-marquee-left"}`}
      aria-hidden="true"
    >
      <div className="mt-marquee-track">
        {sequence.map((img, i) => (
          <figure key={`${img.src}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cloudinaryUrl(img.src, 620, "thumb")}
              alt=""
              width={620}
              height={465}
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

const TRUST_PILLS = [
  {
    icon: "🏢",
    title: "Multi-Tenant Expertise",
    body: "More built-in and multi-tenant grill cleanings completed than any other company in Nebraska.",
  },
  {
    icon: "✓",
    title: "Fully Certified",
    body: "AGSI certified technicians and a Certified Advanced Grill Service Technician (CAGST) on staff.",
  },
  {
    icon: "🛡",
    title: "Fully Insured",
    body: "Comprehensive liability coverage protects your property, your residents, and your investment.",
  },
  {
    icon: "🔧",
    title: "Repair Certified",
    body: "Not just cleaners — we diagnose, quote, and repair. Free repair estimate with every cleaning.",
  },
] as const;

const RISK_ITEMS = [
  "Surface-only cleaning leaves firebox grease that creates fire hazards",
  "Burners left in place trap moisture and chemicals against the housing",
  "No repair capability means a second vendor, second trip, and second invoice",
  "Uninsured or uncertified crews expose your property to liability",
  "Residents complain about uneven heat, flare-ups, and foul odors",
] as const;

const STANDARD_ITEMS = [
  "Full firebox disassembly — every burner, grate, and flavorizer bar removed",
  "Truck-mounted hot bath dissolves years of baked-on carbon and grease",
  "Certified technician performs gas safety inspection on every unit",
  "Free repair estimate included — same visit, no extra trip charge",
  "Fully insured with documentation provided for your records",
  "Detailed photo reporting so you see the transformation",
] as const;

const BENEFITS = [
  {
    icon: "⚖",
    title: "Reduce Liability",
    body: "Grease accumulation in built-in fireboxes is a leading cause of deck and structure fires. Our deep clean removes the hazard, not just the appearance.",
  },
  {
    icon: "🏠",
    title: "Resident Satisfaction",
    body: "Amenity grills are a selling point. When they perform like new, residents renew leases and leave better reviews.",
  },
  {
    icon: "📋",
    title: "Documentation",
    body: "We provide before/after photos and inspection reports for your maintenance logs and insurance compliance.",
  },
  {
    icon: "💰",
    title: "Extend Equipment Life",
    body: "Built-in grills are capital investments. Regular professional cleaning prevents corrosion and part failure, delaying costly replacements.",
  },
  {
    icon: "🔥",
    title: "Gas Safety Verified",
    body: "Every unit receives soapy-water leak detection, venturi calibration, and orifice clearing. We find problems before they become emergencies.",
  },
  {
    icon: "🚛",
    title: "Fully Mobile",
    body: "Our truck-mounted equipment and onboard power mean we work efficiently on-site without accessing your utilities or disrupting residents.",
  },
] as const;

const INCLUDED = [
  {
    title: "Full Disassembly",
    body: "Grates, flavorizer bars, burners, and collection trays removed and soaked.",
  },
  {
    title: "Hot Bath Treatment",
    body: "Proprietary heated soak dissolves carbon and grease buildup.",
  },
  {
    title: "Firebox Restoration",
    body: "Caustic decarbonization, steam flush, and chemical neutralization.",
  },
  {
    title: "Gas Safety Inspection",
    body: "Valve orifice clearing, venturi tube calibration, and leak detection.",
  },
  {
    title: "Exterior Polish",
    body: "Stainless steel restoration and surrounding surface protection.",
  },
  {
    title: "Performance Tuning",
    body: "Blue-flame verification and even heat distribution testing.",
  },
  {
    title: "Photo Documentation",
    body: "Before/after reporting for your property records.",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Coordinate",
    body: "We work with your maintenance team to schedule access during low-traffic hours. No resident coordination required.",
  },
  {
    n: "02",
    title: "Clean & Inspect",
    body: "Each built-in unit is fully disassembled, hot-bath treated, steam-sanitized, and reassembled with a full gas safety check.",
  },
  {
    n: "03",
    title: "Report & Recommend",
    body: "You receive a detailed report with before/after photos and any repair recommendations with firm, transparent pricing.",
  },
] as const;

const FAQS = [
  {
    q: "Do you service multiple grills in one visit?",
    a: "Absolutely. We specialize in multi-unit properties and can clean every built-in grill on your property in a single, efficient visit. Volume pricing is available for communities with 4+ units.",
  },
  {
    q: "Is the $349 price the same for all built-in grill brands?",
    a: "Yes. Our $349 rate covers standard built-in gas grills regardless of brand (Weber, Napoleon, Bull, Lynx, and more). Oversized or custom outdoor kitchen configurations may require a brief phone assessment.",
  },
  {
    q: "What does the free repair estimate include?",
    a: "During the cleaning, our Certified Advanced Grill Service Technician inspects all gas components, igniters, burners, and valves. If anything needs attention, we provide a firm quote for parts and labor—no extra trip charge and no pressure to approve on the spot.",
  },
  {
    q: "Do we need to provide water or power?",
    a: "No. Our service trucks are fully self-sufficient with onboard power and water. We only need access to the grill area and a clear path for our equipment.",
  },
  {
    q: "Are you insured for multi-tenant properties?",
    a: "Yes. We carry comprehensive general liability insurance specifically suited for commercial and multi-family properties. Certificates of insurance are available upon request.",
  },
  {
    q: "How often should community grills be professionally cleaned?",
    a: "For high-use amenity grills, we recommend a professional deep clean twice per year—pre-season and post-season. We also offer custom maintenance schedules for large communities. (Note: our residential $199 maintenance touch-up is not available for multi-tenant apartment grills.)",
  },
  {
    q: "Can you work around our residents' schedules?",
    a: "Yes. We routinely schedule early mornings or weekdays to avoid peak resident usage. We also work with your maintenance window if you prefer to close the amenity area for a few hours.",
  },
  {
    q: "Do you clean pellet smokers and flat-tops in common areas too?",
    a: "Yes. We clean gas, charcoal, pellet, and flat-top griddles in multi-tenant settings. Pricing for non-built-in units is assessed based on size and condition.",
  },
] as const;

export function MultiTenantPage() {
  return (
    <div className="mt-page">
      {/* Hero */}
      <section className="mt-hero" aria-labelledby="mt-hero-title">
        <div className="mt-inner mt-hero-copy">
          <p className="eyebrow gold">Built-In Grill Specialists</p>
          <h1 id="mt-hero-title">
            Nebraska&apos;s Most Experienced Multi-Tenant Built-In Grill Cleaning Service
          </h1>
          <p className="mt-lede">
            Trusted by property managers, HOAs, and apartment communities across Omaha and
            Lincoln. We clean what other companies won&apos;t touch—built-in grills in
            multi-tenant environments, fully disassembled and restored to showroom
            condition.
          </p>

          <div className="mt-price-chip" aria-label="Multi-tenant pricing">
            <p className="mt-price-chip-amount">
              $349 <small>+ tax</small>
            </p>
            <div>
              <strong>Per built-in grill</strong>
              <span>Multi-tenant &amp; HOA pricing · Free repair estimate included</span>
            </div>
          </div>

          <div className="mt-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule a Consultation
            </Link>
            <a href={`mailto:${site.email}`} className="btn-outline-light">
              Email {site.email}
            </a>
          </div>
        </div>

        <div
          className="mt-marquee-band"
          aria-label="Multi-tenant grill cleaning results from real apartment, townhome, and HOA jobs"
        >
          <p className="mt-marquee-label">
            Real multi-tenant jobs · Omaha &amp; Lincoln communities
          </p>
          <MultiTenantMarquee images={MULTI_TENANT_IMAGES} direction="left" />
          <MultiTenantMarquee
            images={[...MULTI_TENANT_IMAGES].reverse()}
            direction="right"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="mt-trust" aria-label="Why property managers trust us">
        <div className="mt-inner mt-trust-grid">
          {TRUST_PILLS.map((item) => (
            <article key={item.title} className="mt-trust-card">
              <span className="mt-trust-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Challenge / standard */}
      <section className="mt-challenge" aria-labelledby="mt-challenge-title">
        <div className="mt-inner">
          <p className="eyebrow gold">The Multi-Tenant Challenge</p>
          <h2 id="mt-challenge-title">Built-In Grills Demand a Different Standard</h2>

          <div className="mt-compare">
            <article className="mt-compare-card mt-compare-risk">
              <h3>The Risk of &ldquo;Standard&rdquo; Cleaning</h3>
              <ul>
                {RISK_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="mt-x" aria-hidden="true">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="mt-compare-card mt-compare-standard">
              <h3>The Husker Multi-Tenant Standard</h3>
              <ul>
                {STANDARD_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="mt-check" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-benefits" aria-labelledby="mt-benefits-title">
        <div className="mt-inner">
          <p className="eyebrow gold">Why Property Managers Choose Us</p>
          <h2 id="mt-benefits-title">Built-In Grills Are an Asset. Protect Them.</h2>
          <div className="mt-benefits-grid">
            {BENEFITS.map((b) => (
              <article key={b.title} className="mt-benefit-card">
                <span className="mt-benefit-icon" aria-hidden="true">
                  {b.icon}
                </span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mt-pricing" aria-labelledby="mt-pricing-title" id="pricing">
        <div className="mt-inner">
          <p className="eyebrow gold">Transparent Pricing</p>
          <h2 id="mt-pricing-title">Multi-Tenant Built-In Grill Cleaning</h2>

          <article className="mt-price-card">
            <div className="mt-price-card-top">
              <div>
                <span className="seasonal-label gold">Multi-Tenant &amp; HOA</span>
                <h3>Built-In Grill Deep Clean</h3>
                <p className="mt-price-sub">
                  For apartment complexes, townhome communities, and HOA common areas
                </p>
                <p className="price-main">
                  $349 <small>+ tax per grill</small>
                </p>
                <p className="mt-price-note">
                  No hidden fees. No surprise upcharges. Volume pricing available for
                  communities with 4+ units.
                </p>
              </div>
              <Link href={site.bookingPath} className="btn-prestige">
                Schedule Service
              </Link>
            </div>

            <ul className="mt-included">
              {INCLUDED.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.body}
                </li>
              ))}
            </ul>

            <div className="mt-repair-callout">
              <h4>Free Repair Estimate Included</h4>
              <p>
                When we clean your built-in grills, we inspect every component. If we find
                worn igniters, corroded burners, or failing valves, you&apos;ll receive a
                firm repair quote—no extra trip charge, no pressure. If we clean it, we can
                repair it.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="mt-process" aria-labelledby="mt-process-title">
        <div className="mt-inner">
          <p className="eyebrow gold">How We Work</p>
          <h2 id="mt-process-title">Minimal Disruption. Maximum Results.</h2>
          <ol className="mt-steps">
            {STEPS.map((step) => (
              <li key={step.n} className="mt-step">
                <span className="mt-step-n" aria-hidden="true">
                  {step.n}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-closing" aria-labelledby="mt-closing-title">
        <div className="mt-inner mt-closing-inner">
          <h2 id="mt-closing-title">Protect Your Property. Delight Your Residents.</h2>
          <p>
            Join the top property managers, HOAs, and estates across Nebraska who trust
            Husker Grill Cleaning for their built-in amenity grills.
          </p>
          <div className="mt-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Book a Consultation
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-closing-email">
            Or email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-faq" aria-labelledby="mt-faq-title">
        <div className="mt-inner mt-faq-inner">
          <h2 id="mt-faq-title">Frequently Asked Questions</h2>
          <div className="mt-faq-list">
            {FAQS.map((item) => (
              <details key={item.q} className="mt-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
