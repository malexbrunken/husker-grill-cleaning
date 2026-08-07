import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";
import { site } from "@/lib/site";

/** Curated Cloudinary gallery shots for process storytelling (not multi-tenant-only set). */
const PHOTOS = {
  heroA:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-59_vjcixc.png",
  heroB:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-18_ibsizc.jpg",
  heroC:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-3_vnn8dx.jpg",
  heroD:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-1_mm1iki.jpg",
  disassemble:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504589/HG-12_hswn2j.png",
  firebox:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-22_qhiceh.png",
  lid: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504592/HG-25_da2rv0.jpg",
  finish:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504593/HG-35_mrkumb.jpg",
  cart: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504596/HG-45_vbzzhm.jpg",
  polish:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504589/HG-15_jlh7n4.jpg",
  stripeA:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504587/HG-8_qq0gug.jpg",
  stripeB:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504592/HG-30_mgyn2x.png",
  stripeC:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504598/HG-56_qhxouc.jpg",
  stripeD:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504600/HG-71_ykvrwm.jpg",
  stripeE:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504588/HG-11_jyo2m1.jpg",
  stripeF:
    "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504595/HG-40_mp8awp.jpg",
} as const;

type Step = { n: string; title: string; body: string };

type Phase = {
  id: string;
  emoji: string;
  title: string;
  range: string;
  blurb: string;
  photo?: string;
  photoAlt?: string;
  steps: Step[];
};

