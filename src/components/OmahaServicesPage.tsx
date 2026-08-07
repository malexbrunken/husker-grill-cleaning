import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { neighborhoodServiceAreaLinks } from "@/lib/service-areas";
import { omahaNeighborhoods, site } from "@/lib/site";

const SHOTS = {
  heroMain:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-59_vjcixc.png",
  heroSide:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-18_ibsizc.jpg",
  builtIn:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-3_vnn8dx.jpg",
  strip: [
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-59_vjcixc.png",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-18_ibsizc.jpg",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-3_vnn8dx.jpg",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-1_mm1iki.jpg",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504595/HG-40_mp8awp.jpg",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504589/HG-12_hswn2j.png",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-22_qhiceh.png",
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504592/HG-30_mgyn2x.png",
  ],
} as const;

function img(src: string, w = 900) {
  return cloudinaryUrl(src, w);
}

const SERVICES = [
  {
    title: "50-Step Deep Clean",
    body: "Full teardown deep cleaning for freestanding and built-in grills—the flagship service for Omaha homeowners who want real results, not a surface wipe.",
    href: "/what-does-grill-cleaning-include",
    cta: "See the process",
  },
  {
    title: "Maintenance Cleaning",
    body: "A lighter second-visit touch-up for grills we have already deep cleaned—ideal for keeping peak-season performance between major resets.",
    href: "/pricing",
    cta: "View pricing",
  },
  {
    title: "Grill Repair",
    body: "If we clean it, we can repair it. Add repair labor to a deep clean for $50 + parts, or book a stand-alone visit when a technician is available.",
    href: "/grill-repairs",
    cta: "Repair details",
  },
  {
    title: "Multi-Tenant Properties",
    body: "Apartment and townhome communities across the Omaha metro—scheduled bulk cleaning with clear reporting for property managers.",
    href: "/multi-tenant-apartment-townhome-grill-cleaning",
    cta: "Multi-tenant info",
  },
] as const;

const WHY = [
  {
    title: "Mobile service to your patio",
    body: "We come fully equipped. No trailer-away wait, no shop drop-off, and nobody needs to be home if we can reach the grill.",
  },
  {
    title: "Results-first chemistry + steam",
    body: "Citrus degreasers, high-temp steam, and selective food-contact-safe chemistry when grease has polymerized—then a thorough rinse and re-season.",
  },
  {
    title: "AGSI-trained process",
    body: "A disciplined 50-step workflow built for safety, thoroughness, and grills that cook evenly again—not a quick brush-and-spray.",
  },
  {
    title: "Local Omaha neighborhoods",
    body: "Regular routes through Elkhorn, Gretna, The Ridges, Sanctuary Ridge, Regency, Linden Estates, and communities across the metro.",
  },
] as const;

const BRANDS = [
  "Weber",
  "Traeger",
  "Napoleon",
  "Bull",
  "Lynx",
  "Alfresco",
  "Twin Eagles",
  "Blackstone",
  "Green Mountain",
  "Yoder",
  "Memphis",
  "Built-in outdoor kitchens",
] as const;

export const OMAHA_FAQS = [
  {
    q: "Do you provide professional grill cleaning in Omaha, Nebraska?",
    a: "Yes. Husker Grill Cleaning is a mobile grill cleaning and repair company serving the Omaha metro and surrounding communities. We deep clean freestanding and built-in grills on-site at your home or property.",
  },
  {
    q: "Which Omaha neighborhoods do you serve?",
    a: `We regularly service ${omahaNeighborhoods.join(", ")}. Don't see your neighborhood? Email ${site.email}—we handle custom estates throughout the region.`,
  },
  {
    q: "What grill cleaning services are available in Omaha?",
    a: "Our primary service is a 50-step deep clean. We also offer maintenance cleaning for previously deep-cleaned grills, same-visit and stand-alone repairs, and multi-tenant / apartment community cleaning.",
  },
  {
    q: "Can you repair my grill in Omaha as well as clean it?",
    a: "Yes for cleaning customers—if we clean it, we can repair it. Repair labor added to a scheduled deep clean is $50 + parts for freestanding and built-in units. Stand-alone repair visits are $149 + parts when a technician is available. We prioritize Weber, Traeger, Green Mountain, Yoder, Memphis, Bull, and Napoleon for stand-alone work.",
  },
  {
    q: "Do I need to be home for Omaha grill cleaning?",
    a: "No. As long as we can reach the grill without going through the house and have access to a working outdoor outlet on the same side of the home, you can go about your day.",
  },
  {
    q: "How do I schedule grill cleaning in Omaha?",
    a: `Book online through our schedule page, call ${site.phoneDisplay}, or email photos to ${site.email}. No payment is due at booking—we invoice after service.`,
  },
] as const;

