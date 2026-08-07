import {
  buildPageMetadata,
  SimplePage,
} from "@/components/SimplePage";

export const metadata = buildPageMetadata(
  "Multi-Tenant Grill Cleaning",
  "Multi-tenant apartment and townhome grill cleaning for property managers and HOAs in Omaha and Lincoln, Nebraska.",
  "/multi-tenant-apartment-townhome-grill-cleaning",
);

export default function MultiTenantPage() {
  return (
    <SimplePage
      title="Multi-Tenant Grill Cleaning"
      description="Bulk scheduling and multi-grill discounts for apartments, townhomes, HOAs, and property managers."
      path="/multi-tenant-apartment-townhome-grill-cleaning"
      heading="Multi-Tenant & Property Manager Service"
      body="Reliable grill cleaning programs for apartments, townhomes, HOAs, and managed communities."
    />
  );
}