const PHASES: Phase[] = [
  {
    id: "setup",
    emoji: "🛡️",
    title: "Setup & Safety First",
    range: "01–02",
    blurb:
      "A clean job site and proper PPE come before a single component leaves the grill.",
    photo: PHOTOS.stripeA,
    photoAlt: "Outdoor grill after professional deep cleaning setup",
    steps: [
      {
        n: "01",
        title: "Protect the work area",
        body: "Remove the grill cover and lay down a painter’s canvas. Degreasers and carbon runoff stain—patio, deck, and concrete stay protected first.",
      },
      {
        n: "02",
        title: "Don required PPE",
        body: "Safety goggles, minimum 8-mil tactile gloves, and a respirator. Deep-clean chemistry—especially NaOH decarbonizers—requires professional protection.",
      },
    ],
  },
  {
    id: "diagnostic",
    emoji: "🔥",
    title: "Pre-Service Diagnostic",
    range: "03–04",
    blurb:
      "We learn how the grill behaves before we open it—so reassembly can be calibrated, not guessed.",
    steps: [
      {
        n: "03",
        title: "Test-fire & record diagnostics",
        body: "Observe burner ignition and flame quality (blue/clear vs orange/yellow) before disassembly. That baseline guides fuel-to-air calibration later.",
      },
      {
        n: "04",
        title: "Disconnect the gas supply",
        body: "Burners off first, then supply valve closed, then line disconnected. Non-negotiable safety sequence.",
      },
    ],
  },
  {
    id: "disassembly",
    emoji: "🧰",
    title: "Full Disassembly & Soak",
    range: "05–11",
    blurb:
      "If a tech isn’t pulling the burners, they’re cleaning around the problem—not solving it.",
    photo: PHOTOS.disassemble,
    photoAlt: "Grill components removed during full-disassembly deep clean",
    steps: [
      {
        n: "05",
        title: "Remove all internal components",
        body: "Grates, heat shields, flavorizer bars, burners, trays, and crossover pipes come out for real access.",
      },
      {
        n: "06",
        title: "Hot degreaser bath",
        body: "Industrial-grade sodium hydroxide solutions break down polymerized grease a wire brush alone will never touch.",
      },
      {
        n: "07",
        title: "Mechanical scrubbing & debriding",
        body: "Every piece is scrubbed by hand until carbonized grease is fully debrided.",
      },
      {
        n: "08",
        title: "Thorough rinse",
        body: "Zero chemical residue remains on components that will sit above an open flame.",
      },
      {
        n: "09",
        title: "Steam-clean crossover “gills”",
        body: "Pressurized steam clears the small vented openings that let ignition travel burner to burner.",
      },
      {
        n: "10",
        title: "Steam-clear burner tube slots",
        body: "220–315°F steam melts blockages in precision-engineered slots—preventing hot/cold spots and dangerous gas “poofs.”",
      },
      {
        n: "11",
        title: "Dry staging",
        body: "All components dry completely before reassembly for gas-appliance safety.",
      },
    ],
  },
  {
    id: "lid",
    emoji: "🧲",
    title: "Lid Service",
    range: "12–17",
    blurb:
      "Smoke and grease vapor lacquer the lid interior. We work it flat—not half-cleaned on the hinges.",
    photo: PHOTOS.lid,
    photoAlt: "Grill lid interior after professional scouring and polish",
    steps: [
      {
        n: "12–13",
        title: "Complete lid removal",
        body: "Extract hinge pins so the lid can be worked flat—full access to the interior surface and thermometer probe.",
      },
      {
        n: "14–15",
        title: "Degrease & scour lid interior",
        body: "Full-strength degreaser and scouring until metal is visible under the baked-on lacquer.",
      },
      {
        n: "16–17",
        title: "Thermometer clean & final rinse",
        body: "A dirty probe reads inaccurately. Probe cleaned, lid thoroughly rinsed.",
      },
    ],
  },
  {
    id: "firebox",
    emoji: "🌋",
    title: "Firebox Deep Clean",
    range: "18–26",
    blurb:
      "This is where grease fires start—and where surface wipes fail. Scraping, chemistry, steam, neutralize, flush.",
    photo: PHOTOS.firebox,
    photoAlt: "Firebox after deep mechanical and steam cleaning",
    steps: [
      {
        n: "18–19",
        title: "Dry scrape & industrial vacuum",
        body: "Mechanically dislodge large carbon deposits, then shop-vac insect nests, spider webs, and debris.",
      },
      {
        n: "20–21",
        title: "Full-strength chemical scouring",
        body: "Repeat spray-and-scrub cycles with undiluted degreaser on firebox walls, floor, and ceiling.",
      },
      {
        n: "22",
        title: "High-temperature steam flush",
        body: "220–315°F vapor sanitizes the surface and flushes residual fat from metal welds.",
      },
      {
        n: "23–24",
        title: "Caustic decarbonization",
        body: "For heavy buildup, NaOH decarbonizers break down hardened plaque—the “dental flossing” of grill care.",
      },
      {
        n: "25–26",
        title: "Neutralize & final flush",
        body: "Vinegar spray neutralizes alkaline decarbonizer before the final steam flush.",
      },
    ],
  },
  {
    id: "gas",
    emoji: "⚙️",
    title: "Valve & Gas System Service",
    range: "27–32",
    blurb:
      "Orifices, igniters, and valve stems only get real attention when the grill is fully open.",
    steps: [
      {
        n: "27",
        title: "Steam-clean control valve orifices",
        body: "Clear the tiny openings that meter gas flow—only possible when burners are removed.",
      },
      {
        n: "28",
        title: "Igniter calibration",
        body: "Steam-clean electrodes and adjust depth to 1/8\"–1/4\" for reliable sparking.",
      },
      {
        n: "29–30",
        title: "Component detailing",
        body: "Clean regulator couplers, propane threads, and remove control dials to clean valve stems.",
      },
      {
        n: "31–32",
        title: "Hardware preservation",
        body: "Lubricate firebox threaded posts and clean hardware in a degreaser bath before reinstall.",
      },
    ],
  },
  {
    id: "cart",
    emoji: "🧽",
    title: "Pedestal & Cart",
    range: "33–34",
    blurb: "Hidden grease reservoirs live under the firebox—we don’t leave them behind.",
    photo: PHOTOS.cart,
    photoAlt: "Pedestal and cart grill exterior after detailing",
    steps: [
      {
        n: "33–34",
        title: "Underside & cart detailing",
        body: "Clean drip tray slide mounts and pedestal interior to remove hidden grease reservoirs.",
      },
    ],
  },
  {
    id: "reassembly",
    emoji: "🔩",
    title: "Reassembly & Calibration",
    range: "35–39",
    blurb: "Reassembly is tuning—not just putting parts back until they fit.",
    photo: PHOTOS.finish,
    photoAlt: "Reassembled grill after AGSI-style deep service",
    steps: [
      {
        n: "35",
        title: "Reinstall lid with lubricated pins",
        body: "Lid operates smoothly and safely after hinge service.",
      },
      {
        n: "36",
        title: "Venturi tube calibration",
        body: "This is tuning. Adjust air-to-gas mixtures for an efficient blue flame.",
      },
      {
        n: "37–39",
        title: "Burner & dial reinstallation",
        body: "Dials installed before gas is reconnected—a vital safety sequence.",
      },
    ],
  },
  {
    id: "testing",
    emoji: "✅",
    title: "Testing & Inspection",
    range: "40–44",
    blurb: "A clean grill that leaks or won’t light isn’t finished. We prove performance.",
    steps: [
      {
        n: "40–41",
        title: "Post-service test-fire",
        body: "Confirm instant lighting and inspect the fuel delivery system for wear.",
      },
      {
        n: "42",
        title: "Soapy-water leak detection",
        body: "The professional standard. Every connection is checked for bubbles.",
      },
      {
        n: "43–44",
        title: "Internal component reinstall",
        body: "Heat shields, flavorizers, and grates returned to position.",
      },
    ],
  },
  {
    id: "finishing",
    emoji: "✨",
    title: "Finishing & Polishing",
    range: "45–50",
    blurb: "We leave the appliance and the patio better than we found them.",
    photo: PHOTOS.polish,
    photoAlt: "Stainless exterior polish after deep grill cleaning",
    steps: [
      {
        n: "45–46",
        title: "Site cleanup & exterior wash",
        body: "Canvas up, exterior washed—job site left tidy.",
      },
      {
        n: "47",
        title: "Stainless steel restoration",
        body: "Specialized polish restores the passive oxide layer that helps prevent corrosion.",
      },
      {
        n: "48",
        title: "Igniter battery replacement",
        body: "Standard on annual visits for a reliable spark year-round.",
      },
      {
        n: "49",
        title: "Full heat-cycle test",
        body: "Watch the grill come to temperature for even heat across all zones.",
      },
      {
        n: "50",
        title: "Final securement",
        body: "Gas off, area cleaned, cover on. Patio cleaner than we found it.",
      },
    ],
  },
];

