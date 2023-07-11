import * as sections from "@/sections";

export function Home() {
  return (
    <>
      <sections.Header type="homepage" />
      <sections.USP />
      <sections.SOC />
      <sections.AsSeenOn isWhite />
      <sections.API />
      <sections.Footer />
    </>
  );
}
