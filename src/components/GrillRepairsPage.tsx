import Link from "next/link";
import { site } from "@/lib/site";

/** Brands we take stand-alone when a tech is free; full electronics on Weber/Traeger. */
export const PRIORITY_REPAIR_BRANDS = [
  "Weber",
  "Traeger",
  "Green Mountain",
  "Yoder",
  "Memphis",
  "Bull",
  "Napoleon",
] as const;

const HERO_STATS = [
  { value: "$50+", label: "Repair with cleaning" },
  { value: "$149", label: "Stand-alone visit" },
  { value: "Full", label: "Weber & Traeger service" },
] as const;

const SERVICE_CHIPS = [
  "Weber Genesis Repair",
  "Weber Summit Repair",
  "Traeger Repair",
  "Grill Will Not Light",
  "Low Flame / No Heat",
  "Regulator Replacement",
] as const;

const PRICE_CARDS = [
  {
    icon: "🧼",
    price: "$50+",
    title: "Repair with Deep Clean",
    body: "Add repair labor to a scheduled deep clean for $50 + parts—same add-on for freestanding and built-in grills when completed in the same visit.",
    badge: "Best Value",
  },
  {
    icon: "🔧",
    price: "$149",
    title: "Stand-Alone Service Visit",
    body: "Travel, diagnosis, and up to 30 minutes of straightforward on-site repair labor when a technician is available. Parts additional.",
    badge: null,
  },
  {
    icon: "🚚",
    price: "$99+",
    title: "Return Installation",
    body: "If a non-stock part must be ordered, return installation starts at $99 plus parts. We quote parts and the return visit before moving forward.",
    badge: null,
  },
] as const;

const PRICE_ROWS = [
  { label: "Repair added to scheduled deep clean", value: "$50 + parts" },
  { label: "Stand-alone repair visit (when tech available)", value: "$149 + parts" },
  { label: "Additional repair labor", value: "$35 / 15 min" },
  { label: "Return installation when a part must be sourced", value: "from $99 + parts" },
  { label: "Other-brand repair evaluation", value: "by quote" },
  { label: "Travel within core service area", value: "included" },
  { label: "Travel outside core service area", value: "quoted" },
] as const;

const WEBER_TRAEGER_ITEMS = [
  {
    title: "Weber gas grills",
    body: "Igniters, burners, regulator/hose assemblies, valves, manifolds, flavorizer bars, grates, heat distribution issues, low flame, and grills that will not light.",
  },
  {
    title: "Traeger pellet grills",
    body: "Hot rods, auger motors, auger jams, fans, firepots, RTD temperature probes, wiring, control boards, digital displays, and pellet-feed failures.",
  },
  {
    title: "Same-visit restoration",
    body: "Cleaning-related performance problems, blocked burner ports, grease buildup, airflow restriction, corrosion, and component access issues.",
  },
] as const;

const OTHER_BRAND_ITEMS = [
  {
    title: "Usually available",
    body: "Regulator and hose replacement, simple ignition issues, burner problems, low-flame diagnosis, cleaning-related performance issues, and obvious mechanical repairs—especially during a deep clean.",
  },
  {
    title: "Quoted separately",
    body: "Obscure or discontinued parts, non-stock brand-specific components, complex built-in disassembly, and return installation visits.",
  },
  {
    title: "Generally not offered",
    body: "Non-Weber/non-Traeger control boards, digital displays, Wi-Fi or app troubleshooting, firmware issues, and uncertain electronic diagnosis.",
  },
] as const;

const PREFERRED_MODELS = [
  "Weber Genesis",
  "Weber Summit",
  "Weber Spirit",
  "Weber Q",
  "Traeger Pro",
  "Traeger Ironwood",
  "Traeger Timberline",
  "Traeger Woodridge",
] as const;

const OTHER_BRANDS = [
  "Napoleon",
  "Camp Chef",
  "Pit Boss",
  "Green Mountain",
  "Yoder",
  "Memphis",
  "Bull",
  "Members Mark",
  "Blackstone",
  "Char-Broil",
  "Nexgrill",
  "DCS",
  "Fire Magic",
  "Lynx",
  "Wolf",
] as const;

