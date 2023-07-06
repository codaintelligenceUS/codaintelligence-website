import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationEntry } from "./NavigationEntry";
import styles from "./Menu.module.css";
import { DemoButton, Logo } from "@/atoms";

export function Menu() {
  return (
    <div className={styles.container}>
      <LeftOptions />
      <Logo />
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
              title: "Use Case 1",
              href: "/usc1",
              description:
                "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              title: "Use Case 2",
              href: "/usc2",
              description:
                "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              title: "Use Case 3",
              href: "/usc3",
              description:
                "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ]}
        />
        <NavigationEntry
          title="Partners"
          links={[
            {
              title: "Technology Partners",
              href: "/partners",
              description: "Technology Partners",
            },
          ]}
        />
        <NavigationEntry title="Guide" href="/guide" />
        <NavigationEntry title="Company" href="/company" />
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
