import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";
import {
  AREA_PRICING,
  type ServiceArea,
  serviceAreaPath,
} from "@/lib/service-areas";
import { site } from "@/lib/site";

const PROOF = [
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-59_vjcixc.png",
    alt: "Freestanding grill after professional deep cleaning",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-18_ibsizc.jpg",
    alt: "Smoker after professional deep cleaning",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-3_vnn8dx.jpg",
    alt: "Built-in outdoor kitchen after professional deep cleaning",
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-1_mm1iki.jpg",
    alt: "Built-in grill after professional deep cleaning",
  },
] as const;

function money(n: number) {
  return `$${n}`;
}

function img(src: string, w = 800) {
  return cloudinaryUrl(src, w);
}

export function buildAreaFaqs(area: ServiceArea) {
  const city = area.city;
  const st = area.region;
  const p = AREA_PRICING;

  return [
    {
      q: `How much is grill cleaning in ${city}, ${st}?`,
      a: `In ${city}, a one-time freestanding / pedestal deep clean is ${money(p.freestandingDeep.amount)} + tax. Built-in outdoor kitchen deep cleans are ${money(p.builtInDeep.amount)} + tax. Maintenance cleaning (for grills we have already deep cleaned) is ${money(p.maintenance.amount)} + tax. Semi-annual care is ${money(p.semiAnnual.amount)} per year + tax for two cleans. Additional grills on the same visit are ${money(p.multiGrillDiscount.amount)} off each after the first.`,
    },
    {
      q: `Do you offer mobile grill cleaning in ${city}, Nebraska?`,
      a: `Yes. Husker Grill Cleaning comes to your home in ${city} and the surrounding ${area.metro} metro. We bring steam equipment, degreasers, power, and parts knowledge on-site—no need to haul the grill to a shop.`,
    },
    {
      q: `What does professional grill cleaning in ${city} include?`,
      a: `Our flagship service is a 50-step deep clean: controlled disassembly, firebox and burner service, steam and degreasing, rinse, reassembly, leak checks where applicable, and re-seasoning. See the full process on our what-does-grill-cleaning-include page.`,
    },
    {
      q: `Can you clean built-in grills and outdoor kitchens in ${city}?`,
      a: `Yes. Built-in and outdoor kitchen deep cleans are ${money(p.builtInDeep.amount)} + tax. We work in place around stone, cabinets, and surrounding stainless—common on newer ${city} lots and patio kitchens.`,
    },
    {
      q: `Do I need to be home for grill cleaning in ${city}?`,
      a: `No. As long as we can reach the grill without going through the house and have a working outdoor outlet on the same side of the home, you can go about your day. We text progress photos and any mechanical findings.`,
    },
    {
      q: `Can you repair my grill in ${city} as well as clean it?`,
      a: `Yes for cleaning customers—if we clean it, we can repair it. Repair labor added to a scheduled deep clean is ${money(p.repairWithClean.amount)} + parts (freestanding and built-in). Stand-alone repair visits are ${money(p.repairStandalone.amount)} + parts when a technician is available. Extra labor is ${money(p.extraLabor.amount)} per 15 minutes.`,
    },
    {
      q: `How long does grill cleaning take in ${city}?`,
      a: `Most freestanding deep cleans take about 2–3 hours on site. Oversized estate rigs and complex built-ins can run longer. We schedule realistic windows so the job is finished properly—not rushed.`,
    },
    {
      q: `How do I book grill cleaning near me in ${city}?`,
      a: `Reserve online on our schedule page, call ${site.phoneDisplay}, or email photos to ${site.email}. No payment is due at booking—we email a secure invoice after service.`,
    },
  ] as const;
}

