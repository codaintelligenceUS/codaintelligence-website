import { Footer, Header } from "@/sections";
import { Integrations } from "@/sections/Integrations/Integrations";

export function TechPartners() {
  return (
    <>
      <Header
        isBlueBottomGradient
        type="title"
        category="Technology partners"
        title="Connect Footprint with the tools you use"
        subtitle="Over 40 available integrations, continuously expanding"
      />
      <Integrations />
      <Footer />
    </>
  );
}
