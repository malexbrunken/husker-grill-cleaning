import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getGrillBrand, grillBrandSlugs } from "@/lib/grill-brands";
import { getServiceArea, serviceAreaSlugs } from "@/lib/service-areas";
import { site } from "@/lib/site";

const HIGH_PRIORITY = new Set([
  "/schedule",
  "/pricing",
  "/grill-repairs",
  "/organic-grill-cleaning-vs-deep-grill-cleaning",
  "/what-does-grill-cleaning-include",
  "/professional-grill-cleaning-repair-services-in-omaha-nebraska",
  ...serviceAreaSlugs().map((slug) => `/${slug}`),
  ...grillBrandSlugs().map((slug) => `/${slug}`),
]);

const PAGE_SOURCES: Record<string, readonly string[]> = {
  "": ["src/app/page.tsx", "src/components/HomeLander.tsx"],
  "/see-our-work": ["src/app/see-our-work/page.tsx", "src/components/SeeOurWork.tsx"],
  "/pricing": [
    "src/app/pricing/page.tsx",
    "src/components/PricingPage.tsx",
    "src/components/PricingOfferings.tsx",
  ],
  "/multi-tenant-apartment-townhome-grill-cleaning": [
    "src/app/multi-tenant-apartment-townhome-grill-cleaning/page.tsx",
    "src/components/MultiTenantPage.tsx",
  ],
  "/about": ["src/app/about/page.tsx", "src/components/AboutPage.tsx"],
  "/join-our-team": [
    "src/app/join-our-team/page.tsx",
    "src/components/JoinOurTeamPage.tsx",
  ],
  "/grill-repairs": [
    "src/app/grill-repairs/page.tsx",
    "src/components/GrillRepairsPage.tsx",
  ],
  "/matthew-brunken-lincoln-ne": [
    "src/app/matthew-brunken-lincoln-ne/page.tsx",
    "src/components/MatthewBrunkenPage.tsx",
  ],
  "/organic-grill-cleaning-vs-deep-grill-cleaning": [
    "src/app/organic-grill-cleaning-vs-deep-grill-cleaning/page.tsx",
    "src/components/OrganicVsDeepPage.tsx",
  ],
  "/what-does-grill-cleaning-include": [
    "src/app/what-does-grill-cleaning-include/page.tsx",
    "src/components/WhatGrillCleaningIncludesPage.tsx",
  ],
  "/schedule": ["src/app/schedule/page.tsx", "src/components/SchedulePage.tsx"],
  "/professional-grill-cleaning-repair-services-in-omaha-nebraska": [
    "src/app/professional-grill-cleaning-repair-services-in-omaha-nebraska/page.tsx",
    "src/components/OmahaServicesPage.tsx",
  ],
};

function gitDate(args: string[]): Date | null {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", ...args], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!out) return null;
    const date = new Date(out);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}

function fileDate(rel: string): Date {
  return (
    gitDate(["--", rel]) ??
    fs.statSync(path.join(/*turbopackIgnore: true*/ process.cwd(), rel)).mtime
  );
}

function newest(dates: Array<Date | null>): Date {
  const times = dates.filter((date): date is Date => date instanceof Date).map((date) => date.getTime());
  return new Date(times.length ? Math.max(...times) : Date.now());
}

/** Last commit that touched the source block containing `needle`. */
function blockDate(rel: string, needle: string): Date | null {
  const abs = path.join(/*turbopackIgnore: true*/ process.cwd(), rel);
  if (!fs.existsSync(abs)) return null;
  const lines = fs.readFileSync(abs, "utf8").split("\n");
  const start = lines.findIndex((line) => line.includes(needle));
  if (start < 0) return fileDate(rel);
  let end = lines.length - 1;
  const nextMarker = needle.startsWith("brandSlug(") ? "brandSlug(" : "slug:";
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].includes(nextMarker)) {
      end = i - 1;
      break;
    }
  }
  return gitDate(["-L", `${start + 1},${end + 1}:${rel}`]) ?? fileDate(rel);
}

function lastModifiedFor(route: string): Date {
  if (route in PAGE_SOURCES) {
    return newest(PAGE_SOURCES[route].map((file) => fileDate(file)));
  }

  const slug = route.replace(/^\//, "");
  const area = getServiceArea(slug);
  if (area) {
    return newest([
      fileDate("src/app/(service-areas)/[slug]/page.tsx"),
      fileDate("src/components/ServiceAreaPage.tsx"),
      blockDate("src/lib/service-areas.ts", `"${area.slug}"`),
    ]);
  }

  const brand = getGrillBrand(slug);
  if (brand) {
    return newest([
      fileDate("src/app/(service-areas)/[slug]/page.tsx"),
      fileDate("src/components/BrandPage.tsx"),
      blockDate("src/lib/grill-brands.ts", `brandSlug("${brand.name}")`),
    ]);
  }

  return fileDate("src/app/layout.tsx");
}

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
    ...serviceAreaSlugs().map((slug) => `/${slug}`),
    ...grillBrandSlugs().map((slug) => `/${slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: lastModifiedFor(route),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : HIGH_PRIORITY.has(route) ? 0.9 : 0.7,
  }));
}
