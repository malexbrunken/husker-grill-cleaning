import type { MetadataRoute } from "next";
import { grillBrandSlugs } from "@/lib/grill-brands";
import { serviceAreaSlugs } from "@/lib/service-areas";
import { site } from "@/lib/site";

const HIGH_PRIORITY = new Set([
  "/schedule",
  "/pricing",
  "/grill-repairs",
  "/organic-grill-cleaning-vs-deep-grill-cleaning",
  "/what-does-grill-cleaning-include",
  "/professional-grill-cleaning-repair-services-in-omaha-nebraska",
  ...serviceAreaSlugs().map((s) => `/${s}`),
  ...grillBrandSlugs().map((s) => `/${s}`),
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/see-our-work",
    "/pricing",
    "/multi-tenant-apartment-townhome-grill-cleaning",
    "/about",
    "/join-our-team",
    "/grill-repairs",
    "/matthew-brunken-lincoln-ne",
    "/organic-grill-cleaning-vs-deep-grill-cleaning",
    "/what-does-grill-cleaning-include",
    "/schedule",
    "/professional-grill-cleaning-repair-services-in-omaha-nebraska",
    ...serviceAreaSlugs().map((s) => `/${s}`),
    ...grillBrandSlugs().map((s) => `/${s}`),
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : HIGH_PRIORITY.has(route) ? 0.9 : 0.7,
  }));
}
