import {
  buildPageMetadata,
  SimplePage,
} from "@/components/SimplePage";

export const metadata = buildPageMetadata(
  "See Our Work",
  "Before-and-after grill cleaning results from Husker Grill Cleaning in Omaha and Lincoln, Nebraska.",
  "/see-our-work",
);

export default function SeeOurWorkPage() {
  return (
    <SimplePage
      title="See Our Work"
      description="Gallery and transformation photos are being migrated from Squarespace. Homepage process photos already showcase the 50-step restoration."
      path="/see-our-work"
      heading="See Our Work"
      body="Real before-and-after grill restorations across Omaha and Lincoln."
    />
  );
}
