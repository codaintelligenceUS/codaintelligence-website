import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import styles from "./Menu.module.css";

type EntryLink = { title: string; href: string; description: string };

export interface NavigationEntryProps {
  /** Links to show on the main modal */
  links: EntryLink[];
  /** Title of the button */
  title: string;
  /** Title for the design card shown on the left of menu options */
  cardTitle?: string;
  /** Description for the design card shown on the left of menu options */
  cardDescription?: string;
}

/**
 * Option of a menu inside the top-level navigation.
 * Displays a list of options that can be selected on hover.
 */
export function NavigationEntry(props: NavigationEntryProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{props.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <div
                className={`${styles.cardModalBackground} flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md`}
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  {props.cardTitle}
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {props.cardDescription}
                </p>
              </div>
            </NavigationMenuLink>
          </li>
          {props.links.map((link) => (
            <ListItem key={link.href} title={link.title} href={link.href}>
              {link.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
