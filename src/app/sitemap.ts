import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

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
    "/elkhorn-nebraska-grill-cleaning",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/schedule" ||
            route === "/pricing" ||
            route === "/grill-repairs" ||
            route === "/organic-grill-cleaning-vs-deep-grill-cleaning" ||
            route === "/what-does-grill-cleaning-include" ||
            route === "/professional-grill-cleaning-repair-services-in-omaha-nebraska" ||
            route === "/elkhorn-nebraska-grill-cleaning"
          ? 0.9
          : 0.7,
  }));
}
