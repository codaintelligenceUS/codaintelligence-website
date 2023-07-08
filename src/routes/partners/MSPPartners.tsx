import { AsSeenOn, Header } from "@/sections";

export function MSPPartners() {
  return (
    <>
      <Header
        category="MSP Partners"
        title="Get started with CODA Footprint today"
        subtitle="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        type="titleWithPhoto"
        sideChildren={<div>hello</div>}
      >
        <AsSeenOn
          isSmall
          isPartnerDisplay
          title="Join 1,000+ customers who have their compliance under control"
        />
      </Header>
    </>
  );
}
