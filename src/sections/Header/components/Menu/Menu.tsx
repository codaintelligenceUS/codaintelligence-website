import { DemoButton, Logo } from "@/atoms";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { PAGES } from "@/variables";
import {
  BarChart3,
  Book,
  BrainCog,
  Building,
  Cog,
  GitBranch,
  MenuIcon,
  Radar,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Link, useLocation } from "wouter";
import styles from "./Menu.module.css";
import { NavigationEntry } from "./NavigationEntry";

export function Menu() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className={styles.container}>
      {isMobile ? <MobileMenu /> : <LeftOptions />}
      <Link to={PAGES.home}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </Link>
      {!isMobile && <RightOptions />}
    </div>
  );
}

/**
 * Wrapper over the menu options that is optimized for mobile.
 * TODO: Find a way to reuse the same elements for this instead of a separate component
 */
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div
      className={`${styles.mobileMenuContainer} ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </div>
      <ul>
        <li>
          Platform
          <ul>
            <li>
              <Link to={PAGES.fullAttackSurface}>
                <Radar />
                Full Attack Surface Visibility
              </Link>
            </li>
            <li>
              <Link to={PAGES.contextualPrioritization}>
                <BarChart3 />
                Contextual Prioritization
              </Link>
            </li>
            <li>
              <Link to={PAGES.effectiveRemediation}>
                <GitBranch />
                Effective Remediation
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Partners
          <ul>
            <li>
              <Link to={PAGES.technologyPartners}>
                <Cog />
                Technology Partners
              </Link>
            </li>
            <li>
              <Link to={PAGES.mspPartners}>
                <BrainCog />
                Service Providers
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={PAGES.resources}>
            <Book />
            Resources
          </Link>
        </li>
        <li>
          <Link to={PAGES.company}>
            <Building />
            Company
          </Link>
        </li>
        <hr />
        <li>
          <a href="https://support.codaintelligence.com" target="_blank">
            Partner Login
          </a>
        </li>
        <li>
          <DemoButton buttonText="Free trial" />
        </li>
      </ul>
    </div>
  );
}

function LeftOptions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationEntry title="Home" href={PAGES.home} />
        <NavigationEntry
          title="Platform"
          cardTitle="Your AI-driven attack surface management platform"
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
              description: "Explore integrations",
            },
            {
              title: "Service Providers",
              href: PAGES.mspPartners,
              description: "Become a CODA Partner",
            },
          ]}
        />
        <NavigationEntry title="Resources" href={PAGES.resources} />
        <NavigationEntry title="Company" href={PAGES.company} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function RightOptions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
       
<a href="https://support.codaintelligence.com" target="_blank" className={navigationMenuTriggerStyle()}>
            Partner Login
          </a>
        <DemoButton />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
