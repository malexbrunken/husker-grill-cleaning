"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  faqs,
  lincolnNeighborhoods,
  omahaNeighborhoods,
  partnerLogos,
  site,
} from "@/lib/site";

const processSteps = [
  {
    id: 1,
    label: "1. You Give Us This",
    caption:
      "Competitors stop at the surface. We go deep under the grates to eliminate the grease and carbon buildup that causes flare-ups and foul tastes.",
    images: [
      {
        src: "/images/process/dirty-1.jpg",
        alt: "Grease and carbon buildup inside a grill before deep cleaning",
      },
      {
        src: "/images/process/dirty-2.jpg",
        alt: "Dirty grill grates and interior before professional cleaning",
      },
    ],
  },
  {
    id: 2,
    label: "2. We Strip It Down",
    caption:
      "Our trained repair technicians perform a full disassembly. Every burner and component is removed to clean the firebox down to the bare metal.",
    images: [
      {
        src: "/images/process/strip-1.jpg",
        alt: "Grill fully disassembled during professional service",
      },
      {
        src: "/images/process/strip-2.jpg",
        alt: "Components removed for hot bath and steam cleaning",
      },
    ],
  },
  {
    id: 3,
    label: "3. We Give Back This",
    caption:
      "Reassembled, precision-tuned, and polished to a showroom shine. We don't just clean it; we perform a full safety inspection for total peace of mind.",
    images: [
      {
        src: "/images/process/final-1.jpg",
        alt: "Professionally deep-cleaned grill interior and cooking grates",
      },
      {
        src: "/images/process/final-2.jpg",
        alt: "Restored stainless grill after Husker Grill Cleaning service",
      },
    ],
  },
] as const;

