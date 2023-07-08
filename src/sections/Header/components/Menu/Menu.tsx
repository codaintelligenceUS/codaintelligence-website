import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationEntry } from "./NavigationEntry";
import styles from "./Menu.module.css";
import { DemoButton, Logo } from "@/atoms";
import { Link } from "wouter";
import { PAGES } from "@/variables";

export function Menu() {
  return (
    <div className={styles.container}>
      <LeftOptions />
      <Link to={PAGES.home}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </Link>
      <RightOptions />
    </div>
  );
}

function LeftOptions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationEntry
          title="Platform"
          cardTitle="Your dedicated attack surface management platform"
          cardDescription="Specifically built for exploit mitigation"
          links={[
            {
              title: "Full Attack Surface Visibility",
              href: PAGES.fullAttackSurface,
              description:
                "Leverage our ASM capabilities to bring confidence in your process",
            },
            {
              title: "Contextual Prioritization",
              href: PAGES.contextualPrioritization,
              description: "Identify & remediate exploitable vectors quickly",
            },
            {
              title: "Effective Remediation",
              href: PAGES.effectiveRemediation,
              description:
                "Leverage our AI capabilities to foster collaboration",
            },
          ]}
        />
        <NavigationEntry
          title="Partners"
          links={[
            {
              title: "Technology Partners",
              href: PAGES.technologyPartners,
              description: "Technology Partners",
            },
            {
              title: "Managed Service Providers",
              href: PAGES.mspPartners,
              description: "Managed Service Providers",
            },
          ]}
        />
        <NavigationEntry title="Guide" href={PAGES.resources} />
        <NavigationEntry title="Company" href={PAGES.company} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function RightOptions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationEntry
          title="Partner Login"
          href="https://support.codaintelligence.com"
        />
        <DemoButton />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
