import { Footer, Header } from "@/sections";
import { Integrations } from "@/sections/Integrations/Integrations";
import { useTitle } from "@/utils/useTitle";

export function TechPartners() {
  useTitle("Technology Partners");
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
