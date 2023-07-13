import { Footer, Guides, Header } from "@/sections";
import { useTitle } from "@/utils/useTitle";

export function Resources() {
  useTitle("Resources");
  return (
    <>
      <Header
        isLeftAligned
        type="title"
        category="Resources & guides"
        title="Explore content for CODA Partners"
        subtitle="View webinars, video tutorials, guides and more"
      />
      <Guides />
      <Footer />
    </>
  );
}
