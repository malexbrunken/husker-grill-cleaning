import { buildPageMetadata } from "@/components/SimplePage";
import { MultiTenantPage } from "@/components/MultiTenantPage";

export const metadata = buildPageMetadata(
  "Multi-Tenant Apartment Townhome Grill Cleaning",
  "Multi-tenant apartment, townhome, and HOA built-in grill cleaning for property managers in Omaha and Lincoln, Nebraska. $349 + tax per built-in grill with free repair estimate.",
  "/multi-tenant-apartment-townhome-grill-cleaning",
);

export default function MultiTenantRoute() {
  return <MultiTenantPage />;
}
