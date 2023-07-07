import { Company } from "./Company";
import { Home } from "./Home";
import { Partners } from "./Partners";
import { ContextualPrioritization } from "./useCases/ContextualPrioritization";
import { EffectiveRemediation } from "./useCases/EffectiveRemediation";
import { FullAttackSurface } from "./useCases/FullAttackSurface";

export function MainRouter() {
  return <Home />;
}
