import Link from "next/link";
import { site } from "@/lib/site";

const COMPARISON_ROWS = [
  {
    q: "Primary goal",
    organic: "Minimize or eliminate stronger cleaning agents",
    deep: "Remove contamination while using the least aggressive effective method",
  },
  {
    q: "Fresh surface grease",
    organic: "Often effective",
    deep: "Effective",
  },
  {
    q: "Heavy polymerized grease",
    organic:
      "Can require extensive labor and may remain if chemistry and abrasion are restricted",
    deep: "Mechanical removal, heat, soaking, and appropriate chemistry combined as needed",
  },
  {
    q: "Carbonized deposits",
    organic:
      "Mild products alone generally have limited ability to rapidly break down thick carbonized buildup",
    deep: "Scraping, scouring, steam, heated soaking, and selective decarbonization",
  },
  {
    q: "Mechanical scraping",
    organic: "Varies by provider",
    deep: "Core part of the process where safe for the surface",
  },
  {
    q: "Mechanical scouring",
    organic: "May be limited to preserve a “non-abrasive” process",
    deep: "Used where appropriate for the material and finish",
  },
  {
    q: "Full disassembly",
    organic: "Not determined by an “organic” claim",
    deep: "Components removed as necessary to access hidden contamination",
  },
  {
    q: "Burner ports",
    organic: "Results depend on whether burners are actually removed and serviced",
    deep: "Burners inspected and ports cleared appropriately",
  },
  {
    q: "Ignition components",
    organic: "Results depend on service depth",
    deep: "Electrodes and ignition areas accessed, cleaned, and inspected",
  },
  {
    q: "Gas orifices",
    organic: "Cleaning philosophy does not establish technician competence",
    deep: "Inspected carefully without altering calibrated openings",
  },
  {
    q: "Cleaner residue",
    organic: "Less aggressive chemistry may reduce rinse requirements",
    deep: "Any cleaner used is subsequently removed as part of the process",
  },
  {
    q: "Evidence of results",
    organic: "Ask to see detailed open-grill before-and-after photos",
    deep: "Judge the finished firebox, burners, components, and lid—not just the exterior",
  },
  {
    q: "Best customer question",
    organic: "“What products do you avoid?”",
    deep: "“What contamination will actually be removed?”",
  },
] as const;

const GREASE_STAGES = [
  {
    title: "Fresh grease",
    body: "Relatively soft. Surfactants, heat, and wiping can remove it efficiently.",
  },
  {
    title: "Polymerized grease",
    body: "Repeatedly heated oils form tougher films that often require substantial mechanical action.",
  },
  {
    title: "Carbonized buildup",
    body: "Advanced baked-on deposits may require scraping, scouring, heat, soaking, and selective chemical assistance.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Mechanical removal",
    body: "Scrapers, brushes, pads, and other appropriate tools physically remove accumulated material. For serious grill restoration, mechanical action is one of the most important parts of the job.",
  },
  {
    title: "Heat and dry vapor steam",
    body: "Professional steam helps loosen soils and allows technicians to clean tight areas while reducing reliance on chemical products.",
  },
  {
    title: "Surfactant-based degreasing",
    body: "Degreasers use the same broad cleaning principle that makes dish detergents effective: surfactants help separate oily contamination from a surface so it can be removed. Professional products may be more concentrated or alkaline depending on their intended application.",
  },
  {
    title: "Selective stronger chemistry when necessary",
    body: "On compatible components with severe baked-on contamination, a strong alkaline decarbonizer—such as a sodium-hydroxide or lye-based oven-cleaner-type product—may occasionally be appropriate.",
  },
  {
    title: "Removal, rinsing, and finishing",
    body: "Loosened contamination and cleaning solution are removed rather than left sitting inside the appliance. Components are cleaned, finished, and reinstalled.",
  },
  {
    title: "Reassembly and performance testing",
    body: "Cleaning should end with a working grill—not merely a shiny one. Burners, ignition, and flame performance are checked after reassembly.",
  },
] as const;

