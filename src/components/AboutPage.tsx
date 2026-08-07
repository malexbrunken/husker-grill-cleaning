import Link from "next/link";
import { site } from "@/lib/site";

const CREDENTIALS = [
  {
    title: "MBA, UNOmaha",
    body: "Strategic Management & Bachelor's from Liberty University",
  },
  {
    title: "Certified Advanced Tech",
    body: "The highest national credentials: CGCT & CAGST",
  },
  {
    title: "3x BRIN Champion",
    body: "Back-to-back-to-back elite series winner",
  },
  {
    title: "Technical Roots",
    body: "Former tractor mechanic & Lanoha Nurseries professional",
  },
] as const;

const SERVICE_POINTS = [
  {
    title: "Omaha grill cleaning",
    body: "Mobile deep cleaning and certified repair across the Omaha metro—including Elkhorn, Gretna, The Ridges, Regency, and surrounding neighborhoods.",
  },
  {
    title: "Lincoln grill cleaning",
    body: "Full-service grill care for Lincoln homes and outdoor kitchens, from Firethorn and Wilderness Ridge to Waterford Estates and beyond.",
  },
  {
    title: "Built-in & multi-tenant",
    body: "Specialists in built-in outdoor kitchens plus apartment, townhome, and HOA amenity grills for property managers.",
  },
  {
    title: "Clean + repair in one visit",
    body: "AGSI-certified diagnostics and repair during the same appointment—so you are not waiting on a second vendor.",
  },
] as const;

const INTERNAL_LINKS = [
  {
    href: "/pricing",
    label: "Pricing",
    body: "Transparent deep clean, semi-annual, maintenance, and repair rates.",
  },
  {
    href: "/see-our-work",
    label: "See Our Work",
    body: "100+ real completed-work photos from Omaha and Lincoln jobs.",
  },
  {
    href: "/multi-tenant-apartment-townhome-grill-cleaning",
    label: "Multi-Tenant Service",
    body: "Built-in grill programs for apartments, townhomes, and HOAs.",
  },
  {
    href: "/join-our-team",
    label: "Join Our Team",
    body: "Performance-based technician roles and territory opportunities.",
  },
] as const;

