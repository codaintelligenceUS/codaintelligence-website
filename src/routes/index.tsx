import { PAGES } from "@/variables";
import { useEffect } from "react";
import { Route, Router, Switch, useLocation } from "wouter";
import { Company } from "./Company";
import { Home } from "./Home";
import { PartnerEnablement } from "./PartnerEnablement";
import { Privacy } from "./Privacy";
import { Resources } from "./Resources";
import { Terms } from "./Terms";
import { MSPPartners } from "./partners/MSPPartners";
import { TechPartners } from "./partners/TechPartners";
import { ContextualPrioritization } from "./useCases/ContextualPrioritization";
import { EffectiveRemediation } from "./useCases/EffectiveRemediation";
import { FullAttackSurface } from "./useCases/FullAttackSurface";

export function MainRouter() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const baseUrl =
    window.location.host.includes("github.io") ||
      window.location.host.includes("localhost")
      ? "/codaintelligence-website/"
      : "/";

  return (
    <Router base={baseUrl}>
      <Switch>
        <Route path={PAGES.company}>
          <Company />
        </Route>
        <Route path={PAGES.contact}>
          <Company />
        </Route>
        <Route path={PAGES.subprocessors}>
          <TechPartners />
        </Route>
        <Route path={PAGES.technologyPartners}>
          <TechPartners />
        </Route>
        <Route path={PAGES.mspPartners}>
          <MSPPartners />
        </Route>
        <Route path={PAGES.resources}>
          <Resources />
        </Route>
        <Route path={PAGES.contextualPrioritization}>
          <ContextualPrioritization />
        </Route>
        <Route path={PAGES.effectiveRemediation}>
          <EffectiveRemediation />
        </Route>
        <Route path={PAGES.fullAttackSurface}>
          <FullAttackSurface />
        </Route>
        <Route path={PAGES.partnerEnablement}>
          <PartnerEnablement />
        </Route>
        <Route path={PAGES.terms}>
          <Terms />
        </Route>
        <Route path={PAGES.privacy}>
          <Privacy />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