const PHOTO_CHECKS = [
  "the firebox with the cooking components removed",
  "the underside of the hood",
  "the burners",
  "flavorizer bars or heat shields",
  "grease trays and collection systems",
  "ignition areas",
  "corners and seams where grease accumulates",
  "the grill reassembled and operating afterward",
] as const;

const HIRE_QUESTIONS = [
  "Do you completely remove the burners?",
  "Do you scrape and scour baked-on carbon where appropriate?",
  "How do you address polymerized grease?",
  "Do you service clogged burner ports?",
  "Do you inspect ignition components?",
  "How do you remove cleaning products after they are used?",
  "Do you perform a flame and ignition test afterward?",
  "Can I see detailed before-and-after photos of open grills?",
] as const;

const PHILOSOPHY = [
  "Use mild methods when mild methods work.",
  "Use steam to reduce chemical dependence.",
  "Use mechanical removal because baked-on deposits require actual labor.",
  "Use stronger chemistry selectively when the contamination warrants it.",
  "Remove the cleaner and contamination before returning the grill to the customer.",
  "Then prove the result with photographs and a functional test.",
] as const;

export const ORGANIC_FAQS = [
  {
    q: "Is organic grill cleaning better?",
    a: "Not automatically. “Organic” does not tell you whether burners are removed, baked-on deposits are scraped away, ignition components are serviced, or the firebox is fully cleaned. Compare the complete process and finished result.",
  },
  {
    q: "Can chemical-free grill cleaning remove polymerized grease?",
    a: "Heat and physical abrasion can remove significant polymerized buildup, but thick deposits can require extensive scraping, scouring, or soaking. Appropriate cleaning chemistry can reduce the amount of mechanical work necessary on compatible surfaces.",
  },
  {
    q: "Does Husker Grill Cleaning use harsh chemicals?",
    a: "Most of our cleaning result comes from disassembly, mechanical cleaning, heated processes, dry vapor steam, and professional degreasers. Strong alkaline decarbonizers may be used selectively when severe contamination warrants them—not as the default solution for every surface.",
  },
  {
    q: "Are grill cleaning chemicals left inside the grill?",
    a: "They should not be. Our process is designed to remove loosened soil and cleaning solution before components are reinstalled. The grill is then reassembled and operationally checked.",
  },
  {
    q: "What should I look for in before-and-after grill cleaning photos?",
    a: "Look beyond the stainless exterior. Good evidence shows the open firebox, burners, heat shields or flavorizer bars, grease trays, hood interior, ignition area, and other difficult-to-access components.",
  },
  {
    q: "How does professional grill cleaning help burner performance?",
    a: "Heavy buildup can restrict burner ports, contaminate ignition areas, and interfere with airflow. A proper service accesses these components, removes contamination appropriately, and verifies operation after reassembly.",
  },
] as const;

