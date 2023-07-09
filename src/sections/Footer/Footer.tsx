import { Logo } from "@/atoms";
import { PAGES } from "@/variables";
import { Mail, Phone, Pin } from "lucide-react";
import { Link } from "wouter";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <section className={styles.container}>
      <Logo />
      <LinkGroup
        title="Company"
        links={[{ title: "About us", href: PAGES.company }]}
      />
      <LinkGroup
        title="Platform"
        links={[
          {
            title: "Full Attack Surface Visibility",
            href: PAGES.fullAttackSurface,
          },
          {
            title: "Contextual Prioritization",
            href: PAGES.contextualPrioritization,
          },
          {
            title: "Effective Remediation",
            href: PAGES.effectiveRemediation,
          },
        ]}
      />
      <LinkGroup
        title="Partners"
        links={[
          { title: "Technology Partners", href: PAGES.technologyPartners },
          { title: "Managed Service Providers", href: PAGES.mspPartners },
        ]}
      />
      <LinkGroup
        title="Get in touch"
        links={[
          {
            title: "127 Main St, STE 4, Nashua, NH 03060",
            href: "#",
            icon: <Pin />,
          },
          {
            title: "sales@codaintelligence.com",
            href: "mailto:sales@codaintelligence.com",
            icon: <Mail />,
          },
          {
            title: "+1 (617) 963-0147",
            href: "callto:+1 (617) 963-0147",
            icon: <Phone />,
          },
        ]}
      />
    </section>
  );
}

type LinkGroupProps = {
  title: string;
  links: { title: string; href: string; icon?: JSX.Element }[];
};

function LinkGroup(props: LinkGroupProps) {
  return (
    <div className={styles.linkGroup}>
      <h1>{props.title}</h1>
      {props.links.map((link) => (
        <Link href={link.href}>
          {link.icon}
          {link.title}
        </Link>
      ))}
    </div>
  );
}