export const REPAIR_FAQS = [
  {
    section: "Grill will not light / ignition problems",
    items: [
      {
        q: "Why won't my Weber grill light?",
        a: "A Weber grill that will not light may have a dead igniter battery, failed ignition module, corroded electrode, broken wire, blocked burner port, bad regulator, restricted hose, or gas-flow problem. On older Weber Genesis, Summit, and Spirit grills, the issue is often a combination of worn ignition parts and buildup around the burners. We service Weber igniters, burners, regulator and hose assemblies, flavorizer bars, valves, manifolds, and common performance problems. If your Weber grill sparks but will not light, lights only with a match, or will not get hot, we can usually diagnose the issue during the first visit.",
      },
      {
        q: "Why does my grill spark but not light?",
        a: "If your grill sparks but will not light, the spark may not be reaching the burner, the burner may be blocked, or the gas flow may be restricted. Common causes include a misaligned electrode, cracked ceramic igniter, corroded contact point, brittle wire insulation, grease buildup, spider webs in the venturi tubes, or a regulator stuck in bypass mode. If you smell gas but the grill does not light, stop and let the grill air out before trying again. Delayed ignition can cause a dangerous flash. A repair visit checks ignition, gas flow, burner condition, and whether cleaning is needed before parts are replaced.",
      },
      {
        q: "Why does my grill light but not get hot?",
        a: 'Low heat is one of the most common grill repair calls. If a grill lights but will not get hot, the issue may be a propane regulator in bypass mode, a failing regulator, a restricted hose, blocked burner ports, spider webs inside venturi tubes, or heavy grease and carbon buildup interfering with airflow. Many customers describe this as "my grill will not get above 250 degrees" or "my grill has a very small flame." We offer low-flame and no-heat diagnosis, and regulator replacement is often completed during the first visit when the issue is straightforward.',
      },
    ],
  },
  {
    section: "Weber & Traeger repair",
    items: [
      {
        q: "Do you repair Weber grills in Omaha and Lincoln?",
        a: "Yes. Weber is one of our primary repair brands. We repair Weber Genesis, Weber Summit, Weber Spirit, and Weber Q grills throughout Omaha, Lincoln, Council Bluffs, Elkhorn, Ashland, and nearby areas. Common Weber repairs include igniter replacement, burner replacement, regulator and hose replacement, manifold and valve issues, flavorizer bars, grates, lid thermometers, heat distribution problems, low flame, and grills that will not light.",
      },
      {
        q: "Do you repair Traeger pellet grills?",
        a: "Yes. Traeger is one of our primary repair brands. We repair Traeger hot rods, auger motors, jammed augers, induction fans, firepots, RTD temperature probes, wiring, control boards, digital displays, and pellet-feed problems. If your Traeger will not ignite, will not feed pellets, trips an error, will not hold temperature, or shuts down during a cook, we can diagnose both the mechanical and electrical side of the system. Cleaning may also be recommended if grease, ash, or pellet debris is contributing to the failure.",
      },
      {
        q: "Can you replace Traeger control boards and digital displays?",
        a: "Yes. We service Traeger control boards and digital displays because Traeger parts are common, affordable, and familiar from repeated field repairs. We also check the related components—hot rod, fan, auger motor, RTD probe, wiring, and firepot—so the repair is not based on a blind guess. This full electronic repair offering applies to Weber and Traeger. For other brands, control boards, digital displays, Wi-Fi modules, app problems, and circuit-board diagnosis are generally not part of our standard repair service.",
      },
    ],
  },
  {
    section: "Pricing, cleaning, and repair policy",
    items: [
      {
        q: "Should I schedule cleaning and repair together?",
        a: "Usually, yes—especially if the grill is more than a few seasons old or has heavy buildup. Many ignition, low-flame, flare-up, and heat problems are caused or worsened by grease, blocked ports, debris, corrosion, and restricted airflow. When repair is performed during a deep clean, the grill is already open and accessible, which saves labor and usually gives a better result. That is why repair labor added to a scheduled deep clean is $50 + parts, compared with a $149 stand-alone repair visit when a technician is available.",
      },
      {
        q: "Do you repair non-Weber or non-Traeger grills?",
        a: `Yes for cleaning customers—if we clean it, we can repair it. For stand-alone work when a technician is free, we prioritize ${PRIORITY_REPAIR_BRANDS.join(", ")}. For other brands, we may handle simple mechanical issues, low-flame problems, regulator and hose replacement, burner issues, basic ignition problems, and cleaning-related performance problems—often best scheduled with a deep clean. We generally do not take on non-Weber/non-Traeger control boards, digital displays, Wi-Fi/app problems, or uncertain electronics jobs unless quoted individually.`,
      },
      {
        q: "Do you charge a return visit if a part has to be ordered?",
        a: "Yes. If a part is not on the truck and a return visit is required, return installation starts at $99 plus parts. We quote the part and return installation before moving forward. This policy keeps cleaning-attached repairs and common Weber/Traeger repairs priced fairly while still accepting repairs that require ordering a specific part.",
      },
      {
        q: "Can a dirty grill prevent accurate diagnosis?",
        a: "Yes. Heavy grease, carbon, ash, rodent debris, blocked burners, and corrosion can hide or mimic repair problems. In some cases, a grill must be cleaned before a reliable diagnosis can be made. If your grill is heavily used and has not been deep cleaned, the most cost-effective option is often a deep clean with same-visit repair. That restores access, airflow, ignition reliability, and heat performance while allowing us to identify any parts that truly need replacement.",
      },
    ],
  },
] as const;

