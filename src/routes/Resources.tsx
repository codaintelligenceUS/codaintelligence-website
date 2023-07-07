import { Footer, Guides, Header } from "@/sections";

export function Resources() {
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