export function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-inner about-hero-inner">
          <p className="eyebrow gold">The Premium Standard</p>
          <h1 id="about-hero-title">
            Built on Discipline.
            <br />
            Fueled by Fire.
          </h1>
          <p className="about-lede">
            Husker Grill Cleaning is Nebraska&apos;s AGSI-certified mobile grill cleaning
            and repair company—serving homeowners, estates, and multi-tenant communities
            across Omaha and Lincoln with full-disassembly deep cleans and certified
            mechanical service.
          </p>
          <div className="about-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Book a Specialist
            </Link>
            <Link href="/see-our-work" className="btn-outline-light">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission" aria-labelledby="about-mission-title">
        <div className="about-inner about-mission-inner">
          <p className="eyebrow gold">Our North Star</p>
          <h2 id="about-mission-title">Why Husker Grill Cleaning Exists</h2>
          <p className="about-mission-text">
            Our mission is to keep grills safe, sanitary, and operating at the highest
            level of precision—so that families and friends spend more time together around
            the flame, and less time worrying about the machine.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder" aria-labelledby="about-founder-title">
        <div className="about-inner about-founder-grid">
          <figure className="about-founder-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team.webp"
              alt="Matthew Brunken, founder of Husker Grill Cleaning and AGSI-certified grill technician in Omaha and Lincoln, Nebraska"
              width={1024}
              height={1008}
              loading="eager"
              decoding="async"
            />
            <figcaption>AGSI Founding Cohort</figcaption>
          </figure>

          <div className="about-founder-copy">
            <p className="eyebrow gold">Founder</p>
            <h2 id="about-founder-title">Matthew Brunken</h2>
            <p className="about-founder-role">
              Founder · MBA · CAGST · Elite Athlete
            </p>
            <p>
              Matthew Brunken doesn&apos;t just understand grills; he understands the
              engineering of performance. A Lincoln native, Matthew&apos;s journey to
              becoming Nebraska&apos;s premier grill specialist was paved with a unique
              blend of technical labor and academic rigor.
            </p>

            <ul className="about-cred-grid">
              {CREDENTIALS.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-inner about-bio">
          <p>
            Matthew&apos;s professional life has always been defined by the pursuit of the
            &ldquo;extra mile.&rdquo; Before founding Husker Grill Cleaning, he honed his
            mechanical intuition as a tractor mechanic while earning his MBA from the
            University of Nebraska Omaha. That hands-on experience at Lanoha Nurseries and
            in the shop taught him a fundamental truth: complex machines require
            disciplined maintenance to achieve peak performance.
          </p>
          <p>
            That same discipline is what fueled Matthew&apos;s career as a nationally
            recognized runner. Known across the Midwest for winning back-to-back-to-back
            BRIN series championships and securing major victories in half marathons and
            10ks, Matthew applies an athlete&apos;s focus to gas safety and mechanical
            diagnostics. He doesn&apos;t settle for &ldquo;good enough&rdquo; in a race,
            and he doesn&apos;t settle for &ldquo;good enough&rdquo; with your outdoor
            kitchen.
          </p>
          <p>
            As a member of the{" "}
            <strong>
              Founding Cohort of the American Grill Service Institute (AGSI)
            </strong>
            , Matthew helped establish the professional standards for an entire industry.
            By holding both{" "}
            <strong>Certified Grill Cleaning Technician (CGCT)</strong> and{" "}
            <strong>Certified Advanced Grill Service Technician (CAGST)</strong>{" "}
            credentials, he ensures that every client in the Omaha-Lincoln metro receives
            service that meets the highest safety and sanitary standards in the United
            States.
          </p>
        </div>
      </section>

      {/* AGSI band */}
      <section className="about-agsi" aria-labelledby="about-agsi-title">
        <div className="about-inner about-agsi-inner">
          <div className="about-agsi-badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/agsi-cert.webp"
              alt="American Grill Service Institute certification badge"
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-agsi-copy">
            <p className="eyebrow gold">National Credentials</p>
            <h2 id="about-agsi-title">AGSI-Certified Technicians on Staff</h2>
            <p>
              We are certified through the{" "}
              <strong>American Grill Service Institute</strong>—the national
              standard-setter for professional mechanical grill service and safety. That
              credentialing backs every deep clean, gas safety check, and repair we perform
              in Omaha, Lincoln, and surrounding Nebraska communities.
            </p>
            <div className="about-agsi-actions">
              <a
                href="https://www.agsinstitute.org/"
                className="btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Grill Service Institute
              </a>
              <a
                href="https://www.agsinstitute.org/verify"
                className="btn-prestige"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Credentials
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service area SEO */}
      <section className="about-service" aria-labelledby="about-service-title">
        <div className="about-inner">
          <p className="eyebrow gold">Where We Serve</p>
          <h2 id="about-service-title">
            Professional Grill Cleaning in Omaha &amp; Lincoln, Nebraska
          </h2>
          <p className="about-section-lede">
            From freestanding Weber and Traeger units to estate outdoor kitchens and
            multi-tenant amenity grills, Husker Grill Cleaning brings truck-mounted
            equipment, full disassembly, and certified repair to your property.
          </p>
          <div className="about-service-grid">
            {SERVICE_POINTS.map((item) => (
              <article key={item.title} className="about-service-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="about-links" aria-labelledby="about-links-title">
        <div className="about-inner">
          <p className="eyebrow gold">Explore</p>
          <h2 id="about-links-title">Learn More About Our Service</h2>
          <div className="about-links-grid">
            {INTERNAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="about-link-card">
                <h3>{item.label}</h3>
                <p>{item.body}</p>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-closing" aria-labelledby="about-closing-title">
        <div className="about-inner about-closing-inner">
          <h2 id="about-closing-title">Experience the Husker Standard.</h2>
          <p>
            Trust your grill to a local expert who values precision as much as you do.
            Schedule professional grill cleaning and certified repair in Omaha or Lincoln
            today.
          </p>
          <div className="about-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Book a Specialist
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <p className="about-closing-email">
            Or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
