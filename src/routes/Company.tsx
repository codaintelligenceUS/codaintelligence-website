import { Header, Mission, Career, Footer } from "@/sections";

export function Company() {
  return (
    <>
      <Header
        type="title"
        category="About CODA"
        title="Taking an entirely new approach to security"
        subtitle="Our vision is to make cyber security available for everyone and embed it into our society's DNA as physical security should be. To achieve our vision, CODA's cyber security products must be Accessible, Affordable and Actionable."
      />
      <Mission />
      <Career />
      <Footer />
    </>
  );
}
