import {
  buildPageMetadata,
  SimplePage,
} from "@/components/SimplePage";

export const metadata = buildPageMetadata(
  "About",
  "About Husker Grill Cleaning — AGSI-certified mobile grill cleaning and repair serving Omaha and Lincoln, Nebraska.",
  "/about",
);

export default function AboutPage() {
  return (
    <SimplePage
      title="About"
      description="Husker Grill Cleaning is Nebraska's premium mobile grill cleaning and repair company with AGSI-certified technicians."
      path="/about"
      heading="About Husker Grill Cleaning"
      body="Certified technicians. Full disassembly. Clean + repair in one visit."
    />
  );
}
