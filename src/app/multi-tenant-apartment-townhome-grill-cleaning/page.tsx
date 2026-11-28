import { buildPageMetadata } from "@/components/SimplePage";
import { MultiTenantPage } from "@/components/MultiTenantPage";

export const metadata = buildPageMetadata(
  "HOA & Apartment Grill Cleaning",
  "Multi-tenant apartment, townhome, and HOA built-in grill cleaning for property managers in Omaha and Lincoln, Nebraska. $399 + tax per built-in grill, with a repair quote if parts or labor are needed.",
  "/multi-tenant-apartment-townhome-grill-cleaning",
);

export default function MultiTenantRoute() {
  return <MultiTenantPage />;
}
