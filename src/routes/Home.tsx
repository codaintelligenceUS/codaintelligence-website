import * as sections from "@/sections";
import { useTitle } from "@/utils/useTitle";

export function Home() {
  useTitle("AI-powered Exploit Mitigation");

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
