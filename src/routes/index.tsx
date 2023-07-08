import { Route, Router, Switch } from "wouter";
import { Company } from "./Company";
import { Home } from "./Home";
import { Resources } from "./Resources";
import { ContextualPrioritization } from "./useCases/ContextualPrioritization";
import { EffectiveRemediation } from "./useCases/EffectiveRemediation";
import { FullAttackSurface } from "./useCases/FullAttackSurface";
import { TechnologyPartners } from "./partners/TechnologyPartners";
import { PAGES } from "@/variables";

export function MainRouter() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path={PAGES.company}>
          <Company />
        </Route>
        <Route path={PAGES.technologyPartners}>
          <TechnologyPartners />
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
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