export function ServiceAreaPage({ area }: { area: ServiceArea }) {
  const faqs = buildAreaFaqs(area);
  const p = AREA_PRICING;
  const cityLine = `${area.city}, ${area.region}`;
  const path = serviceAreaPath(area);

  return (
    <div className="sa-page">
      {/* Hero */}
      <header className="sa-hero">
        <div className="sa-inner sa-hero-grid">
          <div>
            <p className="eyebrow gold">
              Service area · {area.metro} metro
            </p>
            <h1>
              Grill Cleaning in {area.city}, {area.region}
            </h1>
            <p className="sa-lede">
              Professional mobile grill cleaning and repair for homeowners in{" "}
              {cityLine}—50-step deep cleans, clear local pricing, and same-visit
              repair options without hauling your grill across town.
            </p>
            <div className="sa-hero-actions">
              <Link href={site.bookingPath} className="btn-prestige">
                Schedule in {area.city}
              </Link>
              <Link href="/pricing" className="btn-outline-light">
                Full price list
              </Link>
            </div>
            <ul className="sa-hero-stats" aria-label="At a glance pricing">
              <li>
                <strong>{money(p.freestandingDeep.amount)}</strong>
                <span>Freestanding deep clean</span>
              </li>
              <li>
                <strong>{money(p.builtInDeep.amount)}</strong>
                <span>Built-in deep clean</span>
              </li>
              <li>
                <strong>{money(p.repairWithClean.amount)}+</strong>
                <span>Repair with cleaning</span>
              </li>
            </ul>
          </div>
          <div className="sa-hero-media" aria-hidden="true">
            <img
              src={img(PROOF[0].src, 900)}
              alt=""
              width={900}
              height={700}
              className="sa-hero-main"
            />
            <img
              src={img(PROOF[2].src, 480)}
              alt=""
              width={480}
              height={360}
              className="sa-hero-side"
            />
          </div>
        </div>
      </header>

      {/* Local intro */}
      <section className="sa-intro" aria-labelledby="sa-intro-title">
        <div className="sa-inner sa-intro-grid">
          <div>
            <p className="eyebrow gold">Why {area.city} homeowners book us</p>
            <h2 id="sa-intro-title">
              Mobile deep cleaning built for {area.city} patios &amp; outdoor kitchens
            </h2>
          </div>
          <div className="sa-intro-copy">
            <p>{area.localBlurb}</p>
            <p>
              Grease polymerizes. Carbon builds in fireboxes. Igniters fail after seasons
              of neglect. In {area.city}, we restore freestanding Webers, Traegers,
              smokers, Blackstones, and built-in islands so heat spreads evenly and the
              cook feels right again.
            </p>
            <p>
              Prefer to compare options first? Review our{" "}
              <Link href="/what-does-grill-cleaning-include">50-step process</Link>,{" "}
              <Link href="/pricing">metro-wide pricing</Link>, and{" "}
              <Link href="/see-our-work">completed-work gallery</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* HOW MUCH — primary long-tail block */}
      <section className="sa-pricing" aria-labelledby="sa-pricing-title" id="pricing">
        <div className="sa-inner">
          <p className="eyebrow gold">Local pricing</p>
          <h2 id="sa-pricing-title">
            How much is grill cleaning in {area.city}, {area.region}?
          </h2>
          <p className="sa-section-lede">
            Transparent rates for {cityLine}. Same menu as the rest of our core service
            area—no surprise “trip fees” inside the {area.metro} metro for standard
            residential jobs.
          </p>

          <div className="sa-price-grid">
            <article className="sa-price-card sa-price-card--feature">
              <p className="sa-price-kicker">Most popular</p>
              <h3>Freestanding deep clean</h3>
              <p className="sa-price-amount">
                {money(p.freestandingDeep.amount)} <small>+ tax</small>
              </p>
              <p>
                Pedestal, cart, and freestanding gas grills, many smokers, and similar
                units—full 50-step teardown clean in {area.city}.
              </p>
              <Link href={site.bookingPath} className="btn-prestige">
                Book freestanding clean
              </Link>
            </article>

            <article className="sa-price-card">
              <p className="sa-price-kicker">Outdoor kitchens</p>
              <h3>Built-in deep clean</h3>
              <p className="sa-price-amount">
                {money(p.builtInDeep.amount)} <small>+ tax</small>
              </p>
              <p>
                Built-in grills and island kitchens cleaned in place—common on larger{" "}
                {area.city} lots and newer patio builds.
              </p>
            </article>

            <article className="sa-price-card">
              <p className="sa-price-kicker">Already a customer</p>
              <h3>Maintenance cleaning</h3>
              <p className="sa-price-amount">
                {money(p.maintenance.amount)} <small>+ tax</small>
              </p>
              <p>
                Touch-up cleaning only after we have completed a prior deep clean—not a
                first-visit substitute.
              </p>
            </article>

            <article className="sa-price-card">
              <p className="sa-price-kicker">Two visits / year</p>
              <h3>Semi-annual care</h3>
              <p className="sa-price-amount">
                {money(p.semiAnnual.amount)} <small>/ year + tax</small>
              </p>
              <p>
                Stay ahead of grease buildup with two scheduled cleans across the season
                for {area.city} homes that cook often.
              </p>
            </article>
          </div>

          <div className="sa-price-extras">
            <div>
              <strong>{money(p.multiGrillDiscount.amount)} off</strong>
              <span>each additional grill on the same visit (first grill full price)</span>
            </div>
            <div>
              <strong>{money(p.repairWithClean.amount)} + parts</strong>
              <span>repair labor when added to a deep clean in {area.city}</span>
            </div>
            <div>
              <strong>{money(p.repairStandalone.amount)} + parts</strong>
              <span>stand-alone repair visit when a technician is available</span>
            </div>
          </div>

          <p className="sa-price-footnote">
            All prices exclude applicable Nebraska sales tax (Tax ID {site.taxId}). See{" "}
            <Link href="/pricing">full pricing details</Link> for dual-grill examples and
            program notes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="sa-services" aria-labelledby="sa-services-title">
        <div className="sa-inner">
          <p className="eyebrow gold">Services in {area.city}</p>
          <h2 id="sa-services-title">
            What we clean &amp; repair for {area.city} homeowners
          </h2>
          <div className="sa-service-grid">
            <article>
              <h3>50-step deep clean</h3>
              <p>
                Full disassembly cleaning for gas, charcoal, pellet, smokers, and many
                flat-tops—the right reset when the grill has gone more than a season (or
                several) without real attention.
              </p>
              <Link href="/what-does-grill-cleaning-include">Process details →</Link>
            </article>
            <article>
              <h3>Built-in &amp; outdoor kitchens</h3>
              <p>
                Island grills and surrounding stainless cleaned carefully in place—ideal
                for {area.city} outdoor living spaces that were built to stay put.
              </p>
              <Link href="/pricing">Built-in pricing →</Link>
            </article>
            <article>
              <h3>Grill repair</h3>
              <p>
                Ignition, low flame, regulators, burners, and many Weber / Traeger issues.
                Best value: repair during the deep clean for {money(p.repairWithClean.amount)}{" "}
                + parts.
              </p>
              <Link href="/grill-repairs">Repair guide →</Link>
            </article>
            <article>
              <h3>Multi-grill homes</h3>
              <p>
                Patio + smoker + griddle combos are common. First unit is full price; each
                additional grill on the same visit is {money(p.multiGrillDiscount.amount)}{" "}
                off.
              </p>
              <Link href={site.bookingPath}>Schedule multi-grill →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="sa-proof" aria-label="Completed grill cleaning results">
        <div className="sa-proof-track">
          {PROOF.map((shot) => (
            <figure key={shot.src}>
              <img
                src={img(shot.src, 700)}
                alt={shot.alt}
                width={700}
                height={480}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <div className="sa-inner sa-proof-link">
          <Link href="/see-our-work">See 100+ completed jobs →</Link>
        </div>
      </section>

      {/* Nearby */}
      <section className="sa-nearby" aria-labelledby="sa-nearby-title">
        <div className="sa-inner">
          <p className="eyebrow gold">Around {area.city}</p>
          <h2 id="sa-nearby-title">Neighborhoods &amp; nearby communities we serve</h2>
          <p className="sa-section-lede">
            Based in the {area.metro} metro, we regularly clean grills in {area.city} and
            adjacent areas. Don&apos;t see your pocket neighborhood? We still may route to
            you—just ask.
          </p>
          <div className="sa-tags">
            <span className="sa-tag sa-tag--active">{area.city}</span>
            {area.nearby.map((n) => (
              <span key={n} className="sa-tag">
                {n}
              </span>
            ))}
          </div>
          {area.metro === "Omaha" ? (
            <p className="sa-nearby-note">
              Also see our{" "}
              <Link href="/professional-grill-cleaning-repair-services-in-omaha-nebraska">
                Omaha metro grill cleaning &amp; repair overview
              </Link>
              .
            </p>
          ) : null}
        </div>
      </section>

      {/* How it works */}
      <section className="sa-steps" aria-labelledby="sa-steps-title">
        <div className="sa-inner">
          <p className="eyebrow gold">Simple process</p>
          <h2 id="sa-steps-title">How grill cleaning works in {area.city}</h2>
          <ol className="sa-steps-grid">
            <li>
              <span className="sa-step-n">01</span>
              <div>
                <h3>Book online or call</h3>
                <p>
                  Pick a time on our schedule page or call {site.phoneDisplay}. Send photos
                  if you want help choosing deep clean vs. repair.
                </p>
              </div>
            </li>
            <li>
              <span className="sa-step-n">02</span>
              <div>
                <h3>Leave grill access</h3>
                <p>
                  Gate unlocked, path clear, outlet on the same side of the house. Nobody
                  needs to be home in {area.city}.
                </p>
              </div>
            </li>
            <li>
              <span className="sa-step-n">03</span>
              <div>
                <h3>We deep clean on-site</h3>
                <p>
                  50-step process with steam, degreasing, and re-season. We document issues
                  and can often repair in the same visit.
                </p>
              </div>
            </li>
            <li>
              <span className="sa-step-n">04</span>
              <div>
                <h3>Pay after service</h3>
                <p>
                  Secure invoice by email when the work is done—no payment due when you
                  book.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="sa-faq" aria-labelledby="sa-faq-title" id="faq">
        <div className="sa-inner">
          <p className="eyebrow gold">{area.city} FAQ</p>
          <h2 id="sa-faq-title">
            Common questions about grill cleaning in {cityLine}
          </h2>
          <div className="sa-faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="sa-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="sa-faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="sa-closing" aria-labelledby="sa-closing-title">
        <div className="sa-inner sa-closing-inner">
          <h2 id="sa-closing-title">
            Ready to schedule grill cleaning in {area.city}?
          </h2>
          <p>
            Get freestanding deep cleans from {money(p.freestandingDeep.amount)} and
            built-ins from {money(p.builtInDeep.amount)}. Mobile service across {cityLine}{" "}
            and the {area.metro} metro.
          </p>
          <div className="sa-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Now
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <p className="sa-closing-meta">
            <Link href={path}>huskergrillcleaning.com{path}</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
