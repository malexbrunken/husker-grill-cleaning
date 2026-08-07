import Link from "next/link";
import { site } from "@/lib/site";

export const MATTHEW_PHOTO =
  "https://res.cloudinary.com/f69kw8ao/image/upload/v1786133821/matthew_brunken_omaha_grill_cleaning_f6rhnt.jpg";

export function matthewPhotoUrl(width: number, ar = "4:5"): string {
  return MATTHEW_PHOTO.replace(
    "/upload/",
    `/upload/f_auto,q_auto:good,dpr_auto,w_${width},c_fill,g_face,ar_${ar}/`,
  );
}

export const MATTHEW_SAME_AS = [
  "https://matthewbrunken.org",
  "https://runalyze.com/athlete/Mbrunken",
  "https://x.com/matthew_brunken",
  site.social.facebook,
  site.social.instagram,
  site.social.nicejob,
] as const;

const QUICK_FACTS = [
  { label: "Based in", value: "Lincoln, Nebraska" },
  { label: "Hometown", value: "Malcolm, Nebraska" },
  { label: "Role", value: "Founder, Husker Grill Cleaning" },
  { label: "Credentials", value: "MBA · CGCT · CAGST" },
  { label: "Athletics", value: "3× BRIN Series Champion" },
  { label: "Focus", value: "AGSI-certified grill service" },
] as const;

const TIMELINE = [
  {
    title: "Malcolm roots",
    body: "Raised in Malcolm, Nebraska, Matthew Brunken built an early reputation for work ethic—on the farm, in the shop, and on the track.",
  },
  {
    title: "Athlete & student",
    body: "A competitive distance runner and University of Nebraska Omaha MBA graduate (with a bachelor’s from Liberty University), he paired academic rigor with race-day discipline.",
  },
  {
    title: "Technical trades",
    body: "Hands-on years as a tractor mechanic and Lanoha Nurseries professional taught him how complex machines stay reliable: disciplined maintenance, not shortcuts.",
  },
  {
    title: "Husker Grill Cleaning",
    body: "He founded Nebraska’s AGSI-certified mobile grill cleaning and repair company—serving Omaha, Lincoln, and surrounding communities with full-disassembly deep cleans and certified repair.",
  },
  {
    title: "National standards",
    body: "As an American Grill Service Institute founding cohort member holding CGCT and CAGST credentials, he helped raise the bar for professional grill service nationwide.",
  },
] as const;

const PILLARS = [
  {
    title: "Entrepreneur",
    body: "Founder of Husker Grill Cleaning LLC—mobile grill cleaning, maintenance, multi-tenant amenity programs, and certified repair across the Omaha–Lincoln corridor.",
  },
  {
    title: "Competitive runner",
    body: "Midwest standout known for back-to-back-to-back BRIN series championships plus strong half marathon and 10K performances. Training logs live on Runalyze.",
  },
  {
    title: "Certified technician",
    body: "AGSI founding cohort. Certified Grill Cleaning Technician (CGCT) and Certified Advanced Grill Service Technician (CAGST)—the highest national credentials in the field.",
  },
  {
    title: "Coach & mentor",
    body: "A private cross country coach who brings the same standards he expects of himself—discipline, process, and long-term development—to the athletes he works with.",
  },
] as const;

export const MATTHEW_FAQS = [
  {
    q: "Who is Matthew Brunken?",
    a: "Matthew Brunken is a Lincoln, Nebraska entrepreneur, competitive distance runner, private cross country coach, and AGSI-certified grill technician. He is the founder of Husker Grill Cleaning, a mobile grill cleaning and repair company serving Omaha, Lincoln, and nearby communities.",
  },
  {
    q: "Where is Matthew Brunken from?",
    a: "Matthew Brunken is from Malcolm, Nebraska, and is based in Lincoln, Nebraska. Through Husker Grill Cleaning he also works extensively across the Omaha metro and Council Bluffs area.",
  },
  {
    q: "What company did Matthew Brunken found?",
    a: "Matthew Brunken founded Husker Grill Cleaning (Husker Grill Cleaning LLC), Nebraska’s AGSI-certified mobile grill cleaning and repair service. The company specializes in full-disassembly deep cleans, maintenance cleaning, multi-tenant amenity grills, and certified repair.",
  },
  {
    q: "What are Matthew Brunken’s professional credentials?",
    a: "Matthew Brunken holds an MBA from the University of Nebraska Omaha and a bachelor’s degree from Liberty University. In the grill service industry he is a member of the American Grill Service Institute founding cohort and holds both CGCT (Certified Grill Cleaning Technician) and CAGST (Certified Advanced Grill Service Technician) credentials.",
  },
  {
    q: "Is Matthew Brunken a runner?",
    a: "Yes. Matthew Brunken is a competitive distance runner known across the Midwest for winning three consecutive BRIN series championships and for strong half marathon and 10K results. Public training and race history are available on his Runalyze athlete profile.",
  },
  {
    q: "How can I contact Matthew Brunken or book Husker Grill Cleaning?",
    a: `For Husker Grill Cleaning service in Omaha or Lincoln, call ${site.phoneDisplay} or email ${site.email}. You can also book online. For running and personal brand updates, see matthewbrunken.org and @matthew_brunken on X.`,
  },
] as const;

