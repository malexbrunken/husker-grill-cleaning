import { buildPageMetadata } from "@/components/SimplePage";
import { JoinOurTeamPage } from "@/components/JoinOurTeamPage";

export const metadata = buildPageMetadata(
  "Join Our Team",
  "Join Husker Grill Cleaning as a grill care technician or help build a new territory. Performance-based pay, flexible schedules, and a customer-first culture in Omaha, Lincoln, and surrounding markets.",
  "/join-our-team",
);

export default function JoinOurTeamRoute() {
  return <JoinOurTeamPage />;
}
