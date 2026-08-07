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
    "/schedule-2",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/schedule-2" ||
            route === "/pricing" ||
            route === "/grill-repairs" ||
            route === "/organic-grill-cleaning-vs-deep-grill-cleaning"
          ? 0.9
          : 0.7,
  }));
}
