import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationEntry } from "./NavigationEntry";

export function Menu() {
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}
