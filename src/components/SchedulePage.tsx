import Link from "next/link";
import { site } from "@/lib/site";

const PERKS = [
  "No payment due today",
  "No one needs to be home",
  "Secure online invoice after service",
] as const;

const WAYS = [
  {
    badge: "Fastest option",
    title: "Book Online",
    body: "See available appointments and choose the time that works best for you. No phone call is needed.",
    cta: "View Available Times",
    href: site.bookingUrl,
    external: true,
    note: "Opens our secure Housecall Pro booking page in a new window.",
  },
  {
    badge: "Best for questions",
    title: "Call Us",
    body: "Not sure what service your grill needs? Call us and we will help you choose the right next step.",
    cta: `Call ${site.phoneDisplay}`,
    href: `tel:${site.phoneTel}`,
    external: false,
    note: "On a phone, tap the button to call.",
  },
  {
    badge: "Best for photos",
    title: "Email Us",
    body: "Send grill photos, model information, or a detailed question whenever it is convenient for you.",
    cta: "Open an Email",
    href: `mailto:${site.email}?subject=${encodeURIComponent("Grill service question / photos")}`,
    external: false,
    note: site.email,
  },
] as const;

const CONVENIENCES = [
  {
    title: "Home access not required",
    body: "We only need a clear route to the grill.",
  },
  {
    title: "Pay after completion",
    body: "Your invoice is emailed after the work is done.",
  },
  {
    title: "Simple from start to finish",
    body: "Choose a time, give us access, and we handle the rest.",
  },
] as const;

const WHY_BOOK = [
  "You can reserve a convenient appointment without making a call.",
  "You do not need to pay anything at the time of booking.",
  "You do not need to rearrange your day or remain home during service.",
  "You can send photos or ask questions before committing to a time.",
] as const;

const AFTER = [
  {
    n: "01",
    title: "Choose your appointment",
    body: "Select an available date and provide the basic service details.",
  },
  {
    n: "02",
    title: "Give us grill access",
    body: "Make sure we can reach the grill and a nearby working outlet.",
  },
  {
    n: "03",
    title: "Pay securely after service",
    body: "We email your invoice after the work has been completed.",
  },
] as const;

const NEED = [
  {
    n: "01",
    title: "Access to your grill",
    body: "No one needs to be home as long as we can reach the grill without going through the house.",
  },
  {
    n: "02",
    title: "A nearby outlet",
    body: "We bring extension cords, but the working outlet should be on the same side of the house as the grill.",
  },
  {
    n: "03",
    title: "Allergy information",
    body: "Tell us about household allergies to avocado oil, used for seasoning, or citrus, used in our cleaner base.",
  },
] as const;

export const SCHEDULE_FAQS = [
  {
    q: "Do I need to be home during the appointment?",
    a: "No. As long as we can reach the grill without going through the house and have access to a working outlet, you can go about your day.",
  },
  {
    q: "Do I have to pay when I book?",
    a: "No. We send an email invoice after the work is complete, and you can pay securely online.",
  },
  {
    q: "What should I do if I have questions or photos?",
    a: `Call us at ${site.phoneDisplay} or email photos and details to ${site.email}. We are happy to help before you choose an appointment.`,
  },
  {
    q: "What allergy information should I share?",
    a: "Please tell us if anyone in the household has an allergy to avocado oil, which we use for seasoning, or citrus, which is the base of our cleaner.",
  },
] as const;

function BookLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={site.bookingUrl}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function SchedulePage() {
  return (
    <div className="sch-page">
      {/* Hero */}
      <header className="sch-hero">
        <div className="sch-inner sch-hero-inner">
          <p className="eyebrow gold">Professional Grill Cleaning</p>
          <h1>Your grill is ready for a reset. Choose your time.</h1>
          <p className="sch-lede">
            You have already done the research. Now make the easy part easy: reserve your
            preferred appointment online, call with a question, or email us photos of your
            grill.
          </p>
          <div className="sch-hero-actions">
            <BookLink className="btn-prestige">Reserve My Appointment</BookLink>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
          <ul className="sch-perks" aria-label="Scheduling benefits">
            {PERKS.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Three ways */}
      <section className="sch-ways" aria-labelledby="sch-ways-title">
        <div className="sch-inner">
          <p className="eyebrow gold">Choose what works for you</p>
          <h2 id="sch-ways-title">Three easy ways to schedule</h2>
          <p className="sch-section-lede">
            Book instantly, speak with us directly, or send photos and details by email.
          </p>
          <div className="sch-ways-grid">
            {WAYS.map((way) => (
              <article key={way.title} className="sch-way-card">
                <p className="sch-way-badge">{way.badge}</p>
                <h3>{way.title}</h3>
                <p>{way.body}</p>
                {way.external ? (
                  <a
                    href={way.href}
                    className="btn-prestige sch-way-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {way.cta}
                  </a>
                ) : (
                  <a href={way.href} className="btn-outline-light sch-way-cta">
                    {way.cta}
                  </a>
                )}
                <p className="sch-way-note">{way.note}</p>
              </article>
            ))}
          </div>
          <div className="sch-conveniences">
            {CONVENIENCES.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Almost there */}
      <section className="sch-almost" aria-labelledby="sch-almost-title">
        <div className="sch-inner">
          <p className="eyebrow gold">Almost there</p>
          <h2 id="sch-almost-title">
            One appointment stands between you and a grill you are proud to use again
          </h2>
          <p className="sch-section-lede">
            We designed the process so scheduling feels low-pressure and the service day feels
            effortless.
          </p>

          <div className="sch-two-col">
            <div>
              <h3>Why homeowners book now instead of putting it off</h3>
              <p>
                The grease, buildup, and neglected maintenance do not improve with time.
                Scheduling now gets the project off your list and gives you a clear plan.
              </p>
              <ul className="sch-check-list">
                {WHY_BOOK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>What happens after you book</h3>
              <ol className="sch-steps">
                {AFTER.map((step) => (
                  <li key={step.n}>
                    <span className="sch-step-n" aria-hidden="true">
                      {step.n}
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="sch-need" aria-labelledby="sch-need-title">
        <div className="sch-inner">
          <p className="eyebrow gold">Before your appointment</p>
          <h2 id="sch-need-title">What we need from you</h2>
          <p className="sch-section-lede">
            Three simple details help us arrive ready to work.
          </p>
          <div className="sch-need-grid">
            {NEED.map((item) => (
              <article key={item.n}>
                <span className="sch-step-n" aria-hidden="true">
                  {item.n}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="sch-heads-up">
            <p>
              <strong>A heads up:</strong> Our steam cleaner takes time to heat up, and we
              like to inspect the grill and take a “before” photo right away. If you come out
              to meet us, we will be ready with any questions. You are also welcome to watch
              the process.{" "}
              <strong>
                Fair warning: you might learn more about your grill than you ever wanted to
                know.
              </strong>
            </p>
            <p>
              That is it. We email your invoice after the work is done, and you can pay
              securely online.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sch-faq" aria-labelledby="sch-faq-title" id="faq">
        <div className="sch-inner">
          <p className="eyebrow gold">Common final questions</p>
          <h2 id="sch-faq-title">Everything you need to feel ready</h2>
          <div className="sch-faq-list">
            {SCHEDULE_FAQS.map((item) => (
              <details key={item.q} className="sch-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="sch-faq-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="sch-proof" aria-labelledby="sch-proof-title">
        <div className="sch-inner sch-proof-inner">
          <div>
            <p className="eyebrow gold">See what customers are saying</p>
            <h2 id="sch-proof-title">Rated outstanding across Omaha &amp; Lincoln</h2>
            <p>
              Real reviews from homeowners after deep cleans, maintenance visits, and
              repairs.
            </p>
            <a
              href={site.social.nicejob}
              className="btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read NiceJob Reviews
            </a>
          </div>
          <div className="sch-proof-links">
            <Link href="/see-our-work">See our completed work →</Link>
            <Link href="/pricing">Review pricing →</Link>
            <Link href="/what-does-grill-cleaning-include">50-step process →</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="sch-closing" aria-labelledby="sch-closing-title">
        <div className="sch-inner sch-closing-inner">
          <h2 id="sch-closing-title">Ready to get your grill back?</h2>
          <p>
            Reserve your preferred appointment now. There is no payment due today, and you
            can contact us first if there is anything you want to clarify.
          </p>
          <div className="sch-hero-actions">
            <BookLink className="btn-prestige">Reserve My Appointment</BookLink>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Grill service question")}`}
              className="btn-outline-light"
            >
              Email a Question
            </a>
          </div>
          <p className="sch-closing-phone">
            Prefer to talk?{" "}
            <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
