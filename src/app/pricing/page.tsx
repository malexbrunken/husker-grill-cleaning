import { buildPageMetadata } from "@/components/SimplePage";
import { PricingPage } from "@/components/PricingPage";

export const metadata = buildPageMetadata(
  "Pricing",
  "Husker Grill Cleaning pricing for Omaha & Lincoln: one-time deep cleans ($299 freestanding / $349 built-in), semi-annual care, maintenance, multi-grill discounts, and certified repair.",
  "/pricing",
);

export default function PricingRoute() {
  return <PricingPage />;
}