export function GrillRepairsPage() {
  return (
    <div className="rep-page">
      {/* Hero */}
      <section className="rep-hero" aria-labelledby="rep-hero-title">
        <div className="rep-inner rep-hero-inner">
          <p className="eyebrow gold">
            Weber Repair · Traeger Repair · Grill Will Not Light
          </p>
          <h1 id="rep-hero-title">
            Weber &amp; Traeger Grill Repair in Omaha and Lincoln
          </h1>
          <p className="rep-lede">
            Full-service Weber gas grill repair and Traeger pellet grill repair, plus common
            &ldquo;grill will not light,&rdquo; low-flame, ignition, regulator, burner, and
            performance issues. Best value: combine repair with a deep clean while the grill
            is already open and accessible.
          </p>
          <div className="rep-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Repair
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <ul className="rep-hero-stats">
            {HERO_STATS.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best value */}
      <section className="rep-value" aria-labelledby="rep-value-title">
        <div className="rep-inner rep-value-inner">
          <p className="eyebrow gold">Best Value</p>
          <h2 id="rep-value-title">Clean It and Fix It in One Visit</h2>
          <p>
            Many grill repair calls are really maintenance problems: grease buildup, blocked
            burner ports, restricted airflow, corroded igniters, low flame, or a grill that
            will not light after years of use. When repair is paired with a deep clean, the
            grill is already disassembled, safer to diagnose, and easier to restore.
          </p>
          <p className="rep-value-price">
            Repair labor added to a scheduled deep clean is{" "}
            <strong>$50 + parts</strong>—same rate for freestanding and built-in grills.
          </p>
          <div className="rep-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Service
            </Link>
            <Link href="/pricing" className="btn-outline-light">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="rep-specialists" aria-labelledby="rep-specialists-title">
        <div className="rep-inner">
          <p className="eyebrow gold">Specialists</p>
          <h2 id="rep-specialists-title">Grill Cleaning and Repair Specialists</h2>
          <p className="rep-section-lede">
            Husker Grill Cleaning is built around outdoor cooking equipment—not refrigerators,
            washers, or general appliance work. We focus on grill cleaning, performance
            restoration, gas-flow problems, ignition failures, Weber grill repair, and Traeger
            pellet grill repair throughout Omaha, Lincoln, Council Bluffs, Elkhorn, Ashland,
            and nearby communities.
          </p>
          <p className="rep-section-lede">
            Our repair model is intentionally focused. We offer full-service repair on Weber
            and Traeger because we service those brands often, understand their common failure
            patterns, and stock or quickly source many of the parts they need.{" "}
            <strong>If we clean it, we can repair it</strong> for cleaning customers across
            brands. When a technician is free, we may also take stand-alone jobs on{" "}
            {PRIORITY_REPAIR_BRANDS.join(", ")}.
          </p>
          <ul className="rep-chips">
            {SERVICE_CHIPS.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
          <div className="rep-cert-row">
            <article className="rep-cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/agsi-cert.webp"
                alt="AGSI Founding Cohort badge — Certified Grill Cleaning Technician"
                width={120}
                height={120}
                loading="eager"
                decoding="async"
              />
              <div>
                <strong>AGSI Founding Cohort Member</strong>
                <span>Professional grill cleaning and service standards</span>
              </div>
            </article>
            <article className="rep-cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/agsi-certified.svg"
                alt="This business employs AGSI certified technicians"
                width={120}
                height={120}
                loading="eager"
                decoding="async"
              />
              <div>
                <strong>Certified Technicians On Staff</strong>
                <span>Focused on grill cleaning, diagnostics, and repair</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="rep-pricing" aria-labelledby="rep-pricing-title" id="pricing">
        <div className="rep-inner">
          <p className="eyebrow gold">Transparent Rates</p>
          <h2 id="rep-pricing-title">Grill Repair Pricing in Omaha &amp; Lincoln</h2>
          <p className="rep-section-lede">
            Pricing is designed around how grills actually fail in the field. Weber and
            Traeger are our primary full-service stand-alone repair brands. Other brands are
            best handled during a deep clean, or quoted when a technician is available.
          </p>

          <div className="rep-price-cards">
            {PRICE_CARDS.map((card) => (
              <article key={card.title} className="rep-price-card">
                {card.badge ? <span className="rep-price-badge">{card.badge}</span> : null}
                <span className="rep-price-icon" aria-hidden="true">
                  {card.icon}
                </span>
                <p className="rep-price-amount">{card.price}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <article className="rep-policy-card">
            <h3>Parts and Return-Visit Policy</h3>
            <p>
              We stock and source many common Weber and Traeger parts, but no service company
              can carry every part for every grill brand. If your repair requires a non-stock
              part, we quote the part and return installation before moving forward. Return
              trips are billed separately so we can keep pricing fair for cleaning customers
              and same-visit repairs.
            </p>
          </article>

          <div className="rep-price-table-wrap">
            <h3>Full Pricing Details</h3>
            <p>
              For the lowest total cost, schedule repair with a deep clean. If your grill is
              heavily soiled, cleaning may be required before a reliable diagnosis can be
              made.
            </p>
            <dl className="rep-price-table">
              {PRICE_ROWS.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="rep-price-note">
              Core service areas include Lincoln, Ashland, Omaha, Elkhorn, and Council Bluffs.
              Parts are additional. Complex repairs are quoted before work continues.
            </p>
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="rep-boundaries" aria-labelledby="rep-boundaries-title">
        <div className="rep-inner">
          <p className="eyebrow gold">Scope of Service</p>
          <h2 id="rep-boundaries-title">What We Repair — and Where We Set Boundaries</h2>
          <p className="rep-section-lede">
            We are not a general repair company for every outdoor appliance ever made. We
            focus on the repairs we can perform efficiently, safely, and repeatedly.
          </p>

          <div className="rep-boundary-grid">
            <article className="rep-boundary-card is-full">
              <h3>
                <span aria-hidden="true">✓</span> Full-Service Weber &amp; Traeger Repair
              </h3>
              <ul>
                {WEBER_TRAEGER_ITEMS.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.body}
                  </li>
                ))}
              </ul>
              <p className="rep-boundary-note">
                <strong>Preferred repair brands:</strong> Weber and Traeger are the brands we
                repair most often and the best fit for stand-alone repair appointments.
              </p>
            </article>

            <article className="rep-boundary-card">
              <h3>
                <span aria-hidden="true">→</span> Limited Repairs on Other Brands
              </h3>
              <ul>
                {OTHER_BRAND_ITEMS.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.body}
                  </li>
                ))}
              </ul>
              <p className="rep-boundary-note">
                <strong>Safety boundary:</strong> We do not install or repair gas lines before
                the shut-off valve, nor do we perform household 110V/220V electrical work.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="rep-brands" aria-labelledby="rep-brands-title">
        <div className="rep-inner">
          <p className="eyebrow gold">Service Area Brands</p>
          <h2 id="rep-brands-title">
            Weber &amp; Traeger Repair Specialists Serving Omaha, Lincoln &amp; Council
            Bluffs
          </h2>
          <p className="rep-section-lede">
            Full-service repair for Weber and Traeger. Cleaning plus limited repair or
            performance restoration for other brands—especially for cleaning customers.
          </p>

          <h3 className="rep-brand-heading">Preferred full-service repair brands</h3>
          <ul className="rep-brand-grid">
            {PREFERRED_MODELS.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>

          <h3 className="rep-brand-heading">
            Other brands: cleaning + limited repairs by quote
          </h3>
          <ul className="rep-brand-grid is-muted">
            {OTHER_BRANDS.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="rep-faq" aria-labelledby="rep-faq-title" id="faq">
        <div className="rep-inner">
          <p className="eyebrow gold">FAQ</p>
          <h2 id="rep-faq-title">
            Grill Repair FAQ: Weber, Traeger, and Grills That Will Not Light
          </h2>
          <p className="rep-section-lede">
            Common symptoms we diagnose in Omaha and Lincoln include a Weber grill that will
            not light, a Traeger that will not ignite, low flame, no heat, sparking without
            ignition, auger jams, failed hot rods, and dirty grills that have stopped
            performing.
          </p>

          {REPAIR_FAQS.map((group) => (
            <div key={group.section} className="rep-faq-group">
              <h3 className="rep-faq-section">{group.section}</h3>
              <div className="rep-faq-list">
                {group.items.map((item) => (
                  <details key={item.q} className="rep-faq-item">
                    <summary>
                      <span>{item.q}</span>
                      <span className="rep-faq-toggle" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="rep-closing" aria-labelledby="rep-closing-title">
        <div className="rep-inner rep-closing-inner">
          <h2 id="rep-closing-title">
            Need Weber Repair, Traeger Repair, or Help with a Grill That Will Not Light?
          </h2>
          <p>
            Schedule grill repair in Omaha or Lincoln—or book a deep clean and add repair
            labor while we&apos;re already on site. Call{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a> or book online.
          </p>
          <div className="rep-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Grill Repair
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <p className="rep-closing-links">
            Also see <Link href="/pricing">pricing</Link>,{" "}
            <Link href="/see-our-work">completed work</Link>, and{" "}
            <Link href="/about">about our AGSI-certified team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
