import {
  buildPageMetadata,
  SimplePage,
} from "@/components/SimplePage";

export const metadata = buildPageMetadata(
  "Join Our Team",
  "Join the Husker Grill Cleaning team in Omaha and Lincoln. Careers in professional grill cleaning and service.",
  "/join-our-team",
);

export default function JoinOurTeamPage() {
  return (
    <SimplePage
      title="Join Our Team"
      description="We're growing across Omaha and Lincoln. Reach out if you want to join a premium mobile grill service team."
      path="/join-our-team"
      heading="Join Our Team"
      body="Build a career in professional grill service with Nebraska's most recommended team."
    />
  );
}