export function HomeLander() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      nodes.forEach((el) => el.classList.add("active"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((el) => observer.observe(el));
    const fallback = window.setTimeout(() => {
      nodes.forEach((el) => el.classList.add("active"));
    }, 3500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const activeStep = processSteps.find((s) => s.id === step) ?? processSteps[0];

  return (
    <div className="home-lander">
      {/* HERO */}
      <div className="husker-land-wrap">
        <section className="hero-container" aria-labelledby="hero-heading">
          <div className="hero-text-side">
            <h1 id="hero-heading" className="reveal">
              Professional Grill Cleaning in Omaha and Lincoln
            </h1>
            <h2 className="reveal">
              Mobile Grill Cleaning: We Come to You • Omaha Grill Cleaning • Grill
              Cleaning in Lincoln
            </h2>
            <p className="reveal">
              Experience the most recommended grill cleaning company in the Omaha and
              Lincoln metros. Your grill is a high-performance machine, not a
              countertop. Treat it like one.
            </p>
            <p className="reveal">
              Premium mobile grill cleaning and service for homeowners who want a
              cleaner, safer, better-performing grill.
            </p>
            <div className="hero-cta-row reveal">
              <Link href="#pricing" className="btn-prestige hero-btn">
                See Pricing
              </Link>
              <Link href={site.bookingPath} className="btn-outline-light hero-btn">
                Schedule Now
              </Link>
            </div>
          </div>
          <div
            className="hero-image-side"
            role="img"
            aria-label="Husker Grill Cleaning technician with a professionally cleaned stainless grill"
          />
        </section>
      </div>

      {/* SHOWCASE */}
      <section className="showcase-section" aria-label="Service highlights">
        <div className="showcase-grid">
          <div className="showcase-item reveal">
            <Image
              src="/images/showcase-grill.webp"
              alt="Professionally deep-cleaned grill interior and cooking grates"
              width={600}
              height={600}
              className="showcase-img"
            />
          </div>
          <div className="showcase-item reveal" style={{ transitionDelay: "0.1s" }}>
            <Image
              src="/images/agsi-cert.webp"
              alt="Husker Grill Cleaning technician certification emblem"
              width={600}
              height={600}
              className="showcase-img"
            />
          </div>
          <div className="showcase-item reveal" style={{ transitionDelay: "0.2s" }}>
            <Image
              src="/images/team.webp"
              alt="Husker Grill Cleaning service technicians"
              width={600}
              height={600}
              className="showcase-img"
            />
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="quick-action-band" aria-label="Quick actions">
        <div className="quick-action-inner">
          <Link href="#pricing" className="quick-action-btn pricing-link">
            See Pricing
          </Link>
          <Link href={site.bookingPath} className="quick-action-btn contact-link">
            Contact Us
          </Link>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="service-standards reveal">
        <div className="service-standards-content">
          <h2>The Husker Standard: A Class Above.</h2>
          <p>
            When you search for grill cleaning and repair, you&apos;ll find plenty of
            companies willing to give your grill a basic $200 wipe down. We are not one
            of them.
          </p>
          <p>
            Our certified technicians fully disassemble the grill interior (removing
            grates, flavorizer bars, burners, and collection trays) and soak them in a
            proprietary hot bath. Using pro-grade steam machines, we steam-treat control
            valve orifices, clear venturi tubes, and perform a full safety inspection on
            all structural and gas-facilitating components before applying an exterior
            polish.
          </p>
          <div className="standards-grid">
            <div className="standard-box">
              <h3>Highest Industry Standards</h3>
              <p>
                Our techs are certified through AGSI, ensuring unmatched expertise and
                safety protocols.
              </p>
            </div>
            <div className="standard-box">
              <h3>Certified Repair</h3>
              <p>
                Issues found? Our team includes a Certified Advanced Grill Service
                Technician (CAGST).
              </p>
            </div>
            <div className="standard-box">
              <h3>Fully Protected</h3>
              <p>
                We are fully insured and the most recommended grill service in the state
                of Nebraska.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="logo-marquee-section" aria-label="Trusted partners and clients">
        <div className="marquee-container">
          <p className="marquee-label">
            Trusted by Nebraska&apos;s Top Property Managers, Realtors, HOAs, and Estates
          </p>
          <div className="marquee">
            <div className="marquee-content">
              {partnerLogos.map((logo) => (
                <div className="logo-item" key={logo.alt}>
                  <Image src={logo.src} alt={logo.alt} width={160} height={55} />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {partnerLogos.map((logo) => (
                <div className="logo-item" key={`dup-${logo.alt}`}>
                  <Image src={logo.src} alt="" width={160} height={55} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="husker-progress-section"
        id="process"
        aria-label="Our process"
      >
        <div className="husker-widget-container">
          <div className="husker-header">
            <h2>How It Works</h2>
            <p className="sub-headline">Our 50-Step Process Down to Three Steps</p>
          </div>

          <div
            className="husker-tabs"
            role="tablist"
            aria-label="How the grill cleaning process works"
          >
            {processSteps.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`process-tab-${s.id}`}
                aria-selected={step === s.id}
                aria-controls={`process-panel-${s.id}`}
                className={`husker-tab${step === s.id ? " active" : ""}`}
                onClick={() => setStep(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="husker-content">
            <div
              className="husker-slide active"
              role="tabpanel"
              id={`process-panel-${activeStep.id}`}
              aria-labelledby={`process-tab-${activeStep.id}`}
              tabIndex={0}
            >
              <div className="image-grid">
                {activeStep.images.map((img) => (
                  <div className="img-wrap" key={img.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <div className="caption-box">
                <p>{activeStep.caption}</p>
              </div>
            </div>
          </div>
          <div className="swipe-hint">Tap Steps to View Transformation</div>
        </div>
      </section>

      {/* PRICING */}
      <div className="pricing-section-wrapper">
        <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="pricing-header reveal">
            <h2 id="pricing-heading">Affordable Grill Cleaning in Omaha &amp; Lincoln</h2>
            <p className="pricing-subtitle">
              Comprehensive grill service: deep cleaning, performance tuning, full
              disassembly, and exterior polish.
            </p>
          </div>

          <div className="pricing-grid">
            <article className="p-card reveal">
              <div className="seasonal-label">A La Carte</div>
              <h3>One-Time Deep Clean</h3>
              <div className="price-options">
                <div className="price-option">
                  <span className="price-label">Freestanding &amp; Pedestal</span>
                  <span className="price-main">
                    $299 <small>+ tax</small>
                  </span>
                </div>
                <div className="price-option">
                  <span className="price-label">Built-In Grill</span>
                  <span className="price-main">
                    $349 <small>+ tax</small>
                  </span>
                </div>
              </div>
              <div className="repair-note-dark">
                <strong>Need Weber or Traeger repairs too?</strong>
                Add same-visit repair labor to a deep clean: <strong>$69 + parts</strong>
                <br />
                Great for igniters, regulators, burners, hot rods, augers, fans, control
                boards, and “grill will not light” issues.
              </div>
              <ul>
                <li>
                  <strong>50-Step Deep Clean:</strong> Complete disassembly, hot bath soak,
                  and pro-grade steam sanitization.
                </li>
                <li>
                  <strong>Full Grate &amp; Burner Service:</strong> Every component removed,
                  scrubbed, and restored to factory condition.
                </li>
                <li>
                  <strong>Firebox Deep Clean:</strong> Caustic decarbonization, high-temp
                  steam flush, and chemical neutralization.
                </li>
                <li>
                  <strong>Valve &amp; Gas Safety:</strong> Orifice clearing, venturi
                  calibration, and soapy-water leak detection.
                </li>
                <li>
                  <strong>Lid &amp; Exterior Restoration:</strong> Interior scouring,
                  thermometer cleaning, and stainless polish.
                </li>
                <li>
                  <strong>Performance Tuning:</strong> Blue-flame verification, even heat
                  distribution test, and component reinstallation.
                </li>
              </ul>
              <Link href={site.bookingPath} className="btn-prestige">
                Reserve Now
              </Link>
            </article>

            <article className="p-card popular reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="seasonal-label gold">Most Popular</div>
              <h3>Semi-Annual Care</h3>
              <span className="price-main">
                $599 <small>/ yr + tax</small>
              </span>
              <ul>
                <li>
                  <strong>2 Full 50-Step Restorations:</strong> Pre-season kickoff and
                  post-season cleanup for year-round peak performance.
                </li>
                <li>
                  <strong>Complete Component Service:</strong> Every visit includes hot
                  bath, burner debridement, and flavorizer bar restoration.
                </li>
                <li>
                  <strong>Firebox Deep Clean:</strong> Caustic decarbonization, steam
                  sanitization, and metal weld fat flushing.
                </li>
                <li>
                  <strong>Full Gas System Service:</strong> Valve orifices, venturi tubes,
                  igniter calibration, and leak detection.
                </li>
                <li>
                  <strong>Exterior Polish &amp; Protection:</strong> Stainless steel
                  restoration, lid interior, and drip tray detailing.
                </li>
                <li>
                  <strong>Free Grate Cleaning:</strong> One complimentary grate cleaning
                  anytime during your plan year (48 hours notice required).
                </li>
              </ul>
              <Link href={site.bookingPath} className="btn-prestige">
                Select Plan
              </Link>
            </article>

            <article className="p-card reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="seasonal-label">By Appointment</div>
              <h3>Maintenance Cleaning</h3>
              <span className="price-main">
                $199 <small>/ service + tax</small>
              </span>
              <p className="price-note">
                Same price for all grill types — freestanding, pedestal, or built-in.
              </p>
              <ul>
                <li>
                  <strong>For Recent Deep Clean Clients:</strong> Available only if
                  you&apos;ve had a deep clean through us in the past 12 months.
                </li>
                <li>
                  <strong>Light Grate &amp; Flavorizer Bar Cleaning:</strong> Quick cleanup
                  of cooking surfaces.
                </li>
                <li>
                  <strong>Firebox Vacuuming:</strong> Removal of debris and buildup.
                </li>
                <li>
                  <strong>Full Drip Tray &amp; Grease Tray Cleaning:</strong> Complete
                  cleaning of collection trays.
                </li>
                <li>
                  <strong>Exterior Degreasing:</strong> Hood, face plate, doors, and side
                  shelves.
                </li>
                <li>
                  <strong>Quick Polish:</strong> Final touch-up for a clean appearance.
                </li>
              </ul>
              <Link href={site.bookingPath} className="btn-prestige">
                Book Maintenance
              </Link>
            </article>

            <article className="p-card reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="seasonal-label">Multi-Grill</div>
              <h3>Multi-Grill Discount</h3>
              <span className="price-main">
                Custom <small>/ priced at scheduling</small>
              </span>
              <ul>
                <li>
                  <strong>Multiple Units:</strong> Have more than one grill? We offer
                  competitive bundled pricing when multiple units are serviced in the same
                  visit.
                </li>
                <li>
                  <strong>Same Visit Service:</strong> All units cleaned in a single
                  appointment for maximum convenience.
                </li>
                <li>
                  <strong>Custom Quote:</strong> Pricing is provided at scheduling based on
                  the number and size of your grills.
                </li>
              </ul>
              <Link href={site.bookingPath} className="btn-prestige">
                Get Custom Quote
              </Link>
            </article>
          </div>

          <div className="repairs-card-container reveal">
            <div className="repairs-card">
              <div className="repairs-header">
                <span className="repairs-badge">Weber &amp; Traeger Repair</span>
                <h3>
                  Weber Repair, Traeger Repair &amp; “Grill Will Not Light” Service
                </h3>
                <p>
                  Full-service Weber gas grill repair and Traeger pellet grill repair in
                  Omaha and Lincoln. For other brands, we focus on common mechanical,
                  gas-flow, ignition, and cleaning-related performance issues.
                </p>
              </div>
              <div className="repairs-features">
                <div className="repair-feature">
                  <div className="repair-icon" aria-hidden="true">
                    🔥
                  </div>
                  <div>
                    <h4>Best Value: Clean + Repair</h4>
                    <span className="prominent-price">
                      <span>$69+</span> Repair Add-On
                    </span>
                    <p>
                      Add repair labor to a scheduled deep clean for Weber and Traeger
                      issues. Parts are additional.
                    </p>
                    <span className="fine-print">
                      Ideal when the grill will not light, will not get hot, flares up, or
                      needs a regulator, igniter, burner, hot rod, auger, fan, controller,
                      or display.
                    </span>
                  </div>
                </div>
                <div className="repair-feature">
                  <div className="repair-icon" aria-hidden="true">
                    🔧
                  </div>
                  <div>
                    <h4>Stand-Alone Weber / Traeger</h4>
                    <span className="prominent-price">
                      <span>$149</span> Service Visit
                    </span>
                    <p>
                      Includes travel, diagnosis, and up to 30 minutes of straightforward
                      on-site repair labor. Parts are additional.
                    </p>
                    <span className="fine-print">
                      Additional labor billed at $35 per 15 minutes when needed.
                    </span>
                  </div>
                </div>
                <div className="repair-feature">
                  <div className="repair-icon" aria-hidden="true">
                    ⚙️
                  </div>
                  <div>
                    <h4>Full Weber &amp; Traeger Service</h4>
                    <p>
                      We repair Weber and Traeger igniters, burners, regulators, augers,
                      fans, hot rods, RTD probes, wiring, control boards, controllers, and
                      digital displays.
                    </p>
                  </div>
                </div>
                <div className="repair-feature">
                  <div className="repair-icon" aria-hidden="true">
                    📦
                  </div>
                  <div>
                    <h4>Parts &amp; Return Visits</h4>
                    <span className="prominent-price">
                      <span>$99+</span> Return Install
                    </span>
                    <p>
                      If a non-stock part must be ordered, return installation starts at
                      $99 plus parts. Non-Weber and non-Traeger repairs are limited or
                      quoted before work begins.
                    </p>
                    <span className="fine-print">
                      Digital controllers, displays, circuit boards, and app/Wi-Fi
                      troubleshooting are standard service only for Weber and Traeger.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-box-dark reveal">
            <h3>Not Sure Why Your Grill Won’t Light?</h3>
            <p>
              Book a <strong>deep clean</strong> when the grill is dirty, slow to heat, or
              unreliable. Many ignition, low-flame, and heat problems are caused or
              worsened by grease, blocked burners, dirty firepots, and airflow issues. We
              diagnose while we clean and give you a clear quote before ordering parts.
            </p>
          </div>
        </section>
      </div>

      {/* REVIEWS + CTA */}
      <div className="reviews-wrapper">
        <section className="reviews-section" aria-label="Customer reviews">
          <div className="reviews-container">
            <h2 className="reviews-heading">Customer Reviews</h2>
            <p className="reviews-sub">
              5-star service from homeowners across Omaha and Lincoln.
            </p>
            <div className="reviews-grid">
              <article className="review-card">
                <div className="review-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review-text">
                  “Great service and work on my Weber propane grill.”
                </p>
                <div className="review-author">Brad Hedrick</div>
              </article>
              <article className="review-card">
                <div className="review-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review-text">
                  “Very meticulous in cleaning the grill. Every inch was inspected and
                  cleaned very well… Couldn&apos;t ask for better communication and work.
                  Excellent job!”
                </p>
                <div className="review-author">Teresa Dills</div>
              </article>
              <article className="review-card">
                <div className="review-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review-text">
                  “Brennan was great! Great service all around and did a great job on my
                  grill. Very thorough… I would highly recommend this company.”
                </p>
                <div className="review-author">Chris Wraith</div>
              </article>
            </div>
            <p className="reviews-more">
              <a
                href={site.social.nicejob}
                target="_blank"
                rel="noopener noreferrer"
              >
                See more reviews on NiceJob →
              </a>
            </p>
          </div>
        </section>

        <section className="cta-section" aria-label="Schedule now">
          <div className="cta-container">
            <h2 className="cta-title">Ready for a Grill That Performs Like New?</h2>
            <p className="cta-subtitle">
              Book your appointment today and experience the Husker difference.
            </p>
            <Link href={site.bookingPath} className="btn-schedule">
              Schedule Now
            </Link>
          </div>
        </section>
      </div>

      {/* DIFFERENCE */}
      <section className="why-husker-section">
        <div className="why-husker-container">
          <div className="why-husker-header reveal">
            <span className="sub-text">The Husker Difference</span>
            <h2>Do It Once. Do It Right.</h2>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card them reveal">
              <span className="card-label">The Other Guys</span>
              <h3>Cleaning Only</h3>
              <ul>
                <li>Surface-level cleaning without full firebox disassembly</li>
                <li>Burners often left in place, trapping chemicals and moisture</li>
                <li>No repair capability if ignition or calibration issues exist</li>
                <li>If repairs are needed later, you pay a separate trip charge</li>
              </ul>
            </div>
            <div className="comparison-card us reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="card-label">Husker Grill</span>
              <h3>Clean + Repair</h3>
              <ul>
                <li>Full firebox disassembly for a complete deep clean</li>
                <li>All components removed, soaked, and properly treated</li>
                <li>Certified repair technician on every job</li>
                <li>Repairs handled same visit—no extra trip charge</li>
              </ul>
            </div>
          </div>

          <div className="cost-comparison reveal">
            <div className="cost-comparison-text">
              <h3>The Real Cost Comparison</h3>
              <p>
                When you factor in potential repairs, hiring Husker Grill from the start
                saves money and guarantees your grill works perfectly.
              </p>
            </div>
            <div className="cost-breakdown">
              <div className="cost-item them">
                <span className="price">$249–498</span>
                <span className="label">The Other Guys</span>
                <span className="range">Cleaning + separate repair trip</span>
              </div>
              <div className="vs-divider">VS</div>
              <div className="cost-item us">
                <span className="price">$299+</span>
                <span className="label">Husker Grill</span>
                <span className="range">Deep clean + repairs included</span>
              </div>
            </div>
          </div>

          <div className="tagline reveal">
            <p>&quot;One company. One visit. Guaranteed results.&quot;</p>
          </div>
        </div>
      </section>

      {/* SCIENCE + AREAS + FAQ */}
      <div className="husker-bottom-wrap">
        <section className="fade-back-to-dark">
          <div className="reveal">
            <p className="eyebrow muted">Uncompromising Standards</p>
            <h2>The Science of Clean: Lincoln &amp; Omaha Grill Cleaning</h2>
          </div>
        </section>

        <section className="pro-section" aria-label="Our cleaning standards">
          <div className="pro-grid">
            <div className="pro-card reveal">
              <h3>Beyond the Scrape</h3>
              <p>
                Years of grease and carbon build up in areas you simply can&apos;t access
                without full disassembly. We restore every hidden nook.
              </p>
            </div>
            <div className="pro-card reveal">
              <h3>Specialized Arsenal</h3>
              <p>
                Forget the sponge. We utilize industrial steam wands and food-safe
                degreasers designed for baked-on grime.
              </p>
            </div>
            <div className="pro-card highlight reveal">
              <h3>The Precision Bath</h3>
              <p>
                Our truck-mounted heated bath dissolves stubborn creosote and carbon,
                restoring parts to showroom quality.
              </p>
            </div>
            <div className="pro-card highlight reveal">
              <h3>Hospital-Grade Sanitation</h3>
              <p>
                Our 10-bar steam cleaner delivers pressurized, food-safe heat that
                sanitizes every surface. We eliminate mouse feces, disease-carrying
                bacteria, and foodborne pathogens that basic chemical wipes and scrapes
                simply cannot reach.
              </p>
            </div>
            <div className="pro-card reveal">
              <h3>Pellet Excellence</h3>
              <p>
                For Traegers and smokers, we meticulously clean the auger tunnel to prevent
                jams and eliminate fire hazards.
              </p>
            </div>
            <div className="pro-card highlight reveal">
              <h3>System Integrity</h3>
              <p>
                We check for gas leaks, igniters, and burner wear. Early detection protects
                your home and family.
              </p>
            </div>
            <div className="pro-card reveal">
              <h3>The Professional Edge</h3>
              <p>
                Deep cleaning is a back-breaking mess. We handle the dirty work; you focus
                on the masterpiece.
              </p>
            </div>
          </div>
        </section>

        <section className="service-areas-section" aria-labelledby="areas-heading">
          <div className="service-areas-container">
            <div className="service-areas-header reveal">
              <p className="eyebrow gold">Service Territory</p>
              <h2 id="areas-heading">Neighborhoods We Serve</h2>
              <p>
                Premium grill restoration delivered to the finest communities across the
                Omaha and Lincoln metros.
              </p>
            </div>

            <div className="locations-grid">
              <div className="location-card reveal">
                <div className="location-header">
                  <div className="location-icon" aria-hidden="true">
                    🏙️
                  </div>
                  <h3>Omaha Metro</h3>
                </div>
                <div className="neighborhoods-list">
                  {omahaNeighborhoods.map((n) => (
                    <span className="neighborhood-tag" key={n}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="location-card reveal">
                <div className="location-header">
                  <div className="location-icon" aria-hidden="true">
                    🌾
                  </div>
                  <h3>Lincoln Metro</h3>
                </div>
                <div className="neighborhoods-list">
                  {lincolnNeighborhoods.map((n) => (
                    <span className="neighborhood-tag" key={n}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="service-cta reveal">
              <p>Don&apos;t see your neighborhood? We service custom estates throughout the region.</p>
              <Link href={site.bookingPath} className="btn-prestige-sm">
                Request Service
              </Link>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="reveal">
            <h2>Experience the Pinnacle of Lincoln &amp; Omaha Grill Cleaning</h2>
            <p>
              Join our exclusive Annual Care program and ensure your grill is always
              pristine and ready for the perfect sear.
            </p>
            <Link href={site.bookingPath} className="btn-prestige">
              Consult with an Expert
            </Link>
            <p className="closing-note">
              We handle the dirty work; you handle the masterpiece.
            </p>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="reveal">
            Frequently Asked Questions
          </h2>
          <div className="reveal">
            {faqs.map((item, i) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-question">
                  {i + 1}. {item.q}
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