export function OmahaServicesPage() {
  return (
    <div className="oma-page">
      <header className="oma-hero">
        <div className="oma-inner oma-hero-grid">
          <div className="oma-hero-copy">
            <p className="eyebrow gold">Omaha, Nebraska</p>
            <h1>Professional Grill Cleaning &amp; Repair Services in Omaha</h1>
            <p className="oma-lede">
              Mobile deep cleaning, maintenance, and grill repair for homeowners and
              multi-tenant properties across the Omaha metro—delivered on-site with a
              results-first 50-step process.
            </p>
            <div className="oma-hero-actions">
              <Link href={site.bookingPath} className="btn-prestige">
                Schedule Omaha Service
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
                Call {site.phoneDisplay}
              </a>
            </div>
            <ul className="oma-hero-perks" aria-label="Service highlights">
              <li>Freestanding &amp; built-in</li>
              <li>No one needs to be home</li>
              <li>Pay after service</li>
            </ul>
          </div>
          <div className="oma-hero-media" aria-hidden="true">
            <img
              src={img(SHOTS.heroMain, 900)}
              alt=""
              width={900}
              height={700}
              className="oma-hero-main"
            />
            <img
              src={img(SHOTS.heroSide, 480)}
              alt=""
              width={480}
              height={360}
              className="oma-hero-side"
            />
          </div>
        </div>
      </header>

      <section className="oma-intro" aria-labelledby="oma-intro-title">
        <div className="oma-inner oma-intro-grid">
          <div>
            <p className="eyebrow gold">Local mobile service</p>
            <h2 id="oma-intro-title">
              Omaha&apos;s grill cleaning specialists for real outdoor kitchens
            </h2>
          </div>
          <div className="oma-intro-copy">
            <p>
              Grease does not stay soft forever. In Omaha&apos;s freeze–thaw seasons and
              summer heat, polymerized grease and carbonized residue choke burners, kill
              even heat, and turn a favorite patio grill into a frustrating chore.
            </p>
            <p>
              Husker Grill Cleaning brings a full mobile setup to your driveway or
              courtyard. We disassemble, steam, degrease, rinse, reassemble, and re-season
              so your Weber, Traeger, built-in island, or flat-top cooks the way it should
              again.
            </p>
            <p>
              Whether you are in Elkhorn, Gretna, west Omaha lake communities, or a
              managed multi-family property, we schedule around access—not around hauling
              your grill to a shop.
            </p>
          </div>
        </div>
      </section>

      <section className="oma-services" aria-labelledby="oma-services-title">
        <div className="oma-inner">
          <p className="eyebrow gold">What we offer in Omaha</p>
          <h2 id="oma-services-title">Cleaning and repair services for every grill type</h2>
          <p className="oma-section-lede">
            From a one-time deep reset to multi-property programs, every visit is built
            around access, thoroughness, and honest mechanical findings.
          </p>
          <div className="oma-service-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="oma-service-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href={s.href}>{s.cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oma-strip" aria-label="Completed grill cleaning work">
        <div className="oma-strip-track">
          {[...SHOTS.strip, ...SHOTS.strip.slice(0, 4)].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={img(src, 640)}
              alt=""
              width={640}
              height={420}
              loading={i > 2 ? "lazy" : undefined}
            />
          ))}
        </div>
        <div className="oma-inner oma-strip-caption">
          <Link href="/see-our-work">Browse 100+ completed-work photos →</Link>
        </div>
      </section>

      <section className="oma-areas" aria-labelledby="oma-areas-title">
        <div className="oma-inner">
          <p className="eyebrow gold">Service territory</p>
          <h2 id="oma-areas-title">Omaha metro neighborhoods we serve</h2>
          <p className="oma-section-lede">
            Premium grill restoration across the communities homeowners and managers ask
            for most—plus custom estates by request.
          </p>
          <div className="oma-tags">
            {omahaNeighborhoods.map((n) => {
              const href = neighborhoodServiceAreaLinks[n];
              return href ? (
                <Link key={n} href={href} className="oma-tag oma-tag--link">
                  {n}
                </Link>
              ) : (
                <span key={n} className="oma-tag">
                  {n}
                </span>
              );
            })}
          </div>
          <p className="oma-areas-note">
            Also serving nearby communities and the Lincoln metro.{" "}
            <a href={`mailto:${site.email}`}>Email us</a> if you are outside the core list.
          </p>
        </div>
      </section>

      <section className="oma-why" aria-labelledby="oma-why-title">
        <div className="oma-inner">
          <p className="eyebrow gold">Why homeowners choose us</p>
          <h2 id="oma-why-title">Built for Omaha patios—not a generic cleaning crew</h2>
          <div className="oma-why-grid">
            {WHY.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oma-brands" aria-labelledby="oma-brands-title">
        <div className="oma-inner oma-brands-inner">
          <div>
            <p className="eyebrow gold">Equipment we service</p>
            <h2 id="oma-brands-title">Gas, pellet, charcoal, flat-tops, and built-ins</h2>
            <p>
              From freestanding Weber Genesis and Traeger pellet grills to full outdoor
              kitchen islands, we clean the units Omaha homeowners actually own—and repair
              many of them during the same visit.
            </p>
            <div className="oma-brand-actions">
              <Link href="/pricing" className="btn-outline-light">
                See Pricing
              </Link>
              <Link href="/grill-repairs" className="btn-outline-light">
                Grill Repairs
              </Link>
            </div>
          </div>
          <ul className="oma-brand-list">
            {BRANDS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oma-repair" aria-labelledby="oma-repair-title">
        <div className="oma-inner oma-repair-grid">
          <div>
            <p className="eyebrow gold">Cleaning customers first</p>
            <h2 id="oma-repair-title">
              Grill repair in Omaha—when the clean alone is not enough
            </h2>
            <p>
              Low flame, no light, uneven heat, and stubborn flare-ups are often cleaning
              problems first. When parts or labor are needed, we quote clearly and prioritize
              completing repair during the deep clean whenever possible.
            </p>
            <ul className="oma-price-points">
              <li>
                <strong>$50 + parts</strong>
                <span>Repair labor with a scheduled deep clean</span>
              </li>
              <li>
                <strong>$149 + parts</strong>
                <span>Stand-alone visit when a tech is available</span>
              </li>
              <li>
                <strong>$35 / 15 min</strong>
                <span>Additional repair labor beyond the included window</span>
              </li>
            </ul>
            <Link href="/grill-repairs" className="btn-prestige">
              Full Repair Guide
            </Link>
          </div>
          <div className="oma-repair-card">
            <div className="oma-repair-photo">
              <img
                src={img(SHOTS.builtIn, 700)}
                alt="Deep-cleaned built-in outdoor kitchen grill"
                width={700}
                height={480}
                loading="lazy"
              />
            </div>
            <h3>Common Omaha repair requests</h3>
            <ul>
              <li>Grill will not light / weak ignition</li>
              <li>Low flame or no heat</li>
              <li>Regulator and hose replacement</li>
              <li>Burner and flavorizer issues</li>
              <li>Traeger hot rod, auger, and fan problems</li>
              <li>Weber Genesis and Summit service</li>
            </ul>
            <p>
              Priority stand-alone brands include Weber, Traeger, Green Mountain, Yoder,
              Memphis, Bull, and Napoleon.
            </p>
          </div>
        </div>
      </section>

      <section className="oma-faq" aria-labelledby="oma-faq-title" id="faq">
        <div className="oma-inner">
          <p className="eyebrow gold">Omaha FAQ</p>
          <h2 id="oma-faq-title">Questions about grill cleaning in Omaha, NE</h2>
          <div className="oma-faq-list">
            {OMAHA_FAQS.map((item) => (
              <details key={item.q} className="oma-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="oma-faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="oma-closing" aria-labelledby="oma-closing-title">
        <div className="oma-inner oma-closing-inner">
          <h2 id="oma-closing-title">
            Ready for professional grill cleaning in Omaha?
          </h2>
          <p>
            Reserve online, call with a question, or email photos of your grill. No payment
            is due today—and nobody needs to be home if we can reach the unit.
          </p>
          <div className="oma-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Now
            </Link>
            <Link href="/see-our-work" className="btn-outline-light">
              See Our Work
            </Link>
          </div>
          <p className="oma-closing-contact">
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.emailDisplay}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
