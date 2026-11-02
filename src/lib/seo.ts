import { site } from "@/lib/site";

const BRAND = site.name;
const FULL_SUFFIX = ` | ${BRAND}`;
const MID_SUFFIX = " | Husker Grill";
const SHORT_SUFFIX = " | Husker";

/**
 * Document title aimed at about 60 characters, keeping the brand when it fits.
 */
export function documentTitle(lead: string, max = 60): string {
  const cleaned = lead.replace(/\s+/g, " ").trim();
  for (const suffix of [FULL_SUFFIX, MID_SUFFIX, SHORT_SUFFIX]) {
    const candidate = `${cleaned}${suffix}`;
    if (candidate.length <= max) return candidate;
  }
  const room = Math.max(1, max - SHORT_SUFFIX.length);
  let cut = cleaned.slice(0, room).trim();
  const space = cut.lastIndexOf(" ");
  if (space > 18) cut = cut.slice(0, space);
  cut = cut.replace(/[|—–-]\s*$/, "").trim();
  return `${cut}${SHORT_SUFFIX}`;
}