const MYTHS = [
  {
    myth: "“Organic” grill cleaning is automatically better",
    truth:
      "“Organic” is not a measurement of cleanliness. Baked-on polymerized grease and carbon need disassembly, mechanical work, steam—and sometimes selective professional chemistry that is fully removed afterward.",
    href: "/organic-grill-cleaning-vs-deep-grill-cleaning",
    linkLabel: "Read the organic vs deep breakdown →",
  },
  {
    myth: "A brush-and-wipe is “good enough” if the outside looks shiny",
    truth:
      "Grease fires and uneven heat start inside the firebox, burner ports, and lid lacquer—not on the stainless hood. If burners never come out, the hard work never happened.",
    href: "/see-our-work",
    linkLabel: "See open-grill results →",
  },
  {
    myth: "Grill cleaning is like wiping a kitchen counter",
    truth:
      "Modern gas grills are precision appliances—orifices, venturis, igniters, calibrated openings. Treat them like a car engine that cooks dinner, not a disposable charcoal kettle.",
    href: "/pricing",
    linkLabel: "Compare service levels →",
  },
  {
    myth: "Stronger cleaners mean chemicals get left on the grill",
    truth:
      "Using chemistry and leaving chemistry behind are different things. Our process rinses, neutralizes, and steam-flushes so residue does not stay above an open flame.",
    href: "/organic-grill-cleaning-vs-deep-grill-cleaning#faq",
    linkLabel: "FAQ: are chemicals left behind? →",
  },
] as const;

const STRIP = [
  { src: PHOTOS.stripeA, alt: "Completed grill cleaning result" },
  { src: PHOTOS.stripeB, alt: "Deep cleaned outdoor grill" },
  { src: PHOTOS.stripeC, alt: "Professional grill service result" },
  { src: PHOTOS.stripeD, alt: "After photo from Husker Grill Cleaning" },
  { src: PHOTOS.stripeE, alt: "Restored gas grill firebox and grates" },
  { src: PHOTOS.stripeF, alt: "Stainless grill after deep clean" },
  { src: PHOTOS.heroA, alt: "Freestanding grill after deep cleaning" },
  { src: PHOTOS.heroC, alt: "Built-in outdoor kitchen grill cleaned" },
] as const;

function PhasePhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={cloudinaryUrl(src, 900, "thumb")}
      srcSet={`${cloudinaryUrl(src, 480, "thumb")} 480w, ${cloudinaryUrl(src, 900, "thumb")} 900w`}
      sizes="(max-width: 900px) 92vw, 480px"
      alt={alt}
      width={900}
      height={675}
      loading="lazy"
      decoding="async"
    />
  );
}

