import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Grill Cleaning",
  description:
    "Schedule professional mobile grill cleaning or repair with Husker Grill Cleaning in Omaha and Lincoln, Nebraska.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <section className="simple-page">
      <div className="simple-page-inner">
        <p className="eyebrow gold">Book Service</p>
        <h1>Schedule Your Grill Cleaning</h1>
        <p className="lede">
          Call or email to reserve your appointment. Online booking widget migration from
          Squarespace/Housecall Pro is next.
        </p>
        <div className="schedule-cards">
          <a className="schedule-card" href={`tel:${site.phoneTel}`}>
            <span className="schedule-label">Call</span>
            <strong>{site.phoneDisplay}</strong>
          </a>
          <a className="schedule-card" href={`mailto:${site.email}`}>
            <span className="schedule-label">Email</span>
            <strong>{site.emailDisplay}</strong>
          </a>
        </div>
        <div className="simple-page-actions">
          <Link href="/pricing" className="btn-outline-light">
            Review Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