const PRESENCE = [
  {
    href: "https://matthewbrunken.org",
    label: "matthewbrunken.org",
    body: "Personal running & brand site",
  },
  {
    href: "https://runalyze.com/athlete/Mbrunken",
    label: "Runalyze",
    body: "Public training & race log",
  },
  {
    href: "https://x.com/matthew_brunken",
    label: "@matthew_brunken",
    body: "Updates on X",
  },
  {
    href: site.social.nicejob,
    label: "NiceJob reviews",
    body: "Customer reviews for Husker Grill",
  },
  {
    href: site.social.facebook,
    label: "Facebook",
    body: "Husker Grill Cleaning",
  },
  {
    href: site.social.instagram,
    label: "Instagram",
    body: "Husker Grill Cleaning",
  },
] as const;

export function MatthewBrunkenPage() {
  return (
    <div className="mb-page">
      {/* Profile hero */}
      <section className="mb-hero" aria-labelledby="mb-name">
        <div className="mb-inner mb-hero-grid">
          <figure className="mb-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={matthewPhotoUrl(900)}
              srcSet={`${matthewPhotoUrl(480)} 480w, ${matthewPhotoUrl(900)} 900w`}
              sizes="(max-width: 800px) 88vw, 380px"
              alt="Matthew Brunken of Lincoln, Nebraska — founder of Husker Grill Cleaning, competitive runner, and AGSI-certified grill technician"
              width={900}
              height={1125}
              loading="eager"
              decoding="async"
            />
          </figure>

          <div className="mb-hero-copy">
            <p className="eyebrow gold">Lincoln, Nebraska</p>
            <h1 id="mb-name">Matthew Brunken</h1>
            <p className="mb-tagline">
              Entrepreneur · Competitive Runner · AGSI-Certified Grill Technician · Cross
              Country Coach
            </p>
            <p className="mb-lede">
              Matthew Brunken is a Lincoln-based founder and athlete known for building{" "}
              <Link href="/">Husker Grill Cleaning</Link>—Nebraska&apos;s AGSI-certified
              mobile grill cleaning and repair company—and for a competitive running career
              marked by three consecutive BRIN series championships.
            </p>
            <div className="mb-hero-actions">
              <Link href="/about" className="btn-prestige">
                Company About
              </Link>
              <Link href={site.bookingPath} className="btn-outline-light">
                Book Grill Service
              </Link>
              <a
                href="https://matthewbrunken.org"
                className="btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                matthewbrunken.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mb-facts" aria-labelledby="mb-facts-title">
        <div className="mb-inner">
          <p className="eyebrow gold">At a Glance</p>
          <h2 id="mb-facts-title">Matthew Brunken — Quick Facts</h2>
          <dl className="mb-facts-grid">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who */}
      <section className="mb-bio" aria-labelledby="mb-bio-title">
        <div className="mb-inner mb-bio-layout">
          <div>
            <p className="eyebrow gold">Biography</p>
            <h2 id="mb-bio-title">Who Is Matthew Brunken?</h2>
            <div className="mb-prose">
              <p>
                Matthew Brunken is an entrepreneur and technician based in{" "}
                <strong>Lincoln, Nebraska</strong>. He is best known as the founder of{" "}
                <strong>Husker Grill Cleaning</strong>, a mobile service that deep-cleans and
                repairs residential, estate, and multi-tenant outdoor grills across Omaha,
                Lincoln, Council Bluffs, and nearby communities.
              </p>
              <p>
                Before launching the company, Matthew combined mechanical trades—work as a
                tractor mechanic and time at Lanoha Nurseries—with graduate business study at
                the <strong>University of Nebraska Omaha</strong>. That mix of shop-floor
                problem solving and MBA-level operations thinking shapes how he runs service
                days: process-driven, safety-first, and uncompromising on finish quality.
              </p>
              <p>
                Outside the truck, Matthew is a competitive distance runner and private cross
                country coach. The same discipline that produced{" "}
                <strong>three straight BRIN series titles</strong> shows up in how he trains
                technicians, documents jobs, and holds national AGSI standards on every visit.
              </p>
            </div>
          </div>

          <aside className="mb-pillars" aria-label="Roles">
            {PILLARS.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-timeline" aria-labelledby="mb-timeline-title">
        <div className="mb-inner">
          <p className="eyebrow gold">Path</p>
          <h2 id="mb-timeline-title">Background &amp; Career Path</h2>
          <ol className="mb-timeline-list">
            {TIMELINE.map((item, index) => (
              <li key={item.title}>
                <span className="mb-timeline-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Running */}
      <section className="mb-running" aria-labelledby="mb-running-title">
        <div className="mb-inner mb-running-inner">
          <p className="eyebrow gold">Athletics</p>
          <h2 id="mb-running-title">Running Career</h2>
          <p>
            Matthew Brunken is a nationally competitive distance runner with deep roots in
            Nebraska high school and collegiate-style training culture. He is known across the
            Midwest for winning{" "}
            <strong>back-to-back-to-back BRIN series championships</strong> and for strong
            results in half marathons and 10Ks. He also coaches cross country privately,
            helping athletes build durable fitness and race-day confidence.
          </p>
          <p>
            Public training history and race data are available on{" "}
            <a
              href="https://runalyze.com/athlete/Mbrunken"
              target="_blank"
              rel="noopener noreferrer"
            >
              Runalyze (athlete Mbrunken)
            </a>
            . Personal running updates and brand writing live at{" "}
            <a href="https://matthewbrunken.org" target="_blank" rel="noopener noreferrer">
              matthewbrunken.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* Business */}
      <section className="mb-business" aria-labelledby="mb-business-title">
        <div className="mb-inner">
          <p className="eyebrow gold">Company</p>
          <h2 id="mb-business-title">Husker Grill Cleaning</h2>
          <p className="mb-section-lede">
            Under Matthew Brunken&apos;s leadership, Husker Grill Cleaning delivers
            professional 50-step deep cleans, maintenance cleaning, multi-tenant amenity
            programs, and AGSI-certified repair for Weber, Traeger, and other outdoor cooking
            equipment.
          </p>
          <div className="mb-biz-grid">
            <article>
              <h3>What the company does</h3>
              <ul>
                <li>Full-disassembly deep cleaning (freestanding &amp; built-in)</li>
                <li>Semi-annual care and second-year maintenance plans</li>
                <li>Apartment, townhome, and HOA multi-tenant grill programs</li>
                <li>Clean + repair in one visit for cleaning customers</li>
                <li>Full-service Weber &amp; Traeger repair specialization</li>
              </ul>
            </article>
            <article>
              <h3>Why credentials matter</h3>
              <p>
                Matthew is part of the{" "}
                <strong>American Grill Service Institute founding cohort</strong> and holds
                both <strong>CGCT</strong> and <strong>CAGST</strong> credentials. That
                national standard underpins gas safety checks, diagnostics, and the repair
                work his team performs in the field.
              </p>
              <div className="mb-biz-links">
                <Link href="/about">About the company →</Link>
                <Link href="/pricing">Pricing →</Link>
                <Link href="/grill-repairs">Grill repairs →</Link>
                <Link href="/see-our-work">See our work →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="mb-presence" aria-labelledby="mb-presence-title">
        <div className="mb-inner">
          <p className="eyebrow gold">Online</p>
          <h2 id="mb-presence-title">Find Matthew Brunken Online</h2>
          <div className="mb-presence-grid">
            {PRESENCE.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mb-presence-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{item.label}</strong>
                <span>{item.body}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-faq" aria-labelledby="mb-faq-title" id="faq">
        <div className="mb-inner">
          <p className="eyebrow gold">People Also Ask</p>
          <h2 id="mb-faq-title">Questions About Matthew Brunken</h2>
          <div className="mb-faq-list">
            {MATTHEW_FAQS.map((item) => (
              <details key={item.q} className="mb-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="mb-faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-closing" aria-labelledby="mb-closing-title">
        <div className="mb-inner mb-closing-inner">
          <h2 id="mb-closing-title">Work with Matthew Brunken&apos;s Team</h2>
          <p>
            Book professional grill cleaning or certified repair with Husker Grill Cleaning
            in Omaha and Lincoln—or explore joining the technician team.
          </p>
          <div className="mb-hero-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Service
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
            <Link href="/join-our-team" className="btn-outline-light">
              Join Our Team
            </Link>
          </div>
          <p className="mb-closing-note">
            Business contact:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