export function WhatGrillCleaningIncludesPage() {
  return (
    <div className="wdi-page">
      {/* HERO — wide, multi-photo */}
      <header className="wdi-hero">
        <div className="wdi-shell wdi-hero-grid">
          <div className="wdi-hero-copy">
            <p className="eyebrow gold">50-Step Deep Clean</p>
            <h1>What Does Grill Cleaning Include?</h1>
            <p className="wdi-hero-sub">
              50 steps your grill technician should be doing—and why, if they&apos;re not
              removing the burners, they&apos;re just painting a burning house.
            </p>
            <p className="wdi-lede">
              There&apos;s a version of “grill cleaning” that takes 45 minutes, costs $100,
              and involves wiping the grates with a brush and calling it a day. We&apos;ve
              seen the results: grills that smell like last summer, burners firing unevenly,
              and grease fires that weren&apos;t a matter of <em>if</em>—just{" "}
              <em>when</em>.
            </p>
            <p className="wdi-lede">
              Then there&apos;s what we do. AGSI-certified technicians. Full disassembly.
              Documented photos. A process measured in hours—not a drive-by wipe-down.
            </p>
            <div className="wdi-actions">
              <Link href={site.bookingPath} className="btn-prestige">
                Book Your 50-Step Service
              </Link>
              <Link href="/pricing" className="btn-outline-light">
                View Pricing
              </Link>
              <a href="#wdi-phases" className="btn-outline-light">
                Jump to Process
              </a>
            </div>
          </div>

          <div className="wdi-hero-mosaic" aria-hidden="false">
            <figure className="wdi-mosaic-main">
              <PhasePhoto
                src={PHOTOS.heroA}
                alt="Freestanding residential grill after Husker Grill Cleaning deep service"
                className="wdi-photo"
              />
            </figure>
            <figure>
              <PhasePhoto
                src={PHOTOS.heroB}
                alt="Second freestanding grill deep-clean result"
                className="wdi-photo"
              />
            </figure>
            <figure>
              <PhasePhoto
                src={PHOTOS.heroC}
                alt="Built-in outdoor kitchen grill after deep cleaning"
                className="wdi-photo"
              />
            </figure>
            <figure>
              <PhasePhoto
                src={PHOTOS.heroD}
                alt="Built-in grill firebox restored after professional service"
                className="wdi-photo"
              />
            </figure>
          </div>
        </div>
      </header>

      {/* Stats / value strip */}
      <section className="wdi-stats" aria-label="Service highlights">
        <div className="wdi-shell wdi-stats-grid">
          <div>
            <strong>50</strong>
            <span>Documented process steps</span>
          </div>
          <div>
            <strong>~3 hrs</strong>
            <span>Typical deep-clean visit</span>
          </div>
          <div>
            <strong>AGSI</strong>
            <span>Certified technicians</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Completed-work photos</span>
          </div>
        </div>
      </section>

      {/* Intro wide two-col */}
      <section className="wdi-intro" aria-labelledby="wdi-intro-title">
        <div className="wdi-shell wdi-intro-grid">
          <div>
            <p className="eyebrow gold">Mechanics, not maids</p>
            <h2 id="wdi-intro-title">Your grill is a precision gas appliance</h2>
            <p>
              At Husker Grill Cleaning, our technicians are AGSI-certified—the same
              certification body that sets standards for gas appliance service professionals.
              We don&apos;t think of ourselves as maids with a scrub brush. We think of
              ourselves as mechanics.
            </p>
            <p>
              Your grandfather&apos;s sheet-metal charcoal kettle was practically disposable.
              Your Weber, Napoleon, or Lynx is more like a car than campfire equipment. You
              wouldn&apos;t go years without an oil change and expect the engine to run clean.
              The same logic applies here.
            </p>
            <p>
              A proper grill service takes about three hours and follows a strict, documented
              process. Every visit is photographed and logged through Housecall Pro so you
              have a visual record of condition. Below is every step we take.
            </p>
          </div>
          <aside className="wdi-disclaimer" aria-labelledby="wdi-safety-title">
            <p className="wdi-disclaimer-label" id="wdi-safety-title">
              ⚠️ Safety disclaimer
            </p>
            <p>
              This process involves chemical degreasers, caustic compounds, pressurized steam,
              and gas appliance components. It is educational only. If you attempt any portion
              yourself, you do so entirely at your own risk. When in doubt—call a certified
              technician.
            </p>
            <p className="wdi-disclaimer-fine">
              Gas appliances involve inherent risks. Husker Grill Cleaning disclaims liability
              for injury or damage from homeowner attempts to perform these procedures.
            </p>
          </aside>
        </div>
      </section>

      {/* MYTHS — visual variety break */}
      <section className="wdi-myths" aria-labelledby="wdi-myths-title">
        <div className="wdi-shell">
          <div className="wdi-myths-head">
            <div>
              <p className="eyebrow gold">Clear the air</p>
              <h2 id="wdi-myths-title">Grill cleaning myths we hear every week</h2>
            </div>
            <p className="wdi-myths-lede">
              Marketing language is easy. Results are harder. These are the stories that keep
              people stuck with half-clean grills.
            </p>
          </div>
          <div className="wdi-myth-grid">
            {MYTHS.map((item, i) => (
              <article key={item.myth} className={`wdi-myth-card wdi-myth-${i + 1}`}>
                <p className="wdi-myth-label">Myth</p>
                <h3>{item.myth}</h3>
                <p className="wdi-myth-truth-label">Reality</p>
                <p>{item.truth}</p>
                <Link href={item.href}>{item.linkLabel}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo marquee / strip */}
      <section className="wdi-strip" aria-label="Completed work photos">
        <div className="wdi-strip-track">
          {[...STRIP, ...STRIP].map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${img.src}-${i}`}
              src={cloudinaryUrl(img.src, 420, "thumb")}
              alt={i < STRIP.length ? img.alt : ""}
              width={420}
              height={280}
              loading="lazy"
              decoding="async"
              aria-hidden={i >= STRIP.length ? true : undefined}
            />
          ))}
        </div>
        <p className="wdi-strip-caption">
          Real completed work from our{" "}
          <Link href="/see-our-work">gallery of 100+ after photos</Link>
        </p>
      </section>

      {/* Phase nav */}
      <nav className="wdi-phase-nav" aria-label="Process phases" id="wdi-phases">
        <div className="wdi-shell wdi-phase-nav-inner">
          {PHASES.map((phase) => (
            <a key={phase.id} href={`#phase-${phase.id}`}>
              <span aria-hidden="true">{phase.emoji}</span>
              {phase.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Phases */}
      {PHASES.map((phase, index) => {
        const reverse = Boolean(phase.photo) && index % 2 === 1;
        return (
          <section
            key={phase.id}
            id={`phase-${phase.id}`}
            className={`wdi-phase${index % 2 === 0 ? "" : " wdi-phase-alt"}${
              reverse ? " wdi-phase-reverse" : ""
            }`}
            aria-labelledby={`phase-title-${phase.id}`}
          >
            <div className="wdi-shell">
              <div className={`wdi-phase-top${phase.photo ? " has-photo" : ""}`}>
                <div className="wdi-phase-intro">
                  <p className="wdi-phase-range">
                    <span aria-hidden="true">{phase.emoji}</span> Steps {phase.range}
                  </p>
                  <h2 id={`phase-title-${phase.id}`}>{phase.title}</h2>
                  <p>{phase.blurb}</p>
                </div>
                {phase.photo ? (
                  <figure className="wdi-phase-photo">
                    <PhasePhoto
                      src={phase.photo}
                      alt={phase.photoAlt ?? phase.title}
                      className="wdi-photo"
                    />
                  </figure>
                ) : null}
              </div>

              <div
                className={`wdi-step-grid${
                  phase.steps.length <= 2
                    ? " cols-2"
                    : phase.steps.length <= 4
                      ? " cols-2"
                      : " cols-3"
                }`}
              >
                {phase.steps.map((step) => (
                  <article key={step.n + step.title} className="wdi-step">
                    <span className="wdi-step-n">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Mid CTA band with photo */}
      <section className="wdi-mid-cta" aria-labelledby="wdi-mid-title">
        <div className="wdi-shell wdi-mid-grid">
          <figure>
            <PhasePhoto
              src={PHOTOS.heroD}
              alt="Built-in grill after full 50-step deep clean"
              className="wdi-photo"
            />
          </figure>
          <div>
            <p className="eyebrow gold">Proof over polish</p>
            <h2 id="wdi-mid-title">Your grill isn&apos;t a counter. Don&apos;t clean it like one.</h2>
            <p>
              Husker Grill Cleaning — AGSI-certified grill technicians serving Omaha, Lincoln,
              and surrounding communities. Full-disassembly deep cleans, maintenance service,
              multi-tenant programs, and certified repair.
            </p>
            <div className="wdi-actions">
              <Link href={site.bookingPath} className="btn-prestige">
                Book Your 50-Step Service
              </Link>
              <Link href="/see-our-work" className="btn-outline-light">
                See Our Work
              </Link>
              <Link
                href="/organic-grill-cleaning-vs-deep-grill-cleaning"
                className="btn-outline-light"
              >
                Organic Cleaning Myth
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <footer className="wdi-close">
        <div className="wdi-shell wdi-close-inner">
          <h2>Ready for the real process?</h2>
          <p>
            Schedule a deep clean in Omaha or Lincoln—or compare packages and pricing first.
          </p>
          <div className="wdi-actions">
            <Link href={site.bookingPath} className="btn-prestige">
              Schedule Service
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
            <Link href="/pricing" className="btn-outline-light">
              Pricing
            </Link>
          </div>
          <p className="wdi-close-note">
            Safety reminder: this page is educational. All gas appliance service should be
            performed by a qualified, certified technician.
          </p>
        </div>
      </footer>
    </div>
  );
}
