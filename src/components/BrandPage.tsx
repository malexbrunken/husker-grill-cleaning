import Link from "next/link";
import {
  BRAND_PRICING,
  brandDirectAnswer,
  brandLongTails,
  brandPath,
  buildBrandFaqs,
  grillBrands,
  type GrillBrand,
} from "@/lib/grill-brands";
import { site } from "@/lib/site";

const CITIES = ["Omaha", "Lincoln"] as const;

export function BrandPage({ brand }: { brand: GrillBrand }) {
  const faqs = buildBrandFaqs(brand);
  const answer = brandDirectAnswer(brand);
  const otherBrands = grillBrands.filter((b) => b.slug !== brand.slug);
  const sampleTails = brandLongTails(brand).slice(0, 8);

  return (
    <article className="bp-page">
      {/* HERO + direct answer (AEO) */}
      <header className="bp-hero">
        <div className="bp-inner bp-hero-grid">
          <div>
            <p className="eyebrow gold">
              {brand.name} · Omaha &amp; Lincoln, NE
            </p>
            <h1>
              {brand.name} Grill Cleaning &amp; Repair in Omaha &amp; Lincoln
            </h1>
            <p className="bp-entity">{brand.entityLine}</p>

            <div className="bp-answer" data-speakable="true">
              <p className="bp-answer-label">Quick answer</p>
              <p className="bp-answer-text">{answer}</p>
            </div>

            <div className="bp-hero-actions">
              <a
                className="btn-primary"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book {brand.name} Service
              </a>
              <a className="btn-secondary" href={site.phoneTel}>
                Call {site.phoneDisplay}
              </a>
              <Link className="btn-secondary" href="/grill-repairs">
                All grill repairs
              </Link>
            </div>

            <ul className="bp-hero-stats">
              <li>
                <strong>${BRAND_PRICING.repairWithClean}+</strong>
                <span>Repair with clean</span>
              </li>
              <li>
                <strong>${BRAND_PRICING.repairStandalone}</strong>
                <span>Stand-alone visit</span>
              </li>
              <li>
                <strong>${BRAND_PRICING.freestandingDeep}</strong>
                <span>Freestanding deep clean</span>
              </li>
            </ul>
          </div>

          <aside className="bp-hero-card" aria-label="Service snapshot">
            <p className="bp-card-kicker">We service</p>
            <h2 className="bp-card-title">{brand.name} models</h2>
            <ul className="bp-model-list">
              {brand.models.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="bp-card-meta">
              Fuel: {brand.fuelTypes.join(" · ")}
              <br />
              Service level:{" "}
              {brand.serviceLevel === "full"
                ? "Full-service (incl. many electronics)"
                : brand.serviceLevel === "advanced"
                  ? "Advanced mechanical / heat system"
                  : brand.serviceLevel === "premium-builtin"
                    ? "Premium built-in & freestanding"
                    : "Deep clean + mechanical repair"}
            </p>
            <div className="bp-city-pills" aria-label="Cities served">
              {CITIES.map((c) => (
                <span key={c} className="bp-pill">
                  {c}, NE
                </span>
              ))}
            </div>
          </aside>
        </div>
      </header>

      {/* Key takeaways for AI extraction */}
      <section className="bp-takeaways" aria-labelledby="bp-takeaways-title">
        <div className="bp-inner">
          <h2 id="bp-takeaways-title">
            Key facts: {brand.name} service in Nebraska
          </h2>
          <ul className="bp-takeaway-grid">
            <li>
              <strong>Where:</strong> Mobile service across Omaha and Lincoln
              metros (and nearby communities).
            </li>
            <li>
              <strong>What:</strong> 50-step deep clean plus repair for common{" "}
              {brand.name} failures when you book cleaning or a repair visit.
            </li>
            <li>
              <strong>Top issue:</strong>{" "}
              {brand.problems[0]?.symptom ?? "ignition problems"} — often fixed
              same visit after cleaning blocked ports and testing ignition.
            </li>
            <li>
              <strong>Price anchors:</strong> Deep clean from $
              {BRAND_PRICING.freestandingDeep} freestanding / $
              {BRAND_PRICING.builtInDeep} built-in; repair with clean $
              {BRAND_PRICING.repairWithClean} + parts; stand-alone $
              {BRAND_PRICING.repairStandalone} + parts.
            </li>
            <li>
              <strong>Rule of thumb:</strong> If we clean it, we can repair it
              for typical mechanical issues—parts quoted before install.
            </li>
            <li>
              <strong>Contact:</strong> {site.phoneDisplay} · {site.email}
            </li>
          </ul>
        </div>
      </section>

      {/* Local blurb */}
      <section className="bp-local" aria-labelledby="bp-local-title">
        <div className="bp-inner bp-split">
          <div>
            <p className="eyebrow gold">Local expertise</p>
            <h2 id="bp-local-title">
              {brand.name} grills in Omaha &amp; Lincoln
            </h2>
            <p className="bp-lede">{brand.localBlurb}</p>
            <p className="bp-lede">
              Searches like “{brand.name.toLowerCase()} grill not igniting” or
              “{brand.name.toLowerCase()} grill repair Omaha” usually mean the
              same job: diagnose spark vs gas (or pellets vs hot rod), clean the
              failure points, and replace worn parts. We do that at your home in
              both metros.
            </p>
          </div>
          <div className="bp-local-links">
            <h3>Nearby service pages</h3>
            <ul>
              <li>
                <Link href="/professional-grill-cleaning-repair-services-in-omaha-nebraska">
                  Omaha metro overview
                </Link>
              </li>
              <li>
                <Link href="/lincoln-nebraska-grill-cleaning">
                  Lincoln grill cleaning
                </Link>
              </li>
              <li>
                <Link href="/grill-repairs">Grill repairs &amp; pricing</Link>
              </li>
              <li>
                <Link href="/pricing">Full cleaning pricing</Link>
              </li>
              <li>
                <Link href="/what-does-grill-cleaning-include">
                  What cleaning includes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problems — H2s match long-tails */}
      <section className="bp-problems" aria-labelledby="bp-problems-title">
        <div className="bp-inner">
          <p className="eyebrow gold">Common problems</p>
          <h2 id="bp-problems-title">
            Why your {brand.name} grill is not working
          </h2>
          <p className="bp-section-lede">
            These are the issues Omaha and Lincoln owners report most often. Each
            block is written so you (and search/AI tools) get a clear cause list
            and what a professional mobile visit does next.
          </p>
          <div className="bp-problem-grid">
            {brand.problems.map((p) => (
              <article key={p.symptom} className="bp-problem-card">
                <h3>
                  {brand.name} grill {p.symptom}
                </h3>
                <p className="bp-problem-where">
                  Searched in Omaha, NE · Lincoln, NE
                </p>
                <h4>Common causes</h4>
                <ul>
                  {p.causes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <h4>What we do</h4>
                <p>{p.resolution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bp-process" aria-labelledby="bp-process-title">
        <div className="bp-inner">
          <p className="eyebrow gold">On-site process</p>
          <h2 id="bp-process-title">
            How {brand.name} cleaning &amp; repair works
          </h2>
          <ol className="bp-steps">
            <li>
              <strong>Book online or call.</strong> Tell us your {brand.name}{" "}
              model and symptoms (for example, not igniting or low flame).
            </li>
            <li>
              <strong>We come to you in Omaha or Lincoln.</strong> No need to
              trailer the grill unless a rare shop job is required.
            </li>
            <li>
              <strong>50-step deep clean when scheduled.</strong> Grease and
              carbon are removed so diagnosis is accurate—not masked by buildup.
            </li>
            <li>
              <strong>Diagnose ignition, fuel, and heat systems.</strong> We
              explain findings in plain language before any paid parts work.
            </li>
            <li>
              <strong>Repair with quoted parts.</strong> Cleaning customers: $
              {BRAND_PRICING.repairWithClean} labor + parts when completed same
              visit. Additional diagnosis labor billed at $
              {BRAND_PRICING.laborHourly}/hour after the included window.
            </li>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="bp-pricing" aria-labelledby="bp-pricing-title">
        <div className="bp-inner">
          <p className="eyebrow gold">Transparent pricing</p>
          <h2 id="bp-pricing-title">
            {brand.name} grill cleaning &amp; repair cost (Omaha &amp; Lincoln)
          </h2>
          <div className="bp-price-table-wrap">
            <table className="bp-price-table">
              <caption className="sr-only">
                {brand.name} service prices in Omaha and Lincoln Nebraska
              </caption>
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Freestanding {brand.name} deep clean</td>
                  <td>${BRAND_PRICING.freestandingDeep}</td>
                </tr>
                <tr>
                  <td>Built-in {brand.name} deep clean</td>
                  <td>${BRAND_PRICING.builtInDeep}</td>
                </tr>
                <tr>
                  <td>Repair labor with deep clean</td>
                  <td>${BRAND_PRICING.repairWithClean} + parts</td>
                </tr>
                <tr>
                  <td>Stand-alone repair visit</td>
                  <td>${BRAND_PRICING.repairStandalone} + parts</td>
                </tr>
                <tr>
                  <td>Additional repair labor after diagnosis</td>
                  <td>${BRAND_PRICING.laborHourly}/hour</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="bp-price-note">
            Same menu in Omaha and Lincoln. Multi-grill visits: $50 off each
            additional grill. See{" "}
            <Link href="/pricing">full pricing</Link> and{" "}
            <Link href="/grill-repairs">repair details</Link>.
          </p>
        </div>
      </section>

      {/* Long-tail / intents strip */}
      <section className="bp-intents" aria-labelledby="bp-intents-title">
        <div className="bp-inner">
          <h2 id="bp-intents-title">
            Popular {brand.name} searches we answer locally
          </h2>
          <ul className="bp-intent-tags">
            {sampleTails.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bp-faq" aria-labelledby="bp-faq-title">
        <div className="bp-inner">
          <p className="eyebrow gold">FAQ</p>
          <h2 id="bp-faq-title">{brand.name} grill FAQ (Omaha &amp; Lincoln)</h2>
          <div className="bp-faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="bp-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other brands */}
      <section className="bp-related" aria-labelledby="bp-related-title">
        <div className="bp-inner">
          <h2 id="bp-related-title">Other grill brands we service</h2>
          <p className="bp-section-lede">
            Same mobile cleaning standard. Brand pages cover model-specific
            problems and local long-tail searches.
          </p>
          <ul className="bp-brand-cloud">
            {otherBrands.map((b) => (
              <li key={b.slug}>
                <Link href={brandPath(b)}>{b.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bp-cta" aria-labelledby="bp-cta-title">
        <div className="bp-inner bp-cta-inner">
          <h2 id="bp-cta-title">
            Book {brand.name} cleaning or repair in Omaha or Lincoln
          </h2>
          <p>
            Tell us your model and whether it will not light, runs low flame, or
            just needs a full deep clean. We will confirm fit and arrive ready to
            work.
          </p>
          <div className="bp-hero-actions">
            <a
              className="btn-primary"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule online
            </a>
            <Link className="btn-secondary" href="/schedule">
              Booking details
            </Link>
            <a className="btn-secondary" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
