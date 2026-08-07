import { buildPageMetadata } from "@/components/SimplePage";
import { SeeOurWork } from "@/components/SeeOurWork";

export const metadata = buildPageMetadata(
  "See Our Work",
  "Before-and-after grill cleaning results from Husker Grill Cleaning in Omaha and Lincoln. 100+ real completed-work photos — no stock images.",
  "/see-our-work",
);

export default function SeeOurWorkPage() {
  return <SeeOurWork />;
}
