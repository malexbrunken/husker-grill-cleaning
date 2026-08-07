import {
  buildPageMetadata,
  SimplePage,
} from "@/components/SimplePage";

export const metadata = buildPageMetadata(
  "Pricing",
  "Husker Grill Cleaning pricing for one-time deep cleans, semi-annual care, maintenance cleaning, and Weber/Traeger repair in Omaha and Lincoln.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <SimplePage
      title="Pricing"
      description="Full pricing details live on the homepage pricing section. This route is preserved for SEO and existing backlinks."
      path="/pricing"
      heading="Grill Cleaning Pricing"
      body="Transparent pricing for deep cleans, membership care, maintenance, and repair add-ons."
    />
  );
}
