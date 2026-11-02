import Link from "next/link";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { serviceAreaLinks } from "@/lib/service-areas";
import { site } from "@/lib/site";

const serviceLinks = [
  { href: "/grill-repairs", label: "Grill Repairs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/multi-tenant-apartment-townhome-grill-cleaning", label: "Multi-Tenant Cleaning" },
  { href: "/schedule", label: "Schedule Service" },
] as const;

const learnLinks = [
  { href: "/what-does-grill-cleaning-include", label: "What Grill Cleaning Includes" },
  {
    href: "/organic-grill-cleaning-vs-deep-grill-cleaning",
    label: "Organic vs Deep Cleaning",
  },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/see-our-work", label: "See Our Work" },
  { href: "/join-our-team", label: "Join Our Team" },
  { href: "/matthew-brunken-lincoln-ne", label: "Matthew Brunken" },
] as const;

function LinkColumn({
  title,
  links,
  note,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
  note?: string;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="footer-heading">{title}</h2>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {note ? <p className="footer-note">{note}</p> : null}
    </nav>
  );
}

export function Footer() {
  const areas = serviceAreaLinks().map((area) => ({
    href: area.href,
    label: area.name,
  }));

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <ServiceAreaMap />

        <div className="site-footer-grid">
          <div className="footer-contact">
            <h2 className="footer-heading">{site.name}</h2>
            <p className="footer-copy">
              Mobile grill cleaning and repair across the Omaha and Lincoln metros.
              Service-area business — we come to you.
            </p>
            <p className="footer-copy">
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </p>
            <p className="footer-copy">{site.hours.display}</p>
            <p className="footer-copy">{site.hours.callsAnswered}</p>
            <p className="footer-copy">
              <a href={`mailto:${site.email}`}>{site.emailDisplay}</a>
            </p>
            <p className="footer-google">
              <a href={site.google.profileUrl} target="_blank" rel="noopener noreferrer">
                Find us on Google
              </a>
              <a href={site.google.reviewUrl} target="_blank" rel="noopener noreferrer">
                Leave a review
              </a>
            </p>
            <h2 className="footer-heading footer-area-label">Service area</h2>
            <ul className="footer-area-list">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href}>{area.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <LinkColumn title="Services" links={serviceLinks} />
          <LinkColumn title="Service Areas" links={areas} />
          <LinkColumn
            title="Learn"
            links={learnLinks}
            note="A Learn hub is on the way. These guides are live now."
          />
          <LinkColumn title="Company" links={companyLinks} />
        </div>

        <div className="site-footer-bottom">
          <p>
            <strong>Serving the Omaha and Lincoln metros in Nebraska</strong>
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
