import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import styles from "./Menu.module.css";
import { Link, useLocation } from "wouter";

type EntryLink = { title: string; href: string; description: string };

type ModalProps = {
  /** Links to show on the main modal */
  links: EntryLink[];
  /** Title for the design card shown on the left of menu options */
  cardTitle?: string;
  /** Description for the design card shown on the left of menu options */
  cardDescription?: string;
};

type LinkProps = {
  /** Link to which the button should point to */
  href: string;
};

export type NavigationEntryProps = {
  /** Title of the button */
  title: string;
} & (ModalProps | LinkProps);

/**
 * Option of a menu inside the top-level navigation.
 * Displays a list of options that can be selected on hover.
 */
export function NavigationEntry(props: NavigationEntryProps) {
  const [location] = useLocation();
  const isActive =
    props.title === "Home"
      ? location === "/"
      : "href" in props
      ? location.includes(props.href)
      : props.links.some((link) => location.includes(link.href));

  if ("href" in props) {
    return (
      <NavigationMenuItem
        className={`${styles.navItem} ${
          isActive ? styles.active : ""
        } ${navigationMenuTriggerStyle()}`}
      >
        <Link to={props.href}>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {props.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={` ${isActive ? styles.active : ""} ${styles.navItem} ${
          styles.navItem
        }`}
      >
        {props.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          {(props.cardTitle || props.cardDescription) && (
            <CardItem
              cardTitle={props.cardTitle}
              cardDescription={props.cardDescription}
            />
          )}
          {props.links.map((link) => (
            <li key={link.title}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={`${styles.link} block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                >
                  <h1>{link.title}</h1>
                  <p>{link.description}</p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function CardItem(props: Pick<ModalProps, "cardTitle" | "cardDescription">) {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <div
          className={`${styles.cardModalBackground} flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md`}
        >
          <div className="mb-2 mt-4 text-lg font-medium">{props.cardTitle}</div>
          <p className="text-sm leading-tight text-muted-foreground">
            {props.cardDescription}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
}