export function OrganicVsDeepPage() {
  return (
    <article className="ovd-page">
      {/* Hero */}
      <header className="ovd-hero">
        <div className="ovd-inner ovd-hero-inner">
          <p className="eyebrow gold">Grill Cleaning Science</p>
          <h1>
            Is “Organic” Grill Cleaning Better? What Actually Removes Baked-On Grease
            &amp; Carbon
          </h1>
          <p className="ovd-lede">
            “Organic grill cleaning” sounds reassuring. But when choosing someone to
            service an expensive gas grill, the more useful question is not{" "}
            <em>“How natural does the process sound?”</em> It is:{" "}
            <strong>What will actually be removed from my grill—and how?</strong>
          </p>
          <p className="ovd-byline">
            Written by{" "}
            <Link href="/matthew-brunken-lincoln-ne">Matthew Brunken</Link>, Husker Grill
            Cleaning
          </p>
        </div>
      </header>

      {/* Short answer */}
      <section className="ovd-answer" aria-labelledby="ovd-answer-title">
        <div className="ovd-inner">
          <div className="ovd-answer-card">
            <p className="ovd-answer-label" id="ovd-answer-title">
              Short answer
            </p>
            <p>
              <strong>“Organic” is not a measurement of cleaning performance.</strong> A
              grill deep clean depends on some combination of{" "}
              <strong>
                disassembly, heat, mechanical scraping and scouring, appropriate cleaning
                chemistry, extraction/rinsing, and final inspection.
              </strong>{" "}
              Mild or “organic-only” products can be useful for routine grease, but heavily
              baked-on and polymerized deposits often require far more mechanical work—and
              sometimes carefully controlled professional chemistry—to actually remove them.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="ovd-section" aria-labelledby="ovd-intro-title">
        <div className="ovd-inner ovd-prose">
          <h2 id="ovd-intro-title" className="sr-only">
            Why “organic” marketing took hold
          </h2>
          <p>
            Over the past several years, a new marketing phrase has appeared in the
            grill-cleaning industry: <strong>“100% organic grill cleaning.”</strong>
          </p>
          <p>
            We understand why that sounds appealing. Nobody wants questionable cleaner
            residue left where their family cooks food. Nobody wants unnecessary chemical
            exposure. And nobody wants a technician indiscriminately spraying aggressive
            cleaners throughout an expensive outdoor appliance.
          </p>
          <p>We agree with all of that.</p>
          <p>
            Where we disagree is the idea that the word <strong>organic</strong> tells a
            homeowner whether a grill was actually cleaned well.
          </p>
          <p>
            <strong>It does not.</strong>
          </p>
          <p>
            A grill is not a kitchen counter. Inside a frequently used grill, fats, cooking
            oils, smoke, proteins, and food residue are repeatedly heated to hundreds of
            degrees. Over time, those materials can bake, oxidize, carbonize, and form
            stubborn films on metal surfaces.
          </p>
          <p>
            Eventually, what started as greasy residue can become something much closer to a
            coating.
          </p>
          <p>That changes the cleaning problem completely.</p>
        </div>
      </section>

      {/* What organic means */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-organic-title">
        <div className="ovd-inner ovd-prose">
          <p className="eyebrow gold">Definitions</p>
          <h2 id="ovd-organic-title">
            First: What Does “Organic Grill Cleaning” Actually Mean?
          </h2>
          <p>
            This is where consumers should ask a simple follow-up question:{" "}
            <strong>organic according to what standard?</strong>
          </p>
          <p>
            “Organic” has a very specific meaning in USDA agricultural-product labeling. But
            using the word to describe a grill-cleaning service does not automatically tell
            you anything about the service&apos;s disassembly procedure, cleaning strength,
            dwell time, mechanical abrasion, component servicing, rinse process, or final
            cleanliness.
          </p>
          <p>
            In other words, it can describe an ingredient philosophy without describing the
            actual result.
          </p>
          <div className="ovd-callout">
            <h3>The important distinction</h3>
            <p>
              A cleaner can be mild, plant-derived, or marketed as “organic” and still leave
              significant baked-on contamination behind.
            </p>
            <p>
              Another process can use professional cleaning agents selectively, completely
              remove those agents afterward, and leave the grill substantially cleaner.
            </p>
            <p>
              <strong>The label and the outcome are two different questions.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Grease stages */}
      <section className="ovd-section" aria-labelledby="ovd-grease-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">The science</p>
          <h2 id="ovd-grease-title">The Real Problem: Grease Changes When You Keep Heating It</h2>
          <div className="ovd-prose">
            <p>Fresh cooking oil and years-old grill buildup are not the same thing.</p>
            <p>
              Fresh grease is relatively easy to emulsify and remove. That is why warm water
              and ordinary dish detergent work remarkably well on a freshly used pan.
            </p>
            <p>
              But grill interiors experience repeated heating cycles. Oils can oxidize and
              polymerize, while food and smoke residues accumulate carbon. Repeated heat
              turns soft contamination into increasingly hard, bonded deposits.
            </p>
            <p>
              Anyone who has tried removing the brown-black film from an old stainless steel
              pan has experienced a smaller version of the same phenomenon.
            </p>
            <p>
              Once material reaches this stage, simply spraying on a mild cleaner and wiping
              it away may remove the upper layer of grease while leaving the hardened material
              underneath largely intact.
            </p>
          </div>
          <div className="ovd-stage-grid">
            {GREASE_STAGES.map((stage) => (
              <article key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-why-title">
        <div className="ovd-inner ovd-prose">
          <p className="eyebrow gold">Performance &amp; safety</p>
          <h2 id="ovd-why-title">Why This Matters for More Than Appearance</h2>
          <p>
            This would be mostly an aesthetic debate if the inside of a grill were just an
            empty metal box.
          </p>
          <p>
            <strong>It is not.</strong>
          </p>
          <p>
            A modern gas grill contains burners, burner ports, crossover channels, venturi
            tubes, igniter electrodes, flame-sensing or ignition components, grease-management
            systems, air inlets, and precisely sized gas orifices.
          </p>
          <p>Accumulated contamination can interfere with those systems.</p>
          <p>
            Burner ports can become restricted. Grease and carbon can build around ignition
            electrodes. Debris can collect around burner entrances and crossover areas. Heavy
            accumulation in the firebox can contribute to flare-ups and grease fires.
          </p>
          <p>
            This is also why professional service requires some judgment. A calibrated gas
            orifice, for example, should not simply be attacked with an abrasive tool that
            could alter its opening. It should be inspected and serviced correctly.
          </p>
          <p>
            Deep cleaning therefore involves more than deciding which spray bottle has the
            friendliest label.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="ovd-section" aria-labelledby="ovd-compare-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">Side by side</p>
          <h2 id="ovd-compare-title">
            Organic-Only Cleaning vs. Results-First Deep Cleaning
          </h2>
          <div className="ovd-prose">
            <p>
              There is nothing inherently wrong with choosing mild cleaning products. We use
              mild methods whenever they will accomplish the job.
            </p>
            <p>
              The limitation comes when a cleaning philosophy dictates{" "}
              <strong>
                what cannot be used before anyone has evaluated what needs to be removed.
              </strong>
            </p>
          </div>

          <div className="ovd-table-wrap" role="region" aria-label="Cleaning approach comparison" tabIndex={0}>
            <table className="ovd-table">
              <thead>
                <tr>
                  <th scope="col">Cleaning question</th>
                  <th scope="col">Organic / mild-product-only</th>
                  <th scope="col">Professional results-first deep service</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.q}>
                    <th scope="row">{row.q}</th>
                    <td>{row.organic}</td>
                    <td>{row.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chemicals we use */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-chem-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">Our process</p>
          <h2 id="ovd-chem-title">What Chemicals Does Husker Grill Cleaning Actually Use?</h2>
          <div className="ovd-prose">
            <p>
              The phrase “professional chemicals” can conjure an image of someone spraying an
              assembled grill with harsh cleaner and leaving it behind.
            </p>
            <p>
              <strong>That is not our process.</strong>
            </p>
            <p>
              In fact, most of the improvement you see in our before-and-after photos is
              created by something much less exotic: <strong>work</strong>.
            </p>
          </div>
          <div className="ovd-steps">
            {PROCESS_STEPS.map((step, index) => (
              <article key={step.title}>
                <span className="ovd-step-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ovd-prose ovd-prose-tight">
            <p>
              This is the difference between <strong>using chemistry</strong> and{" "}
              <strong>leaving chemistry behind</strong>.
            </p>
            <p>Those are not the same thing.</p>
          </div>
        </div>
      </section>

      {/* Lye */}
      <section className="ovd-section" aria-labelledby="ovd-lye-title">
        <div className="ovd-inner ovd-prose">
          <p className="eyebrow gold">Chemistry, handled correctly</p>
          <h2 id="ovd-lye-title">Is Lye “Dangerous”?</h2>
          <p>
            Sodium hydroxide—commonly called lye—is caustic in concentrated form. Professional
            handling requires appropriate training and personal protective equipment.
          </p>
          <p>
            <strong>That fact should not be minimized.</strong>
          </p>
          <p>But hazard and finished-product residue are also not the same concept.</p>
          <p>
            Many useful professional processes involve materials that require safe handling
            during the process. What matters to the customer is whether the material was
            appropriate for the application, handled correctly, and removed before the
            appliance was returned to service.
          </p>
          <p>
            Sodium hydroxide is particularly useful against fatty contamination because strong
            alkalinity can react with fats through a process called{" "}
            <strong>saponification</strong>. In simplified terms, fatty material is chemically
            transformed into substances that are substantially easier to remove with water.
          </p>
          <p>
            We do not believe that makes lye something that should be sprayed indiscriminately
            throughout every grill.
          </p>
          <p>
            We believe it makes it a tool—one that should be used selectively, professionally,
            and only when the condition of the grill calls for it.
          </p>
          <div className="ovd-callout">
            <p>
              The safest cleaning philosophy is not “never use chemistry.” It is{" "}
              <strong>
                “use the least aggressive method that will actually accomplish the job, and
                remove the cleaning agent when the job is finished.”
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Chemical-free */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-free-title">
        <div className="ovd-inner ovd-prose">
          <p className="eyebrow gold">Tradeoffs</p>
          <h2 id="ovd-free-title">“Chemical-Free” Does Not Mean “Work-Free”</h2>
          <p>
            It is absolutely possible to remove significant contamination without a powerful
            degreaser.
          </p>
          <p>
            The tradeoff is often additional heat, soaking, scraping, scouring, and technician
            time.
          </p>
          <p>That distinction matters when comparing grill-cleaning services.</p>
          <p>
            If a company limits both cleaning chemistry and aggressive mechanical removal,
            there are simply fewer mechanisms available to remove severe baked-on
            contamination.
          </p>
          <p>
            That does not necessarily make the service dishonest. It may simply mean that the
            service is designed around a different objective: a lighter, faster{" "}
            <strong>maintenance cleaning</strong> rather than restoration-level cleaning.
          </p>
          <p>And there is a legitimate market for that.</p>
          <p>
            We offer maintenance cleaning ourselves. The important thing is that homeowners
            understand the difference between a maintenance clean and a deep mechanical
            service.{" "}
            <Link href="/pricing">See pricing for both options →</Link>
          </p>
        </div>
      </section>

      {/* Look inside */}
      <section className="ovd-section" aria-labelledby="ovd-photos-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">How to compare</p>
          <h2 id="ovd-photos-title">
            The Best Way to Compare Grill Cleaning Companies: Look Inside the Grill
          </h2>
          <div className="ovd-prose">
            <p>Marketing language is easy. Results are harder to manufacture.</p>
            <p>
              Before hiring any grill-cleaning company—including us—we recommend looking for
              before-and-after photographs that show the areas where the difficult work
              actually happens.
            </p>
            <p>
              <strong>Do not judge the service solely by a polished stainless-steel hood.</strong>
            </p>
            <p>Ask to see:</p>
          </div>
          <ul className="ovd-checklist">
            {PHOTO_CHECKS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="ovd-prose ovd-prose-tight">
            <p>
              Husker Grill Cleaning has documented 100+ completed services because we believe
              the customer should be able to see what was actually accomplished.
            </p>
            <p>
              Review our{" "}
              <Link href="/see-our-work">completed-work gallery</Link> and{" "}
              <Link href="/pricing">50-step deep clean process</Link> to see what happens
              beyond exterior polish.
            </p>
          </div>
        </div>
      </section>

      {/* Is organic bad */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-bad-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">Our position</p>
          <h2 id="ovd-bad-title">So, Is “Organic” Grill Cleaning Bad?</h2>
          <div className="ovd-prose">
            <p>
              <strong>No.</strong> That is not the point of this article.
            </p>
            <p>
              Steam is excellent. Mild surfactants are excellent. Reducing unnecessary
              chemical use is a worthwhile goal. There are plenty of lightly soiled surfaces
              where nothing stronger is justified.
            </p>
            <p>
              Our disagreement is with turning “organic” into a substitute for measuring the
              actual result.
            </p>
            <p>
              If two companies begin with the same heavily contaminated grill and one company
              removes dramatically more polymerized grease, carbon, and obstructive
              buildup—while properly removing its cleaning agents afterward—it is difficult to
              argue that leaving more contamination behind is inherently better simply because
              the cleaning products sounded more natural.
            </p>
            <p>The objective should be balance:</p>
          </div>
          <div className="ovd-philosophy">
            <h3>A results-first grill cleaning philosophy</h3>
            <ol>
              {PHILOSOPHY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="ovd-section" aria-labelledby="ovd-ask-title">
        <div className="ovd-inner">
          <p className="eyebrow gold">Buyer guide</p>
          <h2 id="ovd-ask-title">What Should You Ask Before Hiring a Grill Cleaning Company?</h2>
          <div className="ovd-prose">
            <p>
              Instead of asking only, “Are your products organic?”, consider asking these
              questions:
            </p>
          </div>
          <ol className="ovd-ask-list">
            {HIRE_QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
          <div className="ovd-prose ovd-prose-tight">
            <p>
              Those questions tell you considerably more about the quality of a grill service
              than a single adjective on a website.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="ovd-section ovd-alt" aria-labelledby="ovd-bottom-title">
        <div className="ovd-inner ovd-prose">
          <p className="eyebrow gold">Bottom line</p>
          <h2 id="ovd-bottom-title">
            Judge Grill Cleaning by the Process and the Result
          </h2>
          <p>Homeowners should not have to choose between safety and cleanliness.</p>
          <p>
            A professional process can minimize chemical use, rely heavily on heat and
            mechanical cleaning, use stronger products only when they provide a genuine
            benefit, and thoroughly remove those products afterward.
          </p>
          <p>
            At Husker Grill Cleaning, that is our approach.
          </p>
          <p>
            We do not promise that everything capable of cleaning a grill grew on a tree.
          </p>
          <p>
            We promise something we think is more meaningful: we will use the appropriate
            tools, put in the work, and show you the result.
          </p>
          <p>
            Because at the end of the service, you should not have to take our word for how
            clean your grill is.
          </p>
          <p>
            <strong>You should be able to open the hood and see it.</strong>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="ovd-section" aria-labelledby="ovd-faq-title" id="faq">
        <div className="ovd-inner">
          <p className="eyebrow gold">FAQ</p>
          <h2 id="ovd-faq-title">Frequently Asked Questions About Organic Grill Cleaning</h2>
          <div className="ovd-faq-list">
            {ORGANIC_FAQS.map((item) => (
              <details key={item.q} className="ovd-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="ovd-faq-toggle" aria-hidden="true">
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
      <section className="ovd-closing" aria-labelledby="ovd-closing-title">
        <div className="ovd-inner ovd-closing-inner">
          <h2 id="ovd-closing-title">Don&apos;t Buy the Label. Compare the Result.</h2>
          <p>
            Husker Grill Cleaning provides professional deep grill cleaning and service
            throughout Lincoln and Omaha, Nebraska. See exactly what is included, review our
            results, and choose the level of service that fits your grill.
          </p>
          <div className="ovd-actions">
            <Link href="/pricing" className="btn-prestige">
              View Grill Cleaning Pricing
            </Link>
            <Link href="/see-our-work" className="btn-outline-light">
              See Our Work
            </Link>
            <Link href={site.bookingPath} className="btn-outline-light">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      <footer className="ovd-note">
        <div className="ovd-inner">
          <p>
            <strong>Technical note:</strong> This article discusses general cleaning chemistry
            and grill-service principles for consumer education. Sodium hydroxide is a caustic
            material requiring appropriate handling and PPE. Gas appliances contain calibrated
            components that should not be altered during cleaning. Homeowners should follow
            their grill manufacturer&apos;s maintenance instructions or use a qualified service
            technician for unfamiliar gas-system work.
          </p>
        </div>
      </footer>
    </article>
  );
}
