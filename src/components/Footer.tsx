import Link from "next/link";
import { aboutLinks, navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <h2 className="footer-heading">Husker Grill Cleaning Omaha &amp; Lincoln</h2>
          <p className="footer-copy">
            Mobile grill cleaning service throughout the Omaha and Lincoln metro areas.
            Professional 50-step deep cleans, maintenance, and certified repair.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            {aboutLinks
              .filter((l) => !("external" in l && l.external))
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            <li>
              <Link href={site.bookingPath}>Schedule</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Locations</h2>
          <p className="footer-copy">Lincoln, NE 68522</p>
          <p className="footer-copy">Omaha, NE 68022</p>
        </div>
        <div>
          <h2 className="footer-heading">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </h2>
          <p className="footer-copy">
            <a href={`tel:${site.phoneTel}`}>📞 {site.phoneDisplay}</a>
          </p>
          <p className="footer-copy">
            <a href={`mailto:${site.email}`}>✉️ {site.emailDisplay}</a>
          </p>
        </div>
      </div>
      <div className="site-footer-bottom">
        <p>
          <strong>Serving Omaha &amp; Lincoln, Nebraska</strong>
        </p>
        <p>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
