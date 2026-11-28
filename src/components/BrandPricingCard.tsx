import type { BrandPricingCardModel } from "@/lib/brand-pricing-card";
import { site } from "@/lib/site";

/**
 * Prominent cleaning and repair prices for a brand lander.
 * Traeger and Green Mountain can reuse this once they are added to the card config.
 */
export function BrandPricingCard({ model }: { model: BrandPricingCardModel }) {
  const titleId = "brand-pricing-card-title";

  return (
    <aside className="bp-price-card" aria-labelledby={titleId}>
      <p className="bp-price-kicker">{model.brandName} pricing</p>
      <h2 id={titleId}>Cleaning and repair</h2>

      <ul className="bp-price-clean">
        {model.cleaning.map((item) => (
          <li key={item.name}>
            <span>
              {item.name}
              {item.detail ? (
                <span className="bp-price-detail">{item.detail}</span>
              ) : null}
            </span>
            <strong>
              ${item.amount} <small>+ tax</small>
            </strong>
          </li>
        ))}
      </ul>

      <div className="bp-price-repair">
        <p className="bp-price-kicker">Repair</p>
        <p className="bp-price-repair-amount">${model.diagnosticAmount}</p>
        <p>
          Diagnostic charge. If you proceed with the repair, $
          {model.diagnosticCredit} of it is credited toward the repair. Labor is $
          {model.laborHourly}/hour, billed in {model.laborIncrementMinutes}-minute
          increments of ${model.laborIncrementPrice}. If we have to come back with
          parts, the return trip charge is ${model.returnTrip}.
        </p>
        <p>Common repairs:</p>
        <ul>
          {model.commonRepairs.map((repair) => (
            <li key={repair}>
              {repair.charAt(0).toUpperCase() + repair.slice(1)}
            </li>
          ))}
        </ul>
        <p>We carry common Traeger and Weber parts, and you may supply your own.</p>
        {model.sameVisitAddOn ? (
          <p className="bp-price-addon">
            <strong>${model.sameVisitAddOn.amount} plus parts</strong>{" "}
            {model.sameVisitAddOn.summary}
          </p>
        ) : null}
      </div>

      <div className="bp-price-actions">
        <a
          className="btn-prestige"
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book {model.brandName} service
        </a>
        <a className="btn-outline-light" href={`tel:${site.phoneTel}`}>
          Call {site.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
