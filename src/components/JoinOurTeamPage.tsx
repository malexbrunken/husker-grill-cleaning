import { site } from "@/lib/site";

const INTRODUCE_MAILTO = (() => {
  const subject = encodeURIComponent("Join Our Team — Introduce Yourself");
  const body = encodeURIComponent(
    [
      "Hi Husker Grill Cleaning team,",
      "",
      "I'd like to introduce myself.",
      "",
      "Name:",
      "Location / area:",
      "Typical availability:",
      "What interests me about Husker Grill Cleaning:",
      "",
      "If territory building: market of interest and why:",
      "",
      "Thanks,",
    ].join("\n"),
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
})();

const QUALITIES = [
  {
    title: "Attention to Detail",
    body: 'Our customers notice the difference between “clean enough” and exceptional. So do we. The right technician takes pride in the corners other people miss, notices when something doesn\'t look right, and does not need someone standing over their shoulder to care about the finished result.',
  },
  {
    title: "Customer Service",
    body: "You should genuinely enjoy taking care of people. That means arriving professionally, communicating clearly, treating the customer's home with respect, answering questions, and looking for small opportunities to make their experience better.",
  },
] as const;

const BONUSES = [
  {
    title: "5-star review bonuses",
    body: "Great work earns great reviews — and you share in that upside.",
  },
  {
    title: "Customer referral bonuses",
    body: "When customers send friends your way, you benefit.",
  },
  {
    title: "10% on jobs you generate",
    body: "When you bring us a new customer, we share the money we would otherwise spend on marketing.",
  },
] as const;

const FLEX_OPTIONS = [
  "Several days per week",
  "One or two days per week",
  "Weekends",
  "Seasonal availability",
  "Work around another career, business, or school schedule",
] as const;

const THRIVES = [
  {
    title: "Care about the little things",
    body: "You notice details other people overlook.",
  },
  {
    title: "Like making customers happy",
    body: "A five-star review feels personal because you know you earned it.",
  },
  {
    title: "Take pride in hands-on work",
    body: "This job involves tools, grease, carbon buildup, equipment, and plenty of time outdoors.",
  },
  {
    title: "Can work independently",
    body: "Once trained, you can manage your job without constant supervision.",
  },
  {
    title: "Communicate well",
    body: "You are comfortable talking with homeowners and explaining what you found.",
  },
  {
    title: "Treat people's homes with respect",
    body: "Many of our customers have invested significantly in their homes and outdoor kitchens. We behave accordingly.",
  },
  {
    title: "Are naturally curious about how things work",
    body: "Mechanical experience isn't required, but wanting to understand the equipment you service will take you far.",
  },
  {
    title: "Want your performance to matter",
    body: "Excellent work should create more opportunity.",
  },
] as const;

const TERRITORIES = [
  {
    title: "Council Bluffs & Southwest Iowa",
    body: "Cross-river growth with strong multi-family and residential demand.",
  },
  {
    title: "Central Omaha · Downtown · Bellevue",
    body: "Dense metro coverage with room to deepen local relationships.",
  },
  {
    title: "York · Seward · Grand Island",
    body: "Expand the brand into central Nebraska communities that value craftsmanship.",
  },
] as const;

export function JoinOurTeamPage() {
  return (
    <div className="jot-page">
      {/* Hero */}
      <section className="jot-hero" aria-labelledby="jot-hero-title">
        <div className="jot-inner jot-hero-inner">
          <p className="eyebrow gold">Careers</p>
          <h1 id="jot-hero-title">Join Our Team</h1>
          <p className="jot-hero-kicker">Build Something With Us.</p>
          <p className="jot-lede">
            Husker Grill Cleaning is growing — carefully. We&apos;re not interested in
            constantly hiring people just to fill a schedule. We&apos;d rather meet the
            right people, train them well, reward great work, and create opportunities as
            our customer base expands.
          </p>
          <div className="jot-hero-note">
            <p>
              That means we may not always have a traditional full-time opening available.
              <strong> But we are always interested in hearing from exceptional people.</strong>
            </p>
          </div>
          <p className="jot-lede jot-lede-tight">
            Whether you&apos;re looking for flexible, hands-on work with strong
            performance-based pay or you&apos;re interested in helping us build Husker
            Grill Cleaning in a new territory, we&apos;d like to hear from you.
          </p>
          <div className="jot-actions">
            <a href={INTRODUCE_MAILTO} className="btn-prestige">
              Introduce Yourself
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-outline-light">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="jot-section" aria-labelledby="jot-tech-title">
        <div className="jot-inner">
          <p className="eyebrow gold">Grill Care Technicians</p>
          <h2 id="jot-tech-title">Customer service first. Technical skill second.</h2>
          <div className="jot-callout">
            <p className="jot-callout-label">Here&apos;s the secret behind Husker Grill Cleaning</p>
            <p className="jot-callout-body">
              We are a <strong>customer service company first</strong> and a grill service
              company second.
            </p>
          </div>
          <div className="jot-prose">
            <p>
              We genuinely believe we have some of the best customers in Nebraska and
              western Iowa. They trust us in their homes, recommend us to their friends,
              leave us incredible reviews, and help our business grow.
            </p>
            <p>We take that seriously.</p>
            <p>
              Our job is not just to leave behind a dramatically cleaner grill. It is to
              make every customer feel like choosing Husker Grill Cleaning was one of the
              easiest and best service decisions they made all year.
            </p>
            <p>
              That means the two qualities we care about most are:
            </p>
          </div>

          <div className="jot-pillars">
            {QUALITIES.map((q) => (
              <article key={q.title} className="jot-pillar">
                <h3>{q.title}</h3>
                <p>{q.body}</p>
              </article>
            ))}
          </div>

          <p className="jot-love">
            Our customers show us a lot of love.{" "}
            <strong>We expect our team to show it right back.</strong>
          </p>
        </div>
      </section>

      {/* Character */}
      <section className="jot-section jot-section-alt" aria-labelledby="jot-character-title">
        <div className="jot-inner jot-split">
          <div>
            <p className="eyebrow gold">Who We Hire</p>
            <h2 id="jot-character-title">Experience Helps. Character Matters More.</h2>
          </div>
          <div className="jot-prose">
            <p>
              Previous experience with grills, appliances, mechanical repair, small engines,
              tools, maintenance, automotive work, or other hands-on trades is definitely
              helpful.
            </p>
            <p className="jot-emphasis">It is <strong>not required</strong>.</p>
            <p>
              We can teach you our grill-cleaning process. We can teach you equipment,
              common grill components, service procedures, and the technical side of the
              work.
            </p>
            <p>
              What is much harder to teach is someone to care deeply about the quality of
              their work and the experience of the customer.
            </p>
            <p>
              If you&apos;re mechanically inclined, great. If you&apos;ve never repaired a
              grill but you&apos;re meticulous, dependable, personable, and eager to learn,
              we still want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Pay */}
      <section className="jot-section" aria-labelledby="jot-pay-title" id="pay">
        <div className="jot-inner">
          <p className="eyebrow gold">Compensation</p>
          <h2 id="jot-pay-title">Performance-Based Pay</h2>
          <p className="jot-section-lede">Skilled work should reward skill.</p>
          <p className="jot-prose-block">
            Our technicians are compensated based on completed work rather than simply how
            long a job takes.
          </p>

          <article className="jot-pay-card">
            <div className="jot-pay-card-top">
              <div>
                <span className="seasonal-label gold">Typical base compensation</span>
                <p className="jot-pay-amount">
                  $125–$150 <small>per completed grill</small>
                </p>
                <p className="jot-pay-note">
                  Pedestal grills typically pay toward the lower end of that range, while
                  built-in grills pay more.
                </p>
                <p className="jot-pay-note">
                  Most grill cleanings take approximately three hours, although actual job
                  times vary depending on the grill, its condition, and the services
                  required.
                </p>
              </div>
            </div>
            <h3 className="jot-bonus-heading">Technicians can also earn additional compensation through:</h3>
            <div className="jot-bonus-grid">
              {BONUSES.map((b) => (
                <article key={b.title} className="jot-bonus-card">
                  <h4>{b.title}</h4>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
            <p className="jot-pay-footer">
              You help Husker Grill Cleaning grow. <strong>You participate in the upside.</strong>
            </p>
          </article>
        </div>
      </section>

      {/* Flexibility */}
      <section className="jot-section jot-section-alt" aria-labelledby="jot-flex-title">
        <div className="jot-inner">
          <p className="eyebrow gold">Schedule</p>
          <h2 id="jot-flex-title">Work That Fits Your Life</h2>
          <div className="jot-prose">
            <p>
              We don&apos;t believe every great technician needs a traditional
              Monday-through-Friday schedule.
            </p>
            <p>
              Depending on customer demand and territory availability, technicians can tell
              us the days and times they are available to work.
            </p>
          </div>
          <ul className="jot-flex-list">
            {FLEX_OPTIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="jot-prose">
            <p>
              We care much more about whether you are dependable when you commit to a job
              than whether you want a conventional workweek.
            </p>
            <p>
              Because our business is seasonal and demand varies by territory, we do not
              guarantee a specific number of jobs or hours. For the right person, however,
              there is room to grow alongside us.
            </p>
          </div>
        </div>
      </section>

      {/* Who thrives */}
      <section className="jot-section" aria-labelledby="jot-fit-title">
        <div className="jot-inner">
          <p className="eyebrow gold">Culture Fit</p>
          <h2 id="jot-fit-title">Who Thrives at Husker Grill Cleaning?</h2>
          <p className="jot-section-lede">You may be a great fit if you:</p>
          <div className="jot-fit-grid">
            {THRIVES.map((item) => (
              <article key={item.title} className="jot-fit-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section className="jot-section jot-section-alt" aria-labelledby="jot-territory-title">
        <div className="jot-inner">
          <p className="eyebrow gold">Entrepreneurial Path</p>
          <h2 id="jot-territory-title">Not Looking for Just a Job?</h2>
          <p className="jot-hero-kicker jot-kicker-sm">Build a Territory.</p>
          <div className="jot-prose">
            <p>
              We are also interested in meeting entrepreneurial people who would like to
              help build Husker Grill Cleaning in a new market.
            </p>
          </div>

          <p className="jot-territory-label">Current areas of interest include:</p>
          <div className="jot-territory-grid">
            {TERRITORIES.map((t) => (
              <article key={t.title} className="jot-territory-card">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </article>
            ))}
          </div>

          <div className="jot-prose jot-prose-top">
            <p>
              A territory opportunity is different from a normal technician role. The right
              person could combine hands-on service with customer development, local
              relationships, referrals, community marketing, and eventually greater
              responsibility for growing that market.
            </p>
            <p>
              Husker Grill Cleaning brings the brand, systems, service process, training,
              marketing experience, and operational support.{" "}
              <strong>You bring an ownership mentality and local relationships.</strong>
            </p>
            <p>
              We&apos;re intentionally keeping the structure flexible because the right
              opportunity may look different depending on the person and the market.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="jot-closing" aria-labelledby="jot-closing-title">
        <div className="jot-inner jot-closing-inner">
          <p className="eyebrow gold">Our Standard</p>
          <h2 id="jot-closing-title">We Would Rather Wait for the Right Person.</h2>
          <p>
            We don&apos;t want to build a large team for the sake of being large. We want a
            small group of people who take tremendous pride in their work and genuinely care
            about the people they serve.
          </p>
          <p>
            That&apos;s how we&apos;ve built our reputation. And that&apos;s how we intend
            to protect it as we grow.
          </p>
          <p className="jot-closing-soft">
            Some opportunities may be available now. Others may exist because the right
            person introduces themselves.
          </p>

          <div className="jot-closing-cta">
            <h3>Think you might fit?</h3>
            <p>
              Tell us a little about yourself, where you&apos;re located, your typical
              availability, and what interests you about Husker Grill Cleaning.
            </p>
            <p>
              If you&apos;re interested in helping build a new territory, tell us which
              market interests you and why.
            </p>
            <div className="jot-actions">
              <a href={INTRODUCE_MAILTO} className="btn-prestige">
                Introduce Yourself
              </a>
              <a href={`mailto:${site.email}`} className="btn-outline-light">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
