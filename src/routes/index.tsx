import { Route, Router, Switch } from "wouter";
import { Company } from "./Company";
import { Home } from "./Home";
import { Resources } from "./Resources";
import { ContextualPrioritization } from "./useCases/ContextualPrioritization";
import { EffectiveRemediation } from "./useCases/EffectiveRemediation";
import { FullAttackSurface } from "./useCases/FullAttackSurface";
import { PAGES } from "@/variables";
import { MSPPartners } from "./partners/MSPPartners";
import { TechPartners } from "./partners/TechPartners";
import { PartnerEnablement } from "./PartnerEnablement";

export function MainRouter() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path={PAGES.company}>
          <Company />
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
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
